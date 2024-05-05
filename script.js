// Division / District / Upazila onload function
window.onload = function () {
  var divisionSelect = document.getElementById("division");
  var districtSelect = document.getElementById("district");
  var upazilaSelect = document.getElementById("upazila");

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // Populate the division select element
      for (var division in data) {
        var option = document.createElement("option");
        option.text = division;
        option.value = division;
        divisionSelect.add(option);
      }

      // Update the district and upazila select elements when a division is selected
      divisionSelect.onchange = function () {
        // Clear the district and upazila select elements
        districtSelect.length = 1;
        upazilaSelect.length = 1;

        // Populate the district select element
        var districts = data[this.value];
        for (var district in districts) {
          var option = document.createElement("option");
          option.text = district;
          option.value = district;
          districtSelect.add(option);
        }
      };

      // Update the upazila select element when a district is selected
      districtSelect.onchange = function () {
        // Clear the upazila select element
        upazilaSelect.length = 1;

        // Populate the upazila select element
        var upazilas = data[divisionSelect.value][this.value];
        for (var i = 0; i < upazilas.length; i++) {
          var option = document.createElement("option");
          option.text = upazilas[i];
          option.value = upazilas[i];
          upazilaSelect.add(option);
        }
      };
    })
    .catch((error) => console.error("Error:", error));
};

// Button Click function
// document.getElementById("search").addEventListener("click", function () {
//   var division = document.getElementById("division").value;
//   var district = document.getElementById("district").value;
//   var upazila = document.getElementById("upazila").value;
// });

function fetchAllHtml(id, htmlFile) {
  fetch(htmlFile)
    .then((response) => response.text())
    .then((data) => (document.getElementById(id).innerHTML = data))
    .catch((error) => console.error(error));
}

// List of HTML files in the 'body_parts' folder
var htmlFiles = ["header", "hero", "cta", "gallery", "footer", "request"];

// Fetch each HTML file
htmlFiles.forEach((file) => {
  fetchAllHtml(file, `./assets/body_parts/${file}.html`);
});