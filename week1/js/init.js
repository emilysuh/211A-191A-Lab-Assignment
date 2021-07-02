const map = L.map('map').setView([34.0709, -118.444], 5);

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//JavaScript let variable declaration to create a marker
let point1 = L.marker([34.050739, -118.255127]).addTo(map)
		.bindPopup('Los Angeles Central Library is just a few blocks from the Pershing Square Metro stop!  ')
		// .openPopup();
let point2 = L.marker([33.871658, -117.860771]).addTo(map)
		.bindPopup('Placentia Library, the library I visited most growing up  ')
		// .openPopup();
let point3 = L.marker([34.074430, -118.311420]).addTo(map)
		.bindPopup('The Wilshire Branch of the LA Public Library has a small community herb garden  ')
		// .openPopup();
        
fetch("map.geojson")
	.then(response => {
		return response.json();
		})
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
            // the leaflet method for adding a geojson
            L.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, {color: feature.properties.color});
                }
            }).bindPopup(function (layer) {
                return layer.feature.properties.place;
            }).addTo(map);
        });