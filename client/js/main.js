import {ForWantOfANail} from './forWantOfANail.js';
const nail = new ForWantOfANail();

console.log(nail.toString());

if(!!document) document.getElementById('output').innerHTML = nail.toHtmlString();