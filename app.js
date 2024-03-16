document.write(`<h1>Fruits Name with pop( )</h1>`)

document.write(`<h2>Fruits Name <i>Whithout pop( )</i></h2>`)

let fruits = ['Apple', 'Mango', 'Pineapple', 'Grapes', 'Melon'];
document.write(`<h3>${fruits}</h3>`)

document.write(`<h2>Fruits Name <i>Whith pop( )</i></h2>`)
fruits.pop();
document.write(`<h3>${fruits}</h3><br><br><br><br>`)

document.write(`<h1>Cities List</h1>`)

let cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
document.write(`<h2>${cities}</h2>`)
document.write(`<strong>Select Only Two Cities</strong>`)
document.write(`<h2>${cities.slice(2,4)}</h2>`)
