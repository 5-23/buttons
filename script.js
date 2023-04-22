let a = document.getElementById("two");
function ani(){
    pos = Math.random() * 300;
    if (Math.random() >= 0.5){ pos = -pos }
    a.style = `--pos: ${pos}px`;
    requestAnimationFrame(ani);
    console.log(pos);
}

ani();