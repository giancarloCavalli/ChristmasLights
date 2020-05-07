var circ = document.getElementsByClassName("circle");
setLights(0);
setTimeout(function() { setLights(1); }, 600)


function startStop() {
    if (circ.item(0).style.animationPlayState != "running") {
        play()
    } else {
        pause()
    }
}

function pause() {
    for(let i in circ) {
        circ.item(i).style.animationPlayState = "paused"
    }
}

function play() {
    for(let i in circ) {
        circ.item(i).style.animationPlayState = "running"
    }
}

function setLights(startIndex) {
    for (let index = startIndex; index < circ.length; index+=2) {
        circ.item(index).style.animation = "blinkingCircle 0.4s infinite"
    }
}

function setDuration() {
    var time = document.getElementById("inputDuration")
    for(let i in circ) {
        circ.item(i).style.animationDuration = `${time.value}s`
    }
}

function generateLights() {
    
}