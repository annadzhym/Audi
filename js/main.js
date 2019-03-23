'use strict';
(function ($) {
    var elMap = $('.map')[0];
    var place = {lat: 55.908253,  lng: 37.598843};
    var mymap = new google.maps.Map(elMap, {
        zoom: 15,
        center: place,
    });
    mymap.panBy(-150, 0);
    var marker = new google.maps.Marker({
        position: place,
        map: mymap,
        //icon: "./img/map.svg",
    });
    var info = '<div>МКАД, 85-й километр, вл4</div>';
    var infowindow = new google.maps.InfoWindow({
        content: info
    });
    infowindow.open(mymap, marker);


})(jQuery);
