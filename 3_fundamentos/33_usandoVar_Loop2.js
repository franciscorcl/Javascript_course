const funcs = []

for (var i = 0; i < 10; i++) {  //Por var não ter escopo de função ele var ser declarada globalmente e ter o ultimo valor
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()