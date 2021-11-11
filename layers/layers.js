ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([394329.570904, 6676838.909068, 396098.548535, 6678095.340321]);
var wms_layers = [];


        var lyr_CartoPositron_0 = new ol.layer.Tile({
            'title': 'Carto Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_helsinkiborder_3 = new ol.format.GeoJSON();
var features_helsinkiborder_3 = format_helsinkiborder_3.readFeatures(json_helsinkiborder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_helsinkiborder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_helsinkiborder_3.addFeatures(features_helsinkiborder_3);
var lyr_helsinkiborder_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_helsinkiborder_3, 
                style: style_helsinkiborder_3,
                interactive: true,
                title: '<img src="styles/legend/helsinkiborder_3.png" /> helsinki border'
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
var format_routes3110_5 = new ol.format.GeoJSON();
var features_routes3110_5 = format_routes3110_5.readFeatures(json_routes3110_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_routes3110_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routes3110_5.addFeatures(features_routes3110_5);
var lyr_routes3110_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_routes3110_5, 
                style: style_routes3110_5,
                interactive: true,
                title: 'routes 31.10'
            });
var format_gpstracks1111_6 = new ol.format.GeoJSON();
var features_gpstracks1111_6 = format_gpstracks1111_6.readFeatures(json_gpstracks1111_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstracks1111_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstracks1111_6.addFeatures(features_gpstracks1111_6);
var lyr_gpstracks1111_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstracks1111_6, 
                style: style_gpstracks1111_6,
                interactive: true,
                title: '<img src="styles/legend/gpstracks1111_6.png" /> gps tracks 11.11'
            });

lyr_CartoPositron_0.setVisible(true);lyr_GoogleMaps_1.setVisible(false);lyr_OpenStreetMap_2.setVisible(false);lyr_helsinkiborder_3.setVisible(true);lyr_missedstreets_4.setVisible(true);lyr_routes3110_5.setVisible(true);lyr_gpstracks1111_6.setVisible(true);
var layersList = [lyr_CartoPositron_0,lyr_GoogleMaps_1,lyr_OpenStreetMap_2,lyr_helsinkiborder_3,lyr_missedstreets_4,lyr_routes3110_5,lyr_gpstracks1111_6];
lyr_helsinkiborder_3.set('fieldAliases', {'fid': 'fid', });
lyr_missedstreets_4.set('fieldAliases', {'fid': 'fid', 'Street': 'Street', 'Area': 'Area', });
lyr_routes3110_5.set('fieldAliases', {'fid': 'fid', 'Distance': 'Distance', 'Area': 'Area', 'Status': 'Status', });
lyr_gpstracks1111_6.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', 'Streets': 'Streets', 'Run': 'Run', });
lyr_helsinkiborder_3.set('fieldImages', {'fid': 'Hidden', });
lyr_missedstreets_4.set('fieldImages', {'fid': 'Hidden', 'Street': 'TextEdit', 'Area': 'TextEdit', });
lyr_routes3110_5.set('fieldImages', {'fid': 'Hidden', 'Distance': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', });
lyr_gpstracks1111_6.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', 'Streets': 'Range', 'Run': 'Range', });
lyr_helsinkiborder_3.set('fieldLabels', {});
lyr_missedstreets_4.set('fieldLabels', {'Street': 'inline label', 'Area': 'inline label', });
lyr_routes3110_5.set('fieldLabels', {'Distance': 'inline label', 'Area': 'inline label', 'Status': 'inline label', });
lyr_gpstracks1111_6.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', 'Streets': 'inline label', 'Run': 'inline label', });
lyr_gpstracks1111_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});