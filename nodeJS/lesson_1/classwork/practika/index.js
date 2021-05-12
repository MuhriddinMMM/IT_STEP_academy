const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("вы зашли в корневою директорию");
  res.send("DOMASHNAYA DIREKSIYA");
});
app.get("/services", (req, res) => {
  res.send("LYUBAYA INFORMATSIYA KASAYUSHASYA USLUG KOMPANIYU");
});
app.get("/contacts", (req, res) => {
  res.send("LYUBAYA INFORMATSIYA KASAYUSHASYAkontaktov");
});
app.get("/blogs", (req, res) => {
  res.send("ADRES S POSTAMI");
});
app.get("/blogs/:category/:postId", (req, res) => {
     console.log(req.params);
     const { category, postId} = req.params;
   res.send(`<h1 style="color:red;">category  ${category}ID = ${postId}</h1>`);
});
app.post("/contacts/:postTag", (req, res) => {
  res.send("ajsdjsdjkada shto nibud ");
});
app.get("/search", (req, res) => {
  const {q} = req.query;
  res.send(`<h2>ishem ${q}</h2>`);
});
app.get("*", (req, res) => {
  res.send("takogo adres not availably");
});
app.listen(8080, ()=> {
    console.log("Server is running 8080");
})