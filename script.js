const cars = [
    {name:"Alto K10", price:"₹4L", type:"sub4m", category:"hatchback", image:"https://via.placeholder.com/200"},
    {name:"Dzire", price:"₹8L", type:"sub4m", category:"sedan", image:"https://via.placeholder.com/200"},
    {name:"Nexon", price:"₹12L", type:"sub4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Honda City", price:"₹15L", type:"above4m", category:"sedan", image:"https://via.placeholder.com/200"},
    {name:"Creta", price:"₹18L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"XUV700", price:"₹22L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"kia Seltos", price:"₹21L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"skoda kushaq", price:"₹20L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"renault duster", price:"₹20L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Kia sonet", price:"₹15L", type:"sub4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Wagon R", price:"₹10L", type:"sub4m", category:"hatchback", image:"https://via.placeholder.com/200"},
    {name:"volkswagen golf GTi", price:"₹59L", type:"sub4m", category:"hatchback", image:"https://via.placeholder.com/200"},
    {name:"volkswagen virtus", price:"₹19L", type:"above4m", category:"sedan", image:"https://via.placeholder.com/200"},
    {name:"Jeep compass", price:"₹28L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Grand vitara", price:"₹16L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Skoda kylaq", price:"₹11L", type:"sub4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Tata harrier", price:"₹24L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Range Rover velar", price:"₹84L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Range Rover Evoque", price:"₹74L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Range Rover Sport", price:"₹144L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Range Rover Autobiography", price:"₹184L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"}, 
    {name:"Porsche 911 carrera", price:"₹219L", type:"above4m", category:"sedan", image:"https://via.placeholder.com/200"},
    {name:"Porsche panamera GT3 rs", price:"₹279L", type:"above4m", category:"sedan", image:"https://via.placeholder.com/200"},
    {name:"BMW M340i", price:"₹119L", type:"above4m", category:"sedan", image:"https://via.placeholder.com/200"},
    {name:"BMW x1", price:"₹119L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"BMW x3", price:"₹159L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"BMW 7 series", price:"₹219L", type:"above4m", category:"sedan", image:"https://via.placeholder.com/200"},
    {name:"Hyundai i20 N-line", price:"₹14L", type:"sub4m", category:"hatchback", image:"https://via.placeholder.com/200"},
    {name:"Toyota Rav-4", price:"₹31L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Toyota LC 300", price:"₹311L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Mercedes Benz GLS", price:"₹321L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Mercedes Benz AMG G63", price:"₹391L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Mercedes Benz AMG cle 53", price:"₹291L", type:"above4m", category:"sedan", image:"https://via.placeholder.com/200"},
    {name:"Audi Q3", price:"₹111L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Lexus LX 570", price:"₹315L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"},
    {name:"Lexus ES", price:"₹215L", type:"above4m", category:"sedan", image:"https://via.placeholder.com/200"},
    {name:"Kia Carens Clavis", price:"₹25L", type:"above4m", category:"suv", image:"https://via.placeholder.com/200"}
];

let favorites = [];
let compareList = [];

function displayCars(list) {
    const container = document.getElementById("carContainer");
    container.innerHTML = "";

    list.forEach((car, index) => {
        container.innerHTML += `
        <div class="card">
            <img src="${car.image}">
            <h3>${car.name}</h3>
            <p>${car.price}</p>
            <p>${car.category}</p>
            <button class="fav" onclick="addFavorite(${index})">❤️</button>
            <button class="compare" onclick="addCompare(${index})">Compare</button>
        </div>`;
    });
}

function filterCars(type) {
    if(type==="all") displayCars(cars);
    else if(type==="sedan"||type==="suv"||type==="Luxury suv")
        displayCars(cars.filter(c=>c.category===type));
    else
        displayCars(cars.filter(c=>c.type===type));
    else
        displayCars(cars.filter(c=>c.type===type));
}

function searchCars() {
    let value = document.getElementById("search").value.toLowerCase();
    let filtered = cars.filter(c => c.name.toLowerCase().includes(value));
    displayCars(filtered);
}

function addFavorite(index) {
    favorites.push(cars[index]);
    displayFavorites();
}

function displayFavorites() {
    let favDiv = document.getElementById("favorites");
    favDiv.innerHTML = "";
    favorites.forEach(car=>{
        favDiv.innerHTML += `<div class="card"><h3>${car.name}</h3></div>`;
    });
}

function addCompare(index) {
    if(compareList.length < 2){
        compareList.push(cars[index]);
        displayCompare();
    }
}

function displayCompare() {
    let box = document.getElementById("compare");
    if(compareList.length === 2){
        box.innerHTML = `
        <h3>${compareList[0].name} vs ${compareList[1].name}</h3>
        <p>${compareList[0].price} vs ${compareList[1].price}</p>
        <p>${compareList[0].category} vs ${compareList[1].category}</p>
        `;
    }
}

// initial load
displayCars(cars);
