ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([391312.916639, 6681001.098185, 394589.638967, 6683143.933146]);
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
var format_gpstracks2204_3 = new ol.format.GeoJSON();
var features_gpstracks2204_3 = format_gpstracks2204_3.readFeatures(json_gpstracks2204_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstracks2204_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstracks2204_3.addFeatures(features_gpstracks2204_3);
var lyr_gpstracks2204_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstracks2204_3, 
                style: style_gpstracks2204_3,
                interactive: true,
                title: '<img src="styles/legend/gpstracks2204_3.png" /> gps tracks 22.04'
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
var format_photos_5 = new ol.format.GeoJSON();
var features_photos_5 = format_photos_5.readFeatures(json_photos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_photos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_photos_5.addFeatures(features_photos_5);
var lyr_photos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_photos_5, 
                style: style_photos_5,
                interactive: true,
                title: '<img src="styles/legend/photos_5.png" /> photos'
            });

lyr_basemap_0.setVisible(true);lyr_helsinkiborder_1.setVisible(true);lyr_routes_2.setVisible(true);lyr_gpstracks2204_3.setVisible(true);lyr_missedstreets_4.setVisible(true);lyr_photos_5.setVisible(true);
var layersList = [lyr_basemap_0,lyr_helsinkiborder_1,lyr_routes_2,lyr_gpstracks2204_3,lyr_missedstreets_4,lyr_photos_5];
lyr_helsinkiborder_1.set('fieldAliases', {'fid': 'fid', });
lyr_routes_2.set('fieldAliases', {'fid': 'fid', 'Distance': 'Distance', 'Area': 'Area', 'Status': 'Status', });
lyr_gpstracks2204_3.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', 'date_animation': 'date_animation', });
lyr_missedstreets_4.set('fieldAliases', {'fid': 'fid', 'Street': 'Street', 'Area': 'Area', });
lyr_photos_5.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'html': 'html', });
lyr_helsinkiborder_1.set('fieldImages', {'fid': 'Hidden', });
lyr_routes_2.set('fieldImages', {'fid': 'Hidden', 'Distance': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', });
lyr_gpstracks2204_3.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', 'date_animation': 'Hidden', });
lyr_missedstreets_4.set('fieldImages', {'fid': 'Hidden', 'Street': 'TextEdit', 'Area': 'TextEdit', });
lyr_photos_5.set('fieldImages', {'fid': 'Hidden', 'Date': 'DateTime', 'html': 'TextEdit', });
lyr_helsinkiborder_1.set('fieldLabels', {});
lyr_routes_2.set('fieldLabels', {'Distance': 'inline label', 'Area': 'inline label', 'Status': 'inline label', });
lyr_gpstracks2204_3.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', });
lyr_missedstreets_4.set('fieldLabels', {'Street': 'inline label', 'Area': 'inline label', });
lyr_photos_5.set('fieldLabels', {'Date': 'no label', 'html': 'no label', });
lyr_photos_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});