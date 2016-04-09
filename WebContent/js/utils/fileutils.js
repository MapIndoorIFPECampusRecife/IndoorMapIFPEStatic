/*var xmlFile; 


$.ajax({
    type: "GET",
    url: "C:/Users/Richardson/workspace/IndoorMapIFPEStatic/WebContent/grafo.xml",
    dataType: "xml",
    success: function(xml){
    //	console.log(jQuery.isXMLDoc(xml));
    //	 xmlFile = $.parseXML(xml)   	
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }
  });
*/
function abrirDoc(strFile) {
	
	/*var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
	       // Action to be performed when the document is read;
	    }
	xhttp.open("GET", "grafo.xml", true);
	xhttp.send();
	}*/
	
	
	var xhttp = new XMLHttpRequest();
	//xmlDoc.async = false;
	//xmlDoc.load(strFile);
	xhttp.open("GET", strFile, true);
	//return xmlDoc;
	//xhttp.send();
	var text =  xhttp.responseXML;
	parser = new DOMParser();
	var xmlDoc = parser.parseFromString(text,"text/xml");
	return xmlDoc;

}



function addVertice(id, x, y) {
	var docXML = abrirDoc("grafo.xml");
	var vertice = docXML.createElement("vertice");
	vertice.setAttribute("id", id);
	vertice.setAttribute("x", x);
	vertice.setAttribute("y", y);
	docXML.documentElement.appendChild(vertice);
	//docXML.save("grafo.xml");
	SalvaXML("grafo.xml", docXML);

	
	
	//SalvaXML("grafo.xml", docXML);
	return true;
	
	/*
	if (docXML.parseError.errorCode != 0) {
		document.write("Erro: ");
		document.write(docXML.parseError);
		if (docXML.parseError == -2146697210) {
			document.write("Criar arquivo");
		}
		return false;
	} else {
		vertice = docXML.createElement("vertice");
		vertice.setAttribute("id", id);
		vertice.setAttribute("x", x);
		vertice.setAttribute("y", y);
		docXML.documentElement.appendChild(vertice);
		SalvaXML("grafo.xml", docXML);
		return true;
	}*/
	
}

function addAresta(id, x, y) {
	var docXML = abrirDoc("grafo.xml");
	if (docXML.parseError.errorCode != 0) {
		document.write("Erro: ");
		document.write(docXML.parseError);
		if (docXML.parseError == -2146697210) {
			document.write("Criar arquivo");
		}
		return false;
	} else {
		vertice = docXML.createElement("aresta");
		vertice.setAttribute("id", id);
		vertice.setAttribute("x", x);
		vertice.setAttribute("y", y);
		docXML.documentElement.appendChild(vertice);
		//SalvaXML("grafo.xml", docXML);
		return true;
	}
}



function SalvaXML(caminho, docXML) {
		
	var xml_path_url='/maps/upload/'+ caminho;
	jQuery.ajax({
		url: xml_path_url,
		type: 'PUT',
		dataType: 'text',
		data: docXML,
		success: function(response) {
				alert(response);
			},
		error: function(xhr, status, error) {
			alert(xhr.responseText);
		}
	});
	
	
//	/var docXML
	
	
	/*try {
		var fso = new ActiveXObject("Scripting.FileSystemObject");
		var file = fso.createTextFile(dir + caminho, true);
		file.writeLine(docXML.xml);
		file.close();
	} catch (ex) {
		alert(ex.message);
	}*/
	
}

function FileLoad() {
	getURL(filename, abrirDoc);
	function abrirDoc(data) {
		var string = '';
		if (data.success) {
			string = data.content;
			var document = parseXML(string, document);
			file = document.childNodes.item(0);
			return file;
		} else {
			return;
		}
	}
}

function Load_Grafo(evt){
	xml = abrirDoc(data);
	x = xml.getElementsByTagName("vertice");
	svgdoc=evt.getTarget().getOwnerDocument();
	for(var i=0; i < x.length; i++){
	var vertice_x = x.item(i).getAttribute("x");
	var vertice_y = x.item(i).getAttribute("y");
	var vertice_id = x.item(i).getAttribute("id");
	node=svgdoc.createElement("ellipse");
	node.setAttribute("id",vertice_id);
	node.setAttribute("cx",vertice_x);
	node.setAttribute("cy",vertice_y);
	node.setAttribute("rx","6");
	node.setAttribute("ry","6");
	node.setAttribute("style","fill:black");
	node.addEventListener("click",getSource, false) ;
	out=svgdoc.getElementById("mapa");
	out.appendChild(node);
	//cont_Vertice++;
	}
}



