// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(data)

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });