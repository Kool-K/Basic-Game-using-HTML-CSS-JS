var list = document.querySelectorAll("img");
// we are getting all img tags , here 2 in the var list
// list[0] img of user 1
// list[1] img of user 2
//1,2,3,4,5,6,
//0 to 1 then o and 1 aren't included so this occurs
//0 to 1
//0.1*6=0.6=0+1
// 0.4*6=2.4
//0.9*6=5.4 =5+1=6
// thats why 0 to 1 0 isn't included so 0.1 and 1 isn't as well so 0.9
const first = Math.floor(Math.random() * 6) + 1;
const imageFirst = 'assets/dice' + first + '.png';
list[0].setAttribute('src', imageFirst);

const second = Math.floor(Math.random() * 6) + 1;
const imageSecond = 'assets/dice' + second + '.png';
list[1].setAttribute('src', imageSecond);
// src of the img tag

if (first > second) {
    document.querySelector('h1').innerHTML = "The winner is Player 1!";
}

else if (second > first) {
    document.querySelector('h1').innerHTML = "The winner is Player 2!";
}

else {
    document.querySelector('h1').innerHTML = "It's a tie!";
}