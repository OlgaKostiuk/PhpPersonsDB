class Reader {
	constructor(serverResponce) {
		this.serverResponce = serverResponce;
	}

	get responce() {
		return this.getResponce();
	}
}

class JsonReader extends Reader{
	constructor(serverResponce) {
		super(serverResponce);
	}

	getResponce() {
		var table = document.createElement('tbody');
		var persons = JSON.parse(this.serverResponce);
		persons.forEach(function(person) {
			// Insert a row in the table at the last row
			var newRow   = table.insertRow(table.rows.length);

			// Insert a cell in the row at index 0
			var id  = newRow.insertCell(0);
			var fn  = newRow.insertCell(1);
			var ln  = newRow.insertCell(2);
			var age  = newRow.insertCell(3);

			id.appendChild(document.createTextNode(person['id']));
			fn.appendChild(document.createTextNode(person['fn']));
			ln.appendChild(document.createTextNode(person['ln']));
			age.appendChild(document.createTextNode(person['age']));
		});
		return table.innerHTML;
	}
}

class XmlReader extends Reader{
	constructor(serverResponce) {		
		super(serverResponce);
	}

	getResponce() {
		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(this.serverResponce,"text/xml");
		var table = document.createElement('tbody');
		var x = xmlDoc.getElementsByTagName("persons")[0];
		for (var i = 0; i <x.childElementCount; i++) {
			var newRow   = table.insertRow(table.rows.length);
			for (var j = 0; j <x.childNodes[i].childElementCount; j++) {
				var cell  = newRow.insertCell(j);
				var text = x.childNodes[i].childNodes[j].innerHTML;
				cell.appendChild(document.createTextNode(text));
			}
		}
		return table.innerHTML;
	}
}


class HtmlReader extends Reader{
	constructor(serverResponce) {		
		super(serverResponce);
	}

	getResponce() {
		return this.serverResponce;
	}
}