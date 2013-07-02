var express = require('express');
var mongodb = require('mongodb');
var app = express();

if(process.env.VCAP_SERVICES){
	var env = JSON.parse(process.env.VCAP_SERVICES);
	var mongo = env['mongodb-1.8'][0]['credentials'];
}
else{
	var mongo = {
		"hostname":"localhost",
		"port":27017,
		"username":"",
		"password":"",
		"name":"",
		"db":"db"
	};
}

var generate_mongo_url = function(obj){
	obj.hostname = (obj.hostname || 'localhost');
	obj.port = (obj.port || 27017);
	obj.db = (obj.db || 'test');
	if(obj.username && obj.password){
		return "mongodb://" + obj.username + ":" + obj.password + "@" + obj.hostname + ":" + obj.port + "/" + obj.db;
	}
	else{
		return "mongodb://" + obj.hostname + ":" + obj.port + "/" + obj.db;
	}
};
var mongourl = generate_mongo_url(mongo);

console.log("url of mongodb : ", mongourl);
//  var populateDB = function() {
// 	var d = new Date().toLocaleString();
// 	var datas = [
// 	{
// 		"start" : d
// 	}];
// 	mongodb.connect(mongourl, function(err,conn) {
// 		conn.collection('data', function(err, collection) {
// 			collection.insert(datas, {safe:true}, function(err, result) {});
// 		});
// 	});
// };

// populateDB();

// middlewares

app.use(express.logger('dev'));

app.use(express.static(__dirname + '/public'));

app.use(express.bodyParser());

app.use(app.router);

// simple rest-like api for collections, with new, delete, find, news

app.post('/data/new/:collectionName', function(req, res) {
	var collectionName = req.params.collectionName;
	var data = req.body;
	console.log('adding ' + JSON.stringify(req.body) + ' to collection ' + collectionName);

	mongodb.connect(mongourl, function(err,conn) {
		console.log("accessing collection : ", collectionName);
		conn.collection(collectionName, function(err, macollec) {
			if (err) {
				console.log('Error: ' + JSON.stringify(err));
				res.send({'error':'An error has occurred',
							'errcontent' : JSON.stringify(err)
						});
			} else {
				macollec.insert(data, {safe:true}, function(err, result) {
					if (err) {
						console.log('Error: ' + JSON.stringify(err));
						res.send({'error':'An error has occurred',
									'errcontent' : JSON.stringify(err)
								});
					} else {
						console.log('Success: ' + JSON.stringify(result[0]));
						res.send(result[0]);
					}
				});
			}
		});
	});
});


app.post('/data/news/:collectionName', function(req, res) {
	var collectionName = req.params.collectionName;
	var data = req.body;
	console.log('adding by collection' + data + ' to collection ' + collectionName);

	mongodb.connect(mongourl, function(err,conn) {
	
		conn.collection(collectionName, function(err, macollec) {
			var allResult = [];
			for (val in data) {
				macollec.insert(data[val], {safe:true}, function(err, result) {
					if (err) {
						console.log('Error happened !');
					} else {
						console.log('Success: ' + JSON.stringify(result[0]));
						allResult.push(result[0]);
					}
				});
			}
			res.send(allResult);
		});
	});
});


app.post('/data/findAll/:collectionName', function(req, res) {
	var data = req.body;
	var collectionName = req.params.collectionName;
	console.log('requesting ' + data + ' in collection ' + req.params.collectionName);
	
	mongodb.connect(mongourl, function(err,conn) {
	
		conn.collection(collectionName, function(err, macollec) {
			macollec.find(data).toArray(function(err, result) {
				if (err) {
					res.send({'error':'An error has occurred'});
				} else {
					console.log('Success: ' + JSON.stringify(result));
					res.send(result);
				}
			});
		});
	});
});



app.get('/data/findAll/:collectionName', function(req, res) {
	console.log('requesting all datas in collection ' + req.params.collectionName);
	var collectionName = req.params.collectionName;

	mongodb.connect(mongourl, function(err,conn) {

		conn.collection(collectionName, function(err, macollec) {
			macollec.find().toArray(function(err,thedatas) {
				res.send(thedatas);
			});
		});
	});
});

app.get('/data/removeAll/:collectionName', function(req, res) {
	console.log('requesting all datas in collection ' + req.params.collectionName);
	var collectionName = req.params.collectionName;

	mongodb.connect(mongourl, function(err,conn) {

		conn.collection(collectionName, function(err, macollec) {
			macollec.remove(function(err, nbDocs) {

				if (err) {
					res.send({'error':'An error has occurred'});
				} else {
					var resultMessage = {
						message : "collection " + collectionName + " fully removed : " + nbDocs  +  " removed"
					} ;
					res.send(resultMessage);
				}
			});
		});
	});
});

app.post('/data/remove/:collectionName', function(req, res) {
	var data = req.body;
	var collectionName = req.params.collectionName;
	console.log('requesting ' + data + ' in collection ' + req.params.collectionName);

	mongodb.connect(mongourl, function(err,conn) {

	conn.collection(collectionName, function(err, macollec) {
			macollec.remove(data, function(err, nbDocs) {
				if (err) {
					res.send({'error':'An error has occurred'});
				} else {
					var resultMessage = {
						message : "collection " + collectionName + " partially removed : " + nbDocs  +  " removed"
					} ;
					res.send(resultMessage);
				}
			});
		});
	});
});



app.listen(3000);

console.log('listening on port 3000');
