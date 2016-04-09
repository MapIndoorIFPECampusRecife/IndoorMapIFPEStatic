/**
 * 
 */
//@param elm The {embed,object,iframe} element that points to a compatible svg (map) graphic

function init(elm) {
	  var mapsvgdoc = null;
	  
	  alert(elm);
	    try {
	      mapsvgdoc = elm.contentDocument;
	      alert("test");
	     
	    }
	    catch(e) {
	      mapsvgdoc = elm.getSVGDocument().documentElement;
	     
	    }
	    alert(mapsvgdoc);
	    mapsvgdoc.documentElement.addEventListener("mousedown", countryMouseup, false); 
		 mapsvgdoc.documentElement.addEventListener("mouseup", countryMouseup, false);
		 mapsvgdoc.documentElement.addEventListener("mousemove", countryMouseup, false);
};

function loadMapInfo(elm){
	
	  	init(elm);
	 
};

function countryMouseup() {
	alert(this);
};