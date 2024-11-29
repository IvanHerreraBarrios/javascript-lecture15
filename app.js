var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true

    let count = 0
    for(let i=0; i < flowerbed.length; i++){
        if(!flowerbed[i] && !flowerbed[i-1] && !flowerbed[i+1]){
            flowerbed[i] = 1
            count++
            if(count === n){
                return true
            }
        }
    }
    return false
};