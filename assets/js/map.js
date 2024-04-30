// Define your function in a separate JavaScript file, let's call it map.js

function displayMap() {
  var lat = 22.35986956234364,
    lng = 91.83315844578688;

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
      });
    }
  }

  getLocation();

  var locations = [
    [
      "Chattogram Medical College Hospital",
      22.35986956234364,
      91.83315844578688,
    ],
    ["Epic Health Care", 22.361090026655326, 91.8304333376313],
    ["People's Hospital Limited", 22.359913564179013, 91.83667575684876],
    ["Popular Diagnostic Center", 22.360855872806017, 91.83181357697073],
  ];

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: new google.maps.LatLng(lat, lng),
    mapId: "6631cad8d4ea1c64",
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
    });

    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }
}


// Call the function from another JavaScript file or from your HTML file
// displayMap();

// to avoid development mode use API key
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
