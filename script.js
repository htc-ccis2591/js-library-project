(function () {

    $(document).ready(function () {

        var inputbox = $("#textbox");

        var button = $('#logValue');




        //console.log("Todays date + 5: " + Date.today().add(5).days());

        //var test = Date.parseExact("10/15/2004", "M/d/yyyy");
        //console.log("Test " + test);

        var numberorletter = function (input) {


            var createDate;
            var month;
            var monthdigit1;
            var monthdigit2;

            var day;
            var daydigit1;
            var daydigit2;
            var yeardig1;
            var yeardig2;
            var yeardig3;
            var yeardig4;
            var year;
            var updateInput;



            var input = $('#textbox').val();
            var firstLetter = input.charAt(0);
            console.log(firstLetter);

            if (firstLetter === "0" || firstLetter === "1" || firstLetter === "2" || firstLetter === "3" ||
                firstLetter === "4" || firstLetter === "5" || firstLetter === "6" || firstLetter === "7" ||
                firstLetter === "8" || firstLetter === "9") {



                if (input.trim().length === 10) {
                    year = input.substring(6);
                    updateInput = input;
                    console.log("year: " + year);
                }

                if (input.trim().length === 8) {
                    monthdigit1 = input.charAt(0);
                    monthdigit2 = input.charAt(1);
                    month = monthdigit1 + monthdigit2;
                    console.log("month # " + month);

                    daydigit1 = input.charAt(2);
                    daydigit2 = input.charAt(3);
                    day = daydigit1 + daydigit2;
                    console.log("day # " + day);

                    yeardig1 = input.charAt(4);
                    yeardig2 = input.charAt(5);
                    yeardig3 = input.charAt(6);
                    yeardig4 = input.charAt(7);
                    year = yeardig1 + yeardig2 + yeardig3 + yeardig4;
                    console.log("year # " + year);

                    updateInput = month + "/" + day + "/" + year;



                }






                parsedDate = Date.parse(updateInput);

                if (parsedDate === null) {
                    parsedDate = "Unable to parse, see suggested phrases and acceptable formats";
                }




                //var results = Date.parseExact(input, "M/d/yyyy");
                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(year));
                $('#results').append('<br>');
                $('#results').append('<br>');

            } else {

                parseDates();

            }




        }









        var parseDates = function (input) {

            var parsedDate;
            var leapYear = false;

            input = $('#textbox').val();

            if (input.trim() === "mon" || input.trim() === "monday") {

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
                validPhrase = true;

                parsedDate = Date.parse(input);

                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');



            }

            if (input.trim() === "sat" || input.trim() === "saturday") {


                parsedDate = Date.parse(input);

                $('#results').append("You typed: " + input);
                $('#results').append('<br>');
                $('#results').append("I gave you this, satisfied? " + parsedDate);
                $('#results').append('<br>');
                $('#results').append("Is date a leap year? " + Date.isLeapYear(parsedDate.getFullYear));
                $('#results').append('<br>');
                $('#results').append('<br>');

            }



            if (input.trim() === "sun" || input.trim() === "sunday") {


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
                validPhrase = true;
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
                validPhrase = true;
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
            } else {

            }









            return parsedDate;

        }




        button.on("click", function () {






            numberorletter();









        });
    })

}());