document.querySelector("#grandParent").addEventListener("click",function(e){
    alert("grandparent selected")
    console.log("grandparent selected")
    e.stopPropagation()
})

document.querySelector("#parent").addEventListener("click",function(e){
    alert("parent selected")
    console.log("parent selected")
    e.stopPropagation()
})

document.querySelector("#child").addEventListener("click",function(e){
    alert("child selected")
    console.log("child selected")
    e.stopPropagation()
    
})