(function () {
	// default location HTC
	var latInput = "44.83602";
	var lonInput = "-93.44434";

	// invoke map object then set latitude, longitude and zoom level
	var mymap = L.map("mapid").setView([latInput, lonInput], 14);

	var mapBoxKey = "eyJ1IjoidGVjaG5vc291bCIsImEiOiJjaXZmeGN3a24wMTdmMnlvNmM2cHJibnFzIn0.OmXTXDrxsS3UlL2hm9dk4A"
	var themeArray = ["satellite-v9", "satellite-streets-v9", "dark-v9", "light-v9", "streets-v9", "outdoors-v9"];
	//function MapInstantiate () {}

	var i = 0;
	var popup = L.popup();
	$("#longitude").after("<p>(hint: Berlin is about 52.5, 13.4)</p>");

	L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/" + themeArray[i] + "/tiles/256/{z}/{x}/{y}?access_token=pk." + mapBoxKey, {
		/*attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',*/
		maxZoom: 19,
		minZoom: 3,
		id: 'civ0k666k05hz2zl14hit27g8',
		accessToken: mapBoxKey

	}).addTo(mymap);

	$("button#submit").on("click", function () {
		var latInput = $("#latitude").val();
		var lonInput = $("#longitude").val();
		console.log(latInput);
		console.log(lonInput);

		if (latInput == "" || lonInput == "") {
			$("div#status").replaceWith("<div id=status><p>" + "for a new location, please enter a number in both fields" + "</div>");

		} else {
			mymap.panTo(new L.LatLng(latInput, lonInput));
		}
		//zoomLevel: 11;
	});

	$("button#theme").on("click", function () {
		i = (i + 1) % (themeArray.length);
		console.log(themeArray[i]);
		L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/" + themeArray[i] + "/tiles/256/{z}/{x}/{y}?access_token=pk." + mapBoxKey, {
			/*attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',*/
			maxZoom: 19,
			minZoom: 3,
			id: 'civ0k666k05hz2zl14hit27g8',
			accessToken: mapBoxKey
		}).addTo(mymap);
		$("div#status").replaceWith("<div id=status><p>" + themeArray[i] + "</div>");

	});
	L.marker([latInput, lonInput]).addTo(mymap).bindPopup("Hennepin Tech").openPopup();

	//
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}
	mymap.on("click", onMapClick);
	// create a red polygon from an array of LatLng points
	/*var latlngs = [[-111.03, 41], [-111.04, 45], [-104.05, 45], [-104.05, 41]];
	var polygon = L.polygon(latlngs, {
		color: 'red'
	}).addTo(map);
	// zoom the map to the polygon
	map.fitBounds(polygon.getBounds());*/
})();



/*var mymap = L.map("mapid").setView([44.84, -93.46], 11);

$("#submit").click(function () {
		weatherApp.getFormData();
		return false;*/