const data = [
  {
    id: 1,
    title: "What is HTML?",
    content: "HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages. HTML is used to define the structure of a web page and its content.",
  },
  {
    id: 2,
    title: "What is CSS?",
    content: "CSS stands for Cascading Style Sheets. It is a language used to style the content of a web page. CSS is used to control the appearance of a web page, such as the font, color, and layout.",
  },
  {
    id: 3,
    title: "How do I use HTML and CSS to create a FAQ page?",
    content: "To create a FAQ page using HTML and CSS, you will need to create an HTML file and a CSS file. The HTML file will contain the structure of the FAQ page, and the CSS file will contain the styles for the FAQ page.",
  },
];

let faqContent = document.querySelector(".faq-content");

data.forEach((element) => {
  var faqQuestionDiv = document.createElement("div");
  faqQuestionDiv.classList.add("faq-question");
  faqQuestionDiv.addEventListener("click", function () {
    console.log("Hello");
    input.checked = !input.checked;
  });

  var input = document.createElement("input");
  input.classList.add("panel");
  input.type = "checkbox";
  input.setAttribute("id", "q" + element.id);

  var plusDiv = document.createElement("div");
  plusDiv.classList.add("plus");
  plusDiv.innerText = "+";

  var label = document.createElement("label");
  label.classList.add("panel-title");
  label.setAttribute("id", "q" + element.id);
  label.innerText = element.title;

  var panelContentDiv = document.createElement("div");
  panelContentDiv.classList.add("panel-content");
  panelContentDiv.innerText = element.content;

  faqQuestionDiv.append(input);
  faqQuestionDiv.append(plusDiv);
  faqQuestionDiv.append(label);
  faqQuestionDiv.append(panelContentDiv);

  faqContent.append(faqQuestionDiv);
});
