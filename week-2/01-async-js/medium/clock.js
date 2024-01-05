// let h = 0,
//   m = 0,
//   s = 0;
// setInterval(() => {
//   if (s < 59) {
//     s++;
//   } else {
//     s = 0;
//     if (m < 59) {
//       m++;
//     } else {
//       m = 0;
//       if (h < 23) {
//         h++;
//       } else {
//         console.log("times Up!");
//       }
//     }
//   }

//   console.log(h, " : ", m, " : ", s);
// }, 10);

// setInterval(() => {
//   var now = new Date();
//   let h = now.getHours().toString().padStart(2, "0");
//   let m = now.getMinutes().toString().padStart(2, "0");
//   let s = now.getSeconds().toString().padStart(2, "0");

//   console.log(h, " : ", m, " : ", s);
// }, 1000);

setInterval(() => {
  var now = new Date();
  let h = now.getHours();
  let ampm = h > 12 ? "PM" : "AM";
  h = (h % 12 || 12).toString().padStart(2, "0");
  let m = now.getMinutes().toString().padStart(2, "0");
  let s = now.getSeconds().toString().padStart(2, "0");

  console.log(h, " : ", m, " : ", s, " ", ampm);
}, 1000);
