let row = document.getElementById("rows")
let history = localStorage.getItem("history")
let data = JSON.parse(history)

let display = () =>{
    let html ="";
    if(data == null){
        html = "No serach History"
    }else{
    data.forEach(item =>{
        html+=`

             <div id="para">
             <div>${data.length} ${item.title}</div>
             <div>Searched on : ${item.time}</div>
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
    document.getElementById("rows").className = "hide";
  });