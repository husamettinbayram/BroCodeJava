let fullName = "husamettin";
console.log (fullName);
document.write("tam isim : " + fullName + "<br>");
tekHarf= fullName.charAt(0);
console.log (tekHarf);
document.write("tek harfi : " + tekHarf + "<br>");
tekHarf = tekHarf.toUpperCase();
document.write("tek harfi buyuk: " + tekHarf + "<br>");

// method chaining

fullName = "husamettin";
console.log (fullName);
tekHarf= fullName.charAt(0).toUpperCase();
console.log (tekHarf);
fullName = tekHarf + fullName.slice(1);
document.write("tam isim buyuk harf: " + fullName + "<br>");


// ya da bu şekilde de yapılabilir
fullName = "husamettin";
document.write("deneme: " + fullName.charAt(0).toUpperCase() + fullName.slice(1)  + "<br>");
document.write("deneme tam isim : " + fullName + "<br>");