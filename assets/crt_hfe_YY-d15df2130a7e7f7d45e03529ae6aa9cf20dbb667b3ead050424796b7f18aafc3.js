!function(){function e(){var e=new google.visualization.ChartWrapper({chartType:"ComboChart",containerId:"crt_hfe_YY",dataSourceUrl:"https://docs.google.com/spreadsheets/d/1KgOIBF93axvXD6ENQYvEsWHqnA8eW_RvGV4EQlGava4/edit?usp=sharing&sheet=HFE_YY&range=A1:C11",options:{width:500,height:300,chartArea:{left:85,top:60,width:"55%"},title:"Horizontal En-route Flight Efficiency (yearly)",titleTextStyle:{color:"grey",fontSize:11},legend:{position:"right",textStyle:{color:"grey",fontSize:10}},series:{0:{type:"lines",color:"#5D7CBA",lineWidth:1,pointSize:6},1:{type:"lines",color:"#C0504D",lineWidth:1,pointShape:"diamond",pointSize:8}},vAxis:{title:"Inefficiency (%)",titleTextStyle:{color:"grey",fontSize:10},minValue:0,maxValue:.06,viewWindow:{min:.02,max:.05},format:"0.0%"},hAxis:{title:"Source: PRU Analysis",titleTextStyle:{color:"grey",fontSize:10}}},view:{columns:[0,1,2]}});e.draw()}google.setOnLoadCallback(e)}();