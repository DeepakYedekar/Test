// Prime number is divisible by itself and one
function prime(n){
    for(let i=2;i<n;i++){
        if(n%i===0)return console.log("Not A Prime Number");
    }
    return console.log('Is A Prime Number');
}


prime(10);