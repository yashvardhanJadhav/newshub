
// let news = document.getElementById('news');
// let xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=20&apiKey=f67f25d95383493689f7e93eccee1028`, true);
// xhr.onload = function () {
//     let newsObj = JSON.parse(this.responseText);
//     let newsArticles = newsObj.articles;
//     let newsHtml = ``;
//     let i;
//     for (let i = 0; i < 20; i++) {
//         let newsTitle = newsArticles[i]["title"];
//         let newsDescr = newsArticles[i]["description"];
//         newsHtml += `
//         <div style="background-color: grey; height: 108px; width: auto; margin-bottom: 15px; ">
//         <div class="card-body">
//         <h5 class="card-title">${newsTitle}</h5>
//         <p class="card-text upCardText" style="font-size:15px;">${newsDescr}</p>
//         </div>
//         </div>
//         `;
//     }
//     news.innerHTML = newsHtml;
// }
// xhr.send();

// var count = 1;
// function myFunction() {
//     count++;
//     console.log('count : ' + count);
//     let noOfNews = count * 20;
//     let news = document.getElementById('news');
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=${noOfNews}&apiKey=f67f25d95383493689f7e93eccee1028`, true);
//     xhr.onload = function () {
//         let newsObj = JSON.parse(this.responseText);
//         let newsArticles = newsObj["articles"];
//         let newsHtml = ``
//         let i;
//         for (let i = (count - 1) * 20; i < noOfNews; i++) {
//             let newsTitle = newsArticles[i]["title"];
//             let newsDescr = newsArticles[i]["description"];
//             newsHtml += `
//         <div style="background-color: grey; height: 108px; width: auto; margin-bottom: 15px; ">
//                                                 <div class="card-body">
//                                                     <h5 class="card-title">${newsTitle}</h5>
//                                                     <p class="card-text upCardText" style="font-size:15px;">${newsDescr}</p>
//                                                 </div>
//                                             </div>
//         `;
//         }
//         news.innerHTML = newsHtml;
//         let newsArticles1 = newsArticles.slice(20, 39 + 1);
//         localStorage.setItem('newsArticles', JSON.stringify(newsArticles1));
//     }
//     xhr.send();
// }


var count = 0;
function myFunction() {
    count++;
    let news = document.getElementById('news');
    const xhr = new XMLHttpRequest();
    xhr.open('GET' ,`https://newsapi.org/v2/top-headlines?country=us&category=sports&page=${count}&pageSize=20&apiKey=f67f25d95383493689f7e93eccee1028` ,true);
    xhr.onload = function(){
        let newsObj = JSON.parse(this.responseText);
        articles = newsObj.articles;
        artices.forEach(element => {
            
        });      
    }
    xhr.send(); 
}