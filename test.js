const safetrade = require("./index.js")
const client = new safetrade(process.env["KEY"], process.env["SECRET"]);

console.log(await client.getOrders())