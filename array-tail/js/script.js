function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let arr = []
let num = parseInt(prompt('quanti elementi vuoi inserire?'));

for(i = 0; i < num; i++){
    arr.push(random(1,100));
}
console.log(arr);
if(num > 5){
    for(i = num; i >= num - 5; i--){
        console.log(arr[i]);
    }
}