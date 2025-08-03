const factBtn = document.querySelector(".fact-btn");
const factPara = document.querySelector(".fact-text");
const factLength = document.querySelector(".fact-length");
const apiUrl = "https://catfact.ninja/fact";

factBtn.addEventListener("click", () => {
    getRandomFact();
})

async function getRandomFact(){
    fetch(apiUrl)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        // DOM Manipulation
        factPara.innerText = data.fact;
        factLength.innerText = `Word count: ${data.length}`;
    })
    .catch((err) => {
        console.log(err);
    })
}