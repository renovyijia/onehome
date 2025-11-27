document.addEventListener("DOMContentLoaded", function () {

    var lat = parseFloat(document.getElementById("gmap-center-lat").value);
    var lng = parseFloat(document.getElementById("gmap-center-lng").value);
    var zoom = parseInt(document.getElementById("gmap-zoom").value);

    function initMap() {
        var mapCenter = { lat: lat, lng: lng };

        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: zoom,
            center: mapCenter,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        // No marker (we want to show a region, not a pin)
    }

    window.initMap = initMap;
});
