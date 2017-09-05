$(document).ready(function() {

	//to show the tool tip in main page
	$(".data").hover(function() {
		$(this).tooltip('show');
	});

	$('.carousel').carousel({
  	interval: 4000
	});

  /*$(".enlarge").on("click", function() {
      $('#imagemodal').modal('show'); 
  });*/

});

function initMap1() {
        var coord = {lat: 12.9765312, lng: 77.7272107}; 
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: coord
        });
        var marker = new google.maps.Marker({
          position: coord,
          title: "Bangalore, India",
          map: map
        });
        }

function initMap2() {
        var coord = {lat: 32.7899137, lng: -97.2501979}; 
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: coord
        });
        var marker = new google.maps.Marker({
          position: coord,
          title: "Fort Worth, Texas",
          map: map
        });
        }