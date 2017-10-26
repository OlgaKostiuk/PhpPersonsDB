class Factory {
	static getReader(format, responce) {
		var reader = null;
		switch(format)
		{
			case 'json':
				reader = new JsonReader(responce);			
				break;
			case 'xml':
				reader = new XmlReader(responce);			
				break;
			case 'html':
				reader = new HtmlReader(responce);			
				break;
		}
		return reader;
	}
}



function create() {
	var fn = document.getElementById('fn');
	var ln = document.getElementById('ln');
	var age = document.getElementById('age');

	var dbSelector = document.getElementById("db");
	var db = dbSelector.options[dbSelector.selectedIndex].value;

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "db.php?method=create&fn="+fn.value+"&ln="+ln.value+"&age="+age.value+"&db="+db, false);
	xmlhttp.send();
}

function read() {
	var formatSelector = document.getElementById("format");
	var format = formatSelector.options[formatSelector.selectedIndex].value;

	var dbSelector = document.getElementById("db");
	var db = dbSelector.options[dbSelector.selectedIndex].value;

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "db.php?method=read&format=" + format + "&db=" + db, false);
	xmlhttp.send();
	console.log(xmlhttp.responseText);
	var reader = Factory.getReader(format, xmlhttp.responseText);	
	console.log(reader);
	var table = document.getElementById('tbody');
	table.innerHTML = reader.responce;
}

function update() {
	var id = document.getElementById('id');
	var fn = document.getElementById('fn');
	var ln = document.getElementById('ln');
	var age = document.getElementById('age');

	var dbSelector = document.getElementById("db");
	var db = dbSelector.options[dbSelector.selectedIndex].value;

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "db.php?method=update&id="+id.value+"&fn="+fn.value+"&ln="+ln.value+"&age="+age.value+"&db="+db, false);
	xmlhttp.send();

	console.log(xmlhttp.responseText);
}

function del() {
	var dbSelector = document.getElementById("db");
	var db = dbSelector.options[dbSelector.selectedIndex].value;

	var id = document.getElementById('id');
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "db.php?method=delete&id="+id.value+"&db="+db, false);
	xmlhttp.send();

	console.log(xmlhttp.responseText);
}