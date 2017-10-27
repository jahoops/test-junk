const reportlist = [
    {
        name : 'UserAssetList',
        title : 'User Asset List User Asset List Report',
        headers : ["Name","DOD ID","LAN ID","Email Address","Phone Num","Office Symbol",
        "Building","Floor","Pod","Bar Code","WRTY","Model","Category","Category Description","VVIP","OU","Telework"],
        fields : ["FullName","UserDodEmpID","LanID","EmailAddress","PhoneNum","OfficeSymbol",
        "Bldg","Floor","Pod","bar_code","wrty","model","item_category","category_description","VVIP","OU","UTeleworkHours"],
        post: 'data/json/jsonSelectReportUserAssets.cfm?deptid=',
        body: {method: "SelectReportUserAssets"},
    }
]

<riot-report>
  <style scoped>
    :scope {
    }
  </style>

    <table id="tblReport" class="display cell-border" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th each={header in headers}>{header}</th>
            </tr>
        </thead>
        <tbody>
            <tr each = {record in records}>
                <td each={field in fields}>{record[field.toLowerCase()]}</td>
            </tr>
        </tbody>
    </table>

    <script>
        this.reporthtml = '...';
        var report = reportlist[0];
        this.headers = report.headers;
        this.fields = report.fields;
        this.records = ['1'];
        var self = this;
        function loaddata() { 
            $.post(report.post  + opts.deptid, 
                report.body,
                function(data) {
                    var jsondata = queryToObject(data);
                    self.records = jsondata;
                    console.log(self.records[0][self.fields[0].toLowerCase()]);
                    $("#tblReport").DataTable({
                        paging: false,
                        order: []
                    });
                }
            )
        }
        loaddata();
  </script>
</riot-report>