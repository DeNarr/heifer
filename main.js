import { moo } from "./moo.js";
import { say } from "cowsay"

const name = "Ryan";
const message = moo(name);
console.log(say({ text: message }));