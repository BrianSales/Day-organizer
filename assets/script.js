    // Saving to local storage
    // Save it 
let events = JSON.parse(localStorage.getItem('events'));
$(document).ready(function () {
    var hour = moment().hours
    // Getting from local storage, when page loads it first checks to see
    //  if anything is saved on local drive.
    if (events == null) {
        events = [];
    }
    console.log(events);
    //for loop that looks at the saved event and recalls it to the page
    //when it is refrshed. 
    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        console.log('Event: ', event)
        const input = $(`.time-block[data-time="${event.time}"] .input`);
        input.val(event.event);
    }

});
//Function allowing for date to be visible on the page. 
function getDate() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

}
getDate()
setInterval(getDate, 1000)


//function allowing for the assinged event to be saved on click 
// I also need to grap the input's value
// I do that by using a jquery event so that when someone click's the save button
// I'm asking the computer to find the text that is a sibiling to the save button 
$('.save').on('click', function () {
    
    const event = $(this).siblings('.event-input').children('.input').val();
    const time = $(this).parent().data('time');
    console.log(time);
    console.log(event);
    const eventObj = {
        time: time,
        event: event
    }

    //function that returns the event and time
    const index = events.findIndex(function (event) {
        return event.time == time;
    })

    //function that allows you to update your calendar if you want to remove 
    // an already saved event or add more to it

    if (index > -1) {
        events.splice(index, 1, eventObj);
    } else {
        events.push(eventObj);
    }
   
    // Does it already exist??
    console.log('it already exists at position ', index);

     
    //this saves it to the local drive
    localStorage.setItem('events', JSON.stringify(events))

})

var planner = document.getElementById("planner")

