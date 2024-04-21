
  // Get the input element and the gallery element
var input = document.getElementById('searchInput');
var gallery = document.getElementsByClassName('gallery');

// Add a keyup event listener to the input element
input.addEventListener('keyup', function() {
 var filter = this.value.toUpperCase();

 // Loop through each gallery element
 for (var i = 0; i < gallery.length; i++) {
    var txtValue = gallery[i].getElementsByClassName('desc')[0].innerText;

    // If the text inside the gallery element matches the filter, show the gallery element
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      gallery[i].style.display = "";
    } else {
      gallery[i].style.display = "none";
    }
 }
});
