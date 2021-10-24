ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([377255.011400, 6667134.151966, 404978.836791, 6685885.464144]);
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

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_helsinkiborder_4 = new ol.format.GeoJSON();
var features_helsinkiborder_4 = format_helsinkiborder_4.readFeatures(json_helsinkiborder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_helsinkiborder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_helsinkiborder_4.addFeatures(features_helsinkiborder_4);
var lyr_helsinkiborder_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_helsinkiborder_4, 
                style: style_helsinkiborder_4,
                interactive: true,
                title: '<img src="styles/legend/helsinkiborder_4.png" /> helsinki border'
            });
var format_missedstreets_5 = new ol.format.GeoJSON();
var features_missedstreets_5 = format_missedstreets_5.readFeatures(json_missedstreets_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_missedstreets_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_missedstreets_5.addFeatures(features_missedstreets_5);
var lyr_missedstreets_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_missedstreets_5, 
                style: style_missedstreets_5,
                interactive: true,
                title: '<img src="styles/legend/missedstreets_5.png" /> missed streets'
            });
var format_routes2110_6 = new ol.format.GeoJSON();
var features_routes2110_6 = format_routes2110_6.readFeatures(json_routes2110_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_routes2110_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routes2110_6.addFeatures(features_routes2110_6);
var lyr_routes2110_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_routes2110_6, 
                style: style_routes2110_6,
                interactive: true,
                title: 'routes 21.10'
            });
var format_gpstracks2110_7 = new ol.format.GeoJSON();
var features_gpstracks2110_7 = format_gpstracks2110_7.readFeatures(json_gpstracks2110_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstracks2110_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstracks2110_7.addFeatures(features_gpstracks2110_7);
var lyr_gpstracks2110_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstracks2110_7, 
                style: style_gpstracks2110_7,
                interactive: true,
                title: '<img src="styles/legend/gpstracks2110_7.png" /> gps tracks 21.10'
            });

lyr_CartoPositron_0.setVisible(true);lyr_GoogleMaps_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(false);lyr_OpenStreetMap_3.setVisible(false);lyr_helsinkiborder_4.setVisible(true);lyr_missedstreets_5.setVisible(true);lyr_routes2110_6.setVisible(true);lyr_gpstracks2110_7.setVisible(true);
var layersList = [lyr_CartoPositron_0,lyr_GoogleMaps_1,lyr_GoogleSatellite_2,lyr_OpenStreetMap_3,lyr_helsinkiborder_4,lyr_missedstreets_5,lyr_routes2110_6,lyr_gpstracks2110_7];
lyr_helsinkiborder_4.set('fieldAliases', {'fid': 'fid', });
lyr_missedstreets_5.set('fieldAliases', {'fid': 'fid', 'Street': 'Street', 'Area': 'Area', });
lyr_routes2110_6.set('fieldAliases', {'fid': 'fid', 'Distance': 'Distance', 'Area': 'Area', 'Status': 'Status', });
lyr_gpstracks2110_7.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', 'Streets': 'Streets', 'Run': 'Run', });
lyr_helsinkiborder_4.set('fieldImages', {'fid': 'Hidden', });
lyr_missedstreets_5.set('fieldImages', {'fid': 'Hidden', 'Street': 'TextEdit', 'Area': 'TextEdit', });
lyr_routes2110_6.set('fieldImages', {'fid': 'Hidden', 'Distance': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', });
lyr_gpstracks2110_7.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', 'Streets': 'Range', 'Run': 'Range', });
lyr_helsinkiborder_4.set('fieldLabels', {});
lyr_missedstreets_5.set('fieldLabels', {'Street': 'inline label', 'Area': 'inline label', });
lyr_routes2110_6.set('fieldLabels', {'Distance': 'inline label', 'Area': 'inline label', 'Status': 'inline label', });
lyr_gpstracks2110_7.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', 'Streets': 'inline label', 'Run': 'inline label', });
lyr_gpstracks2110_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});