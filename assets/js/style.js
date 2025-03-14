// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) =>{
//   panel.addEventListener("click", () =>{
//     removeActiveClasses();
//   });
// });
// const removeActiveClasses = () => {
//   panels.forEach((panel) => {
//    panel.classList.remove("active") 
//   });
// };
const panels = document.querySelectorAll(".panel");

// Add event listener to each panel
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active"); // 👈 Missing this crucial line
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};