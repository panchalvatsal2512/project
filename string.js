// let a = "vatsal";
// let b  = 20;
// console.log(`hello my name is ${a} and my age is ${b}`);// isko string interpolation kehte he iska use karna he


// string methods

// length: Ye method aapko batata hai ki string mein kitne characters hain. Jaise "Hello" mein 5 characters hain.
let a = "hello";
console.log(a.length);

// toUpperCase(): Ye method string ko badal kar sabko capital letters mein convert kar deta hai.
let b = "hello";
console.log(b.toLocaleUpperCase());

// toLowerCase(): Ye method string ko lowercase (chhote) letters mein convert karta hai.
let c = "HELLO"
console.log(c.toLocaleLowerCase());

// charAt(): Ye method aapko bataata hai ki kisi specific position (index) par kya character hai. Jaise agar aapko index 2 pe character chahiye, to ye wahan ka character return karega.
let d = "hello";
console.log(d.charAt(4));

// substring(): Agar aapko string ka ek chhota hissa chahiye, to ye method kaam aata hai. Aap start aur end index dekar ek part nikaal sakte hain.
let e = "hello vatsal";
console.log(e.substring(0,8));

// indexOf(): Agar aapko string mein kisi specific word ya character ka position (index) chahiye, to ye method kaam karta hai.
let f  = "hello kem cho";
console.log(f.indexOf("h"));

// replace(): Agar aapko string ke kisi hissa ko badalna ho, to replace method use hota hai.
let g = "hello javascript";
console.log(g.replace("javascript","vatsal"));

let yes = "https://www.youtube.com%20watch?v=fozwNnFunlo&list=PPSV";
console.log(yes.replace("%20","/"));

// split(): Ye method string ko tod kar ek array mein convert karta hai. Aap ek specific symbol ya word de sakte hain, jiske basis par string ko split kiya jayega.
let h = "hello,vatsal,manish,yash,keyur";
console.log(h.split(","));

// trim(): Ye method string ke aage aur piche ke extra spaces ko hata deta hai.
let str = "  hello       ";
console.log(str.trim());

// includes(): Ye method check karta hai ki string mein koi specific word ya character hai ya nahi.

let str1  = "hello vatsal";
console.log(str1.includes("vatsal"));

// repeat(): Ye method string ko multiple times repeat karta hai.
let str2 = "hello";
console.log(str2.repeat(5));

// startsWith(): Ye method check karta hai ki string kisi specific word se start hoti hai ya nahi.

let str3 = "hello vatsal kem cho";
console.log(str3.startsWith("hello"));

// endsWith(): Ye method check karta hai ki string kisi specific word se end hoti hai ya nah
let str4 = "hello vatsal kem cho majama";
console.log(str4.endsWith("majama"));

// string methods summery
let user = "vatsal hello kem cho majama";
console.log(user.length);
console.log(user.toLocaleUpperCase());
console.log(user.toLocaleLowerCase());
console.log(user.charAt(10));//0 thi start
console.log(user.substring(0,12));//1 tho start
console.log(user.replace("hello","yash"));
console.log(user.split(","));
console.log(user.repeat(5));
console.log(user.startsWith("vatsal"));
console.log(user.endsWith("majama"));


