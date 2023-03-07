// Comment
function initMap() {
  // The location of Uluru
  const pokeToTheMoon = { lat: 33.8261, lng: -117.8378 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: pokeToTheMoon,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: pokeToTheMoon,
    map: map,
  });
}
