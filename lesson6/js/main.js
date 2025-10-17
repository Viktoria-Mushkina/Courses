console.log('hello')
const promise = new Promise((resolve,reject) => {
 resolve('Success')
})
promise.then((res) => {
 console.log(res)
})
function sleep(time){
 const promise = new Promise((res,rej) => {
  setTimeout(() => {
   res()
  },time)
 })
 return promise
}
sleep(3_000).then(() => {
 console.log('world')
})

async function sleep(time) {
 let timer;

 const promise = await new Promise((res,rej) => {
  timer = setTimeout(() => {
   res()
  },time)
 }).finally(() => {
  clearTimeout(timer)
 })
 return promise
}


const url ='https://petstore.swagger.io/v2/store/inventory'
async function getData(signal){
 
 return await fetch(url,{
  signal:signal || undefined,
  method:"GET"
 }).then((res) =>{
  return  res.json()})
  .catch((err) => {
   console.error(err)
   throw err
  })
 }
 const controller = new AbortController();
 getData(controller.signal).then((json) => {
   console.log(json)
 }).catch((err) => {
  alert(err)
 })
 setTimeout(() =>{
  controller.abort()
 },10_000)

function debounce(fn,delay){
 let timer;
 return function(){
  clearTimeout(timer)
  timer = setTimeout(() => {
   fn()
  },delay)
 }
}
function onInput(){
 //   
}
const debouncedInput = debounce(onInput,2_000)

debouncedInput()




// function getData(){
//  const promise = new Promise((res,rej) => {
//   // setTimeout(() => {
//   //  res([
//   //   {
//   //    id:1, name:Ivan    }
//   //  ])
//   // })
//   rej(new Error("bad"))
//  })
//  return promise
// }

