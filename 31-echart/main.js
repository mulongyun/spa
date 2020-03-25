$(function(){
   // 基于准备好的dom，初始化echarts实例
   var myChart = echarts.init(document.getElementById('main'));

   var xData=[],
       yData=[];
       for(var p=0;p<=1;p+=0.01){//不够光滑是因为数据点不够
           xData.push(p);
           if(p===0 || p===1){
                yData.push(0);
           }else{
                yData.push(-1*p*Math.log2(p)-(1-p)*Math.log2(1-p));
           }
       }
//    H(p) = -p*log(p)-(1-p)log(1-p)
   // 指定图表的配置项和数据
   var option = {
       title: {
           text: '二进熵函数'
       },
       tooltip: {},
       legend: {
           data:['信息量']
       },
       xAxis: {
           data: xData
       },
       yAxis: {},
       series: [{
           name: '信息量',
           type: 'line',
           smooth:true,
           data: yData
       }]
   };

   // 使用刚指定的配置项和数据显示图表。
   myChart.setOption(option);
});