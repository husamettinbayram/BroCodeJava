Numero = 123456.789;
Numero2 = "";

console.log(Numero);
console.log(Numero);

Numero2 = Numero.toLocaleString("tr-TR");
console.log("tr-TR",Numero2);
Numero2 = Numero.toLocaleString("en-US");
console.log("en-US",Numero2);
Numero2 = Numero.toLocaleString("en-UK");
console.log("en-UK",Numero2);
Numero2 = Numero.toLocaleString("de-DE");
console.log("de-DE",Numero2);


Numero2 = Numero.toLocaleString("tr-TR",{style: "currency", currency : "TRY"});
console.log("tr-TR",Numero2);
Numero2 = Numero.toLocaleString("en-US",{style: "currency", currency : "USD"});
console.log("en-US",Numero2);
Numero2 = Numero.toLocaleString("en-UK",{style: "currency", currency : "GBP"});
console.log("en-UK",Numero2);
Numero2 = Numero.toLocaleString("de-DE",{style: "currency", currency : "EUR"});
console.log("de-DE",Numero2);


// Oranli = 50; // % 5000 verir
Oranli = 0.5 // %50 verir
Oranli2 ="";
Oranli2 = Oranli.toLocaleString(undefined,{style: "percent"});
console.log("Oran : ",Oranli2);


Birimli = 30;
Birimli2 ="";
Birimli2 = Birimli.toLocaleString(undefined,{style: "unit", unit : "celsius"});
console.log("Sicaklik : ",Birimli2);
Birimli2 = Birimli.toLocaleString(undefined,{style: "unit", unit : "fahrenheit"});
console.log("Sicaklik : ",Birimli2);
Birimli2 = Birimli.toLocaleString(undefined,{style: "unit", unit : "kilogram"});
console.log("Agirlik : ",Birimli2);
Birimli2 = Birimli.toLocaleString(undefined,{style: "unit", unit : "pound"}); //lb - pound işareti
console.log("Agirlik : ",Birimli2);
Birimli2 = Birimli.toLocaleString(undefined,{style: "unit", unit : "kilometer"});
console.log("Distance : ",Birimli2);
Birimli2 = Birimli.toLocaleString(undefined,{style: "unit", unit : "liter"});
console.log("Hacim : ",Birimli2);
Birimli2 = Birimli.toLocaleString(undefined,{style: "unit", unit : "week"});
console.log("Süre : ",Birimli2);
Birimli2 = Birimli.toLocaleString(undefined,{style: "unit", unit : "month"});
console.log("Süre : ",Birimli2);
Birimli2 = Birimli.toLocaleString("en-US",{style: "unit", unit : "week"});
console.log("Süre : ",Birimli2);
Birimli2 = Birimli.toLocaleString("en-US",{style: "unit", unit : "month"});
console.log("Süre : ",Birimli2);
Birimli2 = Birimli.toLocaleString("de-DE",{style: "unit", unit : "week"});
console.log("Süre : ",Birimli2);
Birimli2 = Birimli.toLocaleString("de-DE",{style: "unit", unit : "month"});
console.log("Süre : ",Birimli2);
Birimli2 = Birimli.toLocaleString("el-GR",{style: "unit", unit : "week"});
console.log("Süre : ",Birimli2);
Birimli2 = Birimli.toLocaleString("el-GR",{style: "unit", unit : "month"});
console.log("Süre : ",Birimli2);
