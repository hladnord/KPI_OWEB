document.querySelector("#download").onclick = function(){
    for (let i = 0; i < 5; i++) {
        fetch ('https://randomuser.me/api')
            .then((res) => res.json())
            .then((data) => create(data))
    }
}

function create({results}) {
    let element = document.querySelector('.container')
    element.innerHTML += `<div>${getUser(results)}</div>`
}

function getUser(results) {
    return results.map(user =>
        `<div class="content">
            <img src="${user.picture.large}" width="250px" height="250px">
            <p>Phone: </br> ${user.cell}</p>  
            <p>City: </br> ${user.location.city}</p>
            <p>E-mail: </br> ${user.email}</p>      
            <p>Location: </br> ${user.location.country}</p>
        </div>`)
}