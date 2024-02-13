//Робота з датою
var date=new Date()
console.log(date.getFullYear())//дізнаємося поточний рік
date.setHours(23)//встановлюємо свою годину 
console.log(date.getHours())//тут відображуємо в консолі свою годину

var date=new Date()
console.log("Time:"+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())

setInterval(function(){
    var date=new Date()
    var time = "Time:"+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
    document.getElementById("time").innerText= time
},1000)

var arr = [12,5,8,"some", true]
console.log(arr.sort())//сортує масив за зростанням
console.log(arr.sort().reverse())//сортує масив за спаданням

var user = prompt('Enter films: ')
var films = user.split(',')//split - дозволяє нам текст розбити по символам та отримати масив
console.log(films)
console.log(films.join("-"))//join - дозволяє обєднувати масив/текст 

//Класи та обєкти

class Person {
    name = ""
    age= 0 
    bio=""
    
    constructor(name,age,bio){
        this.name=name
        this.age=age
        this.bio=bio
    }//ця функція скорочує написання коду

    info(){//функція
        console.log("Людина:"+this.name + ".Вік:"+this.age + ".Bio:"+this.bio)
    }
}
var ivan = new Person ("Ivan",22,"bio")
/*ivan.name = "Ivan"
ivan.age= 22
ivan.bio="bio"*///за допомогою конструктора це не потрібне

var kalyvan = new Person ("Kalyvan",23,"new bio")
/*kalyvan.name = "Kalyvan"
kalyvan.age= 23
kalyvan.bio="new bio"*///за допомогою конструктора це не потрібне

ivan.info()
kalyvan.info()