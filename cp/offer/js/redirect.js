// var geo_city = "";
// var geo_countryCode = "";
//
//
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     geo_city = JSON.parse(this.response).YourFuckingCity;
//     geo_countryCode = JSON.parse(this.response).YourFuckingCountryCode;
//   }
// };
// xhttp.open("GET", "https://wtfismyip.com/json", true);
// xhttp.send();



var url_string = window.location.href;
var url = new URL(url_string);
var sck = new URL(document.location).searchParams.get("sck");

function redirect() {


  location.href =
    "https://secure.brainsyncproject.com/checkout/135103261:1?sck=" + sck;


}
