const svetofor = document.querySelector('.svetofor');
const colors = ["red",'yellow','green'];

const colorsDOM = colors.map((color) =>{
 const currenColor = document.createElement("div");
 currenColor.classList.add('circle');
 if (color === "red") currenColor.classList.add("red")
 svetofor.appendChild(currenColor)
 return currenColor;
})
// const red = document.createElement("div");
// red.classList.add("red","circle")
// svetofor.appendChild(red);

// const yellow = document.createElement("div");
// yellow.classList.add("circle")
// svetofor.appendChild(yellow);

// const green = document.createElement("div");
// green.classList.add("circle")
// svetofor.appendChild(green);

const btn = document.createElement("button")
btn.innerText = "Next"
document.body.appendChild(btn);

let colorIndex = 0;
const handleBtnClick = () => {
 colorsDOM[colorIndex].classList.remove(colors[colorIndex]);
 colorIndex = (colorIndex + 1) % colors.length;
 colorsDOM[colorIndex].classList.add(colors[colorIndex])
}

btn.addEventListener("click", handleBtnClick)

const timerBtn = document.createElement("button")
timerBtn.innerText = "Timer";
document.body.appendChild(timerBtn);

let timer;
timerBtn.addEventListener("click", () => {
 if (timer){
  clearInterval(interval)
 }
 timer = setInterval(() => handleBtnClick(),1000)
 
})


// btn.addEventListener("click", () => {
//  if (red.classList.contains('red')){
//   red.classList.remove('red')
//   yellow.classList.add('yellow')
//  }
//  else if (yellow.classList.contains('yellow')){
//   yellow.classList.remove('yellow')
//   green.classList.add('green')
//  }
//  else if (green.classList.contains('green')){
//   green.classList.remove('green')
//   red.classList.add('red')
//  }
// })