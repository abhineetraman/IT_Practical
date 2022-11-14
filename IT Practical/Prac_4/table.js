let table=2;
var intervalid = setInterval(tablescreen,5000);

function tablescreen(){
	let result="";
	let tempresult = 1;
	for ( let i=1;i<=10;i++){
		tempresult=i*table;
		result=result.concat(tempresult.toString());
		result=result.concat(" ");
	}
	if (table>9){
		clearInterval(intervalid);
		document.getElementById(table.toString()).outerHTML=result;
	}
	else{
		hell=table.toString();
		document.getElementById(table.toString()).outerHTML=result;
		table++;
	}
}
