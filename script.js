(function () {

    $(document).ready(function () {

        var inputbox = $("#textbox");

        var button = $('#logValue');


        console.log("Todays date + 5: " + Date.today().add(5).days());

        var test = Date.parseExact("10/15/2004", "M/d/yyyy");
        console.log("Test " + test);

        var numberorletter = function (input) {

            var checkforLeapYear;


            input = $('#textbox').val();
            var firstLetter = input.charAt(0);
            console.log(firstLetter);

            if (firstLetter === "0" || firstLetter === "1" || firstLetter === "2" || firstLetter === "3" ||
                firstLetter === "4" || firstLetter === "5" || firstLetter === "6" || firstLetter === "7" ||
                firstLetter === "8" || firstLetter === "9") {

                if (input.length === 9) {
                    checkforLeapYear = input.substring(6);
                } else {
                    checkforLeapYear = input.substring(6);
                }

                //var results = Date.parseExact(input, "M/d/yyyy");
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + Date.parse(input));
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(checkforLeapYear));
                $('#results').append('<br>');
                $('#results').append('<br>');

            } else {

                parseDates();

            }




        }



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
            var leapYear = false;
            input = $('#textbox').val();

            if (input.trim() === "m" || input.trim() === "mon" || input.trim() === "monday") {

                parsedDate = Date.parse(input);

                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');



            }

            if (input.trim() === "tue" || input.trim() === "tues" || input.trim() === "tuesday") {

                parsedDate = Date.parse(input);

                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');



            }

            if (input.trim() === "wed" || input.trim() === "wednesday") {

                parsedDate = Date.parse(input);

                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');



            }

            if (input.trim() === "th" || input.trim() === "thurs" || input.trim() === "thursday") {

                parsedDate = Date.parse(input);

                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');



            }

            if (input.trim() === "fr" || input.trim() === "fri" || input.trim() === "friday") {

                parsedDate = Date.parse(input);

                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');



            }

            if (input.trim() === "t" || input.trim() === "today") {
                parsedDate = Date.today();

                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');


            }
            if (input.trim() === "tomo" || input === "tomorrow") {
                parsedDate = Date.today().add(1).days();
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');






            }
            if (input.trim() === "today+5" || input.trim() === "tod+5" || input.trim() === "t+5" || input.trim() === "t+5d") {
                parsedDate = Date.today().add(5).days();
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');
            }

            if (input.trim() === "today-5" || input.trim() === "tod-5" || input.trim() === "t-5" || input.trim() === "t-5d") {
                parsedDate = Date.today().add(-5).days();
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');
            }
            if (input.trim() === "today+5y" || input.trim() === "tod+5yrs" || input.trim() === "t+5years") {
                parsedDate = Date.today().add(5).years();
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');
            }

            if (input.trim() === "today-5y" || input.trim() === "tod-5yrs" || input.trim() === "t-5years") {
                parsedDate = Date.today().add(-5).years();
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');
            }
            if (input.trim() === "tomo+5y" || input.trim() === "tomo+5yrs" || input.trim() === "tomo+5years") {
                parsedDate = Date.today().add(1).days().add(5).years();
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');
            }

            if (input.trim() === "tomo-5y" || input.trim() === "tomo-5yrs" || input.trim() === "tomo-5years") {
                parsedDate = Date.today().add(1).days().add(-5).years();
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');
            }
            if (input.trim() === "tomo+5") {
                parsedDate = Date.today().add(6).days();
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');
            }

            if (input.trim() === "tomo-5") {
                parsedDate = Date.today().add(-4).days();
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');
            }








            return parsedDate;

        }




        button.on("click", function () {

            numberorletter();

            //parseDates();









        });
    })

}());