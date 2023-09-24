const clockDisplay = document.querySelector("#clock")



setInterval(() => {
    let date = new Date();
    clockDisplay.innerText = date.toLocaleString();
    // console.log(date.toTimeString());
},1000)