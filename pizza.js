let requestURL = 'https://github.com/200427063/JSON-Georgin/blob/master/pizza.json';


//create new XHR
let request = new XMLHttpRequest();

//open new request
request.open('GET', requestURL);

// request Types
request.responseType = 'json';
// send the request using send

request.send();

// wait for the request to be returned , store responce i na variables,
//invoke pizzaTypes function with pizzatypes

request.onload = function() {
let plentyPizza = request.response;
console.log(plentyPizza);
pizzaTypes(plentyPizza);

};



function pizzaTypes(jsonObj) {
  let pizzaTypes = jsonObj.pizzaTypes;

  let section = document.queryselector('section');
  for (let i = 0; i< pizzaTypes.length; i++){
//build the new html element on our page
    let article = document.createElement('article');
    let h2 = document.createElement('h2')
    let img = document.createElement('img')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let ul = document.createElement('ul')


    img.setAttribute('src', 'https://github.com/200427063/JSON-Georgin/tree/master/assets'
  + pizzaTypes[i].image);
  img.setAttribute('alt', pizzaTypes[i].image);
  h2.textContent = pizzaTypes[i].name;
  p1.textContent = 'Size' + pizzaTypes[i].size;
  p2.textContent = 'Price' + pizzaTypes[i].Price;
  let toppings = pizzaTypes[i].toppings;
  for(let j = 0; j<  toppings.length; j++) {

    let listItem = document.createElement('li');
    listitem.textContent = toppings[j];
    ul.appendChild(listItem);
  }

  articel.appendChild(img);
    articel.appendChild(h2);
    articel.appendChild(p1);
    articel.appendChild(p2);
    articel.appendChild(ul);
  articel.appendChild(article);

  }


}
