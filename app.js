let span=document.getElementById("name");
// span.innerHTML=prompt("Merhaba adınız nedir ?");
let tarih=document.getElementById("history");
let date=new Date();
let gun;

switch (date.getDay()) {
    case 1:
        gun="pazartesi";
        break;

    case 2:
        gun="Salı";
        break;

    case 3:
        gun="Çarşamba";
        break;

    case 4:
        gun="Perşembe";
        break;

    case 5:
        gun="Cuma";
        break;

    case 6:
        gun="Cumartesi";
        break;

    case 0:
        gun="Pazar";
        break;

    default:
        break;
}

/*----------------------------------------------------------*/ 

// function saatGoster() {
// 	let saat = document.getElementById("saatKutu");
// 	saat.innerHTML =new Date().toLocaleTimeString();
//     saat.innerHTML+=" "+gun;
// }
// saatGoster();
// setInterval("saatGoster()", 1000);

/*------------------------------------------------------------*/
let saat = document.getElementById('saatKutu')  
let sira = 0;

function saatGosterAnim()
{
      
    saat.innerHTML = new Date().toLocaleTimeString();
    saat.innerHTML+=" "+gun;
    saatAnimasyon();
}


function saatAnimasyon()
{
    ++sira;
    
    if(sira == 1) saat.style.backgroundColor = '#88CCEE'
    else 
        if(sira == 2) saat.style.backgroundColor = '#77BBDD'
    else 
        if(sira == 3) saat.style.backgroundColor = '#88CCEE'
    else 
        if(sira == 4) saat.style.backgroundColor = '#99DDFF'
    
    if(sira < 5) setTimeout('saatGosterAnim()', 50);    
    else sira = 0;
}



saatGosterAnim();

setInterval("saatGosterAnim()", 1000);