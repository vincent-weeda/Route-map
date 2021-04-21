ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([387535.116956, 6672850.256470, 389811.376126, 6674338.831712]);
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
var format_gps_tracks_20210421_2 = new ol.format.GeoJSON();
var features_gps_tracks_20210421_2 = format_gps_tracks_20210421_2.readFeatures(json_gps_tracks_20210421_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gps_tracks_20210421_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gps_tracks_20210421_2.addFeatures(features_gps_tracks_20210421_2);
var lyr_gps_tracks_20210421_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gps_tracks_20210421_2, 
                style: style_gps_tracks_20210421_2,
                interactive: true,
                title: '<img src="styles/legend/gps_tracks_20210421_2.png" /> gps_tracks_20210421'
            });
var format_nodes_3 = new ol.format.GeoJSON();
var features_nodes_3 = format_nodes_3.readFeatures(json_nodes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_nodes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nodes_3.addFeatures(features_nodes_3);
var lyr_nodes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nodes_3, 
                style: style_nodes_3,
                interactive: true,
                title: '<img src="styles/legend/nodes_3.png" /> nodes'
            });

lyr_basemap_0.setVisible(true);lyr_routes_1.setVisible(true);lyr_gps_tracks_20210421_2.setVisible(true);lyr_nodes_3.setVisible(true);
var layersList = [lyr_basemap_0,lyr_routes_1,lyr_gps_tracks_20210421_2,lyr_nodes_3];
lyr_routes_1.set('fieldAliases', {'fid': 'fid', 'Distance': 'Distance', 'Area': 'Area', 'Status': 'Status', });
lyr_gps_tracks_20210421_2.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', 'date_animation': 'date_animation', });
lyr_nodes_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_routes_1.set('fieldImages', {'fid': 'Hidden', 'Distance': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', });
lyr_gps_tracks_20210421_2.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', 'date_animation': 'Hidden', });
lyr_nodes_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_routes_1.set('fieldLabels', {'Distance': 'inline label', 'Area': 'inline label', 'Status': 'inline label', });
lyr_gps_tracks_20210421_2.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', });
lyr_nodes_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_nodes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});