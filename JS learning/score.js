var mark=prompt("Enter your score");
mark=parseInt(mark,10);
if(mark>90 && mark<=100){
    document.write("You got A+");
}
else if(mark>80 && mark<=90){
    document.write("You got A-");
}
else if(mark>70 && mark<=80){
    document.write("You got B+");
}
else if(mark>60 && mark<=70){
    document.write("You got B-");
}
else if(mark>50 && mark<=60){
    document.write("You got C+");
}
else if(mark>40 && mark<=50){
    document.write("You got C-");
}
else if(mark>30 && mark<=40){
    document.write("You got D");
}
else if(mark>20 && mark<30){
    document.write("You got E");
}
else{
    document.write("Wasted!!");
}