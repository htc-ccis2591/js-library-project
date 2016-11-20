(function () {

    $(document).ready(function () {

        var inputbox = $("#textbox");

        var button = $('#logValue');


        console.log("Todays date: " + Date.today().add(5).days());



        //$("#textbox").keyup(function () {
        //alert($(this).val());
        //var input = $(this).val()
        //if (input === "t") {
        //var parsedDate = Date.today()
        //console.log("You typed t: todays Date is: " + parsedDate);
        //}

        //if (input === "tomo" || === "tomorrow") {
        //var parsedDate = Date.today().add(1).days();
        // console.log("You typed t: todays Date is: " + parsedDate);
        // }


        //});



        var parseDates = function (input) {

            var parsedDate;
            input = $('#textbox').val();
            if (input === "t") {
                parsedDate = Date.today();
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
            }
            if (input === "tomo" || input === "tomorrow") {
                parsedDate = Date.today().add(1).days();
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');


            }

            if (input.trim() === "today+5" || input.trim() === "tod+5" || input.trim() === "t+5") {
                parsedDate = Date.today().add(5).days();
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');


            }

            if (input.trim() === "tomo+5") {
                parsedDate = Date.today().add(6).days();
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');


            }

            return parsedDate


        }


        button.on("click", function () {

            parseDates();






        });
    })

}());