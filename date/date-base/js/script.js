"use strict";

const date = new Date();

// DATE API
console.log(date.getFullYear()); // թվականն ենք ստանում - 2022
console.log(date.getMonth()); // ամիս -1
console.log(date.getDay()); // ստանում ենք շաբաթվա օրը, կիրակին = 0
console.log(date.getDate()); // ստանում ենք էս օրվա օրը, 23։59։59։999ից առաջ
console.log(date.toLocaleString()); // 8/30/2022, 10:57:08 PM
console.log(date.toLocaleDateString()); // 8/30/2022
console.log(date.toLocaleTimeString()); // 10:59:00 PM
console.log(date.toDateString()); // Tue Aug 30 2022
console.log(date.toTimeString()); // 23:00:26 GMT+0400 (Armenia Standard Time)

// TIME API
const timeDate = new Date();
console.log(timeDate.getHours()); // ժամ
console.log(timeDate.getMinutes()); // րոպե առանց 0ի
console.log(timeDate.getSeconds()); // վայրկյան
console.log(timeDate.getMilliseconds()); // միլիվայրկյան
console.log(timeDate.getTime()); // միլիվարկյաններով երկար թիվ
console.log(timeDate.getTimezoneOffset()); // ժամային գոտի - 240 րոպե


// TIME ZONE - Asia/Yerevan
console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

// SET
const dSet = new Date();
dSet.setFullYear(353);
dSet.setMonth(7);
dSet.setDate(15);
dSet.setHours(21);
dSet.setMinutes(24);
dSet.setSeconds(53);
dSet.setMilliseconds(411);

console.log(dSet);

// ստուգում ենք մեր կոդի <performacne>-ը

let start = new Date();

let res = 0;

for (let i = 0; i < 500000; i++) {
	res = i ** 2;
}

// console.log(res + " Loop response");

let end = new Date();

console.log(`Loop performance time is: ${end - start} miliseconds`);