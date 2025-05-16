

const button = document.getElementById("send");
const dos = document.getElementById("dos");
const url = document.getElementById("url");
const name = document.getElementById("name");
const desc = document.getElementById("desc");
const auth = document.getElementById("auth");

const obrazek = document.getElementById("obrazek");
const jmeno = document.getElementById("jmeno");
const popis = document.getElementById("popis");
const autor = document.getElementById("autor");

restart();

function restart()
{
    fetch("https://api.janmotlik.dev/random-brainrot", {method: "GET"})
    .then(response => response.json())
    .then(data =>{
        obrazek.src = data.imageUrl;
        jmeno.textContent = data.name;
        popis.textContent = data.description;
        autor.textContent = "-"+data.author;
        
    
    })
    
    
}


function DoS()
{
    num = prompt("Kolik?");
    num = Number(num);
    if(num > 5 && auth.value != "DoS")
    {
        alert("Nech Motlíka žít panebože!")
    }
    else
    {
    alert("Posílá se " + num + " kopií tvého brainrot zvířete.")
    for(i = 0; i < num ; i++)
    {
        
       Post(); 
    }
    alert("Poslání " + num + " kopií tvého brainrot zvířete bylo úspěšné!")
    }
    
    
}

async function Post(){
    const dataToSend = {
        "imageUrl": url.value,
        "name": name.value,
        "description": desc.value,
        "author": auth.value
    }
    console.log("Odesílám: " + JSON.stringify(dataToSend))
    const response = await fetch("https://api.janmotlik.dev/add-brainrot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:
        JSON.stringify(dataToSend)
    });

    if(!response.ok)
    {
        const errorText = await response.text();
        console.error("Chyba vole: "+ response.status);
        console.error("Chyba vole: "+ errorText);
        alert("Chyba kódu " + response.status + " -> " + errorText);
        return;
    }
    url.value = "";
    name.value = "";
    desc.value = "";
    auth.value = "";
    const data = await response.text();
    console.log("Server odpověděl: ", data);
}
