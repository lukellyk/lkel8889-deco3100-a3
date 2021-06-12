const datasource = "https://raw.githubusercontent.com/lukellyk/lkel8889-deco3100-a3/master/data/trump_and_reddit_data.csv"

function loadData () {
    Plotly.d3.csv(datasource, function (data) {
        // console.log(data);
      processData(data);
    });
}

function processData(allRows) {
    let datetime = [], redditCount = [], tweet = [], redditAvg = [], sentiment = [];
    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];
        //separate data by column headers
        datetime.push(row['datetime']);
        redditCount.push(row['redditCount']);
        tweet.push(row['tweet']);
        redditAvg.push(row['redditAvg']);
        sentiment.push(row['sentiment']);
    }
    // initiate plot creation function
    makePlot(datetime,redditCount,tweet,redditAvg,sentiment);
} 

function makePlot(datetime,redditCount,tweet,redditAvg,sentiment){
    var data = [
    {
        x: sentiment,
        y: redditAvg,
        mode: 'markers',
        type: 'scatter',
        hovertemplate: '<b>Posted: </b> %{text}' + '<br><b>Sentiment: </b> %{x}' + '<br><b>Average Reddit Score: </b> %{y}<extra></extra>',
        text: datetime,
        marker: {
            colorscale: 'Bluered',
            color: sentiment,
            reversescale: true,
        }
    }];

    var layout = {
        hovermode: 'closest',
        title: {
            text: "Trump's Sentiment VS Reddit Score",
            font: {
                family: 'jubilat',
                size: 30,
                color: '#000000'
            }
        },
        yaxis: {
            range: [0,1000],
            title: {
                text: 'Avg Reddit Score',
                font: {
                    color: '#ffffff'
                }
            }
        },
        xaxis: {
            title: {
                text: 'Sentiment',
                font: {
                    color: '#ffffff'
                }
            }
        },
        hoverlabel: {
            font: {
                color: "#ffffff"
            },
            bordercolor: "rgba(255, 255, 255, 0)"
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
    };

    var config = {
        responsive: true,
        scrollZoom: true,
        displayModeBar: false,
    };

    Plotly.newPlot('trumpRedditPlot', data, layout, config);
}

loadData();