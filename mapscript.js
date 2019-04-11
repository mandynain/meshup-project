var mapcanvas1, mapcanvas2, mapcanvas3;
function initialize(){
    var mapOption1 = {
        zoom:2,
        center:{lat:40.758904, lng:-73.985128}
    };
    var mapOption2 = {
        zoom:10,
        center:{lat:40.758904, lng:-73.985128}
    };
    var mapOption3 = {
        zoom:18,
        center:{lat:40.758904, lng:-73.985128}
    };
    mapcanvas1 = new google.maps.Map(document.getElementById('map1'),mapOption1);
    mapcanvas2 = new google.maps.Map(document.getElementById('map2'),mapOption2);
    mapcanvas3 = new google.maps.Map(document.getElementById('map3'),mapOption3);
}
google.maps.event.addDomListener(window,'load',initialize);
c