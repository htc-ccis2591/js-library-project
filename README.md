Leaflet is a javascript library that "out of the box" uses real world latitudinal and longitudinal values to present map data. Those real world increments can be altered to provide greater (or less) granularity. The library includes instinctual zoom features and allows a great degree of interactivity with any overlaid map. It can actually be used with any image/s. 

Instantiating the map on a web page is as simple as:

...
L.map("mapid").setView([x, y], z);
...

"Map" is a Leaflet keyword to place the map container within the id of choice (in this case "mapid"). The "setView" method then sets the view to the latitude (x), the longitude (y), and the zoom level (z).
The map tiles themselves will come from a third party or an image folder. Different map providers allow different levels of detail. (Like the tile provider Mapbox, which I used for this project, zoom levels between 1 and 20 are typical.) Real world global maps can actually be terabytes of high resolution gif images. The high level of detail is necessary at high zoom levels. This is also why when accessing uncached locations, load times can be annoyingly slow.

The documentation is superb for this library and after many, many hours I still feel like I just scratched the surface. 
link: http://leafletjs.com/reference-1.0.2.html


there are a lot of possibilities, especially with the integration of geoson data, but after a brief (failed)  experiment, I decided to keep it simple.
http://geojson.io/#map=2/20.0/0.0
