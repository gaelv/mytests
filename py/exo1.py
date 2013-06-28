
annee = input('Entrez une année :')
annee = int(annee)

if annee%4 != 0:
    print "l'annee %d n'est pas bissextile" %annee
elif annee%100 !=0:
    print "l'annee %d est bissextile" %annee
elif annee%400 !=0:
    print "l'annee %d n'est pas bissextile" %annee
else:
    print "l'annee %d est bissextile" %annee

