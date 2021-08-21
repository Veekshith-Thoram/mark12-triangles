const inputs = document.querySelectorAll(".angle-input");
const isTraingleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calSumAngles(angle1,angle2,angle3){
    const sumOfAngles =  angle1+angle2+angle3;
    return sumOfAngles;
}

function isTriangle(){
    let sum = calSumAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sum === 180){
        outputEl.innerText = "YaY!! The angles form a triangle..";
    } else{
        outputEl.innerText = "Oh nonono....The angles don't form a triangle";
    }
}


isTraingleBtn.addEventListener("click", isTriangle);