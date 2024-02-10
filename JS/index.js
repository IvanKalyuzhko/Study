function btnClick( ) {
    alert("повідомлення")
}

function checkForm(el){
  
    var username = el.username.value;
    var email = el.email.value;
    var password = el.password.value;
    var gender = el.gender.value;
  
    var error = "";
    if(username.lenght<2)
      error='Ім\'я занадто мале';//В цьому речені ставим слеш у випадку якщо в тексті наявні лапки які однакові із тими що ставляться у значення
    else if(email.lenght<2)
      error='email занадто малий';
    else if(email.includes('@'))//includes - перевіряє чи є значення яке ми вказуємо у дужках
      error='email не має @';
    else if(password.lenght<2)
      error='password занадто малий';
    else if(gender == null|| gender == '')
      error='gender error';

    if(error != ''){//умова що говорить про те що error не дорівнює пустому рядку
      document.getElementById('error').innerText = error;
      return false;
    }
    return false;
}