let events = JSON.parse(localStorage.getItem('events'));
$(document).ready(function () {
    var hour = moment().hours
    // Getting from local storage...
    if (events == null) {
        events = [];
    }
    console.log(events);

    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        console.log('Event: ', event)
        const input = $(`.time-block[data-time="${event.time}"] .input`);
        input.val(event.event);
    }

});

function getDate() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

}
getDate()
setInterval(getDate, 1000)

$('.save').on('click', function () {
    // We want to grab the input's value 
    const event = $(this).siblings('.event-input').children('.input').val();
    const time = $(this).parent().data('time');
    console.log(time);
    console.log(event);
    const eventObj = {
        time: time,
        event: event
    }
    const index = events.findIndex(function (event) {
        return event.time == time;
    })
    // if it exists, remove it
    if (index > -1) {
        events.splice(index, 1, eventObj);
    } else {
        events.push(eventObj);
    }
    // Saving to local storage
    // Save it 
    // Does it already exist??
    console.log('it already exists at position ', index);

    localStorage.setItem('events', JSON.stringify(events))

})

var planner = document.getElementById("planner")

