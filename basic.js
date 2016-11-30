(function () {
	// invoke map object then set latitude, longitude and zoom level
	var mymap1 = L.map('mapid').setView([44.84, -93.46], 11);

	var mapBoxKey = "eyJ1IjoidGVjaG5vc291bCIsImEiOiJjaXZmeGN3a24wMTdmMnlvNmM2cHJibnFzIn0.OmXTXDrxsS3UlL2hm9dk4A"


	L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk." + mapBoxKey, {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18,
		id: 'civ0k666k05hz2zl14hit27g8',
		accessToken: mapBoxKey
	}).addTo(mymap1);

	L.marker([44.84, -93.46]).addTo(mymap)

	.bindPopup('a popup')
		.openPopup();

})();