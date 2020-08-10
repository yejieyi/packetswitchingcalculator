function calculate(){
    var tbandwidth = $('#tbandwidth').val();
    var ubandwidth = $('#ubandwidth').val();
    var activeP = $('#activeP').val();
    var num = $('#num').val();
    // alert(tbandwidth);
    tbandwidth = parseNumber(tbandwidth);
    ubandwidth = parseNumber(ubandwidth);
    var limit = tbandwidth/ubandwidth;
    var p=0;
    for (var a=limit+1;a<=num;a++){
        var b = num-a;
        p+= fact(num)/(fact(a)*fact(b))*Math.pow(activeP,a)*Math.pow(1-activeP,b);
    }
    alert("probability is: "+p);
    return p;
    // alert(tbandwidth);
    // console.log(tbandwidth);
    // alert(tbandwidth);
    // return false;
}

function parseNumber(num){
    console.log(num);
    switch (num.substring(num.length-1,num.length).toLowerCase()) {
        case "k":
            num = num.substring(0,num.length-1)*1000;
            break;
        case "m":
            num = num.substring(0,num.length-1)*1000000;
            break;
        case "g":
            num = num.substring(0,num.length-1)*1000000000;
            break;
    }
    return num;
}

function fact(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * fact( num - 1 ); }
}