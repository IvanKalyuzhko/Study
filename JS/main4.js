console.log('JavaScript')//пропис за яким інформація показується у консолі розробника
console.error('JavaScript')//пропис у консолі розробника яка показує помилку 
console.warn('JavaScript')//пропис у консолі розробника яка звертає увагу до інформаційного повідомлення/попередження
console.info('JavaScript')//те ж саме що і console.log

//Прості типи даних для змінних 

var /*або let*/num; //змінна ,цю змінну можна змінювати на іншу(знизу прописавши їй інше значення)
num=5
console.log('result:'+num+'!')//можна показувати одразу кылька значень

const number=10 //змінна, значення якої неможливо змінити , при прописанні іншого значення код буде видавати помилку
console.log(number)

var num=5;//тип даних числа (number)
var name='Ivan';//тип даних текст (string)
console.log(num+','+name) //перекреслене значення означає що воно застарівше

//Математичні дії

var num1=16
var num2=9
var res=num1-num2;
console.log('Result:'+res)
//або
var num3=11
var num4=3
console.log('Result:'+ (num3+num4))
console.log('Result:'+ (num3-num4))
console.log('Result:'+ (num3*num4))
console.log('Result:'+ (num3/num4))
console.log('Result:'+ (num3%num4))//% означає залишок від числа від якого ділять(тобто так як 11/3 буде не ціле число 3 то залишок з 11 буде 2 так як за умови тільки 9/3 в цілому числі)

var num5=2
var num6=Number("3")//приводимо тип даних до типу числа (якщо потрібно)
console.log(num5+num6)
//або
var num7=2
var num8="3"
console.log(num7+Number(num8))//приводимо тип даних до типу числа (якщо потрібно)

//скорочені математичні дії

var num9=4
console.log(num9+=6)//скорочена дія від num9=num9+6 , якщо додаємо 1 то прописуємо так num9++ , віднімаємо 1 то num9--

var pi=Math.PI//значення Math полегшує роботу з числами
console.log(pi)//звертаємось до числа пі

console.log(Math.cos(1))//можна вирахувати математичні значення , такі як cos та інші
console.log(Math.min(-2,3,7,0,-11,8))//можна знаходити мінімальні значення серед чисел
console.log(Math.max(-2,3,7,0,-11,8))//можна знаходити максимальні значення серед чисел

//Умовні оператори (if , else , else if ,switch-case)

var number1=15
if(number1 == 15)/*== означає - в разі якщо number буде = 15*/{
    console.log("виконуватиметься ось ця умова")
}//якщо прописується одна умова if до значення то фігурні {} дужки можна не прописувати !!!
if(number1 != 15)/*!= - знак нерівності із значенням */{
    console.log("ця умова не виконується по умові")
}//ще можна додавати умови > або < / >= або <= 

var number2=11
if(number2>11)
    console.log("Приклад коли умова не виконується")
else/*в переводі - інакше (спрацьовує в тому випадку коли перша умова не співпадає із значенням)*/{
    console.log("else")
}

var number3=13
if(number3>13)
    console.log("Приклад коли умова не виконується")
else if(number3==13)/*додаткова умова ,яку можна прописувати багато разів до одного значення , я умова прописується обовязково між if i else*/
    console.log("else if")

else/*в переводі - інакше (спрацьовує в тому випадку коли перша умова не співпадає із значенням)*/{
    console.log("else")
}

var word = "New some"
switch(word) /*умова за якої перевіряються різні випадки і якщо ці випадки співпадають у рядку то оператор switch почне виконувати всю операцію прописану у ньому */ {
    case "Another": /*Починаючи виконувати операцію від двокрапки ( : ) */
        console.log("Оператор switch");
        console.log("додає додаткові можливості прописання коду");
        console.log("або додаткової інформації при певній умові");
        break;/*І закінчуючи виконання до слова break*/
    case "10": /*Починаючи виконувати операцію від двокрапки ( : ) */
        console.log("Оператор switch");
        console.log("додає додаткові можливості прописання коду");
        console.log("або додаткової інформації при певній умові");
        break;/*І закінчуючи виконання до слова break*/
    case "New some": /*Починаючи виконувати операцію від двокрапки ( : ) */
        console.log("Оператор switch");
        console.log("додає додаткові можливості прописання коду");
        console.log("або додаткової інформації при певній умові");
        break;/*І закінчуючи виконання до слова break*/
    default/*те саме що і else*/:
    console.log("default");
}

//boolean змінні

var iHaveName =true
if(iHaveName==true)// можна скоротити таким чином - iHaveName
console.log('true')

var youHaveName =true
if(youHaveName==false)// можна скоротити таким чином - !youHaveName
console.log('true')
else 
console.log ('false')

//Перевірка кількох умов

var number4 =4
var isHasCar =true

if(number4>4 && isHasCar) //&&-умова коли два твердження мають бути вірними
console.log('Обидва значення вірні')
else if(number4==4 && isHasCar)
console.log('Обидва значення вірні які прописані у значенні else if')

var number5 =5
var iHasCar =true
if(number5>5 || iHasCar) //||-умова за якою умова відбувається якщо одне із тверджень є коректним
console.log('Одне із двох значень вірне')

//Масиви - використовуються у великій програмі для скорочення коду (у ньому можна зберігати багато значень та звертатись до них за одною назвою)

var data = new Array(9,3,6,2,3,4,6,) //цей масив можна скоротити ось так - var data = [9,3,6,2,3,4,6,] - (квадратні дужки)
console.log(data)
//Це приклад одновимірного масиву де кожен елемент це конкретне значення
var masiv = [2,5,'word', true]//в значені масиву може бути будь-що
masiv[0]=false //можем змінювати значення масиву за номером його в рядку
console.log(masiv[0])
console.log(masiv)
console.log(masiv[2])//можем звертатись лиш до одного масива - але звертаємся не до його назви ,а до номера його в рядку (відлік починається від 0)
console.log(masiv.length)// За допомогою length ми отримуємо к-сть значень у масиві 

//Двовимірні масиви - кожен елемент цього масиву має свій масив 

var matrix=[
    [5,7],
    ["word",false],
    [true,8.7,0]
]
matrix[0]/*звертаємось до масива [5,7]*/[1] /*звертаємось до числа 7 цього масиву*/ =70
console.log(matrix[0][1])

//Цикли - спеціальні конструкції за допомогою яких ми можемо виконати певний код декілька раз поспіль (к-сть виконання цього коду можем встановити самомтійно)
//for , while , do while

for(var i=1/*цикл починається із i=0*/; i<=10/*цей цикл буде працювати допоки i<10*/;i++/*яким чином ця змінна буде змінюватись за одне коло самого циклу*/){
    console.log(i)
}
/*назви для циклів прийнято писати маленькі*/

var x=-3
while(x<11){
    console.log(x)
    x +=2
}

var y=70 // цикл один раз виконається , потім буде перевірка самої умови , якщо умова коректна то тоді цикл ще продовжить виконання / якщо не коректна цикл більше не буде виконуватись
do{
    console.log(y) 
} while(y<50)//навіть якщо умова некоректна цикл обовязково один раз виконається

//Спеціальні оператори для циклів

for(var c=10;c>0;c--){
    if(c==3) break //break - виводить із циклу при умові коли с==7 , будь-який наступний код не буде оброблюватись

    if(c % 2 == 0 /*умова означає залишок при діленні на указане число */) continue //continue - оператор при якому ми не виходимо з циклу , а пропускаєм інтерацію (певне коло циклу)
    console.log(c)
}

//Інформаційне вікно - до цих вікон неможливо додати стилі , воно відображається при перезавантаженні сторінки
//alert , confirm , prompt

alert("Інформаційне вікно")//звичайне вікно 

confirm("запитання із варіантами відповіді") //вікно із запитанням на яке має відповісти користувач
//відповідь користувача записується у консоль (true or false)

prompt('Інформаційне поле для користувача')//за рахунок цього вікна можна отримати певні дані від користувача (поле для написання інформації для користувача)

prompt('Інформаційне поле для користувача', "Okay")//Можна додати значення за замовчуванням через кому

//Функції

function print()/*у цих дужках ми вказуємо параметр функції(вказуємо якусь логічну назву)*/{
    console.log("Helo")
    console.log("!")
}//сама функція ніяк не оброблюється тому у консолі небуде нічого показуватись
print() //тепер функція буде оброблятись так як ми звертаємся до значення
print() 
print() //це значення можна викликати безліч раз і функція буде використовуватись при кожному виклику значення

function add (x,v) {
    var res = x + v
    console.log("Результат:"+ res)
}
add(3,4)
add(8,7)

function Sum(arr) {
    var summ=0
    for(var u = 0; u<arr.length; u++) 
    summ +=arr[u]

    console.log("Сума:"+summ)
}
var arr1=[3,4,5,6,7,8]
Sum(arr1)//замість того щоб кожен раз прописувати значення масиву ми можем один раз прописати функцію
/*var summ1=0
for(var u = 0; u<arr1.length; u++) 
    summ1 +=arr1[u]
    console.log("Сума:"+summ1)*/
var arr2=[3,4,5,6,7,8,11]
Sum(arr2)//замість того щоб кожен раз прописувати значення масиву ми можем один раз прописати функцію
/*var summ2=0
for(var u = 0; u<arr2.length; u++) 
        summ2 +=arr2[u]
    console.log("Сума:"+summ2)*/


function arrSum(arr) {
    var summ=0
    for(var u = 0; u<arr.length; u++) 
    summ +=arr[u]

    return summ //return - повертає розрахунок/значення з функції(після певної її дії) для подальших дій із цією інформацією 
}
var arr1=[3,4,5,6,7,8]
var res1= arrSum(arr1)//замість того щоб кожен раз прописувати значення масиву ми можем один раз прописати функцію
/*var summ1=0
for(var u = 0; u<arr1.length; u++) 
    summ1 +=arr1[u]
    console.log("Сума:"+summ1)*/
var arr2=[3,4,5,6,7,8,11]
var res2= arrSum(arr2)//замість того щоб кожен раз прописувати значення масиву ми можем один раз прописати функцію
/*var summ2=0
for(var u = 0; u<arr2.length; u++) 
        summ2 +=arr2[u]
    console.log("Сума:"+summ2)*/

if(res1>res2) console.log(res1)
else console.log(res2)


