ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([383035.562455, 6672601.999376, 390051.340989, 6676724.392839]);
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

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
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
var format_gpstracks1904_3 = new ol.format.GeoJSON();
var features_gpstracks1904_3 = format_gpstracks1904_3.readFeatures(json_gpstracks1904_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstracks1904_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstracks1904_3.addFeatures(features_gpstracks1904_3);
var lyr_gpstracks1904_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstracks1904_3, 
                style: style_gpstracks1904_3,
                interactive: true,
                title: '<img src="styles/legend/gpstracks1904_3.png" /> gps tracks 19.04'
            });

lyr_basemap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_routes_2.setVisible(true);lyr_gpstracks1904_3.setVisible(true);
var layersList = [lyr_basemap_0,lyr_GoogleMaps_1,lyr_routes_2,lyr_gpstracks1904_3];
lyr_routes_2.set('fieldAliases', {'fid': 'fid', 'Distance': 'Distance', 'Area': 'Area', 'Status': 'Status', });
lyr_gpstracks1904_3.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', });
lyr_routes_2.set('fieldImages', {'fid': 'Hidden', 'Distance': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', });
lyr_gpstracks1904_3.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', });
lyr_routes_2.set('fieldLabels', {'Distance': 'inline label', 'Area': 'inline label', 'Status': 'inline label', });
lyr_gpstracks1904_3.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', });
lyr_gpstracks1904_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});