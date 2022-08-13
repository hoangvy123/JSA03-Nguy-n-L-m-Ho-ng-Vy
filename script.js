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

function myFuntion(){
    const ten=document.getElementById('name').value;
    const tuoi=document.getElementById('age').value;
    sessionStorage.setItem('name', ten.value)
    sessionStorage.setItem('age', tuoi.value)
    var isSuccess = confirm('Lưu thông tin thành công! Quay về trang chủ')
        if(isSuccess){
            window.location.href ='bkt4.html'
        }
   }
function clearInfor(){
    const ten=sessionStorage.clear('name');
    const tuoi=sessionStorage.clear('age');
    alert('Đã xóa thông tin')
}
function checkInfo(){
    const name = sessionStorage.getItem('name')
    const age = sessionStorage.getItem('age')
    if(age && name){
        alert('Name:' + name + 'Age:' + age)
    }else{
        alert('Không có thông tin')
    }
}