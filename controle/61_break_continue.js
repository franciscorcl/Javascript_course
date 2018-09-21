const nums = [1,2,3,4,5,6,7,8,9,10]
const strs = ['A','B','C','D','E','F','G','H','I','J']

for (x in nums) {
    if(x == 5) {
        break   //o break não age em cima do IF
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if(y == 5) {
        continue //interompe a execução e vai para a próxima.
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
    for (a in nums) {
        for (b in strs) {
            if(a == 2 && b == 3) break externo
            console.log(`Par = ${a},${b}`)
        }
    }