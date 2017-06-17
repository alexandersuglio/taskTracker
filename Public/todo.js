// var Tasker = (function($, w, undefined) {
//     var task = 'inside';

//     var init = function() {
//         console.log(task);
//     };

//     return {
//         init: init,
//     };
// })(jQuery, window);


// Tasker.init();

// var task = 'Outside2';
// console.log(task);

$('.top').keyup(function(event) {

    if (event.keyCode === 13) {

        $('#add').click();

    }
});

$('#add').on("click", function() {
    // event.preventDefault();
    var task = $('#enterTask').val().trim();
    if (task === '') {
        alert("Please enter a Task!");
    } else {

        var newTask = {
            task_description: task,

        };

        // console.log(newTask);

    }

    $.post("/task", newTask)
        .done(function(result) {
            var row = $('<div class="row">');
            row.addClass('col-lg-offset-1 col-lg-10 tasks');
            row.append("<p >" + newTask.task_description + "</p> <button class='btn btn-primary edit ' data-id = '" + result.insertId + "'> Edit </button> <button class='btn btn-success delete' data-id = '" + result.insertId + "'> Mark as Completed </button>");


            $("#taskHere").append(row);


        })

    $('input').val('');

});

$.get("/task/", function(data) {
    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {

            var row = $('<div class="row">');
            row.addClass('col-lg-offset-1 col-lg-10 tasks');
            row.append("<p >" + data[i].task_description + "</p> <button class='btn btn-primary edit' data-id=" + data[i].id + "> Edit </button> <button class='btn btn-success delete' data-id=" + data[i].id + "> Mark as Completed </button>");

            $("#taskHere").append(row);



        }
    }


    $('.delete').on('click', function() {




        $.post('/task/delete/:id', function() {


                var idk = $(this).data('id');
                console.log(idk);
                


            });
    });

    //  $('.edit').on('click', function() {
    // var idk = $(this).data('id');
    //      alert('you clicked edit number ' + idk);
    //      // $.put
    //  });
});
