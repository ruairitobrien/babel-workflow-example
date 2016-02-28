import {ForWantOfANail} from './forWantOfANail.js';
const nail = new ForWantOfANail();

console.log(nail.toString());

if (typeof document !== "undefined")
    document.getElementById('output').innerHTML = nail.toHtmlString()
