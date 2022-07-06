const nextEid = "9 July 2022"

const daysElement = document.getElementById("Days")
const hoursElement = document.getElementById("Hours")
const minsElement = document.getElementById("Minutes")
const secondsElement = document.getElementById("Seconds")



function countdown(){
    const newEidDate =  new Date(nextEid)
    const today = new Date();

    TotalSeconds = (newEidDate-today)/1000
    if(TotalSeconds<0){
        TotalSeconds = 0
    }

    daysLeft = Math.floor(TotalSeconds/60/60/24)
    hoursLeft = Math.floor((TotalSeconds/60/60)%24)
    minsLeft = Math.floor((TotalSeconds/60)%60)
    secLeft = Math.floor(TotalSeconds%60)

    daysElement.innerHTML = daysLeft
    hoursElement.innerHTML = hoursLeft
    minsElement.innerHTML = minsLeft
    secondsElement.innerHTML = secLeft

}

countdown()
setInterval(countdown,1000)