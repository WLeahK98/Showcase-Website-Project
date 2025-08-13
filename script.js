
let scrollContainer = document.querySelector(".gallery");
    let leftBtn = document.getElementById("leftBtn");
    let rightBtn = document.getElementById("rightBtn");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;

    })

