
arr = [1,4,2,4,5,3,52,5,3,4,2,4,2]

function maxminavg(arr){
    var max = arr[0];
    var min = arr[0];
    var total = 0 ;

    for(var i=1; i<arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
        total += arr[i]
    }
    return [max, min, total/arr.length];
}

console.log (maxminavg(arr));