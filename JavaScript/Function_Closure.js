let a =9 ;
function outer(){
    let b=10;
    console.log(a,b);
    function inner(){
        let c=11;
        console.log(a,b,c);
    }
    inner();
}
outer();