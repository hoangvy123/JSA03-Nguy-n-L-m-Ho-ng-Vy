//Bài 1
var student = {
    name:'Lan',
    age: 20,
    address: '23 Le Loi street'
  }
  function Profile(name, age, address){
    var result = name + ' ' + age + ' ' + 'tuoi'+ ' ' + 'o' + ' ' + address 
    return result;
  }
  console.log(Profile(student.name, student.age, student.address))
  //Bài 2
  var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
];
  console.log(smartPhones.map(smartPhone => smartPhone.price)); 
  //Bài 3 

 var foo = (x, y, z) => {console.log( x, y, z )};

 var foo = () =>{ alert('Hello')};

 var foo = (a,b) => {return a+b*100}


 