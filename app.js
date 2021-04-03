let areaForFiveSymbols = document.querySelector('.symbols');
let selectList = document.querySelector('select');
let dataList = document.querySelector('.results');
let buttonSearch= document.querySelector('.search');
let buttonClean=document.querySelector('.clean');


// Generation of 5 random letters 
(function () {
    let symbol="";
    let fiveSymbols = "";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (let i = 0; i < 5; i++){
        symbol = alphabet.charAt(Math.round(Math.random() * 25));
        selectList[i+1].innerHTML = symbol;
        fiveSymbols += symbol;
    }
    areaForFiveSymbols.innerHTML=fiveSymbols;
    })();


// Find matches in the json file
        buttonSearch.addEventListener('click',()=>{
            dataList.innerHTML='';
            selectedSymbol = selectList.options[selectList.selectedIndex].text;

            fetch("list.json")
            .then(response => response.json())
            .then(json => {
                for(let i=0; i<json.length; i++){
                    if(selectedSymbol==json[i].name[0]){
                        let p = document.createElement("p");    
                        p.innerHTML=json[i].name;
                        dataList.appendChild(p);
                    }
                }
                });
     });

     //  Clear the search results field
     buttonClean.addEventListener('click',()=>{
        dataList.innerHTML='';
     })





