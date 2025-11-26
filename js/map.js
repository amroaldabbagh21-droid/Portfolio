// map ap

let map = L.map('apMap').setView([51.23041, 4.4155], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



// bepaal de rechthoek rondom het gebouw van AP (coördinaten zijn 51.23041, 4.4155 en 51.22991, 4.41675)
let bounds = [
    [51.22991, 4.4155],  
    [51.23041, 4.41675]  
];
// kleur de rechthoek in met de rode AP-kleur (#e60005)
L.rectangle (bounds, {
    color: 'red',
    fillColor: '#e60005',  
    fillOpacity: 0.5,
    weight: 2
}).addTo(map);

// plaats een marker (coördinaten 51.23009 en 4.41616) met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let apMarker = L.popup()
    .setLatLng([51.23009 , 4.41616])
    .setContent("AP-Hogeschool")
    .openOn(map);