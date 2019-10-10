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

      }]

var chart = {
    type: 'column'
}
      
var title = {
    text: "Bar Chart for Enrolled Data (2005 - 2018)"
}
    
var xAxis = {
        
        categories:['2005', '2006', '2007', '2008', '2009', '2010',
    '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']};

  
    
var yAxis = {
        title:{
            text: "number of enrolled people"
        },
        stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
          }
        }
      };


    

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
  
    

var plotOptions = {
    column:{
        stacking:'normal',
        dataLabels: {
        enabled: true
        }
    }
    };
    
    //console.log(series)
var json = {};
    
json.title = title;
json.chart = chart;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.legend = legend;
json.series = series;
json.plotOptions = plotOptions;

var someVar = document.getElementById("barchartPlaceHolder")
console.log(series)
Highcharts.chart(someVar,json)
