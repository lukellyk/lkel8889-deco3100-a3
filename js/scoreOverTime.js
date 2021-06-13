const datasource2 = "https://raw.githubusercontent.com/lukellyk/lkel8889-deco3100-a3/master/data/reddit_score_rolling_avg.csv"

function loadData2 () {
    Plotly.d3.csv(datasource2, function (data) {
        // console.log(data);
      processData2(data);
    });
}

function processData2(allRows) {
    let date = [], redditAvg = [];
    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];
        //separate data by column headers
        date.push(row['day']);
        redditAvg.push(row['rolling avg']);
    }
    // initiate plot creation function
    makePlot2(date,redditAvg);
} 

// create datapoints and traces
function makePlot2(date,redditAvg){
    var data = [
        {
            x: date,
            y: redditAvg,
            hovertemplate: '<b>Avg Reddit Score on %{x}: </b> %{y}<extra></extra>',
            mode: 'lines',
            line: {
                color: '#ffffff'
            }
        }
    ];
    // define the layout
    var layout = {
        title: {
            text: "Average Reddit Score Over Time",
            font: {
                family: 'jubilat',
                size: 30,
                color: '#ffffff'
            }
        },
        xaxis: {
            tickmode: 'array',
            // define tick values on the bottom (dates)
            tickvals: ['06/01/2017','01/01/2018','01/01/2019','01/01/2020','01/01/2021'],
            tickfont: {
                color: '#ffffff'
            },
            showgrid: false,
            title: 'Date',
            titlefont: {
                color: '#ffffff',
                size: 20
            }
        },
        yaxis: {
            gridcolor: '#457B9D',
            tickfont: {
                color: '#ffffff'
            },
            title: 'Avg. Reddit Score',
            titlefont: {
                color: '#ffffff',
                size: 20
            }
        },
        // make bg transparent
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
    };


    var config = {
        responsive: true,
        scrollZoom: true,
        displayModeBar: false,
    };
    // make plot
    Plotly.newPlot('scoreOverTime', data, layout, config);
}

loadData2();