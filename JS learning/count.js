var m=parseInt(prompt("enter starting value"));
var n=parseInt(prompt("enter finishing value"));
if(n>m){
for(var j=m; j<=n; j++){
    for(var i=1; i<=10; i++){
        document.write(j+"x"+i+"="+j*i+"<br>");

    }
    document.write("<br><br>");
}
}
else{
    alert("\\finishing value must be greater than starting value\\");
    alert("error...");
     alert("RELOAD THE PROGRAM");
}
