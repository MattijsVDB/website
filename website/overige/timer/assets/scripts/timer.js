'use strict'

let firstClickTime = null;
let highscore = null;
let amountOfTries = 0;
let total = 0;

const handleLoad = () =>
{
    //document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
}

const handleClick = () =>
{
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('keyup', handleKeyUp);

    const currentTime = new Date().getTime(); // Get current time in milliseconds

    if (firstClickTime === null)
    {
        firstClickTime = currentTime; // Record the time of the first click
        console.log('First click recorded. Click again to measure the time span.');
        document.getElementById('timertijd').innerText = "Klik opnieuw om de timer te stoppen";
    }
    else
    {
        const timeSpan = currentTime - firstClickTime; // Calculate the time difference
        console.log(`Time span between clicks: ${timeSpan} ms`);
        firstClickTime = null; // Reset for the next measurement
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keydown', handleKeyUp);
        document.getElementById('timertijd').innerText = `${1/timeSpan*1000} Hz (${timeSpan} ms)`;
        if(highscore === null)
        {
            highscore = timeSpan;
        }
        else
        {
            if(timeSpan < highscore)
            {
                highscore = timeSpan;
            }
        }
        amountOfTries ++;
        total += timeSpan;
        if(total >= Number.MAX_SAFE_INTEGER || amountOfTries >= Number.MAX_SAFE_INTEGER)
        {
            amountOfTries = 1;
            total = timeSpan;
            alert("voortgang verwijderd");
        }
        document.getElementById('highscore').innerText = `persoonlijk record: ${1/highscore*1000} Hz (${highscore} ms)`;
        document.getElementById('average').innerText = `persoonlijk gemiddelde: ${1/(total/amountOfTries)*1000} Hz (${total/amountOfTries}ms)`;
    }
}

const handleKeyDown = () =>
{
    document.removeEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    let knop = document.getElementById('knop');
    knop.disabled = true;
    //document.removeEventListener('click', handleClick);

    const currentTime = new Date().getTime(); // Get current time in milliseconds

    if (firstClickTime === null)
    {
        firstClickTime = currentTime; // Record the time of the first click
        console.log('First click recorded. Click again to measure the time span.');
        document.getElementById('timertijd').innerText = "Klik opnieuw om de timer te stoppen";
    }
    else
    {
        const timeSpan = currentTime - firstClickTime; // Calculate the time difference
        console.log(`Time span between clicks: ${timeSpan} ms`);
        firstClickTime = null; // Reset for the next measurement
        knop.disabled = false;
        document.getElementById('timertijd').innerText = `${1/timeSpan*1000} Hz (${timeSpan} ms)`;
        document.getElementById('average').innerText = `persoonlijk gemiddelde: ${1/(total/amountOfTries)*1000} Hz (${total/amountOfTries}ms)`;
        if(highscore === null)
        {
            highscore = timeSpan;
        }
        else
        {
            if(timeSpan < highscore)
            {
                highscore = timeSpan;
            }
        }
        amountOfTries ++;
        total += timeSpan;
        if(total >= Number.MAX_SAFE_INTEGER || amountOfTries >= Number.MAX_SAFE_INTEGER)
        {
            amountOfTries = 1;
            total = timeSpan;
            alert("voortgang verwijderd");
        }
        document.getElementById('highscore').innerText = `persoonlijk record: ${1/highscore*1000} Hz (${highscore} ms)`;
    }
}


const handleKeyUp = () =>
{
    document.addEventListener('keydown', handleKeyDown);
    document.removeEventListener('keyup', handleKeyUp);
}

window.addEventListener('load', handleLoad);