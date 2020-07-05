# Visualisation de la température journalière à Genève au cours d'une année
Lien vers la page de démonstration de cette visualisation:  
https://rfischbacher.github.io/ex_climat/  

Il s'agit d'un projet consacré à la réalisation d'une visualisation en utilisant la librairie JavaScript D3.js qui permet de manipuler des données. Ce travail a été réalisé dans le cadre du cours "Visualisation de données", donné par Loïc Cattani à l'UNIL en 2020. Mon domaine d'étude étant les géosciences, j'ai choisi ici de travailler sur la température moyenne journalière de l'air à Genève pour visualiser son évolution au cours du temps. L'objectif de ce travail aura été de visualiser ces données sur une page HTML en utilisant le langage JavaScript.  

SELECTION DES DONNEES  
Les données proviennent de MétéoSuisse. Elles sont téléchargeables sur le lien opendata.swiss suivant:  
https://opendata.swiss/fr/dataset/klimamessnetz-tageswerte  

Le fichier csv initial contient les données pour plusieurs stations suisses et couvre la période de 1950 à 2019. Pour chaque année, on y trouve notamment la température moyenne mesurée chaque jour à 2 mètres au-dessus du sol. Pour ne pas surcharger la visualisation, j'ai uniquement sélectionné comme exemple la température journalière à Genève durant l'année 2012 et 2019. Ce sont deux années récentes intéressantes à étudier d'un point de vue météorologique, en particulier pour ceux qui ont vécu l'hiver 2012 glacial ou l'été 2019 caniculaire.  

VISUALISATION  
Les données sont visualisées sur un graphique, avec l'axe x représentant chaque jour de l'année (allant de 1 pour le 1er janvier à 365 pour le 31 décembre). L'axe y représente la température moyenne mesurée par la station pour une journée donnée. Les données de chaque jour sont reliées entre elles par une courbe lissée pour visualiser les variations de température au cours d'une année. La courbe de 2012 est représentée en bleu et celle de 2019 en rouge. Ces deux années ont été choisies pour être comparée l'une à l'autre en les superposant sur le même graphique.  

Cette visualisation permet de comparer la température journalière entre deux années et de mettre en évidence les périodes froides ou chaudes. Comme il s'agit de données journalières, une différence de température pour une même date entre deux années se visualise facilement. Les changements brutaux de températures sont également visible grâce aux données journalières, ce qui n'est pas le cas lorsqu'on travaille avec des moyennes mensuelles. Concernant l'exemple de l'année 2012, la vague de froid exceptionnelle durant le mois de février est particulièrement visible. De son côté, l'année 2019 est marqué par deux importants pics de chaleurs durant l'été, au mois de juin et juillet. En dehors de ces événements particuliers, la variabilité journalière est plus faible et la température reste relativement similaire entre les deux années.  

En tant que novice, ce projet aura été une bonne introduction à la programmation en JavaScript, à la création de pages HTML et la mise en forme avec CSS. J'ai également appris à utiliser deux nouveaux outils particulièrement pratiques, qui sont Visual Studio Code pour coder et GitHub pour héberger les scripts et enregistrer leur évolution.  