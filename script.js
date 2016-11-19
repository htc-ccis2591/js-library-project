(function () {

    $(document).ready(function () {

        var inputbox = $("#textbox");

        var button = $('#logValue');



        $("#textbox").keyup(function () {
            alert($(this).val());
            var input = $(this).val()
            if (input === "t") {
                var parsedDate = Date.parse(input);
                console.log(parsedDate);
            }
        });
    })

}());