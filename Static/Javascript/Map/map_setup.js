var map = L.map('mapid').setView([54.775, -4.000], 6); // Sets the initial view to center around the UK

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// Adding a simple GeoJSON outline of the UK
var ukOutline = {
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [-5.668343999999999, 50.134664],
                [-5.714798, 50.066323],
                [-3.070991, 58.635],
                [-4.795678, 58.550845],
                [-5.009998, 58.635],
                [-5.668343999999999, 50.134664]
            ]
        ]
    }
};

L.geoJSON(ukOutline, {
    style: function (feature) {
        return {color: "#000"};
    }
}).addTo(map);
