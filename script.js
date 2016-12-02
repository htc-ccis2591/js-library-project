(function () {



    console.log(dragula());

    //--Drag From&To Containers
    dragula([document.getElementById("left-drag"), document.getElementById("right-drag")]);

    //Delete on Drag
    dragula([document.getElementById("from-drag"), document.getElementById("to-drag")], {
        removeOnSpill: true
    });

    //Drag -- Copy
    dragula([document.getElementById("copy-from"), document.getElementById("copy-to")], {
        copy: true
    });

    //--Drag && Drop ++ Colors
    dragula([document.getElementById("left-color"), document.getElementById("right-color")])
        .on('drag', function (el) {
            el.className = el.className.replace("draggable", "dragged");
        }).on('drop', function (el) {
            el.className += "dragged";
        }).on('over', function (el, container) {
            container.className += "";
        }).on('out', function (el, container) {
            container.className = container.className.replace("draggable", "dragged");
        });

    //--Multiple Containers
    dragula([document.getElementById("topleft-no"), document.getElementById("topright-no"), document.getElementById("bottomright-no"), document.getElementById("bottomleft-no")]);




}());