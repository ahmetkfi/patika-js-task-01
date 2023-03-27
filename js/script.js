let userName=prompt("Lütfen isminizi girin");
userName=userName.charAt(0).toUpperCase()+userName.slice(1);
document.getElementById("myName").textContent=userName;
const day=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
function showTime(){
    let date=new Date();
    let h= date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    let time=`${h} : ${m} : ${s<10 ? '0'+s:s} ${day[date.getDay()]}`;

    document.getElementById('myClock').textContent=time;
    document.getElementById('myClock').classList.add('text1')
   
    setTimeout(showTime,1000);
}

showTime();