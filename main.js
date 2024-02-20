/*
var homeScoreElement = document.getElementById("homeTeamScore")
var homeScore = Number(homeScoreElement.innerHTML)
var awayScoreElement = document.getElementById("awayTeamScore")
var awayScore = Number(awayScoreElement.innerHTML)
*/

function openTab(tab) {
    if (tab == 'scoreboard') {
        window.location.href = "index.html"
    } else if (tab == 'about') {
        window.location.href = "about.html"
    }
}

function hoverColor(tab) {
    if (tab == 'scoreboard') {
        document.getElementById('scoreTab').style.backgroundColor = 'darkGray'
    } else if (tab == 'about') {
        document.getElementById('aboutTab').style.backgroundColor = 'darkGray'
    }
}

function hoverOut(tab) {
    if (tab == 'scoreboard') {
        if (document.getElementById('scoreTab').classList.contains('highlight') == true) {
            document.getElementById('scoreTab').style.backgroundColor = 'dimGray'
        } else {
            document.getElementById('scoreTab').style.backgroundColor = 'white'
        }
    } else if (tab == 'about') {
        if (document.getElementById('aboutTab').classList.contains('highlight') == true) {
            document.getElementById('aboutTab').style.backgroundColor = 'dimGray'
        } else {
            document.getElementById('aboutTab').style.backgroundColor = 'white'
        }
    }
}

function getHomeName() {
    var homeTeamName = prompt("Enter name of home team: ")
    document.getElementById("homeTeam").innerHTML = homeTeamName
    localStorage.setItem("homeTeamName", homeTeamName)
}

function getAwayName() {
    var awayTeamName = prompt("Enter name of away team: ")
    document.getElementById("awayTeam").innerHTML = awayTeamName
    localStorage.setItem("awayTeamName", awayTeamName)
}

function changeScore(team) {
    let teamType = team
    var oldScore = prompt("Enter score manually: ")
    newScore = Number(oldScore)
    if (teamType == "home") {
        document.getElementById("homeTeamScore").innerHTML = newScore
        localStorage.setItem("homeScore", newScore)
    } else if (teamType == "away") {
        document.getElementById("awayTeamScore").innerHTML = newScore
        localStorage.setItem("awayScore", newScore)
    }
}

function addScore(team, score) {
    let teamType = team
    //window.alert("now adding " + score + " to " + Number(document.getElementById("homeTeamScore").innerHTML))
    if (teamType == "home") {
        currentScore = Number(document.getElementById("homeTeamScore").innerHTML) + score
        document.getElementById("homeTeamScore").innerHTML = currentScore
        localStorage.setItem("homeScore", currentScore)
    } else if (teamType == "away") {
        currentScore = Number(document.getElementById("awayTeamScore").innerHTML) + score
        document.getElementById("awayTeamScore").innerHTML = currentScore
        localStorage.setItem("awayScore", currentScore)
    }
}

function getHomeScore() {
    window.alert(Number(document.getElementById("homeTeamScore").innerHTML))
    window.alert(typeof homeScore)
}

function getAwayScore() {
    window.alert(awayScore)
    window.alert(typeof awayScore)
}

function testFunc() {
    window.alert("Hello world")
}

window.onload = function() {
    console.log("Current page: " + window.location.href)
    console.log("Home team was " + localStorage.getItem("homeTeamName"))
    if (localStorage.getItem("homeTeamName") !== null) {
        document.getElementById("homeTeam").innerHTML = localStorage.getItem("homeTeamName")
    } else {
        console.log("Last session is null.")
    }
    if (localStorage.getItem("homeScore") !== null) {
        document.getElementById("homeTeamScore").innerHTML = localStorage.getItem("homeScore")
    } 
    console.log("Away team was " + localStorage.getItem("awayTeamName"))
    if (localStorage.getItem("awayTeamName") !== null) {
        document.getElementById("awayTeam").innerHTML = localStorage.getItem("awayTeamName")
    }
    if (localStorage.getItem("awayScore") !== null) {
        document.getElementById("awayTeamScore").innerHTML = localStorage.getItem("awayScore")
    } 
}

// document.getElementById("homeTeamScore").innerHTML
// document.getElementById("awayTeamScore").innerHTML