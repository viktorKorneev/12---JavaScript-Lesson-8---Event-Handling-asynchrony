const fooButton = document.querySelector(".fooButton");
fooButton.addEventListener("click", () => {
  foo();
});
// const foo = () => {
const item = document.querySelectorAll(".item");
const newArr = [...item];
const list = document.querySelector(".list");
const resetButton = document.querySelector("#reset-button");

let timeoutId = null; // Хранение идентификатора таймера
let isTimeStarted = false; // Флаг, укзывающий на то, запущен ли таймер

resetButton.addEventListener("click", () => {
  if (!isTimeStarted) {
    isTimeStarted = true;
    resetButton.textContent = "Отмена";
    timeoutId = setTimeout(() => {
      // newArr.forEach((el) => {
      //     return (
      //         el.classList.remove("done")
      //     )
      // })
      // const items = document.querySelectorAll(".item");
      for (let i = 0; i < item.length; i++) {
        item[i].classList.remove("done");
      }
      resetButton.textContent = "Сброс";
      isTimeStarted = false;
    }, 3000);
  } else {
    clearTimeout(timeoutId);
    resetButton.textContent = "Сброс";
    isTimeStarted = false;
  }
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
