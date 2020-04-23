// const root = d3.select('#root')
const height = 200
const width = 200

const svg = d3.select('body').append('svg')

const graph = {
    nodes: [
      { id: 1, name: 'test1' },
    { id: 2, name: 'test2' }
  ],
  links: [
      { source: 1, target: 2 }
  ]
}

const simulation = d3.forceSimulation() 
  .force('charge', d3.forceManyBody().strength(-700).distanceMin(100).distanceMax(1000)) 
  .force('link', d3.forceLink().id(d => d.id)) 
  .force('center', d3.forceCenter(width / 2, height / 2))
  
const link = svg.selectAll('link')
  .data(graph.links)
  .enter()
  .append('line')
  .attr('class', 'link')  

const node = svg.selectAll('node')
  .data(graph.nodes)
  .enter().append('g')
  .attr('class', 'node')
  
node.append('circle')
    .attr('r', 13)
    .attr('fill', '#999')

node.append('text')
  .attr('dx', -18)
  .attr('dy', 8)
  .style('font-family', 'overwatch')
  .style('font-size', '18px')
  .text(d => d.name)


const ticked = function () {
  link.attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2',  d => d.target.y);
    
  node.attr('transform', d => `translate(${d.x}, ${d.y})`)
}


const { nodes, links } = graph

simulation.nodes(nodes).on('tick', ticked)
simulation.force('link').links(links)
