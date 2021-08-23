const form = document.querySelector(".form-add");
const submitBtn = document.querySelector(".btn-submit");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.dir(form);
  const obj = {};
  for (let elem of form) {
    obj[elem.name] = elem.value;
  }
  console.log(obj);
});

// let productNew = {
//   id = uuid(),
//       title:obj.title,
//       description,
//       imgUrl,
//       price,
//       discount,
//       quantity,
// }
