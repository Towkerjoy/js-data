// Time
function time(){
    var date =new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var format='AM';
    if(hours==0){
        hours=12;
    }
    if(hours>=12){
     hours=hours-12;
     format='PM'
    }
 if(hours<10){
     hours='0'+hours;
 }
 if(minutes<10){
    minutes='0'+minutes;
}
if(seconds<10){
    seconds='0'+seconds;
}
    var fulltime=`${hours}:${minutes}:${seconds}`;
  
    document.querySelector("#time").innerText=fulltime;
    document.querySelector("small").innerText=format; 
}
setInterval(time,1000);



// Date Day
var dateDay = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.querySelector("#dateDay").innerHTML = days[dateDay.getDay()];



// Date Number
var dateNumber = new Date();
if(dateNumber > 10){
    document.querySelector("#dateNumber").innerHTML = "0"+dateNumber.getDate();
}
else{
document.querySelector("#dateNumber").innerHTML= dateNumber.getDate();
}




// Date-Month
var dateMonth = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.querySelector("#dateMonth").innerHTML = months[dateMonth.getMonth()];



// Date-Year
var dateYear = new Date();
document.querySelector("#dateYear").innerHTML = dateYear.getFullYear();
