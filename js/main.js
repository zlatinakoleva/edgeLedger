// Initialize and add the map
function initMap() {
// The location of Uluru
    var uluru = {lat: 42.524761, lng: 27.458489};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementsByClassName('map'), {zoom: 16, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}
  

$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !=='') {
        event.preventDefault();
        const hash=this.hash;
        $('html,body').animate(
            {
                scrollTop: $(hash).offset().top-100
            },
            800
        );
}
});