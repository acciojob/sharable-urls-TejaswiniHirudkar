// your code here
function updateurl(){
	let heading=document.getElementById('url');
	let name=document.getElementById('name').value;
	let year=document.getElementById('year').value;
	var url='';

	if(name!=='' && year===''){
		url="https://localhost:8080/"+"?name="+name;
	}
	else if(name!=='' && year!==''){
		url="https://localhost:8080/"+"?name="+name+"&year="+year;
	}
	else if(year!=='' && name===''){
		url="https://localhost:8080/"+"?year="+year;
	}
	else if(name==='' && year===''){
		url="https://localhost:8080/";
	}
	heading.textContent=url;
}

