function btnClick( ) {
    alert("повідомлення")
}

function checkForm(el){
  
    var username = el.username.value;
    var email = el.email.value;
    var password = el.password.value;
    var gender = el.gender.value;
  
    var error = "";
    if(username.length<2)
      error='Ім\'я занадто мале';//В цьому речені ставим слеш у випадку якщо в тексті наявні лапки які однакові із тими що ставляться у значення
    else if(email.length<2)
      error='email занадто малий';
    else if(!email.includes('@'))//includes - перевіряє чи є значення яке ми вказуємо у дужках
      error='email не має @';
    else if(password.length<2)
      error='password занадто малий';
    else if(gender == null|| gender == '')
      error='gender error';

    if(error != ''){//умова що говорить про те що error не дорівнює пустому рядку
      document.getElementById('error').innerText = error;
      return false;
    }
      document.getElementById('error').innerText = '';
      window.location = 'https://google.com'
    
   return false;
}

//Таймери та інтервали - можна створити такий код який буде виконаний через певний проміжок часу (інтервал буде постійно виконувати код через якийсь проміжок часу)

var id= setInterval(my_func, 1000/*тут зазначаємо мілісекунди(1сек=1000млсек)*/)//в цю фуекцію передають два параметра (сама функція яка буде виконуватись та час через який буде спрацьовувати функція)

var counter = 0 
function my_func( ){
     document.getElementById("timer").innerHTML="Counter:"+ counter
     counter++
}

function stopInterval() {
     clearInterval(id) //зупиняє інтервал
     clearTimeout(timerid)
}

setInterval(function(){//анонімна функція
     console.log("sec.")
}, 1000)//таким методом можна прописувати інтервал

setTimeout(function(){
   alert("message")
}, 3000)