'use strict';

/* Controllers */

var app = angular.module('angularjs-starter', []);


app.controller('EvaluationListCtrl', function($scope, $http, Base64) {
    $scope.items = [];
    $scope.message = undefined;
    $scope.name = undefined;

    $scope.init = function() {
	  $scope.items = [];
    $scope.items.push({name: 'Editeur du Framework',type:'Environnement', commentaire: 'Quel va être le support de l éditeur, va t il être solide et apporter une valeur ajoutée?', rel: 2, ang: 3, bb: 3, extjs: 4, gxt: 4});
    $scope.items.push({name: 'Maturité et Perennité de la solution',type:'Environnement', commentaire: 'Que connait on de la stabilité de la solution et de sa projection à 3-5 ans ?', rel: 2, ang: 3, bb: 3, extjs: 4, gxt: 4});
    $scope.items.push({name: 'Documentation',type:'Environnement', commentaire: 'Qualité et quantité de documentation pour déveloper.', rel: 3, ang: 4, bb: 2, extjs: 5, gxt: 3});
    $scope.items.push({name: 'Popularité, Communauté',type:'Environnement', commentaire: 'Nombre de ressources sur le net et réactivité de la communauté.', rel: 1, ang: 3, bb: 3, extjs: 3, gxt: 2});
    	<!--?? sur Backbone-->
    $scope.items.push({name: 'Prix',type:'Environnement', commentaire: 'Cout d acquisition. Peu important car pas au runtime mais au développeur', rel: 1, ang: 5, bb: 5, extjs: 4, gxt: 2});
    $scope.items.push({name: 'Compétences externes',type:'Environnement', commentaire: 'Dans notre écoystème, pouvons nous trouver des partenaires qui ont des compétences ?', rel: 3, ang: 3, bb: 3, extjs: 3, gxt: 1});
	<!--?? BB sous évalué-->
    
    $scope.items.push({name: 'Courbe d apprentissage',type:'Développement', commentaire: 'Facilité pour un nouveau de monter en compétence sur la techno.', rel: 2, ang: 4, bb: 2, extjs: 3, gxt: 3});
    <!--gxt ne nécessite pas de nouvelles compétences Java, mais le code est plus technique. -->
    $scope.items.push({name: 'Productivité',type:'Développement', commentaire: 'Rapidité de développement une fois la techno acquise.', rel: 3, ang: 4, bb: 3, extjs: 3, gxt: 3});
    <!-- ?? bb et gxt se retrouvent au niveau d Angular ? -->
    $scope.items.push({name: 'Structuration du code',type:'Développement', commentaire: 'Structure du code, nottement pour des raisons de maintenance et évolutions.', rel: 2, ang: 4, bb: 2, extjs: 5, gxt: 4});
    $scope.items.push({name: 'Intégration maven',type:'Développement', commentaire: 'Intégration à notre chaine de build. Pas nécessairement significatif pour js qui ne nécessite pas de build à propreement parler', rel: 0, ang: 3, bb: 2, extjs: 4, gxt: 5});
    $scope.items.push({name: 'Testabilité',type:'Développement', commentaire: 'Test unitaire et tests d intégration : infos à récuperer sur Ang et BB', rel: 2, ang: 4, bb: 2, extjs: 3, gxt: 3});
    $scope.items.push({name: 'Modularité',type:'Développement', commentaire: 'Capacité à faire de la reliv partielle au niveau de la partie html5', rel: 2, ang: 4, bb: 4, extjs: 3, gxt: 2});
    <!--C est surtout GXT qui a des limites ici -->
    $scope.items.push({name: 'Ouverture',type:'Technique', commentaire: 'Capacité et facilité à greffer des composants externes pour des besoins fonctionnels spécifiques.', rel: 3, ang: 4, bb: 3, extjs: 3, gxt: 2});
    <!--?? BB est assez bas -->
    $scope.items.push({name: 'Support REST/JSON',type:'Technique', commentaire: 'Facilité de mise en oeuvre des interactions client-serveur sur du rest/json', rel: 3, ang: 5, bb: 3, extjs: 5, gxt: 4});
    <!--?? GXT me parait très haut-->
    $scope.items.push({name: 'Gestion des URLs',type:'Technique', commentaire: 'Facilité de gerer des urls propres qui permettront de faire le lien entre 2 applicatifs', rel: 3, ang: 5, bb: 3, extjs: 4, gxt: 4});
    $scope.items.push({name: 'Performances, système',type:'Technique', commentaire: 'Ressource machine sollicitée au niveau du poste client (BP, RAM, ..). Difficile a évaluer.', rel: 1, ang: 0, bb: 0, extjs: 0, gxt: 0});
    $scope.items.push({name: 'Internationalisation',type:'Technique', commentaire: 'Capacité à faire de la traduction dans le contexte VIF.', rel: 3, ang: 3, bb: 2, extjs: 4, gxt: 3});
    $scope.items.push({name: 'Compatibilité navigateurs',type:'Technique', commentaire: 'Nécessité d adapter ses devpts pour les différents navigateurs du marché.' , rel: 2, ang: 3, bb: 2, extjs: 4, gxt: 4});
    <!--Pour BB : tempéré étant donné l intégration nécessaire avec du code js-->
    $scope.items.push({name: 'Mobilité',type:'Technique', commentaire: 'Utilisation de la techno dans un contexte de mobilité, que ce soit par du responsive design ou par du design spécifique. ', rel: 1, ang: 3, bb: 3, extjs: 4, gxt: 3});
      <!--placé à 3 pour ceux qui proposent HTML5 natif-->
	};

  $scope.postDatas = function() {
    $http.post('/data/new/JSEvaluations', {name : $scope.name, value : $scope.items}).success(function(data, status, headers, config){
        $scope.message = "Status : " + status;
    });
  }

  $scope.getValues = function() {
    $http.post('/data/findAll/JSEvaluations', {name : $scope.name}).success(function(data, status, headers, config){
        $scope.message = "Status : " + status;
        $scope.items = [];
        console.log("value : ", data[0].value);
        for (var i = 0; i < data[0].value.length;i++) {
          $scope.items.push(data[0].value[i]);
        }
    });
  }
  
  $scope.init();

  $scope.$watch('items', function() {
    	var totalf = 0;
    	for (var item in $scope.items) {
    		totalf = totalf + ($scope.items[item].ang * $scope.items[item].rel);
    	}
    	$scope.totalang = totalf;

    	totalf = 0;
    	for (var item in $scope.items) {
    		totalf = totalf + ($scope.items[item].bb * $scope.items[item].rel);
    	}
    	$scope.totalbb = totalf;

    	totalf = 0;
    	for (var item in $scope.items) {
    		totalf = totalf + ($scope.items[item].extjs * $scope.items[item].rel);
    	}
    	$scope.totalextjs = totalf;


    	totalf = 0;
    	for (var item in $scope.items) {
    		totalf = totalf + ($scope.items[item].gxt * $scope.items[item].rel);
    	}
    	$scope.totalgxt = totalf;

    }, true);

    $scope.plusOne = function(item, what) {
    	item[what]++;
    }
    $scope.minusOne = function(item, what) {
    	item[what]--;
    }

    $scope.generateValues = function(){
    	var str = ""
    	// serialisation
    	for (var item in $scope.items) {
    		str = str + $scope.items[item].name + ";" ;
    		str = str + $scope.items[item].type + ";" ;
    		str = str + $scope.items[item].commentaire + ";" ;
    		str = str + $scope.items[item].rel + ";" ;
    		str = str + $scope.items[item].ang + ";" ;
    		str = str + $scope.items[item].bb + ";" ;
    		str = str + $scope.items[item].extjs + ";" ;
    		str = str + $scope.items[item].gxt + ";" ;
    		str = str + "\n";
    	}

		var data = Base64.encode(str);
  		window.location.href = "data:text/csv;base64," + data;
    }
});

// ext : service
// service with di
app.factory('Base64', function() {

  var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  // private method for UTF-8 encoding
  function _utf8_encode(string) {
      string = string.replace(/\r\n/g,"\n");
      var utftext = "";

      for (var n = 0; n < string.length; n++) {

          var c = string.charCodeAt(n);

          if (c < 128) {
              utftext += String.fromCharCode(c);
          }
          else if((c > 127) && (c < 2048)) {
              utftext += String.fromCharCode((c >> 6) | 192);
              utftext += String.fromCharCode((c & 63) | 128);
          }
          else {
              utftext += String.fromCharCode((c >> 12) | 224);
              utftext += String.fromCharCode(((c >> 6) & 63) | 128);
              utftext += String.fromCharCode((c & 63) | 128);
          }
      }

      return utftext;
  }

  // private method for UTF-8 decoding
  function _utf8_decode(utftext) {
      var string = "";
      var i = 0;
      var c, c1, c2;
      c = c1 = c2 = 0;

      while ( i < utftext.length ) {

          c = utftext.charCodeAt(i);

          if (c < 128) {
              string += String.fromCharCode(c);
              i++;
          }
          else if((c > 191) && (c < 224)) {
              c2 = utftext.charCodeAt(i+1);
              string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
              i += 2;
          }
          else {
              c2 = utftext.charCodeAt(i+1);
              c3 = utftext.charCodeAt(i+2);
              string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
              i += 3;
          }
      }
      return string;
  }

  function encode(input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = _utf8_encode(input);

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
          enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
          enc4 = 64;
      }

      output = output +
      _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
      _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    }

    return output;
  }


  function decode(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
      }
    }

    output = _utf8_decode(output);
    return output;
  }

  return {
    encode : encode, // public method for encoding
    decode : decode // public method for decoding
  }

});


