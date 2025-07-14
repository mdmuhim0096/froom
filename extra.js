setTimeout(() => {
    const clickBtn = document.getElementById("clickBtn");
    clickBtn.addEventListener("click", (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
        const clickplate = document.createElement("div");
        clickplate.setAttribute("class", "clickplate");
        clickplate.style.left = x + "px";
        clickplate.style.top = y + "px";
        clickBtn.appendChild(clickplate);
        setTimeout(() => {
            clickBtn.removeChild(clickplate);
        }, 400)
    })
    
}, 1000)