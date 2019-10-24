
//write first method
function sleep_in(weekday,vacation) {
    if(vacation == true) {
        return vacation;
    } else {
        return !weekday;
    }
}

//write second method
function monkey_trouble(peram1, peram2) {
    var monkey_trouble = (peram1 && peram2)||(!peram1 && !peram2);
    return monkey_trouble;
}
//third method
function string_times(string, num){
    var str = string;
    var y = ""
    for(var i = num; i > 0; i--){
        y = str + y;
    }
    return y;
}
//fourth method
function front_times(string, num){

    var sub = string.substring(0, 3);

    var y = ""
    for(var i = num; i > 0; i--){
        y = sub + y;
    }
    return y;
}
//fith method
function string_bits(str){
    var bit = "";
    for(var i = 0 ; i<str.length; i=i+2) {
        if (i % 2 == 0) {
            bit += str.substring(i, i + 1);
        }
    }
    return bit;
}
//sixth method
function caughtSpeeding(speed, birthday) {
    var ticket = "";
    if (birthday == true) {
        speed -= 5
    }
    if (speed <= 60) {
        ticket = 0;
    } else {
        if (speed >= 81) {
            ticket = 2;
        } else {
            ticket = 1;
        }
    }
    return ticket;
}

//seventh method
function fizz_buzz(num) {
    var fizz_buzz = ""
    if (num % 3 == 0 && num % 5 == 0) {
        fizz_buzz = "FizzBuzz";
    }else if(num%3==0){
        fizz_buzz = "Fizz"
    }else if(num%5==0){
        fizz_buzz = "Buzz"
    } else {
        fizz_buzz = num + "!"
    }
    return fizz_buzz;
}

//eigth method
function teaParty(candy, tea){
    var critic = ""
    if(candy < 5|| tea < 5){
        critic = 0
    } else if(candy >= tea*2 || tea >= candy*2){
        critic = 2
    } else if(candy >= 5 && tea >= 5){
        critic = 1
    }
    return critic;
}
//ninth method
function blackjack(num1, num2){
    var blackjack = ""
    if(num1 > 21){
        num1 = 0;
    }
    if(num2 > 21){
        num2 = 0;
    }
    if(num1 > num2){
        blackjack = num1;
    } else {
        blackjack = num2;
    }
    return blackjack;
}
//tenth statement
function loneSum(num1, num2, num3){
    var num11 = num1
    var num22 = num2
    var num33 = num3
    if(num1 == num2){
        num11 = 0;
        num22 = 0;
    }
    if(num2 == num3){
        num33 = 0;
        num22 = 0;
    }
    if(num1 == num3){
        num11 = 0;
        num33 = 0;
    }
    var sum = num11 + num22 + num33;
    return sum;
}

//add 2-10 below here...

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(brother, 4);
    document.getElementById("output").innerHTML += front_times(brother, 4);
    document.getElementById("output").innerHTML += string_bits(brother);
    document.getElementById("output").innerHTML += caughtSpeeding(70, false);
    document.getElementById("output").innerHTML += fizz_buzz(15);
    document.getElementById("output").innerHTML += teaParty(6, 13);
    document.getElementById("output").innerHTML += blackjack(6, 13);
    document.getElementById("output").innerHTML += loneSum(1, 1, 1);
    //test third method, etc
}