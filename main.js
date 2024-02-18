var homeScoreElement = document.getElementById("homeTeamScore")
var homeScore = Number(homeScoreElement.innerHTML)
var awayScoreElement = document.getElementById("awayTeamScore")
var awayScore = Number(awayScoreElement.innerHTML)

function getHomeName() {
    var homeTeamName = prompt("Enter name of home team: ")
    document.getElementById("homeTeam").innerHTML = homeTeamName
}

function getAwayName() {
    var awayTeamName = prompt("Enter name of away team: ")
    document.getElementById("awayTeam").innerHTML = awayTeamName
}

function changeScore(team) {
    var newScore = prompt("Enter score manually: ")
    if (Number(newScore) == NaN) {
        window.alert("Not a number. Try again.")
        changeScore(team)
    } else {
        if (team == "home") {
            document.getElementById("homeTeamScore") = Number(newScore)
        } else if (team == "away") {
            document.getElementById("awayTeamScore") = Number(newScore)
        }
    }
}

function addScore(team, score) {
    let teamType = team
    //window.alert("now adding " + score + " to " + Number(document.getElementById("homeTeamScore").innerHTML))
    if (teamType == "home") {
        currentScore = Number(document.getElementById("homeTeamScore").innerHTML) + score
        document.getElementById("homeTeamScore").innerHTML = currentScore
    } else if (teamType == "away") {
        currentScore = Number(document.getElementById("awayTeamScore").innerHTML) + score
        document.getElementById("awayTeamScore").innerHTML = currentScore
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

// document.getElementById("homeTeamScore").innerHTML
// document.getElementById("awayTeamScore").innerHTML