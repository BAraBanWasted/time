
let time1 = document.getElementById('time1')
let time2 = document.getElementById('time2')
let time3 = document.getElementById('time3')
let time4 = document.getElementById('time4')
let time5 = document.getElementById('time5')
let input = document.getElementById('input')
let button = document.getElementById('button')
function dony(){
    let todey = new Date()
    let ny = new Date ('2024-01-01')
let total = ny-todey
let days = total/1000/60/60/24
let t1 = parseInt(days)
let t2 =parseInt((days-parseInt(days))*24-3)
let t3 =parseInt(((days-t1)*24-3-t2)*60)
let t4 = parseInt(((((days-t1)*24-3-t2)*60)-t3)*60)
console.log(t1,t2,t3,t4)
time1.innerHTML = '<h3>'+t1+'дней'+t2+'часов'+t3+'минут'+t4+'секунд'+'</h3>'
}
button.onclick = dony1
function dony1(){
    let todey = new Date()
    let ny = new Date(input.value)
let total = ny-todey
let days = total/1000/60/60/24
let t1 = parseInt(days)
let t2 =parseInt((days-parseInt(days))*24-3)
let t3 =parseInt(((days-t1)*24-3-t2)*60)
let t4 = parseInt(((((days-t1)*24-3-t2)*60)-t3)*60)
console.log(t1,t2,t3,t4)
time5.innerHTML = '<h3>'+t1+'дней'+t2+':'+t3+':'+t4+'</h3>'
setInterval(dony1,1000)
}

function prostotime(){
    let todey = new Date()
    let n1 = todey.getHours()
    let n2 = todey.getMinutes()
    let n3 = todey.getSeconds()
    time2.innerHTML = '<h3>'+n1+':'+n2+':'+n3+'</h3>'
}
function prostotime1(){
    let todey = new Date()
    let n1 = (todey.getHours()-2)
    let n2 = todey.getMinutes()
    let n3 = todey.getSeconds()
    time3.innerHTML = '<h3>'+n1+':'+n2+':'+n3+'</h3>'
}
function prostotime2(){
    let todey = new Date()
    let n1 = (todey.getHours()+7)
    let n2 = todey.getMinutes()
    let n3 = todey.getSeconds()
    time4.innerHTML = '<h3>'+n1+':'+n2+':'+n3+'</h3>'
}

setInterval(dony,1000)

setInterval(prostotime,1000)
setInterval(prostotime1,1000)
setInterval(prostotime2,1000)
