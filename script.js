const movies = [{ title: "Inception"},{ title: "Interstellar"},{ title: "Batman" }];

const container =document.getElementById("movieRow")

movies.forEach(movie=>{
const div=document.createElement("div")
div.innerText=movie.title
container.appendChild(div)
})

