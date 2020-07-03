// Dimensions et marges du graphique SVG
const margin = { top: 50, right: 50, bottom: 50, left: 50 };
const width = 1000 - margin.left - margin.right;
const height = 1000 - margin.top - margin.bottom;

// Lecture du fichier csv et création de clés-valeurs pour chaque colonne de données
d3.dsv(';', 'data/GVE_1950_2019.csv', function (d) {
    return{
        station: d.stn,
        year: parseFloat(d.time.substr(0, 4)),
        month: parseFloat(d.time.substr(4, 2)),
        day: parseFloat(d.time.substr(6, 2)),
        temp: parseFloat(d.tre200d0)
    }
}).then(function(data) {   // début de la fonction

// Filtrer notre station de Genève pour une année donnée
const station = data.filter(d => d.year === 2019);

//console.log(station); // voir les données séléctionnées

  // Créer l'élément SVG et le configurer
  const svg = d3.select('.main')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .attr('style', 'font: 10px sans-serif')
  
  // Axe x pour le temps (numéro du jour dans l'année)
  const x = d3.scaleTime()
              .domain([0, d3.max(station, function(d) { return d.day; })])
              .range([0, width])
  
  // Axe y pour la température (valeur en degré)
  const y = d3.scaleLinear()
              .domain([0, d3.max(station, function(d) { return d.temp; })])
              .range([height, 0])
  
  // definir une ligne
  var ligne = d3.line()
                .x(function(d) { return d.day; })
                .y(function(d) { return d.temp; })
                .curve(d3.curveMonotoneX);            
  
  // Relier les valeures de température par une ligne
  svg.append("path")
      .datum(station)
      .attr("class", "line")
      .attr("d", ligne)
  
  // Faire les axes
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  svg.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(y));

  const yaxis = d3.axisLeft().scale(x); 
  const xaxis = d3.axisBottom().scale(y);
  
  
}) // fin de la fonction