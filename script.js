var countryData = new XMLHttpRequest();

countryData.open("GET", "https://restcountries.com/v3.1/all");
countryData.send();
countryData.onload = function () {
  var result = JSON.parse(countryData.response);
  for (var i = 0; i < result.length; i++) {
    console.log(result[i]["flags"]["png"]);
  }
};
