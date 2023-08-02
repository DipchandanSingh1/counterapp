const lastDate="3 August 2024 10:00 PM";

document.getElementById("date").innerText=lastDate;
const inputs= document.querySelectorAll("input");
const clock=()=>{
    const end= new Date(lastDate);
    const now=new Date();
    const diff=(end-now)/1000;
    console.log(diff);
    //convert into days
    day=Math.floor(diff/3600/24);
    inputs[0].value=day;
    //converted into hour
    inputs[1].value=(Math.floor(diff/3600)%24);
    //converted into minute
    inputs[2].value=(Math.floor(diff/60)%60);
    //converted into second
    inputs[3].value=(Math.floor(diff%60));


}
clock();
setInterval(() => {
    clock()
}),1000;