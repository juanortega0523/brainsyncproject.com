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

  // var pid = "S84803235P";
  // var off = "";
  // location.href = "https://pay.hotmart.com/" + pid +
  //   "?checkoutMode=10&offDiscount=ONLY5SLOTSLEFT&sck=" + sck;

  location.href = "https://www.checkout-ds24.com/product/524297/?ds24tr=" + sck;


  // if (geo_countryCode == 'GB') {
  //   location.href = "https://pay.brainsyncproject.com/bsp-checkout-gbp?tk=" +
  //     sck;
  // } else if (geo_countryCode == 'CA') {
  //   location.href = "https://pay.brainsyncproject.com/bsp-checkout-cad?tk=" +
  //     sck;
  // } else if (geo_countryCode == 'AU') {
  //   location.href = "https://pay.brainsyncproject.com/bsp-checkout-aud?tk=" +
  //     sck;
  // } else if (geo_countryCode == 'NZ') {
  //   location.href = "https://pay.brainsyncproject.com/bsp-checkout-nzd?tk=" +
  //     sck;
  // } else if (geo_countryCode == 'US') {
  //   location.href = "https://checkout.brainsyncproject.com/bsp-checkout?tk=" +
  //     sck;
  // } else {
  //   location.href = "https://pay.brainsyncproject.com/bsp-checkout?tk=" + sck;
  // }
}
