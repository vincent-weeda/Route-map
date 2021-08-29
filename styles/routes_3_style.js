var size = 0;
var placement = 'point';

var style_routes_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_routes_3(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_routes_3rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(236,236,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_routes_3rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(141,141,141,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_routes_3rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(229,182,54,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_routes_3rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_routes_3rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(141,141,141,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_routes_3(feature, value);
        ;

    return style;
};
