//selecting required element
const questions = document.querySelectorAll(".question");
// console.log(questions);

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question.classList);

    questions.forEach(function (item) {
      // console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// DOM Traversing

// selecting required element
// const btns = document.querySelectorAll(".question-btn");

// check for the click event on each button
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {

// check for the artical parent
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
