
var gis_layer_color =[
	'rgba(1, 60, 61, 1.0)',
	'rgba(1, 60, 61, 0.5)',
	'rgba(214, 239, 200, 1.0)',
	'rgba(214, 239, 200, 0.5)',
	'rgba(110, 105, 75, 1.0)',
	'rgba(110, 105, 75, 0.5)',
	'rgba(116, 60, 60, 1.0)',
	'rgba(116, 60, 60, 0.5)',
	'rgba(94,192,213,1.0)',
	'rgba(94,192,213,0.5)',
	'rgba(245,223,77,0.3)',//펜톤 2021옐로우
	'rgba(245,223,77,0.2)',
	'rgba(147,149,151,0.3)',//펜톤2021 그레이
	'rgba(147,149,151,0.2)',

];

function gis_building_Factory(PolygonName){
	var vector = new ol.layer.Vector({	
					  source: new ol.source.Vector({
					    url: function(extentArea) {
			                var strUrl = GeoAddr+'/geoserver/폴더명/ows?service=' +
			                    'WFS' +
			                    '&version=1.0.0' +
			                    '&request=GetFeature' +
			                    '&typename=폴더명:'+PolygonName+'_17000'+
								          //'&maxFeatures=5051'+
			                    '&outputFormat=application/json'+
			                    '&srsname=EPSG:3857'+
								'&bbox=' + extentArea.join(',') + ',EPSG:3857';
							return strUrl;
						},
					    format: new ol.format.GeoJSON(),
						strategy: ol.loadingstrategy.bbox
					  }),
					  	style:new ol.style.Style({
						    stroke: new ol.style.Stroke({
					            //color: gis_layer_color[8],
								color : 'rgba(0,0,255,1)',
					            width: 3
					        }),
							fill: new ol.style.Fill({
								//color: gis_layer_color[9],
								color : 'rgba(0,0,255,0.1)',
								width: 1,
							}),
							text:new ol.style.Text({
					            font: '13px sans-serif',
					            scale: 1,
					            text: "공장",
					            fill: new ol.style.Fill({ color: 'red',width:1 }),
					            stroke: new ol.style.Stroke({  color: 'yellow', width: 1 })
					        }),
						  }),
				    	minResolution: 0,
    					maxResolution: 11
					});
	vector.set("name",PolygonName);
	map.addLayer(vector);
}

function WMS_gis_building_type_rest(PolygonName){
	var vector = new ol.layer.Tile({	
					  source: new ol.source.TileWMS({
					    url: GeoAddr+'/geoserver/저장소명/wms',
						params:{
							'LAYERS':'저장소명:'+PolygonName,
						},
						serverType:'geoserver',
						
					  }),
					  	style:new ol.style.Style({
						    stroke: new ol.style.Stroke({
					            color: gis_layer_color[10],
					            width: 0.5
					        }),
							fill: new ol.style.Fill({
								color: gis_layer_color[11],
								width: 0.5,
							}),
							text:new ol.style.Text({
					            font: '13px sans-serif',
					            scale: 1,
					            text: "ETC",
					            fill: new ol.style.Fill({ color: 'white',width:1 }),
					            stroke: new ol.style.Stroke({  color: 'white', width: 1 })
					        }),
						  }),
				    	minResolution: 0,
    					maxResolution: 11
					});
	vector.set("name",PolygonName);
	map.addLayer(vector);
}
