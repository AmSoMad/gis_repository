오픈레이어로 지도 작업할 때, 지도위에 마우스를 클릭한 위치의 좌표값을 알아내는 방법들이다.

feature.geometry.getBounds().getCenterLonLat();

or

map.events.register("click", map, function(e) { 
    var latlon = map.getLonLatFromViewPortPx(e.xy) ;
    alert(lonlat);
});

or

new OpenLayers.Control.SelectFeature(layer,{
    hover:true,
    eventListeners:{
      onSelect:function(e){
        alert(e.feature.geometry)
    }
});

or

layer.events.on({
            "featureselected": function(e) {       
            alert(e);
            }
});

** 출처 : https://gis.stackexchange.com/questions/22240/openlayers-selectfeature-get-mouse-position
