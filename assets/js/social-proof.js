const scrollTolerance = 64;
const scroller = document.getElementById("enterprise-list-scroller");
const cardWidth = Number(window.getComputedStyle(scroller.getElementsByClassName("enterprise")[0]).getPropertyValue("width").replace("px", ""));
const scrollWraperWidth = Number(window.getComputedStyle(document.getElementById("enterprise-list")).getPropertyValue("width").replace("px", ""));
const offset = Math.abs(scroller.scrollWidth - scrollWraperWidth);

scroller.style.left = "0px";

function moveCarousel(dir)
{
    let leftValue = Number(scroller.style.left.replace("px", ""));
    const previousLeft = leftValue;
    leftValue -= cardWidth * dir;

    if (leftValue >= 0)
    {
        if (previousLeft == 0) leftValue = -offset;
        else leftValue = 0;
    }
    else if (leftValue <= -offset)
    {
        if (previousLeft == -offset) leftValue = 0;
        else leftValue = -offset;
    }
    else
    {
        if (dir == -1 && Math.abs(leftValue) <= scrollTolerance) leftValue = 0;
        else if (dir == 1 && offset - Math.abs(leftValue) <= scrollTolerance) leftValue = -offset;
    }
    
    scroller.style.left = leftValue + "px";
}