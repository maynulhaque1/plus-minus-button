// Plus / Minus Counter (Important)
// Goal: real logic practice
// কাজ
// •	number শুরু: 0
// •	+ button
// •	– button
// •	number:
// o	0 এর নিচে যাবে না
// o	5 এর বেশি যাবে না
// Requirements
// •	click event
// •	variable
// •	condition
// •	button disable / enable
// Hint
// •	আগে শুধু + কাজ করাও
// •	তারপর –
// •	তারপর limit



// findding elemtns:
const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

let num = 0;
minusBtn.disabled = true;

// enent handeling:
plusBtn.addEventListener("click", () => {
    if (num < 5) {
        num++;
        counter.innerText = num;
    }
    

    if (num === 5) {
        plusBtn.disabled = true;
    } else {
        minusBtn.disabled = false;
    }
});

minusBtn.addEventListener("click", () => {
    if (num > 0) {
        num--;
        counter.innerText = num;
    }

    
    if (num === 0) {
        minusBtn.disabled = true;
    } else {
        plusBtn.disabled = false;
    }
});

















// // plusBtn event handeling:
// plusBtn.addEventListener("click", () =>{
//     num++;
//     counter.innerText = num;
    
//     if (num >= 5) {
//         plusBtn.disabled = true;
//     } else {
//         minusBtn.disabled = false;
//     }

// });

// // minusBtn event handeling:
// minusBtn.addEventListener("click", () =>{
//     num--;
//     counter.innerText = num;
    
//     if (num <= 0) {
//         minusBtn.disabled = true;
//     } else {
//         plusBtn.disabled = false;
//     }

// });


