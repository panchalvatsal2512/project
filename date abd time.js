/*"Date ek object hai jo date aur time ki values ko handle karta hai."*/

let date = new Date()
console.log(date.toString());//Yeh current date aur time ko human-readable string format mein return karta hai.Isme pura date, time, timezone, aur offset ki information hoti hai.

console.log(date.toDateString());//Yeh sirf date part ko string format mein return karta hai (time remove ho jaata hai).Sirf day, month, date aur year ki information hoti hai.

console.log(date.toISOString());//Yeh date aur time ko ISO 8601 format mein return karta hai (universal standard format).

console.log(date.toJSON()); //Yeh toISOString() ka hi output return karta hai, lekin JSON serialization ke liye use hota hai.JSON APIs mein date ko standard format mein bhejne ke liye helpful hota hai.

console.log(date.toLocaleDateString()); //Yeh sirf date part ko return karta hai, lekin local format ke according.Different countries ke formats alag hote hain.\console.log(date.toLocaleString());//Yeh date aur time ko local format ke according return karta hai.

console.log(date.toLocaleTimeString());//Yeh sirf time part ko local format ke according return karta hai.Yeh sirf hours, minutes, aur seconds ki information deta hai.

console.log(date.toTimeString());//Yeh sirf time part ko full format mein return karta hai (timezone included).

console.log(date.toUTCString());// Yeh date aur time ko UTC (Universal Coordinated Time) format mein return karta hai.


//Full Code Output Example:

// let newdate = new Date();

console.log(newdate.toString());          // Tue Jan 23 2025 14:30:45 GMT+0530 (India Standard Time)
console.log(newdate.toDateString());      // Tue Jan 23 2025
console.log(newdate.toISOString());       // 2025-01-23T09:00:45.123Z
console.log(newdate.toJSON());            // 2025-01-23T09:00:45.123Z
console.log(newdate.toLocaleDateString()); // 23/01/2025 (depends on locale)
console.log(newdate.toLocaleString());    // 23/01/2025, 2:30:45 pm
console.log(newdate.toLocaleTimeString()); // 2:30:45 pm
console.log(newdate.toTimeString());      // 14:30:45 GMT+0530 (India Standard Time)
console.log(newdate.toUTCString());       // Tue, 23 Jan 2025 09:00:45 GMT
console.log(typeof newdate); // iska type object hota he date ek object he 


let now = new Date();
console.log(now)