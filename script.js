const input = document.querySelector('#search-input')
const head = document.getElementsByClassName("head")
const searchBtn = document.querySelector(".search-icon")
const cards = document.querySelector(".cards")
let searchInput = document.getElementById("search-input")
let notes = localStorage.getItem("history");
let history;
if(notes == null){
   history = []
}else{
  history= JSON.parse(notes)
}
function book() {
   
    let search = searchInput.value.trim()
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then(response => response.json())
       .then(data => showBook(data.items))
        .catch(error => (alert(error)))
}
searchBtn.addEventListener("click",()=>{
     
      book()
})


const showBook = (data) => {
    
    
    let search = searchInput.value.trim()
          let obj ={
            id:history.length+1,
        date:new Date().toLocaleDateString(),
        time:new Date().toLocaleDateString('en-us',{
            hour:'2-digit',
            minute:'2-digit',
            
        }),
        // bookName: booktitle, 
        title:search
    }
    history.push(obj)
    localStorage.setItem("history",JSON.stringify(history))
    
    let html = "";
    data.forEach(item => {
        
        html += `
        <div class="item">
        <div class="img">
            <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="">
        </div>
        <div class="info">
            <div class="title">Title:${item.volumeInfo.title}</div>
            <div class="Author">Author:${item.volumeInfo.authors[0]}</div>
            <div class="page"> PageCount:${item.volumeInfo.pageCount}</div>
            <div class="publisher"> Publisher:${item.volumeInfo.publisher}</div>
            <button id="addBtn">buy now</button>
            </div>
        
    </div>
        `
    })
    cards.innerHTML = html

}
input.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        book()
    }
   
   
})
