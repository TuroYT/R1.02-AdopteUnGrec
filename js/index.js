// Autheur : Romain PINSOLLE
// Fichier : index.js


// Création de la carte
map = new OpenLayers.Map("demoMap");
map.addLayer(new OpenLayers.Layer.OSM());

// Définir les coordonnées pour centrer la carte sur Anglet
var lonLat = new OpenLayers.LonLat(-1.5095, 43.4777)
    .transform(
      new OpenLayers.Projection("EPSG:4326"), // transformation de la projection WGS 1984
      map.getProjectionObject() // vers la projection de la carte
    );

// Définir le niveau de zoom
var zoom = 15;

// Centrer la carte sur les coordonnées spécifiées et définir le niveau de zoom
map.setCenter(lonLat, zoom);

// Ajouter un markeur
var markers = new OpenLayers.Layer.Markers("Markers");
map.addLayer(markers);

var marker = new OpenLayers.Marker(lonLat);
markers.addMarker(marker);

// Ajouter un autre markeur
var lonLat2 = new OpenLayers.LonLat(-1.4984, 43.4860) // Coordinates 43°29'09.7"N 1°29'54.2"W
    .transform(
      new OpenLayers.Projection("EPSG:4326"),
      map.getProjectionObject()
    );

var marker2 = new OpenLayers.Marker(lonLat2);
markers.addMarker(marker2);

// Ajouter un autre markeur
var lonLat3 = new OpenLayers.LonLat(-1.5195, 43.4945) // Coordinates 43°29'40.1"N 1°31'10.1"W
    .transform(
      new OpenLayers.Projection("EPSG:4326"),
      map.getProjectionObject()
    );

var marker3 = new OpenLayers.Marker(lonLat3);
markers.addMarker(marker3);