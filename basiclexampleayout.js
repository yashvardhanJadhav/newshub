console.log("YASHVARDHAN JADHAV");
let newsContainer = document.getElementById("newsContainer");
const xhr = new XMLHttpRequest();
xhr.open(`GET`, `https://newsapi.org/v2/everything?q='bollywood'&sortBy=business&apiKey=f67f25d95383493689f7e93eccee1028`, true);
xhr.onload = function () {  
    let newsContent = JSON.parse(this.responseText);
    let articles = newsContent.articles;
    let newsHtml = ``;
    articles.forEach(element => {
        if(element["urlToImage"]==null || element["title"]==null || element["description"]==null){
            return;
        }
        newsHtml += `
                    <div class="card mb-3 midCard" style="max-width: auto;">
                        <div class="row g-0">
                            <div class="col-md-4" style="overflow: hidden;">
                                <div class="imgContainer">
                                    <img src="${element["urlToImage"]}"
                                        class="img-fluid upCardImg" alt="...">
                                </div>
                            </div>
                            <div class="upImage-top-left"><span
                                    style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${element["title"]}</h5>
                                    <p class="card-text upCardText" style="font-size:15px;">${element["description"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
    });
    newsContainer.innerHTML=newsHtml;
}
xhr.send();
let searchGlobalTopic = document.getElementById('searchGlobalTopic');
let searchGlobalBtn = document.getElementById('searchGlobalBtn');
searchGlobalBtn.addEventListener('click',searchGlobalFunction);
function searchGlobalFunction(){
    let globalSearchText = searchGlobalTopic.value.toLowerCase();
    localStorage.setItem('globalSearchText' ,globalSearchText);
    console.log(globalSearchText);
}