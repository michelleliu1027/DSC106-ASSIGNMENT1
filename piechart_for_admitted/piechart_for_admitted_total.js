var men_sum = 
[7580,
    9210,
    8419,
    8517,
    7816,
    8365,
    8707,
    10917,
    11866,
    11758,
    12748,
    14103,
    13981,
    13781].reduce((a,b) => a + b, 0)

var women_sum = [10311,
    12135,
    10759,
    11200,
    9863,
    9991,
    10269,
    12046,
    12966,
    12837,
    13761,
    16170,
    16231,
    15821].reduce((c,d) => c + d, 0)

var series = [
    {
        name:"tot_number_of_admitted",
        data:[['men_sum',men_sum],
            ['women_sum',women_sum]]
    }
    ]


var chart = {
    type: 'pie'
}
      
var title = {
    text: "Pie Chart of Total Admitted Students (2005-2018)"
}



var tooltip = {

    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'

}

var plotOptions = {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
    }
}

    

var legend = {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  };
  

var json = {};
    
json.title = title;
json.chart = chart;
json.legend = legend;
json.series = series;
json.plotOptions = plotOptions;

var someVar = document.getElementById("piechartPlaceHolder")
console.log(series)
Highcharts.chart(someVar,json)