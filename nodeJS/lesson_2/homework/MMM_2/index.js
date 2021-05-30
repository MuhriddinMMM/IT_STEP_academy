const express = require("express");
const app = express();

const { v4: uuid } = require("uuid");
app.use(
  express.urlencoded({
    extended: true,
  })
);

const blogs = [
  {
    id: uuid(),
    author: "David Murphy",
    title: "Why Apple Music's 'Lossless Audio' Isn't That Big of a Deal",
    description:
      "I confess, even I got a little excited when I heard that Apple was upping the quality of many of its Apple Music tracks to lossless audio. While that’s not a you-can-listen-now change, as the 75+ million lossless tracks are debuting in June, it’s still someth…",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e04f380a02a9a0be6cf1dad109033dfc.jpg",
    publishedAt: "2021-05-19T18:15:00Z",
    content:
      "I confess, even I got a little excited when I heard that Apple was upping the quality of many of its Apple Music tracks to lossless audio. While thats not a you-can-listen-now change, as the 75+ mill… [+2568 chars]",
  },
  {
    id: uuid(),
    author: "Brendan Hesse",
    title:
      "How to Stop Apple Music CarPlay From Crashing Until There's a Real Fix",
    description:
      "Over the last few days, we’ve seen lots of reports across Reddit and social media that Apple Music on CarPlay has been crashing unexpectedly. While we don’t know the specific cause, and there’s no confirmed fix yet, there are a few workarounds you can try whi…",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8850ba872255efc1e001f18d7177d6b6.png",
    publishedAt: "2021-05-19T16:00:00Z",
    content:
      "Over the last few days, weve seen lots of reports across Reddit and social media that Apple Music on CarPlay has been crashing unexpectedly. While we dont know the specific cause, and theres no confi… [+1680 chars]",
  },
  {
    id: uuid(),
    author: "Associated Press",
    title: "Android users can now tap to pay for transit rides in the Bay Area",
    description: "Google Pay joins Apple Wallet in supporting Clipper cards..",
    urlToImage:
      "https://s.yimg.com/os/creatr-uploaded-images/2021-05/05935670-b8dc-11eb-9f3c-07e17557af8a",
    publishedAt: "2021-05-19T20:02:19Z",
    content:
      "San Francisco Bay Area residents and visitors can now use\r\n Android devices to pay for rides on 24 public transit systems across the region. Apple Wallet has supported\r\n the Clipper card on iPhone an… [+1155 chars]",
  },
  {
    id: uuid(),
    author: "Kirsten Korosec",
    title: "Apple's SignTime brings up a sign language translator on demand",
    description:
      "A host of new accessibility tools will make using Apple devices easier for all..",
    urlToImage:
      "https://s.yimg.com/os/creatr-uploaded-images/2021-05/5e9dd710-b8c6-11eb-bbe7-4e8128644596",
    publishedAt: "2021-05-19T17:28:28Z",
    content:
      "Apple has long taken accessibility seriously. Just spend five minutes in the relevant section of your iPhones settings and youll find a veritable trove of helpful settings many of them useful to ever… [+3594 chars]",
  },
];
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/blogs", (req, res) => {
  res.render("blogs/bloglist", { blogs });
});
app.get("/blogs/new", (req, res) => {
  res.render("blogs/new");
});

app.get("/blogs/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  const blog = blogs.find((c) => c.id === id);
  console.log(blog);
  res.render("blogs/show", { blog });
});

app.post("/blogs", (req, res) => {
  console.log(req.body);
  const {
    id = uuid(),
    author,
    title,
    description,
    urlToImage,
    publishedAt,
    content,
  } = req.body;
  blogs.push({
    id,
    author,
    title,
    description,
    urlToImage,
    publishedAt,
    content,
  });
  res.redirect("/blogs");
});

app.listen(3000, () => {
  console.log("Server is running 3000 , everything is okay :)");
});
