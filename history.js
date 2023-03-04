let row = document.getElementById("search-history")
let history = localStorage.getItem("history")
let data = JSON.parse(history)

let display = () =>{
    let html ="";
    if(data == null){
        html = "No serach History"
    }else{
    data.forEach(item =>{
        let i= 0;
        html+=`
            <div id="rows">
             <div id="para">
             <div>${i+1} ${item.title}</div>
             <div>Searched on : ${item.time}</div>
             </div>
             </div>
        `
    })
}
    row.innerHTML = html
}
display()
var clearbtn = document
  .getElementById("clearbtn")
  .addEventListener("click", () => {
    var currentdata = localStorage.removeItem("history");
    row.classList.add("hide")
  });