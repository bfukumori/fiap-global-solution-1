google.charts.load("current", {
  packages: ["geochart"],
});
google.charts.setOnLoadCallback(drawRegionsMap);

const statistics = [
  {
    code: "002",
    continent: "Africa",
    hungry: 281_000_000,
    malnutrition: "",
  },
  {
    code: "150",
    continent: "Europe",
    hungry: 111_000_000,
    malnutrition: "",
  },
  {
    code: "019",
    continent: "Americas",
    hungry: 34_000_000 + 56_500_000,
    malnutrition: "",
  },
  {
    code: "142",
    continent: "Asia",
    hungry: 418_000_000,
    malnutrition: "",
  },
  {
    code: "009",
    continent: "Oceania",
    hungry: 15_400_000,
    malnutrition: "",
  },
];

function drawRegionsMap() {
  const data = google.visualization.arrayToDataTable([
    ["Region code", "Continent", "Popularity"],
    ["002", "Africa", 600],
    ["150", "Europe", 500],
    ["019", "Americas", 600],
    ["142", "Asia", 700],
    ["009", "Oceania", 600],
  ]);

  const options = {
    region: "world",
    resolution: "continents",
    enableRegionInteractivity: "true",
    colorAxis: { colors: ["white", "#dda83a"] },
    backgroundColor: {
      fill: "#111111",
      stroke: "gray",
      strokeWidth: 1,
    },
    keepAspectRatio: true,
    legend: false,
  };

  const chart = new google.visualization.GeoChart(
    document.querySelector("#regions_div")
  );

  chart.draw(data, options);
}
