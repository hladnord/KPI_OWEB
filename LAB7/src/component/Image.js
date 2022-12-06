import React from "react"

let flag = false
function addImg(){
    if(!flag){
        let img = document.getElementById("img");
        img.innerHTML += "<img class='city-image' src='https://www.dobovo.com/blog/wp-content/uploads/2020/04/7c632743-9a05-4f4a-8056-7c99a3719dbf-825x510.jpg' id='imgkyiv' alt='Київ'>";
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

function Image() {
    return (
        <div>
            <a href="https://kyivcity.gov.ua/"><img src="https://www.dobovo.com/blog/wp-content/uploads/2020/04/7c632743-9a05-4f4a-8056-7c99a3719dbf-825x510.jpg"  alt="Київ" width="900px" height="578px"/></a>
            <div id="img"></div>
            <p>
                <button onClick={addImg}>Додати</button>
                <button onClick={bigImg}>Збільшити</button>
                <button onClick={smallImg}>Зменшити</button>
                <button onClick={deleteImg}>Видалити</button>
            </p>
        </div>
    );
}

export default Image;