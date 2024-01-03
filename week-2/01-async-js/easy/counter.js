let a = 0;

function counter() {
  console.log(a++);

  setTimeout(counter, 1000);
}

counter();
//setInterval(counter, 1000);
