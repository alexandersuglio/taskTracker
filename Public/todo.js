$('.top').keyup(function(event) {

    if (event.keyCode === 13) {

        $('#add').click();

    }
});

$('#add').on("click", function(event) {
    event.preventDefault();
    var task = $('#enterTask').val().trim();
    if (task === '') {
        alert("Please enter a Task!");
    } else {

        var newTask = {
            task_description: task,
            // CREATED_AT: moment().format("YYYY-MM-DD HH:mm:ss")
        };

        // console.log(newTask);
        // console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
    }

    $.post("/task", newTask)
        .done(function() {
            // var container = $('<div class="container">');

            var row = $('<div class="row">');
            row.addClass('col-lg-offset-1 col-lg-10 tasks');
            row.append("<p >" + newTask.task_description + "</p> <button id='edit' class='btn btn-primary '> Edit </button> <button id='delete' class='btn btn-success'> Mark as Completed </button>");
            // row.append('<p> At' + moment(newTask.CREATED_AT).format("h:mma on dddd") + '</p>');

            $("#taskHere").append(row);


        })

    $('input').val('');

});

$.get("/task/", function(data) {
    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {

            var row = $('<div class="row">');
            row.addClass('col-lg-offset-1 col-lg-10 tasks');
            row.append("<p >" + data[i].task_description + "</p> <button id='edit' class='btn btn-primary '> Edit </button> <button id='delete' class='btn btn-success'> Mark as Completed </button>");
            // row.append('<p> At' + moment(newTask.CREATED_AT).format("h:mma on dddd") + '</p>');

            $("#taskHere").append(row);



        }
    }    
//         $('#delete').on('click', function(this){
// alert('you clicked delete');
//         });
});

