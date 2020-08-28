let btn = document.getElementById("tombol1");
let timer;
let interval  = 2500;
let level = 1;
let flag = true;
let flag1 = true;
let difficulties = 1
//get the modal1
let modal1 = document.getElementById("myModal1");
// Get the modal
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
//get area
let area = document.getElementById("area");


document.getElementById("tombol1").onclick = function() {tombol()};
document.getElementById("surrender").onclick = function() {surender()};
document.getElementById("easy").onclick = function() {
    difficulties = 1
    interval = 2500
    document.getElementById("easy").disabled = true 
    document.getElementById("hard").disabled = false 
};
document.getElementById("hard").onclick = function() {
    difficulties = 1
    interval = 2000
    document.getElementById("easy").disabled = false 
    document.getElementById("hard").disabled = true 
};

function tombol(){
    if(flag){
        start()
        flag = false
        btn.style.position = "absolute"
    }else{
        if(flag1){
            naikLevel()
        }
        if(flag1){
            start()//refresh nilai interval
        }
    }
}

function naikLevel (){
    level += 1;
    interval -= 200;
    if(level <= 10){
        document.getElementById("score").innerHTML = level;
    }
    if(level > 10){//berhasil level tertinggi
        clearInterval(timer);
        flag1 = false
        document.getElementById("keterangan").innerHTML = "Selamat Kamu Berhasil!!!";
        document.getElementById("tampilan-level").innerHTML = 10;
        modal.style.display = "block";
    }
    btn.style.top = Math.floor((Math.random() * 85) + 1) + "%";
    btn.style.left = Math.floor((Math.random() * 85) + 1) + "%";
    console.log(interval)
}

function start(){
    clearInterval(timer);
    timer = setInterval(() => { timerRandom() }, interval);
    btn.style.top = Math.floor((Math.random() * 85) + 1) + "%";
    btn.style.left = Math.floor((Math.random() * 85) + 1) + "%";
    btn.innerHTML = "CatchMe";
    document.getElementById("surrender").disabled = false;
}

function surender(){
    clearInterval(timer);
    document.getElementById("tampilan-level").innerHTML = level;
    modal.style.display = "block";
}

function timerRandom() {
    btn.style.top = Math.floor((Math.random() * 85) + 1) + "%";
    btn.style.left = Math.floor((Math.random() * 85) + 1) + "%";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    if(difficulties = 1) interval = 2500
    if(difficulties = 2) interval = 2000
    level = 1;
    flag = true;
    flag1 = true;
    btn.innerHTML = "Start";
    btn.style.left = "44%";
    btn.style.top = "47%";
    document.getElementById("surrender").disabled = true;
    document.getElementById("score").innerHTML = level;

}

//reset button
document.getElementById("tombolreset").onclick = function() {
    modal.style.display = "none" 
    if(difficulties = 1) interval = 2500
    if(difficulties = 2) interval = 2000
    level = 1;
    flag = true;
    flag1 = true;
    btn.innerHTML = "Start";
    btn.style.left = "44%";
    btn.style.top = "47%";
    document.getElementById("surrender").disabled = true;
    document.getElementById("score").innerHTML = level;

};

//for login
function myFunction(){
    modal1.style.display = "block";
}

let nama = document.getElementById("nama");
let hasil = document.getElementById("hasilnama");

function submit(){
    modal1.style.display = "none";
    hasil.innerText = "Haii " + nama.value + ", klik start untuk memulai permainan";
}
