const datasource = "https://raw.githubusercontent.com/lukellyk/lkel8889-deco3100-a3/master/data/trump_and_reddit_data.csv"

function loadData2 () {
    Plotly.d3.csv(datasource, function (data) {
        // console.log(data);
      processData2(data);
    });
}

function processData2(allRows) {
    let datetime = [], redditAvg = [];
    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];
        //separate data by column headers
        datetime.push(row['datetime']);
        redditAvg.push(row['redditAvg']);
    }
    // initiate plot creation function
    makePlot2(datetime,redditAvg);
} 

function makePlot2(datetime,redditAvg){
    var data = [
        {
            x: datetime,
            y: redditAvg,
            // connectgaps: true
        }
    ];

    var layout = {};

    var config = {
        responsive: true,
        scrollZoom: true,
        displayModeBar: false,
    };

    Plotly.newPlot('scoreOverTime', data, layout, config);
}

loadData2();