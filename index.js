var circ = document.getElementsByClassName("circle");
setLights(0);   //inicia o pisca pisca
setTimeout(function() { setLights(1); }, 600)   // inicia o pisca pisca
generateLights()


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
    var lContainer = document.getElementById("lightsContainer")
    var qtLights = document.getElementById("inpQtLights")
    lContainer.innerHTML=""
    for(i=0; i<qtLights.value; i++) {
        var circ = document.createElement("div")
        circ.setAttribute("class", "circle")
        circ.setAttribute("id",`c${i}`)
        lContainer.append(circ)
    }
    generateCheckList(qtLights.value)
    setLights(0);   // inicia o pisca pisca
    setTimeout(function() { setLights(1); }, 600) // inicia o pisca pisca
    qtLights.value = ""
}

function setColor() {
    var color = document.getElementById("colorSelector")
    var lightsCollection = document.getElementsByClassName("circle")
    var checkCollection = document.getElementsByClassName("chBox")
    for(i=0; i<checkCollection.length; i++) {
        if(checkCollection[i].checked) {
            var light = lightsCollection[i].style.animation
            //light.style.backgroundColor = "blue"
            alert(light.style.background)
            //lightsCollection[i].style.backgroundColor=`${color.value}`
        }
    }
}

function generateCheckList(len) {
    var checkL = document.getElementById("lightsCheckList")
    checkL.innerHTML=""
    for(i=0; i<len; i++) {
        var lItem = document.createElement("li")
        var checkB = document.createElement("INPUT")
        checkB.setAttribute("type","checkbox")
        checkB.setAttribute("id",`ch${i}`)
        checkB.setAttribute("class","chBox")
        lItem.innerText = `c${i}`
        lItem.append(checkB)
        checkL.append(lItem)
    }
}