var LocationsForMap = [
    ['Perú',-12.097059089107868, -77.03782662583649],
    ['Panama',9.010150533204733, -79.47660970259591],
    ['Colombia', 4.693340389525053, -74.0345607314047]
  ];




  function initMap() {



    var map = new google.maps.Map(document.getElementById('mapita'), {
      zoom:4,
      center: new google.maps.LatLng(-0.7669054335133221, -74.33796086708082),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < LocationsForMap.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(LocationsForMap[i][1], LocationsForMap[i][2]),
        map: map,
       
      });

     /* google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent("hola");
          infowindow.open(map, marker);
         
        }
      })
      (marker, i));*/
    }
   

  

  }
  
