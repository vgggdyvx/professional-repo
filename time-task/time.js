function timeDay (a, b, c){
    let finalTime = []
    if (c > 60){
        a = Math.floor(c / 60) + a
        if (b + (c % 60 ) >= 60){
            let e = b + (c % 60)
            finalTime.push(Math.floor(e / 60) + a, e % 60)
        }
        if  (a >= 23) {
            finalTime.push(a - 23, b + (c % 60))
        }
    }else {
        if ((c + b) >= 60){
            let d = c + b
            finalTime.push(Math.floor(d / 60) + a, d % 60)
            if  (a >= 23) {
                finalTime.push(a - 23, d % 60)
            }
        }else{
            finalTime.push(a, (c + b))
        }
    }
    return finalTime
}
console.log(timeDay(22, 15, 45))
