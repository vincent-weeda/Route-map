ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([385982.923209, 6672856.351102, 387610.486541, 6674006.039530]);
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
var format_gpstracks1506_2 = new ol.format.GeoJSON();
var features_gpstracks1506_2 = format_gpstracks1506_2.readFeatures(json_gpstracks1506_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstracks1506_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstracks1506_2.addFeatures(features_gpstracks1506_2);
var lyr_gpstracks1506_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstracks1506_2, 
                style: style_gpstracks1506_2,
                interactive: true,
                title: '<img src="styles/legend/gpstracks1506_2.png" /> gps tracks 15.06'
            });

lyr_basemap_0.setVisible(true);lyr_routes_1.setVisible(true);lyr_gpstracks1506_2.setVisible(true);
var layersList = [lyr_basemap_0,lyr_routes_1,lyr_gpstracks1506_2];
lyr_routes_1.set('fieldAliases', {'fid': 'fid', 'Distance': 'Distance', 'Area': 'Area', 'Status': 'Status', });
lyr_gpstracks1506_2.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', 'Streets': 'Streets', 'run': 'run', });
lyr_routes_1.set('fieldImages', {'fid': 'Hidden', 'Distance': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', });
lyr_gpstracks1506_2.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', 'Streets': 'Range', 'run': 'Range', });
lyr_routes_1.set('fieldLabels', {'Distance': 'inline label', 'Area': 'inline label', 'Status': 'inline label', });
lyr_gpstracks1506_2.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', 'Streets': 'inline label', 'run': 'inline label', });
lyr_gpstracks1506_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});