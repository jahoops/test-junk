<cfset variables.reportTitle = "">
<cfif isDefined("URL.ttl")><cfset variables.reportTitle = URL.ttl></cfif>
<cfset Reports = CreateObject("component","hd.cfc.Reports")>

<link type="text/css" rel="stylesheet" href="../assets/js/DataTables/media/css/dataTables.jqueryui.css">
<script src="../assets/js/DataTables/media/js/jquery.dataTables.js"></script>
<script src="../assets/js/DataTables/media/js/dataTables.jqueryui.js"></script>
<script src="../assets/js/jquery.print.js"></script>
<script src="../assets/js/url-search-params.js"></script>
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
</style>
<cfoutput>
    <div id="divTitle">UNCLASSIFIED - <cfif isDefined("url.deptid")>#Reports.GetDeptName(url.deptid)# - </cfif>#variables.reportTitle#</div>
    <br /><br />
    <div id="divParams">
        <cfif isDefined("url.startdate")><div class="divParm rcStartDate"><span>Start Date: </span>#url.startdate#</div></cfif>
        <cfif isDefined("url.enddate")><div class="divParm rcEndDate"><span>End Date: </span>#url.enddate#</div></cfif>
        <cfif isDefined("url.teamid")><div class="divParm rcTeamName"><span>Team: </span>#Reports.GetTeamName(url.teamid)#</div></cfif>
        <cfif isDefined("url.techid")><div class="divParm rcTechName"><span>Tech: </span>#Reports.GetTechName(url.techid)#</div></cfif>
        <button id="btnExport" class="rptButton no-print">Export</button>
        <button id="hasReportButton" class="rptButton no-print">Report</button>
        <button id="hasChartButton" class="rptButton no-print">Chart</button>
        <button id="hasPrintButton" class="rptButton no-print">Print</button>
        <div class="clearFix"></div>
    </div>
</cfoutput>
		<div id="divReportData">
			<cfinclude template="../reports/#URL.rn#.cfm">
		</div>
		<script type="text/javascript">
			$(function() {
				$('.rptButton').button();
				var params = new URLSearchParams(location.search);
				$("#btnExport").button().click(function() {
					window.location.href = "ReportContainer.cfm?<cfoutput>#CGI.QUERY_STRING#</cfoutput>&export";
				});
				$("#hasReportButton").click(function() {
					var report = $(this).attr('reportname');
					params.set('rn', report);
					window.location.href = 'ReportContainer.cfm?' + params.toString();
				});
				$("#hasChartButton").click(function() {
					var chart = $(this).attr('chartname');
					params.set('rn', chart);
					window.location.href = 'ReportContainer.cfm?' + params.toString();
				});
				$("#hasPrintButton").click(function() {
					if($('body').find('#myChart')) {
						if (typeof replaceCanvasWithPNG !== 'undefined' && $.isFunction(replaceCanvasWithPNG)) {
							replaceCanvasWithPNG();
						}
					}
					$('body').find('div.fg-toolbar').hide();
					$('body').print({ globalStyles: true, noPrintSelector: ".no-print" });
				});
			});
		</script>
	</body>
</html>
