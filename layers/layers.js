ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([381966.874222, 6674953.878910, 382700.571588, 6675472.152673]);
var wms_layers = [];


        var lyr_basemap_0 = new ol.layer.Tile({
            'title': 'basemap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_routes_1 = new ol.format.GeoJSON();
var features_routes_1 = format_routes_1.readFeatures(json_routes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_routes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routes_1.addFeatures(features_routes_1);
var lyr_routes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_routes_1, 
                style: style_routes_1,
                interactive: true,
                title: 'routes'
            });
var format_gpstrack157_2 = new ol.format.GeoJSON();
var features_gpstrack157_2 = format_gpstrack157_2.readFeatures(json_gpstrack157_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstrack157_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstrack157_2.addFeatures(features_gpstrack157_2);
var lyr_gpstrack157_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstrack157_2, 
                style: style_gpstrack157_2,
                interactive: true,
                title: '<img src="styles/legend/gpstrack157_2.png" /> gps track 15.7'
            });

lyr_basemap_0.setVisible(true);lyr_routes_1.setVisible(true);lyr_gpstrack157_2.setVisible(true);
var layersList = [lyr_basemap_0,lyr_routes_1,lyr_gpstrack157_2];
lyr_routes_1.set('fieldAliases', {'fid': 'fid', 'Distance': 'Distance', 'Area': 'Area', 'Status': 'Status', });
lyr_gpstrack157_2.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', 'Streets': 'Streets', 'run': 'run', });
lyr_routes_1.set('fieldImages', {'fid': 'Hidden', 'Distance': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', });
lyr_gpstrack157_2.set('fieldImages', {'fid': '', 'Area': '', 'Distance': '', 'Date': '', 'Time': '', 'Pace': '', 'Elevation': '', 'Link': '', 'Streets': '', 'run': '', });
lyr_routes_1.set('fieldLabels', {'Distance': 'inline label', 'Area': 'inline label', 'Status': 'inline label', });
lyr_gpstrack157_2.set('fieldLabels', {'fid': 'inline label', 'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', 'Streets': 'inline label', 'run': 'inline label', });
lyr_gpstrack157_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});