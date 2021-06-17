[전지구 좌표계]

전세계를 한번에 나타내야 할 때 많이 쓰이는 좌표계들입니다.

*WGS84 경위도: GPS가 사용하는 좌표계

EPSG:4326, EPSG:4166 (Korean 1995)

+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs 



*Bessel 1841 경위도: 한국과 일본에 잘 맞는 지역타원체를 사용한 좌표계

EPSG:4004, EPSG:4162 (Korean 1985)

+proj=longlat +ellps=bessel +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43



*GRS80 경위도: WGS84와 거의 유사

EPSG:4019, EPSG:4737 (Korean 2000)

+proj=longlat +ellps=GRS80 +no_defs



*Google Mercator: 구글지도/빙지도/야후지도/OSM 등 에서 사용중인 좌표계

EPSG:3857(공식), EPSG:900913(통칭)

+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs



[UTM]

전세계를 6도 단위로 나누는 표준적인 TM으로 군사지도에서 많이 사용합니다.

*UTM52N (WGS84): 경도 120~126도 사이에서 사용

EPSG:32652

+proj=utm +zone=52 +ellps=WGS84 +datum=WGS84 +units=m +no_defs 



*UTM51N (WGS84): 경도 126~132도 사이에서 사용

EPSG:32651

+proj=utm +zone=51 +ellps=WGS84 +datum=WGS84 +units=m +no_defs 





[보정안된 오래된 지리원 표준]

이 좌표계들은 EPSG에 등록되어 있지만, lon_0값의 문제로 실제로는 거의 사용되지 않습니다.

[오래된 지리원 표준]이 현업에서 실제 사용된 좌표계입니다.

*동부원점(Bessel): 강원도 등 동부지역
EPSG:2096

+proj=tmerc +lat_0=38 +lon_0=129 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43



*중부원점(Bessel): 서울 등 중부지역

EPSG:2097

+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43



*서부원점(Bessel): 서해5도 등 서부지역

EPSG:2098

+proj=tmerc +lat_0=38 +lon_0=125 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43





[오래된 지리원 표준]

2002년 이전에 지리원의 지형도와 KLIS 등 국가 시스템에서 사용되었던 좌표계입니다.

*보정된 서부원점(Bessel) - KLIS에서 서부지역에 사용중
EPSG:5173

+proj=tmerc +lat_0=38 +lon_0=125.0028902777778 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43



*보정된 중부원점(Bessel): KLIS에서 중부지역에 사용중

EPSG:5174

+proj=tmerc +lat_0=38 +lon_0=127.0028902777778 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43



*보정된 제주원점(Bessel): KLIS에서 제주지역에 사용중

EPSG:5175

+proj=tmerc +lat_0=38 +lon_0=127.0028902777778 +k=1 +x_0=200000 +y_0=550000 +ellps=bessel +units=m +no_defs  +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43



*보정된 동부원점(Bessel): KLIS에서 동부지역에 사용중

EPSG:5176

+proj=tmerc +lat_0=38 +lon_0=129.0028902777778 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43



*보정된 동해(울릉)원점(Bessel): KLIS에서 울릉지역에 사용중

EPSG:5177

+proj=tmerc +lat_0=38 +lon_0=131.0028902777778 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs  +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43





[KATEC 계열]

한반도 전체를 하나의 좌표계로 나타낼 때 많이 사용하는 좌표계입니다.

*UTM-K (Bessel): 새주소지도에서 사용 중

EPSG:5178

+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43



*UTM-K (GRS80): 네이버지도에서 사용중인 좌표계

EPSG:5179

+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs 



// 2014년 1월 21일 신상희 추가 

*네비게이션용 KATEC 좌표계(KOTI-KATEC)

EPSG 없음. 비공식 좌표계임. 

+proj=tmerc +lat_0=38 +lon_0=128 +k=0.9999 +x_0=400000 +y_0=600000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43





[타원체 바꾼 지리원 표준]

과거 지리원 좌표계에서 타원체와 lon_0 문제를 수정한 좌표계로 2000년대 초반에 잠시 많이 사용되었습니다.

*서부원점(GRS80)-falseY:50000
EPSG:5180

+proj=tmerc +lat_0=38 +lon_0=125 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +units=m +no_defs



*중부원점(GRS80)-falseY:50000: 다음지도에서 사용중인 좌표계

EPSG:5181

+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +units=m +no_defs



*제주원점(GRS80)-falseY:55000

EPSG:5182

+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=550000 +ellps=GRS80 +units=m +no_defs



*동부원점(GRS80)-falseY:50000

EPSG:5183

+proj=tmerc +lat_0=38 +lon_0=129 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +units=m +no_defs



*동해(울릉)원점(GRS80)-falseY:50000

EPSG:5184

+proj=tmerc +lat_0=38 +lon_0=131 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +units=m +no_defs


[현재 국토지리정보원 표준]

2002년 이후에 국토지리정보원 지형도에서 사용중인 좌표계입니다.

*서부원점(GRS80)-falseY:60000

EPSG:5185

+proj=tmerc +lat_0=38 +lon_0=125 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs



*중부원점(GRS80)-falseY:60000

EPSG:5186

+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs



*동부원점(GRS80)-falseY:60000

EPSG:5187

+proj=tmerc +lat_0=38 +lon_0=129 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs



*동해(울릉)원점(GRS80)-falseY:60000

EPSG:5188

+proj=tmerc +lat_0=38 +lon_0=131 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs



출처: https://www.osgeo.kr/17 [OSGeo(Open Source GeoSpatial) 한국어 지부 - OSGeo Korean Chapter]
