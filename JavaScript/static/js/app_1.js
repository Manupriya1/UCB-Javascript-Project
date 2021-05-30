// import the data from data.js
const tableData = data;
// reference the HTML table using d3
var tbody = d3.select("tbody");
function buildtable(data) {
    tbody.html("");
    data.foreach((datarow) => {
        let row = tbody.append("tr")
        Object.values(datarow).foreach(val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
    function handleClick() {
        let date = d3.select("#datetime").property("value");
        let filteredData = tableData;
        if (date) {
            filteredData = filteredData.filter(row => row.datetime === date);
        };
        buildtable(filteredData);
    };

    d3.selectAll("#filter-btn").on("click", handleClick);
    buildTable(tableData);
};