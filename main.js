const foo = () => {
  const item = document.querySelectorAll(".item");
  // console.log(item);

  const newArr = [...item];

  newArr.forEach((el) => {
    //debugger
    return el.addEventListener("click", () => {
      el.classList.toggle("done");
    });
  });
};

// for(let i = 0; i < item.length; i++){
// item[i].addEventListener("click", () =>{
//     item[i].classList.toggle("done")
// })
// }
