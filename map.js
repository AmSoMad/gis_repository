let newProj = ol.proj.get('EPSG:3857'); // 사용 좌표계
let newProjExtent = newProj.getExtent(); // 지도의 범위
var rotateWithView = document.getElementById('rotateWithView'); //오버뷰

let wmts = new ol.layer.Tile({
	source: new ol.source.XYZ({
		url: 'https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png',
		format: new ol.format.GeoJSON
	}),
	name:'2D배경지도',
	//maxResolution: 5,
	  minResolution: 0,	
      maxResolution: 1400,
	  
});

let wmts3 = new ol.layer.Tile({
	source: new ol.source.XYZ({
		url: 'http://xdworld.vworld.kr:8080/2d/gray/202002/{z}/{x}/{y}.png',
		format: new ol.format.GeoJSON
	}),
	name:'2D회색지도',
	minResolution: 0,	
    maxResolution: 1400,
});

let wmts2 = new ol.layer.Tile({
	source: new ol.source.OSM(),
	minResolution: 1400,
	name:'OSM배경지도',
     
});

let Satellite = new ol.layer.Tile({//2d위성영상지도
	source: new ol.source.XYZ({url: 'https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg',
		format: new ol.format.GeoJSON
	}),
      maxResolution: 5,
	//  minResolution: 0,	
    //  maxResolution: 1400,
	name:'위성사진',
});

let Hybrid = new ol.layer.Tile({//2d위성영상지도
	source: new ol.source.XYZ({url: 'https://xdworld.vworld.kr/2d/Hybrid/service/{z}/{x}/{y}.png',
		format: new ol.format.GeoJSON
	}),
     maxResolution: 5,
	// minResolution: 0,	
	// maxResolution: 1400,
	name:'하이브리드',
});

var overviewMapControl = new ol.control.OverviewMap({
  // see in overviewmap-custom.html to see the custom CSS used
  className: 'ol-overviewmap ol-custom-overviewmap',
  layers: [
			new ol.layer.Tile({
				source: new ol.source.XYZ({
					url: 'https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png',
					//url: 'https://sgisapi.kostat.go.kr/tiles/wbmap/L{z}/{y}/{x}.png',
					
					format: new ol.format.GeoJSON
				}),
			})
		],
  collapseLabel: '\u00BB',
  label: '\u00AB',
  collapsed: false,
});
rotateWithView.addEventListener('change', function () {
  overviewMapControl.setRotateWithView(this.checked);
});

/* 뷰 설정 초기 위치 값 및 지도의 지원 줌레벨 현재 줌레벨 지도의 좌표계설정을 설정  */
let olView = new ol.View({
  //center: ol.proj.transform([127.100616,37.402142], 'EPSG:4326', 'EPSG:3857'),
  center:  [14266500.1385945, 4242489.929359414], 
  zoom: 7,
	minZoom : 1,
	maxZoom : 19,
	projection: newProj,
  //extent: newProjExtent || undefined // 해당 지역을 지도에서 벗어나지 않도록 설정
  //extent : [13678546.51713, 3834188.8033424, 14854453.760059, 5314661.8558898],
})

//마우스좌표 소지하기
var mouseCoordinate_Hover = document.getElementById('mouseCoordinate');
var mouseControlCoordinate = new ol.control.MousePosition({
	 coordinateFormat: new ol.coordinate.createStringXY(4),
	 projection: 'EPSG:3857',
	//좌표계 설정 
	className: 'mousePointer_Coordinate', //css 클래스 이름 
	target: mouseCoordinate_Hover,//좌표를 뿌릴 element 
	undefinedHTML: '&nbsp;'
});
var mousePointer_Coordinate = document.getElementsByClassName(mousePointer_Coordinate);

let map = new ol.Map({
  layers: [wmts2,wmts3,wmts,Satellite,Hybrid], // 타일레이어를 올림
  target: 'map', //대상이 되는 div 
  view: olView,
  controls: ol.control.defaults().extend(
	  [
		  new ol.control.FullScreen({source:'fullscreen',}),
		  new ol.control.ScaleLine({units: 'metric'}),
		  overviewMapControl,
		  mouseControlCoordinate,
		  new ol.control.LayerPopup({reverse: false})]),
		  
});

// Overlay
var menu = new ol.control.Overlay ({ 
	closeBox : true, 
	className: "slide-left menu", 
	content: $("#menu").get(0)
});
map.addControl(menu);

// A toggle control to show/hide the menu
var t = new ol.control.Toggle(
	{	html: '<i class="fa fa-bars" ></i>',
		className: "menu",
		title: "Menu",
		onToggle: function() { menu.toggle(); }
	});
map.addControl(t);

var select_B = new ol.interaction.Select({ hitTolerance: 1 });
map.addInteraction(select_B);

//마커팝업창
var div_Popup = document.getElementById('popup');
var popup = new ol.Overlay({
  element: div_Popup,
  positioning: 'bottom-center',
  stopEvent: false,
  offset: [0, -50],
});
map.addOverlay(popup);	
