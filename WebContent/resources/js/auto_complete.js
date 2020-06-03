var words = [];
var xmlhttp;
if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
} else { // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var text = xmlhttp.responseText;
        words = text.split(/\n|\r/g);
    }
}
xmlhttp.open("GET", "resources/search_words.txt", true);
xmlhttp.send();

var completeCallBack;  
var removeScripts = [];  
var prefix = "https://suggestqueries.google.com";  
var head = document.getElementsByTagName("head")[0];  
 completeCallBack = function (data) {  
   var results = [];  
   for(var i = 0;i<10;i++){  
   if (data[1][i]!=undefined)
     results.push(data[1][i]);  
   }  
   $( "#question_box" ).autocomplete({
      source: results	
    });
 }  
 
 function search(query){  
   if (query.length >2)
 {
	for (i = 0; i < words.length; i++) {
	 if(words[i].includes(query)){
	 query=(words[i]);
	 break;
	}
  }
   var queryUrl = "https://suggestqueries.google.com/complete/search?hl=en&client=chrome&q="+encodeURIComponent(query)+"&callback=completeCallBack"  
   var scripts = head.getElementsByTagName("script");  
   for(var i = 0;i<scripts.length;i++){  
     if(scripts[i].type == "text/javascript" && scripts[i].src && checkPrefix(scripts[i].src)) {  
       head.removeChild(scripts[i]);  
     }  
   }  
   var script = document.createElement("script");  
   script.setAttribute("type", "text/javascript");  
   script.src = queryUrl;  
   head.appendChild(script);  
   prefix = queryUrl;  
 }  
 }
 function checkPrefix(url){  
   if(url.indexOf(prefix) ==-1){  
     return false;  
   }else{  
     return true;  
   }  
 }