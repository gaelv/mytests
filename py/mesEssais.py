#Analyseur de projet maven
# objectifs : 
# voir le type et le nombre de sources, le nombre et le type de projets, de déploiements
# pour les projets sgbd : le nombre d'entités, et le nombre d'attributs dans chaque projet, les liens
# sous forme graphique
# quelles questions je peux me poser sur Sonar : 
# architecture de données sur les indicateurs


for projects in analysisResult:
	l = 0
	for r, d, f in os.walk(projects['directory']):
		for files in f:
			if files.endswith(".java"):
				l = l+1
	projects['javaFiles'] = l


for projects in analysisResult:
	l = 0
	for r, d, f in os.walk(projects['directory']):
		for files in f:
			if files.endswith(".xml"):
				l = l+1
	projects['xml'] = l

for projects in analysisResult:
	l = 0
	for r, d, f in os.walk(projects['directory']):
		for files in f:
			if files.endswith(".java"):
				l = l+ os.stat(os.path.join(r, files)).st_size
	projects['javaFileSize'] = l


for projects in analysisResult:
	l = 0
	for r, d, f in os.walk(projects['directory']):
		for files in f:
			if files.endswith(".xml"):
				l = l+ os.stat(os.path.join(r, files)).st_size
	projects['xmlFileSize'] = l


for project in analysisResult:
	doc = libxml2.parseFile(project['directory'] + "pom.xml")
	ctx = doc.xpathNewContext()
	packagingXml = ctx.xpathEval("/project/packaging")
	groupXml = ctx.xpathEval("/project")
	artifactXml = ctx.xpathEval("/project/artifactId")
	versionXml = ctx.xpathEval("/project/version")
	print "evaluation : " + project['directory']
	print groupXml[0].text
	id = groupXml[0].text + ":" + artifactXml[0].text + ":" + versionXml[0].text
	project["projectId"] = id
	project["projectName"] = artifactXml[0].text




arrayAnalyse = []

arrayAnalyse.append(['dir','JavaSize','xmlSize'])

for l in analysisResult:
	arrayAnalyse.append([l['directory'],l['javaFileSize'],l['xmlFileSize']])




















