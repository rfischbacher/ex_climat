# Visualisation de la température journalière à Genève au cours du temps

Il s'agit d'un projet consacré à la réalisation d'une visualisation en utilisant la librairie JavaScript D3.js qui permet de manipuler des données.
J'ai choisi de travailler sur la température moyenne journalière de l'air à Genève pour visualiser son évolution au cours des années.
Les données proviennent de MétéoSuisse. Elles sont téléchargeable sur le lien opendata.swiss suivant:
https://opendata.swiss/fr/dataset/klimamessnetz-tageswerte

Le fichier csv contient les données pour plusieurs stations suisse et couvre la période de 1950 à 2019.
Pour chaque année, on y trouve notamment la température moyenne mesurée chaque jour à 2 mètres au dessus du sol.

Les données sont visualisée sur un graphique, avec l'axe x représentant chaque jour de l'année (001 pour le 1er janvier et 365 pour le 31 décembre). L'axe y représente la température moyenne mesurée par la station pour une journée donnée. Les données de chaque jour sont reliées entre elles pour visualiser les variation de température au cours d'une année.