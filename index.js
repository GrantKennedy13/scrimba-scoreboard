let homeScoreEl = document.getElementById("home")
let homeScore = 0
let guestScoreEl = document.getElementById("guest")
let guestScore = 0

//-------- Home ----------//

function homeAddOne(){
    homeScore += 1;
    homeScoreEl.innerHTML = homeScore
}

function homeAddTwo(){
    homeScore += 2;
    homeScoreEl.innerHTML = homeScore
}

function homeAddThree(){
    homeScore += 3;
    homeScoreEl.innerHTML = homeScore
}

//-------- Guest ----------//

function guestAddOne(){
    guestScore += 1;
    guestScoreEl.innerHTML = guestScore
}

function guestAddTwo(){
    guestScore += 2;
    guestScoreEl.innerHTML = guestScore
}

function guestAddThree(){
    guestScore += 3;
    guestScoreEl.innerHTML = guestScore
}

//-------- Reset ----------//

function resetScores(){
    homeScore = 0;
    homeScoreEl.innerHTML = homeScore;
    guestScore = 0;
    guestScoreEl.innerHTML = guestScore
}