let n
初始化()
setInterval(()=>{
makeLeave(getImage(n))
.one('transitionend',(e)=>{
 makeEnter($(e.currentTarget))
})
makeCurrent(getImage(n+1))
n += 1
},2000)



function x(n){
    n = (n-1)%5 + 1
      return n
}
function 初始化(){
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}

function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')
    return $node
}
function makeLeave($node){
    $node.removeClass('enter current').addClass('leave')
    return $node
}
function makeEnter($node){
    $node.removeClass('leave current').addClass('enter')
    return $node
}
function getImage(n){
   return $(`.images > img:nth-child(${x(n)})`)
}