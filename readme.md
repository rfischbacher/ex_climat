# Visualisation de la température journalière à Genève au cours d'une année

Il s'agit d'un projet consacré à la réalisation d'une visualisation en utilisant la librairie JavaScript D3.js qui permet de manipuler des données. Ce travail a été réalisé dans le cadre du cours "Visualisation de données", donné par Loïc Cattani à l'UNIL en 2020. Mon domaine d'étude étant les géosciences, j'ai choisi ici de travailler sur la température moyenne journalière de l'air à Genève pour visualiser son évolution au cours du temps. L'objectif de ce travail aura été de visualiser ces données sur une page HTML en utilisant le langage JavaScript.

Lien vers la visualisation:
.....

SELECTION DES DONNEES
Les données proviennent de MétéoSuisse. Elles sont téléchargeables sur le lien opendata.swiss suivant:
https://opendata.swiss/fr/dataset/klimamessnetz-tageswerte
Le fichier csv initial contient les données pour plusieurs stations suisses et couvre la période de 1950 à 2019. Pour chaque année, on y trouve notamment la température moyenne mesurée chaque jour à 2 mètres au-dessus du sol. Pour ne pas surcharger la visualisation, j'ai uniquement sélectionné comme exemple la température journalière à Genève durant l'année 2012 et 2019. Ce sont deux années intéressantes à étudier d'un point de vue météorologique, notamment avec l'hiver 2012 particulièrement froid et l'été 2019 très chaud.

VISUALISATION
Les données sont visualisées sur un graphique, avec l'axe x représentant chaque jour de l'année (allant de 1 pour le 1er janvier à 365 pour le 31 décembre). L'axe y représente la température moyenne mesurée par la station pour une journée donnée. Les données de chaque jour sont reliées entre elles par une courbe lissée pour visualiser les variations de température au cours d'une année. La courbe de 2012 est représentée en bleu et celle de 2019 en rouge. Ces deux années ont été choisies pour être comparée l'une à l'autre en les superposant sur le même graphique.


En tant que novice, ce projet aura été une bonne introduction à la programmation en JavaScript, à la création de pages HTML et la mise en forme avec CSS. J'ai également appris à utiliser deux nouveaux outils particulièrement pratiques, qui sont Visual Studio Code pour coder et GitHub pour héberger les scripts et enregistrer leur évolution.