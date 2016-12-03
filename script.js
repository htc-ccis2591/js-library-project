function circle() {   
var el = document.querySelector('#circle');
function run1() {
dynamics.animate(el, {
  translateX: 0
}, {
    type: dynamics.spring,
    duration: 500,
    frequency: 1,
    friction: 1000,
    anticipationSize: 0,
    anticipationStrength: 0,
    complete: run2
})
}
function run2() {
dynamics.animate(el, {
  translateY: -410
}, {
    type: dynamics.spring,
    duration: 2000,
    frequency: 1,
    friction: 100,
    anticipationSize: 0,
    anticipationStrength: 0,
    complete: run3
})
}
function run3() {
$("#line5").css('visibility', 'visible');
dynamics.animate(el, {
  translateX: 180,
  translateY: -410
}, {
    type: dynamics.spring,
    duration: 4000,
    frequency: 300,
    friction: 1,
    complete: run4
})
}
function run4() {
dynamics.animate(el, {
  translateX: 180
}, {
    type: dynamics.gravity,
    duration: 3200,
    bounciness: 900,
    elasticity: 660,
    complete: run5
})
$("#line6").css('visibility', 'hidden');
}
function run5() {
dynamics.animate(el, {
  translateX: 400
}, {
    type: dynamics.linear,
    duration: 2400,
    friction: 1000,
    complete: run6
})
}
function run6() {
dynamics.animate(el, {
  translateX: 400
}, {
    type: dynamics.easeIn,
    duration: 1000,
    complete: run7
})
}
function run7() {
$("#line7").css('visibility', 'hidden');
dynamics.animate(el, {
  translateX: 510,
  translateY: -100,
  scale: 5
}, {
    type: dynamics.easeOut,
    duration: 2400,
    complete: run8
})
$("#line4").css('visibility', 'hidden');
$("#line8").css('visibility', 'hidden');
$("#line9").css('visibility', 'hidden');
}
function run8() {
dynamics.animate(el, {
  translateX: -130
}, {
    type: dynamics.easeOut,
    duration: 2400,
    complete: run7
})
}
    
run1();
};  

$(function button() {
    var el = document.querySelector('path')
var textEl = document.querySelector('span')
var pathOver = el.getAttribute('data-over-path')
var pathOut = el.getAttribute('d')

// Over animation
function animateOver() {
  dynamics.animate(el, {
    d: pathOver,
    fill: "#007EFF"
  }, {
    type: dynamics.spring,
    complete: animateOut
  })

  dynamics.animate(textEl, {
    scale: 1.06
  }, {
    type: dynamics.spring
  })
}

// Out animation
function animateOut() {
  dynamics.animate(el, {
    d: pathOut,
    fill: "#0bf"
  }, {
    type: dynamics.easeInOut,
    friction: 100
  })

  dynamics.animate(textEl, {
    scale: 1
  }, {
    type: dynamics.easeInOut,
    friction: 100,
    complete: function() {
      dynamics.setTimeout(animateOver, 500)
    }
  })
}

// Start
animateOver()

$('button').on('click', function() {
               $(this).hide();
                circle();
               });

});