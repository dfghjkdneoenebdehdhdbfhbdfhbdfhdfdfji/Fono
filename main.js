  // let inp = document.querySelector('input')  
  // let btn = document.querySelector('botton')  
  // let h1 = document.querySelector('h1')  

//   let obj ={
//     name: 'Asan',
//     age:18,
//   }


//   btn.addEventListener('click',()=>{
//   localStorage.setItem('flex',JSON.stringify(obj))
//   localStorage.setItem('flex',obj.age)
//   })

// let object = JSON.parse(localStorage.getItem('flex'))
// h1.innerHTML = object


// let num = 15
// let num1 = localStorage.setItem('text',num)
// let res = localStorage.setItem('text')
// h1.innerHTML = res

// let obj = {
//     name: 'Hello',
//     age:20,
//     married:false
// }

// let ret = JSON.stringify(obj)
// let returnsSet = localStorage.setItem('flex',ret)
// let returnsGet = JSON.parse(localStorage.getItem('flex'))
// h1.innerHTML = returnsGet.name
// // localStorage.removeItem('flex')


let body = document.querySelector('body')
 let btn = document.querySelector('button') 
 let text = document.querySelector('h1')

 const wi = () =>{
  body.style.backgroundColor = '#333'
  text.style.color = '#fff'
  body.style.transition = '.5s'
 }

 
 const bl = () =>{
  body.style.backgroundColor = '#fff'
  text.style.color = '#000'
  body.style.transition = '.5s'
 }

 if(localStorage.getItem('color') == 'bl'){
  bl()
 }else{
  wi()
 }

 let i = 0 

 btn.addEventListener('click',() =>{
  if(i % 2 == 0){
    bl()
    localStorage.setItem('color','wi')
    i++
  }else{
    wi()
    localStorage.setItem('color','bl')
    i = 0 
  }
 })