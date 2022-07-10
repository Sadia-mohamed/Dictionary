let searchBtn = document.getElementById("search")
 let searchWord = document.getElementById("mango")
 let searchDefi = document.getElementById("pragraph")

 searchBtn.addEventListener("submit", function(e) {
    e.preventDefault()
    fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${e.target[0].value}?key=a6de02c7-24a9-4044-b7c7-41ab6cd77ebb`)
    .then((res)=> (res).json())
    .then((data) =>{
        console.log(data);
        searchWord.textContent=data[0].meta.id;
        searchDefi.textContent=data[0].shortdef;
    })
});