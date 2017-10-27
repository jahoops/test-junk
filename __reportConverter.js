var colHeaders = "Name,DOD ID,LAN ID,Email Address,Phone Num,Office Symbol,Building,Floor,Pod,Bar Code,WRTY,Model,Category,Category Description,VVIP,OU,Telework";
// paste all <td>, search and replace front to ' and end to ',
var colFields = [
		'FullName',
		'UserDodEmpID',
		'LanID',
		'EmailAddress',
		'PhoneNum',
        'OfficeSymbol',
        'Bldg',
        'Floor',
        'Pod',        
		'bar_code',
		'wrty',
		'model',
		'item_category',
		'category_description',
		'VVIP',
		'OU',
		'UTeleworkHours'
];

var ch = colHeaders.split(',');
if(ch.length !== colFields.length) {
    console.log('not the same length', ch.length, colFields.length);
} else {
    console.log('headers : ["' + ch.join('","') + '"],');
    console.log('fields : ["' + colFields.join('","') + '"],');
    // var result = [];

    // result.push('columns : [');
    // for(var i=0; i<ch.length - 1; i++) {
    //     result.push('{header: "' + ch[i] + '", field: "' + colFields[i] + '"},');
    // }
    // result.push('{header: "' + ch[i] + '", field: "' + colFields[i] + '"}');
    // result.push('],');
    // while(result.length>0) {
    //     console.log(result.shift());       
    // }   
}
