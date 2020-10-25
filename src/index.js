module.exports = function toReadable (number) {
    let x=['zero','one','two','three','four','five','six','seven','eight','nine','ten']
    let y=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    let u=[' ',' ','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    function a10(n) {
        let s=' ';
        if ((n===0)&&(number!==0)) return '';
        if (n<10) return x[n];
    if (n<20) return y[n%10];    
    if (n%10===0) return u[n/10];
    return u[(n-n%10)/10]+ ' '+ x[n%10];
    }
    if (number <100) return a10(number);
    
    return (x[(number-number%100)/100]+' hundred '+ a10(number%100)).trim();

}
