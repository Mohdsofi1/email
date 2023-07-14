console.log("start");

let textareaDOM = document.querySelector("#massage");
let buttonsendDOM = document.querySelector("#sendEmailbutton");

let href = "mailto:manoitooo@gmail.com";

textareaDOM.addEventListener("change", function (e) {
  let massage = e.target.value;
  let newHref = href;
  console.log(newHref);
  buttonsendDOM.setAttribute("href", newHref, massage);
});
// ?subject=Hello&body=Hello world 123
