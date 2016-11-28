(function () {


    var drake = dragula();
    console.log(drake);

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


    //-------------------------------------------------------------//



    //--Naming Drag Containers
    //    dragula([$("left-container"), $("right-container")]);
    //
    //--Drag Events
    //    dragula.on("drag", function (e) {
    //        e.className = e.className.replace("ex-moved", "");
    //    });
    //
    //    dragula.on("drop", function (e) {
    //        e.className += "ex-moved";
    //    });
    //
    //    dragula.on("over", function (e, container) {
    //        container.className += "ex-over";
    //    });
    //
    //    dragula.on("out", function (e, container) {
    //        container.className = container.className.replace("ex-over", "");
    //    });


    //    var dragStart = dragula.addEventListener("dragstart", function (event) {
    //        event.dataTransfer.setData("Text", even.target.id);
    //        event.target.style.opacity = "0.3";
    //    });
    //
    //    var dragEnd = dragula.addEventListener("dragenter", function (event) {
    //        event.target.style.border = "5px bold";
    //    });
    //    dragula.ondragstart = function (event) {
    //        event.dataTransfer.setData("Text", event.target.id);
    //        //event.target.style.opacity = "0.2";
    //    };
    //
    //    dragula.ondragover = function (event) {
    //        event.preventDefault();
    //    };
    //
    //    dragula.ondrop = function (event) {
    //        event.preventDefault();
    //        var text = event.dataTransfer.getData("Text");
    //        event.target.appendChild(dragula.getElementbyId(text));
    //    };



    //-------------------------------------------------------------//


}());