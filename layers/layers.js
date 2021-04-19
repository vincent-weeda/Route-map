ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([393325.951660, 6678041.314825, 395961.024057, 6679976.113539]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_helsinkiborder_1 = new ol.format.GeoJSON();
var features_helsinkiborder_1 = format_helsinkiborder_1.readFeatures(json_helsinkiborder_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_helsinkiborder_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_helsinkiborder_1.addFeatures(features_helsinkiborder_1);
var lyr_helsinkiborder_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_helsinkiborder_1, 
                style: style_helsinkiborder_1,
                interactive: true,
                title: '<img src="styles/legend/helsinkiborder_1.png" /> helsinki border'
            });
var format_routes_2 = new ol.format.GeoJSON();
var features_routes_2 = format_routes_2.readFeatures(json_routes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_routes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routes_2.addFeatures(features_routes_2);
var lyr_routes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_routes_2, 
                style: style_routes_2,
                interactive: true,
                title: 'routes'
            });
var format_gpstracks_3 = new ol.format.GeoJSON();
var features_gpstracks_3 = format_gpstracks_3.readFeatures(json_gpstracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstracks_3.addFeatures(features_gpstracks_3);
var lyr_gpstracks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstracks_3, 
                style: style_gpstracks_3,
                interactive: true,
                title: '<img src="styles/legend/gpstracks_3.png" /> gps tracks'
            });
var format_missedstreets_4 = new ol.format.GeoJSON();
var features_missedstreets_4 = format_missedstreets_4.readFeatures(json_missedstreets_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_missedstreets_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_missedstreets_4.addFeatures(features_missedstreets_4);
var lyr_missedstreets_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_missedstreets_4, 
                style: style_missedstreets_4,
                interactive: true,
                title: '<img src="styles/legend/missedstreets_4.png" /> missed streets'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_helsinkiborder_1.setVisible(true);lyr_routes_2.setVisible(true);lyr_gpstracks_3.setVisible(true);lyr_missedstreets_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_helsinkiborder_1,lyr_routes_2,lyr_gpstracks_3,lyr_missedstreets_4];
lyr_helsinkiborder_1.set('fieldAliases', {'fid': 'fid', });
lyr_routes_2.set('fieldAliases', {'fid': 'fid', 'Distance': 'Distance', 'Area': 'Area', 'Status': 'Status', });
lyr_gpstracks_3.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', });
lyr_missedstreets_4.set('fieldAliases', {'fid': 'fid', 'Street': 'Street', 'Area': 'Area', });
lyr_helsinkiborder_1.set('fieldImages', {'fid': 'Hidden', });
lyr_routes_2.set('fieldImages', {'fid': 'Hidden', 'Distance': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', });
lyr_gpstracks_3.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', });
lyr_missedstreets_4.set('fieldImages', {'fid': 'Hidden', 'Street': 'TextEdit', 'Area': 'TextEdit', });
lyr_helsinkiborder_1.set('fieldLabels', {});
lyr_routes_2.set('fieldLabels', {'Distance': 'inline label', 'Area': 'inline label', 'Status': 'inline label', });
lyr_gpstracks_3.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', });
lyr_missedstreets_4.set('fieldLabels', {'Street': 'inline label', 'Area': 'inline label', });
lyr_missedstreets_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});