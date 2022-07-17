const str = '00112233445566778899';
const P = 11;
let output = 0;
const arr = [];
for (let i = 0; i < str.length; i++) {
    let sn = str[i];
    console.log(sn + ' : ')
    console.log(((sn) % P === 0) + '\n')
    if (parseFloat(sn) % P === 0) {
            arr.push(sn);
            output++;
    }
    if(i<str.length-1) {
        for (let j = i + 1; j < str.length; j++) {
            sn = sn + str[j];
            console.log(i, j)
            console.log(sn + ' : ')
            console.log((parseFloat(sn) % P === 0) + '\n')
            if (parseFloat(sn) % P === 0) {
                arr.push(sn);
                output++;
            }
        }
    }
}
console.log('output:', output)
console.log('arr:', arr)
console.log(Big(112233445566778899)%BigInt(11))
console.log(Number(112233445566778899)/11)
console.log(Number(10203040506070809)*11)