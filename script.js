

const button = document.getElementById("send");
const dos = document.getElementById("dos");
const url = document.getElementById("url");
const name = document.getElementById("name");
const desc = document.getElementById("desc");
const auth = document.getElementById("auth");


function DoS()
{
    num = prompt("Kolik?");
    num = Number(num);
    if(num > 2000)
    {
        alert("Ani hovno, Pinďo")
    }
    else
    {
    for(i = 0; i < num ; i++)
    {
       Post(); 
    }
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
        return;
    }
    const data = await response.text();
    console.log("Server odpověděl: ", data);
}