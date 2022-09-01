let zorluk = 0;
let tahmin = 0;
let rassal = 0;
let puan = 1;

document.getElementById("sbmt").onclick = function () {
    zorlukGir();
    
    rassal = Math.ceil(Math.random() * zorluk);
    console.log("rassal deger : " + rassal);
    document.getElementById("mesaj").innerHTML = "simdi tahmininizi giriniz";
    document.getElementById("sbmt").style.display = "none";
    document.getElementById("sbmt2").style.display = "inline";

}

document.getElementById("sbmt2").onclick = function () {
    tahmin = Number(document.getElementById("deger").value);
    console.log("tahmin : " + tahmin);
    // document.getElementById("sbmt2").style.display = "none";

    if (tahmin < rassal) {
        puan=puan+1;
        document.getElementById("mesaj").innerHTML = "daha buyuk bir sayi giriniz";
        // document.getElementById("sbmt3").style.display = "inline";
    
    } else if (tahmin > rassal) {
        puan=puan+1;
        document.getElementById("mesaj").innerHTML = "daha kucuk bir sayi giriniz";
        // document.getElementById("sbmt3").style.display = "inline";
    } else {
        
        document.getElementById("mesaj").innerHTML = puan + " seferde sayiyi bildiniz, tebrikler";
        
    };


}





function zorlukGir() {
    zorluk = Number(document.getElementById("deger").value);
    document.getElementById("deger").value = "";
    console.log("zorluk derecesi : " + zorluk);
    
}
