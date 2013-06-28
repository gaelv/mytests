# coding: utf-8

get_ipython().system(u'pwd')
get_ipython().system(u'find . -name *.java')
javaFiles = _2
get_ipython().getoutput(u'find . -name *.java')
javaFiles = _4
javaFiles
javaFiles = get_ipython().getoutput(u'find . -name pom.xml')
get_ipython().magic(u'reset')
pomFiles = get_ipython().getoutput(u'find . -name pom.xml')
get_ipython().magic(u'pinfo pomFiles')
get_ipython().magic(u'pinfo2 pomFiles')
import xml
import libxml2
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("//project/packaging/text()")
    print res.text
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("//project/packaging/text()")
    print res[0].text
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("//project/packaging")
    print res[0].text
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("//project/packaging")
    print res[0]
for f in pomFiles:
    print f
for f in pomFiles:
    
    
    doc = libxml2.parseFile(f)
    print doc.getContent
for f in pomFiles:
    
    print open(f,'r').read()
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("/project/packaging")
    print res[0]
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("/project/packaging")
    print res[0].text
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("/project/packaging")
    print res
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("/project/packaging")
    if res.lengh >0 : print res
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("/project/packaging")
    if res.lenght >0 : print res
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("/project/packaging")
    if res.length >0 : print res
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("/project/packaging")
    if res.len >0 : print res
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("/project/packaging")
    if len(res) >0 : print res
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("/project/packaging")
    if len(res) >0 : print res.text
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("/project/packaging")
    if len(res) >0 : print res[0].text
for f in pomFiles:
    libxml2.parseFile(f)
    doc = libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("/project/packaging")
    if len(res) >0 : print res[0].content
analysisResult={:}
analysisResult={"":""}
for f in pomFiles:
    libxml2.parseFile(f)
    ctx = doc.xpathNewContext()
    res = ctx.xpathEval("/project/packaging")
    if len(res) >0 : analysisResult["type"]= res[0].content
an
analysisResult
analysisResult = [{'':''}]
analysisResult
get_ipython().system(u'pwd')
files = get_ipython().getoutput(u'find . -type f')
len(files)
import re
get_ipython().system(u'stext')
for f in pomFiles:
    analysisResult.append({"directory": f.replace("pom.xml","")}]
for f in pomFiles:
    analysisResult.append({"directory": f.replace("pom.xml","")})
analysisResult
for l in analysisResult:
    files = get_ipython().getoutput(u"find l['directory'] -type f")
files
for l in analysisResult:
    cmd='find ' + l['directory'] + ' -type f'
    files = get_ipython().getoutput(u'cmd')
for l in analysisResult:
    cmd='find ' + l['directory'] + ' -type f'
    print cmd
for l in analysisResult:
    cmd='find ' + l['directory'] + ' -type f'
    print cmd
for l in analysisResult:
    cmd='find ' + l['directory'] + ' -type f'
    print l
for l in analysisResult:
    cmd='find ' + l["directory"] + ' -type f'
    print l
analysisResult[0]
analysisResult[02D1]
analysisResult[1]
analysisResult[0]
analysisResult.pop(0)
for l in analysisResult:
    cmd='find ' + l['directory'] + ' -type f'
    print l
for l in analysisResult:
    cmd='find ' + l['directory'] + ' -type f'
    files = get_ipython().getoutput(u'cmd')
files
get_ipython().system(u'ls /cygdrive/d/checkout_svn/vif_webappsample/vif-web-parent-pom/')
get_ipython().system(u'ls /cygdrive/d/checkout_svn/vif_webappsample/vif-web-parent-pom/trunk/')
for l in analysisResult:
    cmd='find ' + l['directory'] + ' -type f'
    files = get_ipython().getoutput(u'cmd')
    print files
for l in analysisResult:
    cmd='find ' + l['directory'] + ' -type f'
    print cmd
get_ipython().system(u' find ./VIF_WEB_GXT/trunk/VIF_WEB_GXT/ -type f')
files = get_ipython().getoutput(u'find ./VIF_WEB_GXT/trunk/VIF_WEB_GXT/ -type f')
files
for l in analysisResult:
    cmd='find ' + l['directory'] + ' -type f'
    print cmd
for l in analysisResult:
    cmd='find ' + l['directory'] + ' -type f'
    files = get_ipython().getoutput(u'cmd')
    print files
analysisResult
for l in analysisResult:
    cmd='find ' + l['directory'] + ' -type f'
    files = get_ipython().getoutput(u'cmd')
    print files
files = get_ipython().getoutput(u'find ./archetype/trunk/src/main/resources/archetype-resources/ -type f')
files
for l in analysisResult:
    cmdm='find ' + l['directory'] + ' -type f'
    files = get_ipython().getoutput(u'`cmdm`')
    print files
import sys
import os
os.system("ls")
for l in analysisResult:
    cmdm='find ' + l['directory'] + ' -type f'
   
import subprocess
proc = subprocess.call(["find", analysisResult[0]['directory'], '-type f'], stdout=subprocess.PIPE, shell=True)
(out, err) = proc.counicate()
proc = subprocess.call(["find", analysisResult[0]['directory'], '-type f'], stdout=subprocess.PIPE, shell=True)
proc = subprocess.call(["find" + analysisResult[0]['directory'] + '-type f'], stdout=subprocess.PIPE, shell=True)
proc = subprocess.call(["find" + analysisResult[0]['directory'] + ' -type f'], stdout=subprocess.PIPE, shell=True)
proc = subprocess.call(["find " + analysisResult[0]['directory'] + ' -type f'], stdout=subprocess.PIPE, shell=True)
(out, err) = proc.communicate()
out = proc.communicate()
proc2 = subprocess.call(["find " + analysisResult[0]['directory'] + ' -type f'], stdout=subprocess.PIPE, shell=True)
proc2.real
proc2.numerator
help glob
help(glob)
for f in analysisResult:
    for r, d, f in os.walk(f['directory']):
        if files.endswith("*.java"):
            print os.path.join(r, files)
get_ipython().magic(u'cpaste')
get_ipython().magic(u'cpaste')
get_ipython().magic(u'cpaste')
get_ipython().magic(u'cpaste')
get_ipython().magic(u'cpaste')
get_ipython().magic(u'cpaste')
get_ipython().magic(u'cpaste')
analysisResult
get_ipython().magic(u'cpaste')
analysisResult
get_ipython().magic(u'cpaste')
get_ipython().magic(u'cpaste')
analysisResult
get_ipython().magic(u'cpaste')
get_ipython().magic(u'save historique_analyse')