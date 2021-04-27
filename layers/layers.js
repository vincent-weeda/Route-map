ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([384076.665555, 6674881.434057, 385961.526041, 6675923.270271]);
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

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_routes_3 = new ol.format.GeoJSON();
var features_routes_3 = format_routes_3.readFeatures(json_routes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_routes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routes_3.addFeatures(features_routes_3);
var lyr_routes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_routes_3, 
                style: style_routes_3,
                interactive: true,
                title: 'routes'
            });
var format_gpstracks2204_4 = new ol.format.GeoJSON();
var features_gpstracks2204_4 = format_gpstracks2204_4.readFeatures(json_gpstracks2204_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstracks2204_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstracks2204_4.addFeatures(features_gpstracks2204_4);
var lyr_gpstracks2204_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstracks2204_4, 
                style: style_gpstracks2204_4,
                interactive: false,
                title: '<img src="styles/legend/gpstracks2204_4.png" /> gps tracks 22.04'
            });

lyr_basemap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_routes_3.setVisible(true);lyr_gpstracks2204_4.setVisible(true);
var layersList = [lyr_basemap_0,lyr_GoogleMaps_1,lyr_GoogleSatellite_2,lyr_routes_3,lyr_gpstracks2204_4];
lyr_routes_3.set('fieldAliases', {'fid': 'fid', 'Distance': 'Distance', 'Area': 'Area', 'Status': 'Status', });
lyr_gpstracks2204_4.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', 'date_animation': 'date_animation', });
lyr_routes_3.set('fieldImages', {'fid': 'Hidden', 'Distance': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', });
lyr_gpstracks2204_4.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', 'date_animation': 'Hidden', });
lyr_routes_3.set('fieldLabels', {'Distance': 'inline label', 'Area': 'inline label', 'Status': 'inline label', });
lyr_gpstracks2204_4.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', });
lyr_gpstracks2204_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});