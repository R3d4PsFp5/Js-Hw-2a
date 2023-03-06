let age = +prompt("Укажите свой возраст");


if(age > 0 && age < 18) {
    console.log("Вы еще молоды")
}else if (age > 18 && age < 50 ){
    console.log("Иди работай!");
}else if (age > 50 && age < 59){
    console.log("Скоро на пеньсию");
}else if (age > 59 && age < 100){
    console.log("Ты дед!");
}else if(age > 100) {
    console.log("Динозавры разве не вымерли?");
}else if (age < 0){
    console.log("Ты точно из прошлого!");
}else {
    console.log("NaN");
}