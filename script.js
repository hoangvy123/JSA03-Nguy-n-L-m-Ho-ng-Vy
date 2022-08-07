function clock(){
    var timer = new Date();
    var hour = timer.getHours();
    var minute = timer.getMinutes();
    var second = timer.getSeconds();
    var day = timer.getDay();
    var month = timer.getMonth();
    var year = timer.getFullYear();

}
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}




function myFunction(){
    const ten=document.getElementById('name').value;
    const tuoi=document.getElementById('age').value;
    window.localStorage.setItem('name', ten);
    window.localStorage.setItem('age', tuoi);
}
function checkInfo(){
    const name = localStorage.getItem('name')
    const age = localStorage.getItem('age')
    if(age && name){
        alert('Name:' + name + 'Age:' + age)
    }else{
        alert('Không có thông tin')
    }
}