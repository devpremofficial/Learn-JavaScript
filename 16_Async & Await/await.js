function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 2000)
    })
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    getNum();
}

// demo();


// *************** REFACTOR OLD COLOR CHANGE FNX ***************

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*5)+1;
            if(num < 3){
                reject("Promise rejected");
            }
            h1.style.color = color;
            resolve("color changed to");
    }, delay)
    })
}

async function demo2(){
    try{
         await changeColor("blue", 1000);
        await changeColor("yellow", 1000);
        await changeColor("orange", 1000);
        await changeColor("crimson", 1000);
        await changeColor("gray", 1000);
        await changeColor("teal", 1000);
    } catch(err){
        console.log(`Error is: ${err}`);
    }
   
    let a = 5;
    console.log(`Num is : ${a}`);
    console.log(a+3);
}

demo2();


// changeColor("red", 1000)
// .then((result) => {
//     console.log(`${result} red`);
//     return changeColor("blue", 1000);
// })
// .then((result) => {
//     console.log(`${result} blue`);
//     return changeColor("orange", 1000);
// })
// .then((result) => {
//     console.log(`${result} orange`);
// })
// .catch(() => {
//     console.log(`Failed`);
// })