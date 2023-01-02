function isPrime(n){
    for(let i=2;i<n;i++){
        if(n%i===0)return false;
    }
    return true;
}
function nextPrime(x){
    if(x<=1)return 1;
    let prime=x,found=false;
    while(!found){
        prime++;
        if(isPrime(prime))found=true;
    }
    return console.log(prime-x);
}
 
nextPrime(3);

