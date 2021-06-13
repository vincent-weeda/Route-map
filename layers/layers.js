ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([395089.699908, 6677631.874248, 398362.703949, 6680202.103396]);
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
var format_gpstracks1106_2 = new ol.format.GeoJSON();
var features_gpstracks1106_2 = format_gpstracks1106_2.readFeatures(json_gpstracks1106_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstracks1106_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstracks1106_2.addFeatures(features_gpstracks1106_2);
var lyr_gpstracks1106_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstracks1106_2, 
                style: style_gpstracks1106_2,
                interactive: true,
                title: '<img src="styles/legend/gpstracks1106_2.png" /> gps tracks 11.06'
            });
var format_everysinglestreet_routes_20210402routes_3 = new ol.format.GeoJSON();
var features_everysinglestreet_routes_20210402routes_3 = format_everysinglestreet_routes_20210402routes_3.readFeatures(json_everysinglestreet_routes_20210402routes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_everysinglestreet_routes_20210402routes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_everysinglestreet_routes_20210402routes_3.addFeatures(features_everysinglestreet_routes_20210402routes_3);
var lyr_everysinglestreet_routes_20210402routes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_everysinglestreet_routes_20210402routes_3, 
                style: style_everysinglestreet_routes_20210402routes_3,
                interactive: true,
                title: '<img src="styles/legend/everysinglestreet_routes_20210402routes_3.png" /> everysinglestreet_routes_20210402 routes'
            });

lyr_basemap_0.setVisible(true);lyr_helsinkiborder_1.setVisible(true);lyr_gpstracks1106_2.setVisible(true);lyr_everysinglestreet_routes_20210402routes_3.setVisible(true);
var layersList = [lyr_basemap_0,lyr_helsinkiborder_1,lyr_gpstracks1106_2,lyr_everysinglestreet_routes_20210402routes_3];
lyr_helsinkiborder_1.set('fieldAliases', {'fid': 'fid', });
lyr_gpstracks1106_2.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', 'Streets': 'Streets', 'run': 'run', });
lyr_everysinglestreet_routes_20210402routes_3.set('fieldAliases', {'fid': 'fid', 'Distance': 'Distance', 'Area': 'Area', 'Status': 'Status', });
lyr_helsinkiborder_1.set('fieldImages', {'fid': 'Hidden', });
lyr_gpstracks1106_2.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', 'Streets': 'Range', 'run': 'Range', });
lyr_everysinglestreet_routes_20210402routes_3.set('fieldImages', {'fid': '', 'Distance': '', 'Area': '', 'Status': '', });
lyr_helsinkiborder_1.set('fieldLabels', {});
lyr_gpstracks1106_2.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', 'Streets': 'inline label', 'run': 'inline label', });
lyr_everysinglestreet_routes_20210402routes_3.set('fieldLabels', {'fid': 'no label', 'Distance': 'no label', 'Area': 'no label', 'Status': 'no label', });
lyr_everysinglestreet_routes_20210402routes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});