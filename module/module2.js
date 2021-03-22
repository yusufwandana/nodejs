var aritmatika = {}

aritmatika.luasPersegi=function(){
    var s = 6;
    luas = s*s;
    console.log('Luas persegi tersebut '+luas+' cm persegi.');
}

aritmatika.luasPersegiPanjang=function(){
    var p = 6; var l = 7;
    luas = p*l;
    console.log('Luas persegi panjang tersebut '+luas+' cm persegi.');
}

exports.data=aritmatika;