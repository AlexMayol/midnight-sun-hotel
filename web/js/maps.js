function myMap() {
  var mapProp= {
      center:new google.maps.LatLng(40.51630482302167,-73.43838501605205),
      zoom:15
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
