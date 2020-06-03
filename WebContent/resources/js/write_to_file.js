$(document).ready(function(){
$("#submit").click(function(){
var userquery = $("#question_box").val();
var dataString = 'query='+ userquery;
$.ajax({
type: "POST",
url: "saveQueries.php",
data: dataString,
cache: false,
success: function(result){}
});
return false;
});
});