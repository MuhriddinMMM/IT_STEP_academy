const form = document.querySelector(".form-add");
const submitBtn = document.querySelector(".btn-submit");
const obj = {};
let array = [];
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.dir(form);

  for (let elem of form) {
    obj[elem.name] = elem.value;
  }
  console.log(obj);
  console.log(obj.mainimgUrl);

  if (obj.size_xs !== undefined) {
    console.log("save this");
  }
  const { title, price, description, discount, vendorCode, color } = obj;
  array.push({
    imgUrl: obj.mainimgUrl,
    imgUrls: [obj.mainimgUrl, obj.secondimgUrl, obj.thirdimgUrl],
    title,
    price,
    description,
    discount,
    vendorCode,
    color,
    sizes: [
      {
        size: obj.size_xs,
        qty: Number(obj.qty_xs),
      },
      {
        size: obj.size_s,
        qty: Number(obj.qty_s),
      },
      {
        size: obj.size_m,
        qty: Number(obj.qty_m),
      },
      {
        size: obj.size_l,
        qty: Number(obj.qty_l),
      },
      {
        size: obj.size_xl,
        qty: Number(obj.qty_xl),
      },
    ],
    quantity: 0,
  });
  console.log(array);
  let num = 0;
  if (obj.size_xs === undefined) {
    delete array[0].sizes[0];
  } else {
    num += Number(obj.qty_xs);
  }
  if (obj.size_s === undefined) {
    delete array[0].sizes[1];
  } else {
    num += Number(obj.qty_s);
  }
  if (obj.size_m === undefined) {
    delete array[0].sizes[2];
  } else {
    num += Number(obj.qty_m);
  }
  if (obj.size_l === undefined) {
    delete array[0].sizes[3];
  } else {
    num += Number(obj.qty_l);
  }
  if (obj.size_xl === undefined) {
    delete array[0].sizes[4];
  } else {
    num += Number(obj.qty_xl);
  }
  array[0].quantity = num;


  
  form.submit();


});
