// Paramètres de la visualisation
const width = 600;
const height = 300;
const margin = { top: 20, right: 0, bottom: 20, left: 20 };

// Lecture du fichier csv et création de clés pour chaque colonne de données
d3.dsv(';', 'data/GVE_1950_2019.csv', function (d) {
    return{
        station: d.stn,
        year: parseFloat(d.time.substr(0, 4)),
        month: parseFloat(d.time.substr(4, 2)),
        day: parseFloat(d.time.substr(6, 2)),
        temp_moy: parseFloat(d.tre200d0)
    }
}).then(function(data) {   // la promise

  // filtrage de la station et de l'année
const station = data.filter(d => d.station === 'GVE' && d.year === 2019);
// console.log(data); // voir les données

  // Créer l'élément SVG et le configurer
  const svg = d3.select('.main')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .attr('style', 'font: 10px sans-serif')
  
  // Créer l'échelle horizontale (fonctions D3)
  const x = d3.scaleBand()
              .domain(station.map(d => d.month))
              .range([margin.left, width - margin.right])
              .padding(0.1)
              .round(true)
  
  // Créer l'échelle verticale (fonctions D3)
  const y = d3.scaleLinear()
              .domain([0, d3.max(station, d => d.temp_moy)])
              .range([height - margin.bottom - 5, margin.top])
              .interpolate(d3.interpolateRound)
  
  const teinte = d3.scaleSequential()
              .domain([0, d3.max(station, d => d.temp_moy)])
              .interpolator(d3.interpolateBlues)            
  
  // Ajouter les barres
  svg.append('g')
     .selectAll('rect')
       .data(station)
       .enter()
       .append('rect')
       .attr('width', x.bandwidth())
       .attr('height', d => y(0) - y(d.temp_moy))
       .attr('x', d => x(d.month))
       .attr('y', d => y(d.temp_moy))
       .style('fill', d => teinte(d.temp_moy))
  
  // Ajouter les titres
  svg.append('g')
     .style('fill', 'white')
     .attr('text-anchor', 'middle')
     .attr('transform', `translate(${x.bandwidth() / 2}, 6)`)
     .selectAll('text')
       .data(station)
       .enter()
       .append('text')
       .attr('dy', '0.35em')
       .attr('x', d => x(d.month))
       .attr('y', d => y(d.temp_moy))
       .text(d => d.temp_moy)
  
  // Ajouter l'axe horizontal
  svg.append('g')
     .attr('transform', `translate(0, ${height - margin.bottom})`)
     .call(d3.axisBottom(x))
     .call(g => g.select('.domain').remove())
  
  // Ajouter l'axe vertical
  svg.append('g')
     .attr('transform', `translate(${margin.left}, 0)`)
     .call(d3.axisLeft(y))
     .call(g => g.select('.domain').remove())
  
  // Source: https://observablehq.com/@d3/learn-d3-scales
});