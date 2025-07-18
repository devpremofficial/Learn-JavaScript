/*
* Qs2.Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh”
        ans = “abcdefgh”
*/



function filterDuplicate(str){
    let newVal = [];
    for(let i=0; i<str.length; i++){
        if(!(newVal.includes(str[i]))){
            newVal.push(str[i]);
        }
    }

    console.log(newVal);
}

let string = "abcdabcdefgggh";

filterDuplicate(string);