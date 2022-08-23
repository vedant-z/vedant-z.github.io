const co2 = document.querySelector('#co2');
const gh = document.querySelector('#gh');
const temp = document.querySelector('#temp');
const forest = document.querySelector('#forest');

co2.innerHTML = (Math.random() * 450 + 415).toPrecision(5);
gh.innerHTML = (Math.random() * 5500 + 5000).toPrecision(5);
temp.innerHTML = (Math.random() * 1).toPrecision(2);
forest.innerHTML = Math.floor(Math.random() * 1000) + 100;