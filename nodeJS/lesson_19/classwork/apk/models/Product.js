const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");

let data = null;
fs.readFile(
  path.join(__dirname, "..", "data", "productlist.json"),
  (err, prods) => {
    if (err) throw err;
    data = JSON.parse(prods);
  }
);

module.exports = class Productadd {
  constructor(title, description, imgUrl, price, discount, quantity) {
    (this.title = title),
      (this.description = description),
      (this.imgUrl = imgUrl),
      (this.price = price),
      (this.discount = discount),
      (this.quantity = quantity);
  }

  addProduct(reqbody) {
    const {
      id = uuid(),
      title,
      description,
      imgUrl,
      price,
      discount,
      quantity,
    } = this;
    let didFound = false;
    for (let products of data) {
      if (products.title === title) {
        products.quantity += Number(quantity);
        didFound = true;
      }
    }

    if (!didFound) {
      data.push({
        id,
        title,
        description,
        imgUrl,
        price,
        discount,
        quantity: Number(this.quantity),
      });
    }

    fs.writeFileSync(
      path.join(__dirname, "..", "data", "productlist.json"),
      JSON.stringify(data)
    );
  }
};
