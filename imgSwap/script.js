let image1 = document.querySelector(".image1");
let image2 = document.querySelector(".image2");

document.querySelector("button").addEventListener("click", () => {
  let src1 = image1.getAttribute("src");
  let src2 = image2.getAttribute("src");

  image1.classList.add("slideRight");
  image2.classList.add("slideLeft");

  setTimeout(() => {
    image2.setAttribute("src", src1);
    image1.setAttribute("src", src2);

    image1.classList.remove("slideRight");
    image2.classList.remove("slideLeft");
  }, 400);
});
