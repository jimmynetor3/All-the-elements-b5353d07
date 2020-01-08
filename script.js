let changethis = document.getElementById('2');

changethis.innerText = document.title;

changethis.classList.add("h1")

let matches = document.querySelectorAll("p");

// forEach(matches){
//   matches.classList.add("p")
// };

matches.forEach(function(element) {
    element.classList.add("p")
})