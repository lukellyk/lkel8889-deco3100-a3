const datasource3 = "https://raw.githubusercontent.com/lukellyk/lkel8889-deco3100-a3/master/data/trump_v_biden.csv"

function loadData3 () {
    Plotly.d3.csv(datasource3, function (data) {
        // console.log(data);
      processData3(data);
    });
}

function processData3(allRows) {
    let days = [], trump = [], biden = [];
    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];
        //separate data by column headers
        days.push(row['days since start of presidency']);
        trump.push(row['rolling avg trump']);
        biden.push(row['rolling avg biden']);
    }
    // initiate plot creation function
    makePlot3(days,trump,biden);
} 
// make traces
function makePlot3(days,trump,biden){
    var traces = [
        {
            name: 'Trump',
            x: days,
            y: trump,
            line: {
                color: '#E63946'
            }
        },
        {
            name: 'Biden',
            x: days,
            y: biden,
            line:{
                color: '#457B9D'
            }
        }
    ];
    // define layout
    var layout = {
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        title: {
            text: "Average Reddit Score in First <br>100 Days of Presidency",
            font: {
                family: 'jubilat',
                size: 30,
            }
        },
        xaxis: {
            title: 'Days Since Start of Presidency',
            titlefont: {
                size: 20
            }
        },
        yaxis: {
            title: 'Avg. Reddit Score',
            titlefont: {
                size: 20
            }
        }
    };

    var config = {
        responsive: true,
        scrollZoom: true,
        displayModeBar: false,
    };
    // make plot
    Plotly.newPlot('trumpBiden', traces, layout, config);
}

loadData3();