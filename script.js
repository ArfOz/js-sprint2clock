function zaman(){
    var date = new Date();
    var s = date.getHours();
    var d = date.getMinutes();
    var sa = date.getSeconds();

    s = (s>12) ? (s-12) : s;
    // d = (d>9) ? (d) : ("0"+d);
    // sa = (sa>9) ? (sa) : ("0"+sa);
    
    var dilim = s>12 ? "PM" : "AM";


    document.getElementById("saat").innerHTML = s + ":" + d + ":" + sa +" "+ dilim;

    setTimeout(zaman,500);

    


}

zaman();