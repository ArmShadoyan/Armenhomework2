// Exercise 1;
let num = +prompt("Enter the number")  
    sum = 0;        

while(num) {        
                   
    sum += num % 10;    
    num = Math.floor(num/10);
}
console.log(sum);

//____________________________________________________________________________________________________________

//Exercise 2;
let a = +prompt("First side")
let b = +prompt("Second side")
let c = +prompt("Third side")

if(a<(b+c) && b<(a+c) && c<(a+b)){
        alert("yes")
}else{
        alert("no")
}
//____________________________________________________________________________________________________________
//Exercise 3;
let n = +prompt("Enter the number")
let a
let b = 0
while(n){
    a=(n % 10);
    if(a === 9){ b = (b + 1)};
    n=(Math.floor(n/10));
}console.log(b);
//____________________________________________________________________________________________________________
//Exercise 4;
let a=+prompt("Enter the number")

while(a){
console.log(a%10)
a= Math.floor(a/10)
}
//____________________________________________________________________________________________________________
//Exercise 5;
let n = +prompt("Enter the number")
let a
while(n>2){
    a = (n / 2);
    n = (n - a);
};if(n===2){
    console.log("true")
}else{
    console.log("false")
};
//_____________________________________________________________________________________________________________

