for(var i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
        document.write("fizz buzz"+"<br>");
    }    
    else if(i%3==0){
        document.write("fizz"+"<br>");
    }
    else if(i%5==0){
        document.write("buzz"+"<br>");
    }
    else{
        document.write(i+"<br>");
    }
}