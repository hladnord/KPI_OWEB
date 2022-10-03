let click1 = 0;
function changeColor1(newColor1,newColor2){
    if (click1 % 2 === 0) {
        let el1 = document.getElementById("el1");
        el1.style.color = newColor1;
        el1.style.backgroundColor = newColor2;
        click1++;
    } else {
        let el1 = document.getElementById("el1");
        el1.style.color = newColor2;
        el1.style.backgroundColor = newColor1;
        click1++;
    }
}

let click2 = 0;
function changeColor2(newColor1,newColor2){
    if (click2 % 2 === 0) {
        let el2 = document.querySelector(".el2");
        el2.style.color = newColor1;
        el2.style.backgroundColor = newColor2;
        click2++;
    } else {
        let el2 = document.querySelector(".el2");
        el2.style.color = newColor2;
        el2.style.backgroundColor = newColor1;
        click2++;
    }
}

let flag = false
function addImg(){
    if(!flag){
        let img = document.getElementById("img");
        img.innerHTML += "<img src='kyiv2.jpg' id='imgkyiv' alt='Київ'>";
    }
    flag = true;
}
function deleteImg(){
    if(flag){
        let img = document.getElementById("img");
        img.innerHTML = "";
    }
    flag = false;
}
function bigImg(){
    let img = document.getElementById("imgkyiv");
    let width = img.clientWidth;
    let height = img.clientHeight;
    if(width >= document.documentElement.clientWidth){
        alert("Maximum image size reached");
    } else{
        img.style.width = (width + 50) + "px";
        img.style.height = (height + 50) + "px";
    }
}

function smallImg(){
    let img = document.getElementById("imgkyiv");
    let width = img.clientWidth;
    let height = img.clientHeight;
    if(width <= 500){
        alert("Minimum image size reached");
    } else{
        img.style.width = (width - 50) + "px";
        img.style.height = (height - 50) + "px";
    }
}
