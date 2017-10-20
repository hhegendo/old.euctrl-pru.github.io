!function(){"use strict";function _(_){var A=["YEAR","MONTH_NUM","MONTH_MON","FLT_DATE","APT_ICAO","APT_NAME","STATE_NAME","FLT_ARR_1","DLY_APT_1","FLT_ARR_1_DLY","FLT_ARR_1_DLY_15","DLY_APT_ARR_A_1","DLY_APT_ARR_C_1","DLY_APT_ARR_D_1","DLY_APT_ARR_E_1","DLY_APT_ARR_G_1","DLY_APT_ARR_I_1","DLY_APT_ARR_M_1","DLY_APT_ARR_N_1","DLY_APT_ARR_O_1","DLY_APT_ARR_P_1","DLY_APT_ARR_R_1","DLY_APT_ARR_S_1","DLY_APT_ARR_T_1","DLY_APT_ARR_V_1","DLY_APT_ARR_W_1","DLY_APT_ARR_NA_1"];json2csv({data:_,fields:A},function(_,A){_&&(L.classed(),L.log(_));var R=new Blob([A],{type:"text/csv"});saveAs(R,"arrival_atfcm_delay.csv")})}function A(_){var A=d3.time.format("%Y-%m-%dT%H:%M:%SZ");return _.forEach(function(_){_.YEAR=+_.YEAR,_.MONTH_NUM=+_.MONTH_NUM,_.date=A.parse(_.FLT_DATE),_.APT_NAME=_.APT_NAME?_.APT_NAME.trim():"ZZZ",_.APT_NAME=_.APT_NAME.length?_.APT_NAME:"ZZZ",_.APT_ICAO=_.APT_ICAO||"ZZZZ",_.STATE_NAME=_.STATE_NAME?_.STATE_NAME.trim():"",_.STATE_NAME=_.STATE_NAME.length?_.STATE_NAME:"ZZZ",_.FLT_ARR_1=_.FLT_ARR_1?+_.FLT_ARR_1:0,_.DLY_APT_1=_.DLY_APT_1?+_.DLY_APT_1:0,_.DLY_APT_ARR_A_1="NA"==_.DLY_APT_ARR_A_1?"":_.DLY_APT_ARR_A_1?+_.DLY_APT_ARR_A_1:0,_.DLY_APT_ARR_C_1="NA"==_.DLY_APT_ARR_C_1?"":_.DLY_APT_ARR_C_1?+_.DLY_APT_ARR_C_1:0,_.DLY_APT_ARR_D_1="NA"==_.DLY_APT_ARR_D_1?"":_.DLY_APT_ARR_D_1?+_.DLY_APT_ARR_D_1:0,_.DLY_APT_ARR_E_1="NA"==_.DLY_APT_ARR_E_1?"":_.DLY_APT_ARR_E_1?+_.DLY_APT_ARR_E_1:0,_.DLY_APT_ARR_G_1="NA"==_.DLY_APT_ARR_G_1?"":_.DLY_APT_ARR_G_1?+_.DLY_APT_ARR_G_1:0,_.DLY_APT_ARR_I_1="NA"==_.DLY_APT_ARR_I_1?"":_.DLY_APT_ARR_I_1?+_.DLY_APT_ARR_I_1:0,_.DLY_APT_ARR_M_1="NA"==_.DLY_APT_ARR_M_1?"":_.DLY_APT_ARR_M_1?+_.DLY_APT_ARR_M_1:0,_.DLY_APT_ARR_N_1="NA"==_.DLY_APT_ARR_N_1?"":_.DLY_APT_ARR_N_1?+_.DLY_APT_ARR_N_1:0,_.DLY_APT_ARR_O_1="NA"==_.DLY_APT_ARR_O_1?"":_.DLY_APT_ARR_O_1?+_.DLY_APT_ARR_O_1:0,_.DLY_APT_ARR_P_1="NA"==_.DLY_APT_ARR_P_1?"":_.DLY_APT_ARR_P_1?+_.DLY_APT_ARR_P_1:0,_.DLY_APT_ARR_R_1="NA"==_.DLY_APT_ARR_R_1?"":_.DLY_APT_ARR_R_1?+_.DLY_APT_ARR_R_1:0,_.DLY_APT_ARR_S_1="NA"==_.DLY_APT_ARR_S_1?"":_.DLY_APT_ARR_S_1?+_.DLY_APT_ARR_S_1:0,_.DLY_APT_ARR_T_1="NA"==_.DLY_APT_ARR_T_1?"":_.DLY_APT_ARR_T_1?+_.DLY_APT_ARR_T_1:0,_.DLY_APT_ARR_V_1="NA"==_.DLY_APT_ARR_V_1?"":_.DLY_APT_ARR_V_1?+_.DLY_APT_ARR_V_1:0,_.DLY_APT_ARR_W_1="NA"==_.DLY_APT_ARR_W_1?"":_.DLY_APT_ARR_W_1?+_.DLY_APT_ARR_W_1:0,_.DLY_APT_ARR_NA_1="NA"==_.DLY_APT_ARR_NA_1?"":_.DLY_APT_ARR_NA_1?+_.DLY_APT_ARR_NA_1:0,_.FLT_ARR_1_DLY="NA"==_.FLT_ARR_1_DLY?"":_.FLT_ARR_1_DLY?+_.FLT_ARR_1_DLY:0,_.FLT_ARR_1_DLY_15="NA"==_.FLT_ARR_1_DLY_15?"":_.FLT_ARR_1_DLY_15?+_.FLT_ARR_1_DLY_15:0}),_}function R(A){var R,T=crossfilter(A),Y=T.groupAll(),P=T.dimension(function(_){return _.date}),t=T.dimension(function(_){return _.YEAR}),e=t.group(Math.floor),n=T.dimension(function(_){return _.STATE_NAME}),r=n.group(),o=T.dimension(function(_){return _.APT_ICAO}),a=o.group(),l=d3.format("02d");buildFilter("#arr-year","All Years",t,e),buildFilter("#arr-country","All Countries",n,r),buildFilter("#arr-apt","All Airports",o,a),D.stop(),L.classed("hidden",!0),R=dc.dataTable("#arr-data-table").dimension(P).group(function(_){return _.date.getFullYear()+"/"+l(_.date.getMonth()+1)}).size(12).columns([{label:"YYYY/MM",format:function(_){return _.date.getFullYear()+"/"+l(_.date.getMonth()+1)}},{label:"Country",format:function(_){return _.STATE_NAME}},"FLT_DATE","APT_ICAO","APT_NAME","FLT_ARR_1","FLT_ARR_1_DLY","FLT_ARR_1_DLY_15","DLY_APT_1","DLY_APT_ARR_A_1","DLY_APT_ARR_C_1","DLY_APT_ARR_D_1","DLY_APT_ARR_E_1","DLY_APT_ARR_G_1","DLY_APT_ARR_I_1","DLY_APT_ARR_M_1","DLY_APT_ARR_N_1","DLY_APT_ARR_O_1","DLY_APT_ARR_P_1","DLY_APT_ARR_R_1","DLY_APT_ARR_S_1","DLY_APT_ARR_T_1","DLY_APT_ARR_V_1","DLY_APT_ARR_W_1","DLY_APT_ARR_NA_1"]).sortBy(function(_){return _.date}).order(d3.ascending),dc.dataCount(".dc-data-count").dimension(T).group(Y).html({some:"<strong>%filter-count</strong> selected out of <strong>%total-count</strong> records (only a max of <em>"+R.size()+"</em> shown below.)",all:"All <strong>%total-count</strong> records selected (only a max of <em>"+R.size()+"</em> shown below.)"}),dc.renderAll(),$(document).ready(function(){$("#arr-download").click(function(){_(t.top(Infinity))})})}function T(_,T){_?(L.text("Error:"+_),D.stop()):(L.classed("hidden",!0),R(A(T)))}var L=d3.select("#errorfield"),Y=document.getElementById("arr-data-table"),D=(new Spinner).spin(Y);d3.queue().defer(d3.csv,"apt_dly.json").await(T)}();