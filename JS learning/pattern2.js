//binary pattern = even number%2
//ASCII number change = String.fromCharCode(condition)
let n=parseInt(prompt("enter a value"));
for(let row=n; row>=1; row--){
    for(let col=1; col<=row; col++){
        document.write(` ${col}`);
    }
    
    document.write(`<br>`);
}
for(let row=2; row<=n; row++){
    for(let col=1; col<=row; col++){
        document.write(` ${col}`);
    }
    document.write(`<br>`);
}
