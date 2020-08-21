function op(){
const input1 = document.querySelector("input.first").value.trim().toLowerCase();
const input2 = document.querySelector("input.second").value.trim().toLowerCase();
const arr1 = [...input1];
const arr2 = [...input2];
const ed1 = arr1.indexOf(' ');
const ed2 = arr2.indexOf(' ');
if(ed1 === -1)
{
    rm1 = arr1;
}
else{
    arr1[ed1] = '';
    rm1 = arr1;
}
if(ed2 === -1)
{
    rm2 = arr2;
}
else{
    arr2[ed2] = '';
    rm2 = arr2;
}
let s1 = arr1.join('');
let s2 = arr2.join('');
let s = s1.length + s2.length;
const a1 = [...s1];
const a2 = [...s2];
let count = 0;
for(let x of a1){
    for(let y of a2){
        if(x === y){
            count++;
            let a = a2.indexOf(y);
            a2[a] = '';
            break;
        }
    }
}
const res = s - (count * 2);
return getFlames(res,input1,input2);
}
function getFlames(r,i1,i2){
    let num = [r % 6,r % 5,r % 4,r % 3,r % 2];
    let fla = ['Friend','Lover','Affection','Marriage','Enemy','Sister'];
    let fla1;
    let fla2;
    for(i=0;i<num.length;i++) {
        if(num[i] === 0){
            fla.pop();
        }
        else{
            fla1 = fla.slice(num[i]);
            fla2 = fla.slice(0,num[i]-1);
            fla = fla1.concat(fla2);
        }
    }



    if(i1 === '' || i2 === ''){
        return `<strong style = "color:red">Enter Names Please!</strong>`;
    }
    return `The relationship between ${i1} and ${i2} is <strong style="color:yellow"><i>${fla}</i></strong>`;
}
const input3 = document.querySelector("button");
const input4 = document.querySelector("#output");
const input5 = document.querySelector(".output");
let rm1;
let rm2;
input3.addEventListener('click',function(){
    input5.style.display ="block";
    input4.innerHTML = op();
});
