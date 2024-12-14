const container = document.querySelector(".mainReview")

if (localStorage.getItem("productReview")) {
    num = parseInt(localStorage.getItem("productReview"))
    num++
  container.innerText = num
  localStorage.setItem("productReview",num+1)
} else {
  localStorage.setItem("productReview", 1)
  container.innerText = 1
}
document.getElementById('currentyear').innerHTML = new Date().getFullYear()
document.getElementById('lastmodified').innerHTML = document.lastModified
