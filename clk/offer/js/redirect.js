var geo_city = "";
var geo_countryCode = "";


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    geo_city = JSON.parse(this.response).YourFuckingCity;
    geo_countryCode = JSON.parse(this.response).YourFuckingCountryCode;
  }
};
xhttp.open("GET", "https://wtfismyip.com/json", true);
xhttp.send();



var url_string = window.location.href;
var url = new URL(url_string);
var sck = new URL(document.location).searchParams.get("sck");
var subid2 = new URL(document.location).searchParams.get("subid2");

function redirect() {

  // var pid = "S84803235P";
  // var off = "";
  // location.href = "https://pay.hotmart.com/" + pid +
  //   "?checkoutMode=10&offDiscount=ONLY5SLOTSLEFT&sck=" + sck;

  // location.href = "https://www.checkout-ds24.com/product/524297/?ds24tr=" + sck;

  location.href = "https://pay.laniavita.com/bsp-checkout?tk=" + subid2 + "&" +
    document.location.search.split('?')[1];

  // if (geo_countryCode == 'US') {
  //   location.href =
  //     "https://pay.hotmart.com/W88283844Y?checkoutMode=10&offDiscount=ONLY5SLOTSLEFT&sck=" +
  //     sck;
  //   //senna
  // } else {
  //   //dumont
  //   location.href =
  //     "https://pay.hotmart.com/H88208936H?checkoutMode=10&offDiscount=ONLY5SLOTSLEFT&sck=" +
  //     sck;
  // }

  // if (geo_countryCode == 'US' || geo_countryCode == 'CA' || geo_countryCode ==
  //   'AU' || geo_countryCode == 'NZ' || geo_countryCode == 'IN' ||
  //   geo_countryCode == 'ZA' || geo_countryCode == 'MX') {
  //   location.href =
  //     "https://pay.hotmart.com/F88493210J?checkoutMode=10&offDiscount=ONLY5SLOTSLEFT&sck=" +
  //     sck;
  //   //maktub
  // } else {
  //   //dumont
  //   location.href =
  //     "https://pay.hotmart.com/H88208936H?checkoutMode=10&offDiscount=ONLY5SLOTSLEFT&sck=" +
  //     sck;
  // }
}
