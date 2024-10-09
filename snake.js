var chart=document.querySelector("img");
var horMovement=0;
var verMovement=0;
document.addEventListener("keydown",function(val){
    if(val.key.toLowerCase()=="d"){
        
        horMovement+=5;
        chart.style.transform=`translate(${horMovement}px,${verMovement}px) `
    }
})
document.addEventListener("keydown",function(val){
    if(val.key.toLowerCase()=="a"){
        console.log(val.key);
        horMovement-=5;
        chart.style.transform=`translate(${horMovement}px,${verMovement}px) rotate(180deg)`
    }
}
)
document.addEventListener("keydown",function(val){
    if(val.key.toLowerCase()=="s"){
        console.log(val.key);
        verMovement+=5;
        chart.style.transform=`translate(${horMovement}px,${verMovement}px) rotate(90deg)`
    }
})
document.addEventListener("keydown",function(val){
    if(val.key.toLowerCase()=="w"){
        console.log(val.key);
        verMovement-=5;
        chart.style.transform=`translate(${horMovement}px,${verMovement}px) rotate(270deg)`
    }
})