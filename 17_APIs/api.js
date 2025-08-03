let jsonRes = '{"fact":"When a cat drinks, its tongue - which has tiny barbs on it - scoops the liquid up backwards.","length":92}';

let validRes = JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.fact);


// * SENDING FIRST API REQUEST

let url = "https://catfact.ninja/fact";

fetch(url)
.then((res) => {
    // console.log(res);
    // console.log(res.json());
    return res.json();
})
.then((data) => {
    console.log(data.fact);
})
.catch((err) => {
    console.log(`ERROR - ${err}`);
})


// Using async-await with fetch

async function getFact() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    } catch(err){
        console.log(`ERROR - ${err}`);
    }
}

getFact();