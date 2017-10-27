<link type="text/css" rel="stylesheet" href="assets/css/jquery.gridster.min.css">
<link type="text/css" rel="stylesheet" href="assets/js/jq-ui/jquery-ui.min.css?#TimeFormat(Now(),"hhmmss")#" />
<link type="text/css" rel="stylesheet" href="assets/js/DataTables/media/css/dataTables.jqueryui.css">
<script src="assets/js/jquery.min.js" type="text/javascript"></script>
<script src="assets/js/jquery-ui.min.js" type="text/javascript"></script>
<script src="assets/js/DataTables/media/js/jquery.dataTables.js"></script>
<script src="assets/js/DataTables/media/js/dataTables.jqueryui.js"></script>
<script src="assets/js/jquery.print.js"></script>
<script src="assets/js/url-search-params.js"></script>
<style type="text/css">
	#divTitle {
		float: left;
		font-size: 18px;
		font-weight: bold;
		padding-left: 5px;
	}			
	#divParams {
		font-size: 14px;
	}
	#divParams .divParm {
		float: left;
		padding: 5px;
	}
	#divParams .divParm span {
		font-weight: bold;
	}
	#divParams button {
		float: right;
		font-size: .9em;
		margin-bottom: 5px;
	}
	#divReportData #tblReport {
		font-size: 11px;
	}
	#divReportData #tblReport tr.group {
		background: #eee;
		color: maroon;
		font-weight: bold;
	}
	.clearfix {
		clear: both;
	}
	#hasReportButton {
		display: none;
	}
	#hasChartButton {
		display: none;
	}
	#hasPrintButton {
		display: none;
	}			
	div.wrapper.gridster ul {
		width: 680px;
		height: 850px;
		position: relative;
	}
	.gs-resize-handle-both {
		bottom: -26px;
		right: -10px;
	}
	.trashcan {
		font-size: 14px;
		top: 17px;
		right: 2px;
		color: #999;
		opacity: 0;
		cursor: pointer;
	}
	.cr-drag {
		width:200px;
		height:200px;
		background-color:yellow;
		z-index: 10;
	}
</style>

<div class="wrapper gridster">
  <ul>
  </ul>
</div>

<div id="gridtiles" style="width: 800px; height: 800px"></div>

<script src="/hd/assets/js/gridster/gridtiles.js" type="text/javascript"></script>
<script src="assets/js/riot-compiler.min.js"></script>
<script src="assets/js/jquery.gridster.min.js" type="text/javascript"></script>
<script src="assets/js/riot-ss.min.js"></script>
<script type="riot/tag" src="assets/js/riot/riot-alert.js"></script>
<script type="riot/tag" src="assets/js/riot/riot-report.js"></script>
<script type="text/javascript"> 

// *all components referenced must be mounted here
//riot.mount('riot-alert');
//riot.mount('riot-report',{deptid: '1'});

//var gridster;

$(function () {

	var gridtiles = new gridtiles('gridtiles');
	gridtiles.test();

    //gridster = $('.gridster ul').gridster({
    //    widget_margins: [5, 5],
    //    widget_base_dimensions: [100, 55]
    //}).data('gridster');

    //var widgets = [['<riot-report deptid="1" ></riot-report>', 1, 2]];

    //$.each(widgets, function (i, widget) {
    //    gridster.add_widget.apply(gridster, widget);
    //});

});

</script> 