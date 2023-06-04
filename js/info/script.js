import statistics from "./data.json" assert { type: "json" };

google.charts.load("current", {
  packages: ["geochart"],
});

const regionName = document.querySelector("#region-name");
const regionInfo = document.querySelector("#region-info");

regionName.textContent = statistics.data[0].country.f;
regionInfo.innerHTML = statistics.data[0].hungryText;

function dataWithSufix(value, suffix) {
  return { v: value, f: `${value}${suffix}` };
}

function populationCalculate(row) {
  return Math.round(row.hungryCount / (row.percentageHunger / 100));
}

function generateGoogleData(dataset) {
  return dataset.map((row) => {
    return [
      row.code,
      row.country,
      dataWithSufix(row.percentageHunger, "%"),
      dataWithSufix(populationCalculate(row), " Milhões"),
    ];
  });
}

const googleColumns = ["Region code", "Country", "Fome", "População Total"];

google.charts.setOnLoadCallback(() => {
  const table = new google.visualization.arrayToDataTable([
    googleColumns,
    ...generateGoogleData(statistics.data),
  ]);

  const options = {
    resolution: "subcontinents",
    colorAxis: { colors: ["#ffffd4", "#c06500"] },
    backgroundColor: {
      fill: "#111111",
      stroke: "gray",
      strokeWidth: 1,
    },
    datalessRegionColor: "gray",
    keepAspectRatio: true,
    legend: false,
    tooltip: { isHtml: true, trigger: "visible" },
  };

  const chart = new google.visualization.GeoChart(
    document.querySelector("#regions-div")
  );

  chart.draw(table, options);

  google.visualization.events.addListener(chart, "select", () => {
    const [selection] = chart.getSelection();

    regionName.textContent = statistics.data[selection.row].country.f;
    regionInfo.innerHTML = statistics.data[selection.row].hungryText;
  });
});
