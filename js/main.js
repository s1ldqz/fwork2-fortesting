document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches(".dropdownbtn");
  const currentDropdown = document.querySelector(".menu__price");
  const activeDrop = document.querySelector(".menu__price.menu__price--active");
  if (isDropdownButton) {
    currentDropdown.classList.toggle("menu__price--active");
  }
  if (activeDrop) {
    currentDropdown.classList.remove("menu__price--active");
  }
});

const mattressItem = document.querySelectorAll(".mattress__item");
mattressItem.forEach((item) => {
  const clickedItem = item.querySelector(".mattress__item-img");
  clickedItem.addEventListener("click", () => {
    for (let i = 0; i < mattressItem.length; i++) {
      if (mattressItem[i] !== item) {
        mattressItem[i].classList.remove("mattress-active");
      } else {
        item.classList.toggle("mattress-active");
      }
    }
  });
});
