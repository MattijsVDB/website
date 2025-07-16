'use strict'

const handleLoad = () =>
{
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.body.style.backgroundColor = "#3c3c3c";
}

const handleKeyDown = (event) =>
{
    const key = event.key;
    switch (key)
    {
        case "a":
            document.body.style.backgroundColor = "aqua";
            break;
        case "b":
            document.body.style.backgroundColor = "blue";
            break;
        case "c":
            document.body.style.backgroundColor = "coral";
            break;
        case "d":
            document.body.style.backgroundColor = "darkgreen";
            break;
        case "e":
            document.body.style.backgroundColor = "mediumseagreen";
            break;
        case "f":
            document.body.style.backgroundColor = "fuchsia";
            break;
        case "g":
            document.body.style.backgroundColor = "gold";
            break;
        case "h":
            document.body.style.backgroundColor = "hotpink";
            break;
        case "i":
            document.body.style.backgroundColor = "indigo";
            break;
        case "j":
            document.body.style.backgroundColor = "mediumspringgreen";
            break;
        case "k":
            document.body.style.backgroundColor = "khaki";
            break;
        case "l":
            document.body.style.backgroundColor = "lavender";
            break;
        case "m":
            document.body.style.backgroundColor = "magenta";
            break;
        case "n":
            document.body.style.backgroundColor = "navy";
            break;
        case "o":
            document.body.style.backgroundColor = "orange";
            break;
        case "p":
            document.body.style.backgroundColor = "plum";
            break;
        case "q":
            document.body.style.backgroundColor = "lightgray";
            break;
        case "r":
            document.body.style.backgroundColor = "red";
            break;
        case "s":
            document.body.style.backgroundColor = "skyblue";
            break;
        case "t":
            document.body.style.backgroundColor = "turquoise";
            break;
        case "u":
            document.body.style.backgroundColor = "royalblue";
            break;
        case "v":
            document.body.style.backgroundColor = "violet";
            break;
        case "w":
            document.body.style.backgroundColor = "wheat";
            break;
        case "x":
            document.body.style.backgroundColor = "#738678";
            break;
        case "y":
            document.body.style.backgroundColor = "yellow";
            break;
        case "z":
            document.body.style.backgroundColor = "black";
            break;
        default:
            break;
    }
}

const handleKeyUp = () =>
{
    document.body.style.backgroundColor = "#3c3c3c"
}

window.addEventListener('load', handleLoad);