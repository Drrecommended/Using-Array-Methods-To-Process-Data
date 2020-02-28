console.log(items)

var itemTotal = 0


items.forEach(function (item, index) {
    itemTotal += item.price
})

var avg = itemTotal / items.length

var theAnswer1 = document.querySelector("#answer1")
theAnswer1.innerHTML = avg.toFixed(2)

////////////////////////////////////////////////////


var filteredProducts = items.filter(function(item) {
    var price = item.price
    if(price >= 14 && price <= 18){
       return true
    }
})

var html = filteredProducts.map(function(item) {
    return `<p>${item.title}</p>`
}).join('')

theAnswer2 = document.querySelector("#answer2")
theAnswer2.innerHTML = html

////////////////////////////////////////////////////

var currency_code = items.filter(function(item) {
    return item.currency_code === "GBP"
})

var title = currency_code.map(function(item) {
    return `<p>${item.title}costs £${item.price}</p>`
}).join('')


theAnswer3 = document.querySelector("#answer3")
theAnswer3.innerHTML = title

////////////////////////////////////////////////////

var materials = items.filter(function(item) {
    return item.materials.includes('wood')
})

var title2 = materials.map(function(item) {
    return `<p>${item.title} is made of wood</p>`
}).join('')

theAnswer4 = document.querySelector("#answer4")
theAnswer4.innerHTML = title2

////////////////////////////////////////////////////

