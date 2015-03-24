
// timezone offset
var timezoneOffset = 0; // in s

// basically this small script shows all biojs-date elements
// depending on their scheduled time
var els = document.querySelectorAll('[biojs-date]');

// use GMT time in JS (new Date returns local time)
var currentDate = new Date();
// works too, but not so easy to understand
currentDate = new Date(currentDate.valueOf() + currentDate.getTimezoneOffset() * 60000);
//currentDate = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(),  currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds());

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

var isCheating = getURLParameter("cheating");
var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
if(!is_chrome){
  isCheating = 1;
}
  isCheating = 1;

for(var i = 0, n = els.length; i < els.length; i++){
	var el = els[i];
	var bDate = Date.parse(el.getAttribute('biojs-date')) + (timezoneOffset * 1000);
	var timeDifference = bDate - currentDate.getTime();
  // event is in the past
  var showLink = timeDifference < 0 || isCheating;
  if(showLink){
    el.style.display = "block";
  } else{
    el.textContent = "tba";
    el.style.display = "block";
    el.href = "#";
    el.addEventListener("click", function(){
      alert("Materials will be published during the workshop");
    });
  }
}
