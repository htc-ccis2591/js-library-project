$(document).ready(function(){

 var   width="960" ;
 var   height="500";
 var   theight=0;
    
var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 40, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),

y = d3.scaleLinear().domain([0,150]).range([height,0]);   

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
//Create the x  axis
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("fill","black")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

//Create Title 
 svg.append("text")
    .attr("x", width / 2 )
    .attr("y", 40)
    .style("text-anchor", "middle")
    .style("font-size", "30px")
    .style("font-weight","bold")
    .text("Tablet Sales");

//Create X axis label   
 svg.append("text")
    .attr("x", width / 2 )
    .attr("y",  height +12+ margin.bottom)
    .style("text-anchor", "middle")
    .style("font-size", "20px")
    .style("font-weight","bold")
    .text("Sales Rep");    

//Create the y axis
    g.append("g")
      //.attr("class", "axis axis--y")
      //.call(yAxis);
      .call(d3.axisLeft(y));
      
//Create y axis label   
svg.append("text")
  .attr("transform", "rotate(-90)")
  //.attr("y", 0-margin.left)
  //.attr("x", top + (height/2))
  .attr("y",0)
  .attr("x",0-100)
  .attr("dy", "1em")
  .attr("text-anchor", "end")
  .style("fill","black")
  .style("font-size", "20px")
  .style("font-weight","bold")
  .text("Quantity of Tablets Sold");


$.getJSON( "data/salesreps.json").success(function(data) {

  console.log( "JSON Data: " + data[ 0 ].rep );
    // format the data
  data.forEach(function(d) {
    d.qty = +d.qty;
  });
    
  x.domain(data.map(function(d) { return d.rep; }));
  
  //Plot the data
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.rep); })
      .attr("width",x.bandwidth())
      .attr("y", function(d) { return y(d.qty); })
      .attr("height", function(d) { return height - y(d.qty); });
    
    
  theight = height + margin.top;
    // add the x Axis
  svg.append("g")
      .attr("transform", "translate(50," + theight + ")")
      .call(d3.axisBottom(x));
    
    var yTextPadding = 20;
    g.selectAll("text.bar")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "bartext")
        .attr("text-anchor", "middle")
        .attr("fill", "black")
        .text(function(d){
            return d.qty;
            })
        .attr("x", function(d) { return x(d.rep)+(x.bandwidth()/2); })
        .attr("y", function(d){  return y(d.qty); })
    
});

});
