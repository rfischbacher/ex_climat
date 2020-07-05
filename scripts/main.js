// Code main.JS permettant la visualisation des données du fichier GVE_2010_2019.CSV sur la page index.HTML
// Réalisé par Romain Fischbacher - Juillet 2020

// Dimensions et marges du graphique SVG
const margin = { top: 50, right: 50, bottom: 50, left: 50 };
const width = 1000 - margin.left - margin.right;
const height = 750 - margin.top - margin.bottom;

// Créer l'élément SVG et le configurer
const svg = d3.select('.main')
              .append('svg')
                  .attr('width', width + margin.left + margin.right)
                  .attr('height', height + margin.top + margin.bottom)
                  .attr('style', 'font: 10px sans-serif')
              .append("g")
                  .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");

// Lecture du fichier CSV et création de clés-valeurs pour toutes les colonnes de données
d3.csv('data/GVE_2010_2019.csv', function (d){
    return{ Jour : parseFloat(d.time),
            Temp_2010 : parseFloat(d.temp_2010),
            Temp_2011 : parseFloat(d.temp_2011),
            Temp_2012 : parseFloat(d.temp_2012),
            Temp_2013 : parseFloat(d.temp_2013),
            Temp_2014 : parseFloat(d.temp_2014),
            Temp_2015 : parseFloat(d.temp_2015),
            Temp_2016 : parseFloat(d.temp_2016),
            Temp_2017 : parseFloat(d.temp_2017),
            Temp_2018 : parseFloat(d.temp_2018),
            Temp_2019 : parseFloat(d.temp_2019)
        }
}).then(function(data) {   // Promesse (traitement asynchrone des données)
    
    // DEBUT DE LA FONCTION

    // Affichage des données séléctionnées dans la console de la page HTML
    console.log(data);
  
    // Axe x pour les jours (numéro du jour de l'année de 1-365)
    const x = d3.scaleLinear()
                .domain(d3.extent(data, function(d) { return d.Jour; }))
                .range([ 0, width ]);
            svg.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));
  
    // Axe y pour la température mesurée (valeur en degré Celsius)
    const y = d3.scaleLinear()
                //.domain([-10,30])
                .domain([d3.min(data, function(d) { return Math.min(d.Temp_2012,d.Temp_2019); }), d3.max(data, function(d) { return Math.max(d.Temp_2012,d.Temp_2019); })])
                .range([ height, 0 ]);
            svg.append("g")
                .attr("class", "axis")
                .call(d3.axisLeft(y));
  
    // Création d'une courbe lissée pour 2012
    var valueline2012= d3.line()
        .x(function(d) { return x(d.Jour); })
        .y(function(d) { return y(d.Temp_2012); })
        .curve(d3.curveBasis);      
    // Création d'une courbe lissée pour 2019
    var valueline2019 = d3.line()
        .x(function(d) { return x(d.Jour); })
        .y(function(d) { return y(d.Temp_2019); })
        .curve(d3.curveBasis);                              

    // Relier les données pour 2012
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#0000FF")
        .attr("stroke-width", 3)
        .attr("d", valueline2012); 
    // Relier les données pour 2019
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#FE2E2E")
        .attr("stroke-width", 3)
        .attr("d", valueline2019);                                               
            
    // Titre de l'axe x
    svg.append("text") 
        .attr('class', 'axis-label')
        .attr("x", width /2)
        .attr("y", height + 40)
        .style("text-anchor", "middle")
        .text("Temps [jours]");  

    // Titre de l'axe y
    svg.append("text")
        .attr('class', 'axis-label')
        .attr("transform", "rotate(-90)")
        .attr("text-anchor", "middle") 
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Température [°C]");  
    
    // Légende des courbes    

    
}) // FIN DE LA FONCTION