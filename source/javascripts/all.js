try{ Typekit.load({ async: true }); } catch(e){}

$(function(){
  function parseData(data) {
    var ret = { nodes: [], links: [] };
    var map = {};

    Object.keys(data.nodes).forEach(function(k){
      var node = {
        id: k,
        name: data.nodes[k]
      };

      ret.nodes.push(node);
      map[k] = node;
    });

    data.links.forEach(function(line){
      line.split(' ').forEach(function(segment){
        var config = segment.split(':');
        ret.links.push({
          id: segment,
          source: map[config[0]],
          target: map[config[1]]
        });
      });
    });

    return ret;
  }

  $('.graph').each(function(){
    var el = $(this);
    var data = parseData(JSON.parse($('#' + el.data('id')).html()));

    var graph = cola.d3adaptor()
      .linkDistance(75)
      .avoidOverlaps(true)
      .symmetricDiffLinkLengths(75)
      .size([el.width(), el.height()]);

    var svg = d3.select(this)
      .attr('viewBox', '0 0 ' + el.width() + ' ' + el.height());

    var group = svg.append('g')
      .attr('class', 'group')
      .attr('transform', 'translate(0, -25)');

    graph
      .nodes(data.nodes)
      .links(data.links)
      .start();

    var links = group.selectAll('.link')
      .data(data.links)
      .enter().append('line')
        .attr('class', 'link');

    var nodes = group.selectAll('.node')
      .data(data.nodes)
      .enter().append('g')
        .attr('class', 'node');

    nodes.append('circle')
      .attr('r', 18);

    nodes.append('text')
      .attr('y', 5)
      .text(function(d){ return d.id.toUpperCase(); });

    nodes.append('title')
      .text(function(d) { return d.name; });

    nodes.each(function(d){
      new Tooltip({
        target: this,
        content: d.name
      });
    });

    graph.on('tick', function() {
      links
        .attr('x1', function(d) { return d.source.x; })
        .attr('y1', function(d) { return d.source.y; })
        .attr('x2', function(d) { return d.target.x; })
        .attr('y2', function(d) { return d.target.y; });

      nodes
        .attr('transform', function(d) {
          return 'translate(' + d.x + ', ' + d.y + ')';
        });
    });
  });
});
