import React from "react";

let click1 = 0;
function changeColor1(){
    if (click1 % 2 === 0) {
        let el1 = document.getElementById("el1");
        el1.style.color = 'blue';
        el1.style.backgroundColor = 'yellow';
        click1++;
    } else {
        let el1 = document.getElementById("el1");
        el1.style.color = 'yellow';
        el1.style.backgroundColor = 'blue';
        click1++;
    }
}

function Header() {
    return (
        <h2 id="el1" onClick={changeColor1}>Гладков Даніїл Валерійович</h2>
    );
}

export default Header;
