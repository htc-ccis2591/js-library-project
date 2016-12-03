(function () {
	// default location HTC
	var latInput = "44.83602";
	var lonInput = "-93.44434";

	// invoke map object then set latitude, longitude and zoom level
	var mymap = L.map("mapid").setView([latInput, lonInput], 14);

	var mapBoxKey = "eyJ1IjoidGVjaG5vc291bCIsImEiOiJjaXZmeGN3a24wMTdmMnlvNmM2cHJibnFzIn0.OmXTXDrxsS3UlL2hm9dk4A"

	//different themes available
	var themeArray = ["satellite-v9", "satellite-streets-v9", "streets-v9", "outdoors-v9", "dark-v9", "light-v9"];

	//theme iterator
	var i = 0;

	//Hoisted popup variable
	var popup = L.popup();


	(function () {
		$("#longitude").after("<p>(hint: Brandenburg Gate in Berlin is 52.51618, 13.37779)</p>");
		$("div#status").append("<p><b>Theme: </b>" + themeArray[0]);
	})();

	var instantiateMapLayer = function () {
		L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/" + themeArray[i] + "/tiles/256/{z}/{x}/{y}?access_token=pk." + mapBoxKey, {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 19,
			minZoom: 3,
			id: 'civ0k666k05hz2zl14hit27g8',
			accessToken: mapBoxKey

		}).addTo(mymap);
	}
	instantiateMapLayer();

	var mapPan = function () {
		$("button#submit").on("click", function () {
			var latInput = $("#latitude").val();
			var lonInput = $("#longitude").val();
			//console.log(latInput);
			//console.log(lonInput);

			if (latInput == "" || lonInput == "") {
				$("div#status").replaceWith("<div id=status><p>" + "for a new location, please enter a number in both fields" + "</div>");

			} else {
				mymap.panTo(new L.LatLng(latInput, lonInput))
					.setZoom(12);
				L.marker([latInput, lonInput])
					.addTo(mymap)
					.bindPopup("You Are Here: " + latInput + ", " + lonInput)
					.openPopup();
			}
		});
	}
	mapPan();

	var newTheme = function () {
		$("button#theme").on("click", function () {
			i = (i + 1) % (themeArray.length);
			//console.log(themeArray[i]);
			instantiateMapLayer();
			$("div#status").replaceWith("<div id=status><p><b>Theme: </b>" + themeArray[i] + "</div>");

		});
	}
	newTheme();

	(function () {
		L.marker([44.85736, -93.43344])
			.addTo(mymap)
			.bindPopup("Old Chicago").openPopup();
		L.marker([latInput, lonInput])
			.addTo(mymap)
			.bindPopup("Hennepin Tech").openPopup();

	})();

	//not mine from scratch, but ideal for testing
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}
	mymap.on("click", onMapClick);

	(function () {
		// create a polygon over Staring lake 
		var latlngs = [[44.84111, -93.45469], [44.83789, -93.44756], [44.83417, -93.45211], [44.83761, -93.46211], [44.84063, -93.45936]];
		var polygon = L.polygon(latlngs, {
			color: "#0097d0"
		}).addTo(mymap);
	})();

})();


// zoom the map to the polygon
//mymap.fitBounds(polygon.getBounds());
//var mymap = L.map("mapid").setView([44.84, -93.46], 11);