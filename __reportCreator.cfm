<cfset Reports = CreateObject("component","hd.cfc.Reports")>

<cfset SelectReport = Reports.SelectReportCats(1, '1/1/2017', '1/2/2017', "", "")>
<cfquery name="ReportCats" dbtype="query" maxrows="20">
	SELECT ProbClassCategory
		  ,SUM(CountTicketsClosed) AS CountTicketsClosed
		  ,SUM(CountTicketsOpened) AS CountTicketsOpened
		  ,SUM(CountTicketsOpenNow) AS CountTicketsOpenNow
	  FROM SelectReportCats
	 GROUP BY ProbClassCategory
	 ORDER BY 2 DESC
</cfquery>

<cfset variables.colHeaders = "Category Group,Count Tickets Closed,Count Tickets Opened,Count Tickets Open Now">

<cfoutput>
<table id="tblReport" class="display cell-border" cellspacing="0" width="100%">
<thead>
	<tr>
	<cfloop index="colHeader" list="#variables.colHeaders#">
		<th>#colHeader#</th>
	</cfloop>
	</tr>
</thead>
</cfoutput>
<tbody>
	<cfoutput query="ReportCats">
	<tr>
		<td>#ProbClassCategory#</td>
		<td>#CountTicketsClosed#</td>
		<td>#CountTicketsOpened#</td>
		<td>#CountTicketsOpenNow#</td>
	</tr>
	</cfoutput>
</tbody>

<cfif isDefined("URL.export")>
	<cfset Reports.ExportReport("CategoriesChart", variables.colHeaders, ReportCats)>
</cfif>

</table>

<script type="text/javascript">
	$(function() {
		$('#hasChartButton').attr('chartname', '_CategoriesChart');
		$('#hasChartButton').button().show();
		$("#hasPrintButton").button().show();		
		if ($.fn.DataTable.isDataTable( "#tblReport") ) {
			$('body').find('div.fg-toolbar').show();
  			return;
		}

		$("#tblReport").DataTable({
			"paging": false,
			"order": []
		});
	});
</script>