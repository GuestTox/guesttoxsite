function eID(id) {  return document.getElementById(id)  }
function eCl(classname) {  return document.getElementsByClassName(classname)  }

function updateTime() {
    const monthNames =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let date = new Date()

    let day = date.getDate(); if (day < 10) {day = "0" + day.toString()}
    let month = monthNames[date.getMonth()]
    let year = date.getUTCFullYear()
    let hours = date.getUTCHours() + 1; if (hours < 10) {hours = "0" + hours.toString()}
    let minutes = date.getMinutes(); if (minutes < 10) {minutes = "0" + minutes.toString()}
    let seconds = date.getSeconds(); if (seconds < 10) {seconds = "0" + seconds.toString()}

    document.getElementById("day").innerHTML = day
    document.getElementById("month").innerHTML = month
    document.getElementById("year").innerHTML = year
    document.getElementById("hour").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds
}

function updateDiscord() {
    let usernameEl = document.getElementById("discord-username")
    let pfpEl = document.getElementById("discord-pfp")
    
    fetch('/api/discordUserProfile')
        .then(function (response) {
            if (response.ok) {
                console.log(response.text())
                return JSON.parse(response)
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(function (data) {
            usernameEl.innerHTML = (data["username"], data["discriminator"])
            pfpEl.src = (data["avatar"])
        })
        .catch(function (error) {
            console.log(error);
        });
}

updateDiscord()
setInterval(updateTime, 10)