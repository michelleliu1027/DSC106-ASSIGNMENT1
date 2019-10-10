// console.log('hello world from simle_highcharts')
var series = [
    {
        name:"fulltime_men_enrolled",
        data:[1607,
            2031,
            1838,
            1893,
            1695,
            1858,
            1583,
            2328,
            2616,
            2538,
            2711,
            2669,
            2725,
            3220]
        // name: '2018',
        // data: [3220, 3484]
        // "fulltime_men_enrolled": "3,220",
        // "fulltime_women_enrolled": "3,484"
      },
      {
        name:"fulltime_women_enrolled",
        data:[2113,
            2558,
            2303,
            2399,
            2054,
            2089,
            1861,
            2245,
            2612,
            2383,
            2581,
            3077,
            2974,
            3484]
        }

];

//Configuration about the plot
var title = {
    text: "Line Chart of Enrolled Students (2005-2018)"
}

var xAxis = {
    
    categories:['2005', '2006', '2007', '2008', '2009', '2010',
'2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']};

var yAxis = {
    title:{
        text: "number of enrolled people"
    },
    plotLines:[{
        value:0,
        width:1,
        color:'#808080'
    }]
};

var legend = {
    layout:"vertical",
    aligh:'right',
    verticalAlign:'bottom',
    borderWidth: 0
};

//console.log(series)
var json = {};

json.title = title;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.legend = legend;

json.series = series;

var someVar = document.getElementById("chartPlaceHolder")

console.log(series)
Highcharts.chart(someVar, json)
