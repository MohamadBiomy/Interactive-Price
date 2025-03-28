/*
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

*/ 

// styling range input
let input = document.querySelector("input[type='range']")
let span = document.querySelector("input[type='range'] + span")

span.style.width = `${(input.value / 8) * 100}%`
input.onmouseover = () => {
  span.style.backgroundColor = "var(--soft-cyan)"
}
input.onmouseout = () => {
  span.style.backgroundColor = "var(--strong-cyan)"
}
input.addEventListener("input", () => {span.style.width = `${(input.value / 8) * 100}%`})

// change plan
input.addEventListener("input", () => {
  let value = input.value
  let views = document.querySelector(".views span")
  let price = document.querySelector(".month span")
  switch (value) {
    case "0": 
      views.innerHTML = "10K"
      price.innerHTML = "$8"
      break;
    case "2": 
      views.innerHTML = "50K"
      price.innerHTML = "$12"
      break;
    case "4": 
      views.innerHTML = "100K"
      price.innerHTML = "$16"
      break;
    case "6": 
      views.innerHTML = "500k"
      price.innerHTML = "$24"
      break;
    case "8": 
      views.innerHTML = "1M"
      price.innerHTML = "$36"
      break;
  }
})