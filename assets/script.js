$(document).ready(function(){
    var hour = moment().hours

    function getDate(){
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    }
    getDate()
});

setInterval(getDate,1000)

var planner = document.getElementById("planner")

