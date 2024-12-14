document.getElementById('currentyear').innerHTML = new Date().getFullYear()
document.getElementById('lastmodified').innerHTML = document.lastModified
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];
const selectTag = document.getElementById("product");

products.forEach((product) => {
    const opt = document.createElement("option");
    opt.setAttribute("value",product.id)
    opt.innerText= product.name
    selectTag.appendChild(opt);
})

const container = document.querySelector(".mainReview")

if (localStorage.getItem("productReview")) {
  num = parseInt(localStorage.getItem("productReview"))
  container.innerText = num + 1
  localStorage.setItem("productReview",num+1)
} else {
  localStorage.setItem("productReview", 1)
  container.innerText = 1
}
