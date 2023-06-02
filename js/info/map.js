import statistics from "./data.json" assert { type: "json" };

google.charts.load("current", {
  packages: ["geochart"],
});

const regionInfo = document.querySelector("#region_info");

function dataWithSufix(value, sufix) {
  return { v: value, f: `${value} ${sufix}` };
}

function generateGoogleData(dataset) {
  return dataset.map((row) => {
    return [row.code, row.country, dataWithSufix(row.hungry, "Milhões")];
  });
}

google.charts.setOnLoadCallback(() => {
  const table = new google.visualization.DataTable({
    cols: [
      { id: "code", label: "Region code", type: "string" },
      { id: "country", label: "Country", type: "string" },
      { id: "hungry", label: "População com Fome", type: "number" },
    ],
  });

  table.addRows(generateGoogleData(statistics.data));

  const options = {
    region: "world",
    resolution: "subcontinents",
    enableRegionInteractivity: "true",
    colorAxis: { colors: ["#ffcc50", "#c06500"] },
    backgroundColor: {
      fill: "#111111",
      stroke: "gray",
      strokeWidth: 1,
    },
    datalessRegionColor: "gray",
    keepAspectRatio: true,
    legend: false,
  };

  const chart = new google.visualization.GeoChart(
    document.querySelector("#regions_div")
  );

  chart.draw(table, options);

  google.visualization.events.addListener(chart, "select", () => {
    const [selection] = chart.getSelection();

    regionInfo.textContent = statistics.data[selection.row].hungryText;
  });
});
