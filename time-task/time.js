function timeDay (a, b, c){
    if (c > 60){
        a = Math.floor(c / 60) + a
        if (b + (c % 60 ) >= 60){
            let e = b + (c % 60)
            console.log(Math.floor(e / 60) + a, e % 60)
        }
        if  (a >= 24) {
            console.log(a - 24, b + (c % 60))
        }
    }else {
        if ((c + b) >= 60){
            let d = c + b
            console.log(Math.floor(d / 60) + a, d % 60)
        }else{
            console.log(a, (c + b))
        }
    }
}
timeDay(18, 39, 141)