let a=parseInt(prompt("enter a value"));
const pattern=(m)=>{
    for(let row=1; row<=m; row++){
        for(let col=1; col<=row; col++){
            document.write(` ${col}`);
        }
        document.write("<br>");
    }
}
pattern(a);
document.write("<br>");
pattern(a);