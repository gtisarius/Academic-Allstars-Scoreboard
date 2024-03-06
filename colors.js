//bg = Background
//sb = Scoreboard

var bgColorPicker;
var sbColorPicker;
var bgTextPicker;
var sbTextPicker;
var backgroundText;
var scoreboardText;
const bgDefaultColor = '#008000'
const sbDefaultColor = '#deb887'

window.addEventListener('load', startup, false)

function startup() {
    bgColorPicker = document.getElementById('bgColorPicker')
    sbColorPicker = document.getElementById('sbColorPicker')
    bgTextPicker = document.getElementById('bgTextColors')
    sbTextPicker = document.getElementById('sbTextColors')
    backgroundText = document.querySelectorAll('.bgText')
    scoreboardText = document.querySelectorAll('.sbText')
    //console.log(backgroundText.style.color)
    for (let i = 0; i < backgroundText.length; i++) {
        backgroundText[i].style.color = 'white'
    }
    for (let i = 0; i < scoreboardText.length; i++) {
        scoreboardText[i].style.color = 'black'
    }
    bgColorPicker.value = bgDefaultColor;
    sbColorPicker.value = sbDefaultColor;
    bgColorPicker.addEventListener('change', setBackgroundColor, false)
    sbColorPicker.addEventListener('change', setScoreboardColor, false)
    bgTextPicker.addEventListener('change', setBgText, false)
    sbTextPicker.addEventListener('change', setSbText, false)
}

function setBackgroundColor() {
    document.body.style.backgroundColor = bgColorPicker.value
}

function setBgText() {
    for (let i = 0; i < backgroundText.length; i++) {
        backgroundText[i].style.color = bgTextPicker.value
    }
}

function setScoreboardColor() {
    document.querySelector('.main').style.backgroundColor = sbColorPicker.value
}

function setSbText() {
    for (let i = 0; i < scoreboardText.length; i++) {
        scoreboardText[i].style.color = sbTextPicker.value
    }
}

function showOrHide() {
    var colorOptions = document.getElementById('pickColors')
    var colorShowHide = document.querySelector('.showButton')
    if (colorOptions.style.display === 'block') {
        colorOptions.style.display = 'none'
        colorShowHide.innerHTML = 'Show Color Options'
    } else {
        colorOptions.style.display = 'block'
        colorShowHide.innerHTML = 'Hide Color Options'
    }
}