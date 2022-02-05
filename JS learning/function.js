let a=parseInt(prompt("enter a number"));
let b=parseInt(prompt("enter a number"));
const multiplicationTable=(m,n)=>{
if(n>m){
for(let j=m; j<=n; j++){
    for(let i=1; i<=10; i++){
        document.write(j+"x"+i+"="+i*j+"<br>");
    }
    document.write(`<br>`);
}
}

else{
    alert("error...");
}
}
multiplicationTable(a,b);
multiplicationTable(4,8);




/*function multiplicationTable(){

}

const multiplicationTable=()=>{

}*/