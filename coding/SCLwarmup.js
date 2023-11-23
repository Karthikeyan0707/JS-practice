const prompt=require('prompt-sync')();
let c=0
const a="sasken"
var txt=prompt("enter the string")
var b=txt.split(" ")
console.log(b)
for( i=0;i<b.length;i++){
    if(a==b[i]){
        c+=1
    }  
}
var ab="!"
if (c<0)
{
    console.log("Hello world!")
}
else{
    let e="Hello sasken"
    while(c>1)
    {
   ab+='!'
        c--
    }
    // let bc=e.concat(" ",ab)
    console.log(e+ab)
    // console
}
// var res=(txt.match(/sasken/gi)||[]).length