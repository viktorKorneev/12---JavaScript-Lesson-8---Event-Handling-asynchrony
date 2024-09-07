const fooButton = document.querySelector(".fooButton");
fooButton.addEventListener("click", () => {
  foo();
});
// const foo = () => {
const item = document.querySelectorAll(".item");
const newArr = [...item];
const list = document.querySelector(".list");
const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", () => {
  setTimeout(() => {
    const items = document.querySelectorAll(".item");
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("done");
    }
  }, 300);
});

list.addEventListener("click", (event) => {
  const targetElement = event.target;
  if (targetElement.classList.contains("item")) {
    targetElement.classList.toggle("done");
  }
});

//   newArr.forEach((el) => {
//     //debugger
//     return el.addEventListener("click", () => {
//       el.classList.toggle("done");
//     });
//   });

// for(let i = 0; i < item.length; i++){
// item[i].addEventListener("click", () =>{
//     item[i].classList.toggle("done")
// })
// }
// };

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector(".input");
  let text = input.value;

  const list = document.querySelector(".list");
  const newLi = document.createElement("li");
  newLi.classList.add("item");
  newLi.textContent = text;
  list.append(newLi);
  input.value = "";
});
// ---------------------------------------------------------------------------

//  <table>
//     <tr>
//         <td>
//             Иван
//         </td>
//     </tr>
// </table>

// const fooButton = document.querySelector(".fooButton");
// fooButton.addEventListener("click", () => {
//   foo();
// });
// const foo = () => {
//   const item = document.querySelectorAll(".item");
//   // console.log(item);

//   const newArr = [...item];

//   newArr.forEach((el) => {
//     //debugger
//     return el.addEventListener("click", () => {
//       el.classList.toggle("done");
//     });
//   });
// // };

// // for(let i = 0; i < item.length; i++){
// // item[i].addEventListener("click", () =>{
// //     item[i].classList.toggle("done")
// // })
// // }
// const form = document.querySelector(".form")
// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     const input = document.querySelector(".input")
//     const text = input.value

//     const list = document.querySelector(".list")
//     const newLi = document.createElement("li")
//     // newLi.classList.add(".item")
//     newLi.textContent = text
//     list.append(newLi)

//     input.value = ""
// })

//   const newTable = document.createElement("table");
//   const newTr = document.createElement("tr");
//   const newTd = document.createElement("td");

//   newTd.textContent = text;
//   newTr.append(newTd);
//   newTable.append(newTr);
//   list.append(newTable);
