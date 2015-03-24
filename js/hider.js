
// timezone offset
var timezoneOffset = 0; // in s

// basically this small script shows all biojs-date elements
// depending on their scheduled time
var els = document.querySelectorAll('[biojs-date]');

// use GMT time in JS (new Date returns local time)
var currentDate = new Date();
currentDate = new Date(currentDate.valueOf() + currentDate.getTimezoneOffset() * 60000);

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

var isCheating = getURLParameter("cheating");

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
    el.addEventListener("click", function(){
      alert("Materials will be published during the workshop");
    });
  }
}
