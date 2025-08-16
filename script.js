/* Vertically scrolling image gallery code:
This code will allow scrolling between images using mouse wheel or a mousepad
*/
let scrollContainer = document.querySelector(".gallery");
    let leftBtn = document.getElementById("leftBtn");
    let rightBtn = document.getElementById("rightBtn");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "auto";

    });

    rightBtn.addEventListener("click", () =>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += +900;

    });

    leftBtn.addEventListener("click", () =>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= +900;
    });

    var slide = document.getElementById("slide");
    var upArrow = document.getElementById("upArrow");
    var downArrow = document.getElementById("downArrow");

    let x = 0;
    upArrow.onclick = function(){
        if (x > "-1200"){
            x = x - 300;
            slide.style.top = x + "px";
        }
        
    }
    downArrow.onclick = function(){
        if (x < "0"){
            x = x + 300;
            slide.style.top = x + "px";
        }
        
    } 

