function add(name){
    console.log(`Hello ${name}`);
}


console.log(add("prashant"))

function makeTea(typeoFTea){
    return `making ${typeoFTea}`
}

console.log(makeTea("chai"))


function orderTea(teaType){
    function confirmOrder(){
        return `order confirmed for chai ` ;
    }
    return confirmOrder()
}

console.log(orderTea("coffee"))

const total = (price,quantity) => {
   return price * quantity 
}

let totalcost  = total(10,5)

console.log(totalcost)

// const total = (price,quantity) => price * quantity // implicit - everything in one line 