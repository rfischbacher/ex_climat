// Dimensions du SVG
const width = 600;
const height = 300;
const margin = { top: 20, right: 0, bottom: 20, left: 20 };

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

// console.log(data); // voir les données séléctionnées

  // Créer l'élément SVG et le configurer
  const svg = d3.select('.main')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .attr('style', 'font: 10px sans-serif')
  
  // Axe x pour le temps (numéro du jour dans l'année)
  const x = d3.scaleTime()
              .domain(station.map(d => d.day))
              .range([margin.left, width - margin.right])
              .padding(0.1)
              .round(true)
  
  // Axe y pour la température (valeur en degré)
  const y = d3.scaleLinear()
              .domain([0, d3.max(station, d => d.temp)])
              .range([height - margin.bottom - 5, margin.top])
              .interpolate(d3.interpolateRound)
  
  // Relier les valeures de température
  svg.append("path")
  .datum(data)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 1.5)
  .attr("d", d3.line()
    .x(day)
    .y(temp)
    )
              
  
  
}) // fin de la fonction