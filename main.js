let y = 0;

setInterval(()=>{
  y+=150
},1000)
setInterval(()=>{
window.scrollTo(0,y)
},1000)
