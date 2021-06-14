/* 지도의 클릭이벤트 설정 */
map.on('singleclick', function(evt) {
	let pixel = evt.pixel;
	//v월드레이어 선택시
	map.getLayers().forEach(function(layer){
		if(layer.get("name")=="wms_theme"){
			let selectlayer = layer.get("id")
			if(selectlayer.indexOf(",") >-1){
				selectlayer = selectlayer.split(",")[0]; //data API는 레이어 1개씩 조회가 가능해서 2개이상이 입력될경우 변경되도록 설정(지적도)
			}
			let min = map.getCoordinateFromPixel([evt.pixel[0] -4,evt.pixel[1]+4])
		    let max = map.getCoordinateFromPixel([evt.pixel[0] +4,evt.pixel[1]-4])
		    let box = min[0]+","+min[1]+","+max[0]+","+max[1]
        	//console.log(box);
			let code = map.getView().getProjection().getCode();
		    
		    /*WFS jsonp 테스트*/
		    
		    $('#wfsForm > [name=BBOX]').val(box);		
		    $('#wfsForm > [name=SRSNAME]').val(code);
		    $.ajax({
		    	type: "get",
		    	url: "https://api.vworld.kr/req/wfs",
		    	data : $('#wfsForm').serialize(),
		    	dataType: 'jsonp',
		    	async: false,
		    	jsonpCallback:"parseResponse",
		    	success: function(data) {
					turl = 'https://api.vworld.kr/req/wfs?'+$('#wfsForm').serialize();
		    	    //$('#wfs_url').html(`<a href="${turl}">${turl}</a>`)
		    	    
		    	    let vectorSource = new ol.source.Vector({features: (new ol.format.GeoJSON()).readFeatures(data)})
		    	    
		    		map.getLayers().forEach(function(ollayer){
		    			if(ollayer.get("name")=="wfs_result"){
		    				map.removeLayer(ollayer);//기존결과 삭제
		    			}
		    		})
					
		    	    let vector_layer = new ol.layer.Vector({
						source: vectorSource,
						style: vectorStyle
		    	  	})
		    	    
		    	    vector_layer.set("name","wfs_result");
		    	 	map.addLayer(vector_layer);
		    	 	
		    	 	let resultFeature = vectorSource.getFeatures()[0]
		    	 	if(typeof resultFeature == "object"){
			        	let wfs_html="";
			        	for(let i in resultFeature.getKeys()){ 
		                  if(resultFeature.getKeys()[i] == "bbox"){
		                    continue;
		                  }
			        		wfs_html += resultFeature.getKeys()[i] + " = "+resultFeature.get(resultFeature.getKeys()[i])+"\n<br>";
			        	}
			                wfs_html += "--------------------------------------<br>";
						        	$('#wfs_result').html(wfs_html);
			                resultArray.push(wfs_html);
						if(cnt >= 0){
							$('#resultP').html(wfs_html);
							cnt = 0;
						}else{
							$('#resultP').append(wfs_html);
							cnt++;
						}
		    	 	}
		    	},
		    	
		    	error: function(xhr, stat, err) {}
		    });
		    
		}else{
			// v월드레이어가 아니면
			// 마커선택부분
			var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
				return feature;
			});
			if (feature) {
				var coordinates = feature.getGeometry().getCoordinates();
				popup.setPosition(coordinates);
			
				$(div_Popup).popover({
				placement: 'top',
				html: true,
				content: feature.get('name'),  //name으로 먹인 값들 가져옴
				});
				$(div_Popup).popover('show');
			} else {
				$(div_Popup).popover('dispose');
			}
	
			/*
			[
				text/plain, 
				application/vnd.ogc.gml, 
				text/xml, 
				application/vnd.ogc.gml/3.1.1, 
				text/xml; 
				subtype=gml/3.1.1, 
				text/html, 
				application/json
			] 이렇게 INFO_FORMAT 지원한다.
			*/
					//etc 레이어클릭시 
			var viewResolution = olView.getResolution();
			var clickFeatures = test_cccc.getSource().getFeatureInfoUrl(
				evt['coordinate'], viewResolution, 'EPSG:3857',
				{ 'INFO_FORMAT': 'application/json' }
			);
			if (clickFeatures) {
				console.log(clickFeatures);
	
				
		
				$.ajax({
					type: "GET", 
					url : clickFeatures,
					//data : '',
					cache:false,
					dataType:'json',
					success : function(result){
						var resultInner = `<table><tbody><td>${result}</td></tbody></table>`;
						
						console.log(result.features.properties);
						
						$('#resultP').html(resultInner);
					},		
				});
	
			}

		}
    });


 }); // 지도 클릭이벤트 설정 종료
