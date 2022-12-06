import React from "react";

let click2 = 0;
function changeColor2(){
    if (click2 % 2 === 0) {
        let el2 = document.querySelector(".el2");
        el2.style.color = 'yellow';
        el2.style.backgroundColor = 'blue';
        click2++;
    } else {
        let el2 = document.querySelector(".el2");
        el2.style.color = 'blue';
        el2.style.backgroundColor = 'yellow';
        click2++;
    }
}

class Content extends React.Component {
    render () {
        return (
            <div>
                <p className="el2" onClick={changeColor2}>Місце народження: 04 березня, 2001 року, м. Краматорськ</p>
                <p>Освіта: ОЗЗСО "ІМЕНІ ВАСИЛЯ СТУСА", м. Краматорськ;</p>
                <p style={{ marginLeft: "53px" }}>НТУУ "КПІ", м. Київ</p>
                <p>Хоббі:</p>
                <ul>
                    <li>Спорт</li>
                    <li>Книги</li>
                    <li>Фільми</li>
                    <li>Фондові ринки</li>
                    <li>Комп'ютерні ігри</li>
                </ul>
                <p>Улюблені фільми:</p>
                <ol>
                    <li>"Дюна", 2021</li>
                    <li>"Зелена миля", 1999</li>
                    <li>"Форрест Ґамп", 1994</li>
                    <li>"Список Шиндлера", 1993</li>
                    <li>"Втеча з Шоушенка", 1994</li>
                </ol>
                <p className="info">Київ — столиця та найбільше місто України, одне з
                    найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра, у північній
                    Наддніпрянщині. Політичний, соціально-економічний, транспортний, освітньо-науковий, історичний,
                    культурний та духовний центр України. У системі адміністративно-територіального устрою України Київ
                    має спеціальний статус, визначений Конституцією, і не входить до складу жодної області, хоча і є
                    адміністративним центром Київської області. Місце розташування центральних органів влади України,
                    іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в
                    Україні.</p>
            </div>
        );
    }
}

export default Content;