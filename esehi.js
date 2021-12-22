    // let apikey = 'f67f25d95383493689f7e93eccee1028'; //yashvardhan jadhav
    // let apikey = '67b4af3104714f318609185d1ca9e8c6'; //chessprinters
    // let apikey = 'f0bf0c82cc5f45f29dda5cbe53a15521';// vishal
    // let apikey = '6464b91ad49a448fb6cd6b2382237beb'; // news hub
    let apikey = 'bd0db3ee2f2345bdba8289ad486ddcfa'; // pp
    let apikey1 = 'db41ebbcf60141868b0b1db7abc974ee';
    // let apikey = '6d41db77edbb41538c66b3bb39584427';
    // let apikey = '1163f0a7ece04fcf9b4da3b208b0a9e7';
    // let apikey = '978e3ab56df0401681195deba5c8ed2f';



    function addStr(str, index, stringToAdd) {
        return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
    }

    let part1left = document.getElementById('part1left');
    let xhrPart1left = new XMLHttpRequest();
    xhrPart1left.open('GET', `https://newsapi.org/v2/everything?q='politics'&apiKey=${apikey1}`, true);
    xhrPart1left.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 0; i < 1; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                                    
                    <div class="carousel-item active" data-bs-interval="10000">

                    <img class="center-block d-block w-100 carouselPartChange" style="background-image:
                    linear-gradient(0deg, rgba(0,0,0,0.8858893899356618) 10%, rgba(0,0,0,0.6001751042213761) 43%, rgba(0,0,0,0) 77%),
                    url('${articles[i]["urlToImage"]}'); background-size: cover;"
                    alt="...">
                    <div class="upImage-top-left"><span
                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Politics</span>
                            </div>
                            <div class="centered"><span>${articles[i]["title"]}</span></div>
                            
                    <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                    <div class="carousel-caption d-none d-md-block">
                        <h3><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
                        </h3>
                        <p><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
                    </div></a>
                </div>

                                `;
        }
        for (let i = 1; i < 2; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                                    
                    <div class="carousel-item" data-bs-interval="2000">
                    <img class="center-block d-block w-100 carouselPartChange"
                    style="background-image:
                    linear-gradient(0deg, rgba(0,0,0,0.8858893899356618) 10%, rgba(0,0,0,0.6001751042213761) 43%, rgba(0,0,0,0) 77%),
                    url('${articles[i]["urlToImage"]}'); background-size: cover;"
                        alt="...">
                    <div class="upImage-top-left"><span
                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Entertainment</span>
                    </div>
                    <div class="centered"><span>${articles[i]["title"]}</span></div>
                    <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                    <div class="carousel-caption d-none d-md-block">
                        <h3><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
                        </h3>
                        <p><span
                                style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
                    </div>
                    </a>

                </div>

                                `;
        }
        for (let i = 2; i < 3; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                                    
                    <div class="carousel-item">
                                                <img class="center-block d-block w-100 carouselPartChange"
                                                style="background-image:
                                                linear-gradient(0deg, rgba(0,0,0,0.8858893899356618) 10%, rgba(0,0,0,0.6001751042213761) 43%, rgba(0,0,0,0) 77%),
                                                url('${articles[i]["urlToImage"]}'); background-size: cover;"
                                                    alt="...">
                                                <div class="upImage-top-left"><span
                                                        style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Latest</span>
                                                </div>
                                                <div class="centered"><span>${articles[i]["title"]}</span></div>
                    <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                                                <div class="carousel-caption d-none d-md-block">
                        <h3><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
                        </h3>
                        <p><span
                                style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
                    </div>
                    </a>
                                            </div> 
                                `;
        }
        for (let i = 3; i < 4; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                                    
                    <div class="carousel-item" data-bs-interval="2000">
                    <img class="center-block d-block w-100 carouselPartChange"
                    style="background-image:
                    linear-gradient(0deg, rgba(0,0,0,0.8858893899356618) 10%, rgba(0,0,0,0.6001751042213761) 43%, rgba(0,0,0,0) 77%),
                    url('${articles[i]["urlToImage"]}'); background-size: cover;"
                        alt="...">
                    <div class="upImage-top-left"><span
                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Entertainment</span>
                    </div>
                    <div class="centered"><span>${articles[i]["title"]}</span></div>
                    <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                    <div class="carousel-caption d-none d-md-block">
                        <h3><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
                        </h3>
                        <p><span
                                style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
                    </div>
                    </a>

                </div>

                                `;
        }
        for (let i = 4; i < 5; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                                    
                    <div class="carousel-item" data-bs-interval="2000">
                    <img class="center-block d-block w-100 carouselPartChange"
                    style="background-image:
                    linear-gradient(0deg, rgba(0,0,0,0.8858893899356618) 10%, rgba(0,0,0,0.6001751042213761) 43%, rgba(0,0,0,0) 77%),
                    url('${articles[i]["urlToImage"]}'); background-size: cover;"
                        alt="...">
                    <div class="upImage-top-left"><span
                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Entertainment</span>
                    </div>
                    <div class="centered"><span>${articles[i]["title"]}</span></div>
                    <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                    <div class="carousel-caption d-none d-md-block">
                        <h3><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
                        </h3>
                        <p><span
                                style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
                    </div>
    </a>
                </div>

                                `;
        }
        part1left.innerHTML = newsHtml;
    }
    let part1right = document.getElementById('part1right');
    let xhrPart1right = new XMLHttpRequest();
    xhrPart1right.open('GET', `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apikey1}`, true);
    xhrPart1right.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 0; i < 4; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                <div class="row" id="part1RightChangeLeftPadding">
                <a href='{articles[i].url}' style="text-decoration:none; color:black;">        
                                <div class="col" style="padding:0 10px 20px 0; margin:0px 0px 0px 0px;">
                                    <div class="card mb-3 midCard"
                                        style="max-width: auto; height: 90px; border:none;">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <div class="imgContainer">
                                                    <img src="${articles[i]["urlToImage"]}"
                                                        class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                                </div>
                                            </div>
                                            <div class="upImage-top-left"><span
                                                    style="background-color: rgb(104, 0, 0);; padding: 1px 10px 1px 10px;">Latest</span>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body"  style="padding-left:1rem;">
                                                    <h6 class="card-title">${articles[i]["title"]}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                </a>
                            </div> 

                                `;
        }
        part1right.innerHTML = newsHtml;
    }
    let part2 = document.getElementById('part2');
    let xhrPart2 = new XMLHttpRequest();
    xhrPart2.open('GET', `https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=${apikey}`, true);
    xhrPart2.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 0; i < 6; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                
                <div class="col" style="margin: 0 12px 0 0; border-right: 2px solid rgb(215, 215, 215);">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        
                    <div class="card cardMid" style="width: auto; border:none;">
                        <div class="imgContainer">
                            <img src="${articles[i]["urlToImage"]}" class="card-img-top" alt="...">
                        </div>
                        <div class="upImage-top-left"><span
                                style="background-color: #001730; padding: 1px 10px 1px 10px;">Top-trending</span>
                        </div>
                        <div class="card-body" style="padding-top:1rem;">
                            <h5 class="card-title">${articles[i]["title"]}</h5>
                            <p class="card-text">${articles[i]["description"]}</p>
                        </div>
                    </div>
                    </a>
                </div>

                                `;
        }
        part2.innerHTML = newsHtml;
    }

    let part3left = document.getElementById('part3left');
    let xhrPart3left = new XMLHttpRequest();
    xhrPart3left.open('GET', `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=${apikey}`, true);
    xhrPart3left.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 0; i < 4; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     // continue;
            // }
            let descr1 = articles[i]["description"];
            let descr = ``;
            let dot = `...`;
            let descr2 = descr1.substring(0, 80);
            descr = addStr(descr2, 800, dot);

            newsHtml +=
                `
                                    
                <div class="card mb-3 midCard" style="max-width: auto; overflow:hidden;">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        
                    
                <div class="row g-0">
                        <div class="col-md-4">
                            <div class="imgContainer">
                                <img src="${articles[i]["urlToImage"]}"
                                    class="img-fluid upCardImg" style="width:200px" alt="...">
                            </div>
                        </div>
                        <div class="upImage-top-left"><span
                                style="background-color:rgb(126, 0, 74); padding: 1px 10px 1px 10px;">Sports</span>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body" style="padding-left:1rem;">
                                <h6 class="card-title">${articles[i]["title"]}</h6>
                            </div>
                        </div>
                    </div>
                    </a>
                </div> 

                                `;
        }
        part3left.innerHTML = newsHtml;
    }
    let part3mid = document.getElementById('part3mid');
    let xhrPart3mid = new XMLHttpRequest();
    xhrPart3mid.open('GET', `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=${apikey}`, true);
    xhrPart3mid.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 4; i <5 ; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                                    
                    <div class="carousel-item active">

                                            <img class="center-block d-block w-100" src="${articles[i]["urlToImage"]}"
                                                style="width: 600px; height: 500px; overflow: hidden;" alt="...">
                                            <div class="upImage-top-left"><span
                                                    style="background-color: rgb(126, 0, 74); padding: 1px 10px 1px 10px;">Sports</span>
                                            </div>

                                            <a href='${articles[i].url}' style="text-decoration:none; color:black;">        
                                            <div class="container">

                                                <div class="carousel-caption text-start" style="backdrop-filter: blur(10px);">
                                                <h5><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
                                                </h5>
                                                <p><span
                                                        style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
                                                </div>
                                            </div>
                                            </a>
                                            </div>

                                `;
        }
        for (let i = 5; i < 6; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }

            newsHtml +=
                `
                                    
                    <div class="carousel-item">

                                            <img class="center-block d-block w-100" src="${articles[i]["urlToImage"]}"
                                                style="width: 600px; height: 500px;  overflow: hidden;" alt="...">
                                            <div class="upImage-top-left"><span
                                                    style="background-color: rgb(126, 0, 74); padding: 1px 10px 1px 10px;">Sports</span>
                                            </div>

                                            <a href='${articles[i].url}' style="text-decoration:none; color:black;">        
                                            <div class="container">

                                            <div class="carousel-caption" style="backdrop-filter: blur(10px);">
                                            <h5><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
                        </h5>
                        <p><span
                                style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
                                            </p>
                                        </div>
                                            </div>
                                            </a>
                                        </div>

                                `;
        }
        for (let i = 6; i < 7; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                                    
                    <div class="carousel-item">

                                            <img class="center-block d-block w-100" src="${articles[i]["urlToImage"]}"
                                                style="width: 600px; height: 500px;  overflow: hidden;" alt="...">
                                            <div class="upImage-top-left"><span
                                                    style="background-color: rgb(126, 0, 74); padding: 1px 10px 1px 10px;">Sports</span>
                                            </div>

                                            <a href='${articles[i].url}' style="text-decoration:none; color:black;">        
                                            <div class="container">

                                            <div class="carousel-caption text-end" style="backdrop-filter: blur(10px);">
                                            <h5><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
                        </h5>
                        <p><span
                                style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
                                            </p>
                                        </div>
                                            </div>
                                            </a>
                                        </div>
                                `;
        }
        for (let i = 7; i < 8; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                                    
                    <div class="carousel-item">
                    
                                            <img class="center-block d-block w-100" src="${articles[i]["urlToImage"]}"
                                                style="width: 600px; height: 500px;  overflow: hidden;" alt="...">
                                            <div class="upImage-top-left"><span
                                                    style="background-color: rgb(126, 0, 74); padding: 1px 10px 1px 10px;">Sports</span>
                                            </div>
                                            <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                                            <div class="container">
                                            <div class="carousel-caption text-end" style="backdrop-filter: blur(10px);">
                                            <h5><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
                        </h5>
                        <p><span
                                style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
                                            </p>
                                        </div>
                                            </div>
                                            </a>
                                        </div>
                                `;
        }
        for (let i = 8; i < 9; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                                    
                    <div class="carousel-item">

                                            <img class="center-block d-block w-100" src="${articles[i]["urlToImage"]}"
                                                style="width: 600px; height: 500px;  overflow: hidden;" alt="...">
                                            <div class="upImage-top-left"><span
                                                    style="background-color: rgb(126, 0, 74); padding: 1px 10px 1px x10px;">Sports</span>
                                            </div>
                                            <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                                            <div class="container">
                                            <div class="carousel-caption text-end" style="backdrop-filter: blur(10px);">
                                            <h5><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
                        </h5>
                        <p><span
                                style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
                                            </p>
                                        </div>
                                            </div>
                                            </a>
                                        </div>
                                `;
        }

        part3mid.innerHTML = newsHtml;
    }
    let part3right = document.getElementById('part3right');
    let xhrPart3right = new XMLHttpRequest();
    xhrPart3right.open('GET', `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=${apikey}`, true);
    xhrPart3right.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 9; i < 13; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            let descr1 = articles[i]["description"];
            let descr = ``;
            let dot = `...`;
            let descr2 = descr1.substring(0, 80);
            descr = addStr(descr2, 800, dot);
            newsHtml +=
                `
                                    
                <div class="card mb-3 midCard" style="max-width: auto; overflow:hidden;">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                    <div class="row g-0">
                        <div class="col-md-4">
                            <div class="imgContainer">
                                <img src="${articles[i]["urlToImage"]}"
                                    class="img-fluid upCardImg" alt="...">
                            </div>
                        </div>
                        <div class="upImage-top-left"><span
                                style="background-color: rgb(126, 0, 74); padding: 1px 10px 1px 10px;">Sports</span>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body" style="padding-left:1rem;">
                                <h6 class="card-title">${articles[i]["title"]}</h6>
                            </div>
                        </div>
                    </div>
                    </a>
                </div> 

                                `;
        }
        part3right.innerHTML = newsHtml;
    }

    let part4top = document.getElementById('part4top');
    let xhrPart4top = new XMLHttpRequest();
    xhrPart4top.open('GET', `https://newsapi.org/v2/everything?q='politics'&apiKey=${apikey}`, true);
    xhrPart4top.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 0; i < 1; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                                    
                    <div class="card mb-3" style="width: 100%; border: none;">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${articles[i]["urlToImage"]}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="upImage-top-left"><span
                                style="background-color: rgb(205, 133, 0); padding: 1px 10px 1px 10px;">politics</span>
                        </div>
                        <div class="col-md-8" style="padding-left: 40px;">
                            <div class="card-body">
                                <h2 class="card-title">${articles[i]["title"]}</h2>
                                <p class="card-text" style="font-size:large">${articles[i]["description"]}</p>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>  

                                `;
        }
        part4top.innerHTML = newsHtml;
    }

    let part4bottom1 = document.getElementById('part4bottom1');
    let xhrPart4bottom1 = new XMLHttpRequest();
    xhrPart4bottom1.open('GET', `https://newsapi.org/v2/everything?q='politics'&apiKey=${apikey}`, true);
    xhrPart4bottom1.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 0; i < 3; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            let descr1 = articles[i]["description"];
            let descr = ``;
            let dot = `...`;
            let descr2 = descr1.substring(0, 60);
            descr = addStr(descr2, 60, dot);
            newsHtml +=
                `
                    <div class="col">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                                <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none; overflow:hidden;">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <div class="imgContainer">
                                                <img src="${articles[i]["urlToImage"]}"
                                                    class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                            </div>
                                        </div>
                                        <div class="upImage-top-left"><span
                                                style="background-color: rgb(205, 133, 0); padding: 1px 10px 1px 10px;">Politics</span>
                                        </div>
                                        <div class="col-md-8" style="padding-left:1rem;">
                                            <div class="card-body">
                                                <h6 class="card-title">${articles[i]["title"]}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                

                                `;
        }

        part4bottom1.innerHTML = newsHtml;
    }

    let part4bottom2 = document.getElementById('part4bottom2');
    let xhrPart4bottom2 = new XMLHttpRequest();
    xhrPart4bottom2.open('GET', `https://newsapi.org/v2/everything?q='politics'&apiKey=${apikey}`, true);
    xhrPart4bottom2.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 3; i < 6; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            let descr1 = articles[i]["description"];
            let descr = ``;
            let dot = `...`;
            let descr2 = descr1.substring(0, 60);
            descr = addStr(descr2, 60, dot);
            newsHtml +=
                `
                    <div class="col">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                                <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <div class="imgContainer">
                                                <img src="${articles[i]["urlToImage"]}"
                                                    class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                            </div>
                                        </div>
                                        <div class="upImage-top-left"><span
                                                style="background-color: rgb(205, 133, 0); padding: 1px 10px 1px 10px;">Politics</span>
                                        </div>
                                        <div class="col-md-8" style="padding-left:1rem;">
                                            <div class="card-body">
                                                <h6 class="card-title">${articles[i]["title"]}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                

                                `;
        }

        part4bottom2.innerHTML = newsHtml;
    }

    let part5 = document.getElementById('part5');
    let xhrPart5 = new XMLHttpRequest();
    xhrPart5.open('GET', `https://newsapi.org/v2/everything?q='technology'&apiKey=${apikey}`, true);
    xhrPart5.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 0; i < 2; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `<div class="col" style="margin: 0 12px 0 0; border-right: 1px solid rgb(215, 215, 215);">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                    <div class="card cardMid" style="width: auto; border:none;">
                        <div class="imgContainer">
                            <img src="${articles[i]["urlToImage"]}" class="card-img-top" alt="...">
                        </div>
                        <div class="upImage-top-left"><span
                                style="background-color: rgb(0, 104, 19); padding: 1px 10px 1px 10px;">Tech</span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${articles[i]["title"]}</h5>
                            <p class="card-text">${articles[i]["description"]}</p>
                        </div>
                    </div>
                    </a>
                </div>
                    `;
        }
        for (let i = 2; i < 3; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                    <div class="col-4" style="margin: 0 12px 0 0; border-right: 1px solid rgb(215, 215, 215);">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        
                    
                                <div class="card cardMid" style="width: auto; border:none;">
                                    <div class="imgContainer">
                                        <img src="${articles[i]["urlToImage"]}" class="card-img-top" style="height: 300px;" alt="...">
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(0, 104, 19); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">${articles[i]["title"]}</h5>
                                        <p class="card-text">${articles[i]["description"]}</p>
                                    </div>
                                </div>
    </a>
                            </div>
                    `;
        }
        for (let i = 3; i < 5; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                    <div class="col" style="margin: 0 12px 0 0; border-right: 1px solid rgb(215, 215, 215);">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                                <div class="card cardMid" style="width: auto; border:none;">
                                    <div class="imgContainer">
                                        <img src="${articles[i]["urlToImage"]}" class="card-img-top" alt="...">
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(0, 104, 19); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">${articles[i]["title"]}</h5>
                                        <p class="card-text">${articles[i]["description"]}</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                    `;
        }
        part5.innerHTML = newsHtml;
    }
    let part6top = document.getElementById('part6top');
    let xhrPart6top = new XMLHttpRequest();
    xhrPart6top.open('GET', `https://newsapi.org/v2/everything?q='hollywood'&apiKey=${apikey}`, true);
    xhrPart6top.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 0; i < 3; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                                    
                    <div class="col"
                                style="padding-bottom: 20px; margin:0px 0px 0px 0px; border-right:2px solid rgb(215, 215, 215);">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                                <div class="card bg-dark text-white">
                                    <img src="${articles[i]["urlToImage"]}" class="card-img" alt="...">
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">${articles[i]["title"]}</h5>
                                        <div class="upImage-top-left"><span
                                style="background-color: rgb(55, 0, 37); padding: 1px 10px 1px 10px;">Entertainment</span>
                        </div>
                                        <p class="card-text">${articles[i]["description"]}</p>
                                        <p class="card-text">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                                </a>
                            </div>

                                `;
        }
        part6top.innerHTML = newsHtml;
    }

    let part6mid = document.getElementById('part6mid');
    let xhrPart6mid = new XMLHttpRequest();
    xhrPart6mid.open('GET', `https://newsapi.org/v2/everything?q='bollywood'&apiKey=${apikey}`, true);
    xhrPart6mid.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 0; i < 3; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            let descr1 = articles[i]["description"];
            let descr = ``;
            let dot = `...`;
            let descr2 = descr1.substring(0, 60);
            descr = addStr(descr2, 60, dot);
            newsHtml +=
                `
                                    
                    <div class="col">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                                <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <div class="imgContainer">
                                                <img src="${articles[i]["urlToImage"]}"
                                                    class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                            </div>
                                        </div>
                                        <div class="upImage-top-left"><span
                                                style="background-color: rgb(55, 0, 37); padding: 1px 10px 1px 10px;">Entertainment</span>
                                        </div>
                                        <div class="col-md-8" style="padding-left:1rem;">
                                            <div class="card-body">
                                                <h6 class="card-title">${articles[i]["title"]}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                                `;
        }
        part6mid.innerHTML = newsHtml;
    }

    let part6bottom = document.getElementById('part6bottom');
    let xhrPart6bottom = new XMLHttpRequest();
    xhrPart6bottom.open('GET', `https://newsapi.org/v2/everything?q='hollywood'&apiKey=${apikey}`, true);
    xhrPart6bottom.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 3; i < 6; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
                // return;
            // }
            let descr1 = articles[i]["description"];
            let descr = ``;
            let dot = `...`;
            let descr2 = descr1.substring(0, 120);
            descr = addStr(descr2, 120, dot);
            newsHtml +=
                `
                                    
                    <div class="col">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                                <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <div class="imgContainer">
                                                <img src="${articles[i]["urlToImage"]}"
                                                    class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                            </div>
                                        </div>
                                        <div class="upImage-top-left"><span
                                                style="background-color: rgb(55, 0, 37); padding: 1px 10px 1px 10px;">Entertainment</span>
                                        </div>
                                        <div class="col-md-8" style="padding-left:1rem;">
                                            <div class="card-body">
                                                <h6 class="card-title">${articles[i]["title"]}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                                `;
        }
        part6bottom.innerHTML = newsHtml;
    }
    let part7left = document.getElementById("part7left");
    const xhrPart7left = new XMLHttpRequest();
    xhrPart7left.open(`GET`, `https://newsapi.org/v2/everything?q='tesla'&apiKey=${apikey}`, true);
    xhrPart7left.onload = function () {
        if (this.status != 200) {
            return;
        } 
        let newsContent = JSON.parse(this.responseText);
        let articles = newsContent.articles;
        let newsHtml = ``;
        for (let i = 1; i <= 5; i++) {
            
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;

            // }
            let descr1 = articles[i]["description"];
            let descr = ``;
            let dot = `...`;
            if (descr1.length > 100) {
                let descr2 = descr1.substring(0, 100);
                descr = addStr(descr2, 100, dot);
            }
            else {
                descr = descr1;
            }

            newsHtml += `
                    <a href="${articles[i]["url"]}" class="list-group-item list-group-item-action" aria-current="true" style="border:none; border-bottom:1px solid #c8c9ca;">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1" style="color: black;">${articles[i]["title"]}</h5>
                                                </div>
                                                <p class="mb-1" style="color: black;">${descr}</p>
                                            </a>`
        }
        part7left.innerHTML = newsHtml;
    }
    let part7right = document.getElementById("part7right");
    const xhrPart7right = new XMLHttpRequest();
    xhrPart7right.open(`GET`, `https://newsapi.org/v2/everything?q='health'&apiKey=${apikey}`, true);
    xhrPart7right.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsContent = JSON.parse(this.responseText);
        let articles = newsContent.articles;
        let newsHtml = ``;
        for (let i = 1; i <= 5; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            let descr1 = articles[i]["description"];
            let descr = ``;
            let dot = `...`;
            if (descr1.length > 100) {
                let descr2 = descr1.substring(0, 100);
                descr = addStr(descr2, 100, dot);
            }
            else {
                descr = descr1;
            }

            newsHtml += `
                    <a href="${articles[i]["url"]}" class="list-group-item list-group-item-action" aria-current="true" style="border:none; border-bottom:1px solid #c8c9ca;>
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1" style="color: black;">${articles[i]["title"]}</h5>
                                                </div>
                                                <p class="mb-1" style="color: black;">${descr}</p>
                                            </a>`
        }
        part7right.innerHTML = newsHtml;
    }
    let part7mid = document.getElementById("part7mid");
    const xhrPart7mid = new XMLHttpRequest();
    xhrPart7mid.open(`GET`, `https://newsapi.org/v2/everything?q='crypto'&apiKey=${apikey}`, true);
    xhrPart7mid.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsContent = JSON.parse(this.responseText);
        let articles = newsContent.articles;
        let newsHtml = ``;
        for (let i = 1; i <= 5; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            let descr1 = articles[i]["description"];
            let descr = ``;
            let dot = `...`;
            if (descr1.length > 100) {
                let descr2 = descr1.substring(0, 100);
                descr = addStr(descr2, 100, dot);
            }
            else {
                descr = descr1;
            }

            newsHtml += `
                    <a href="${articles[i]["url"]}" class="list-group-item list-group-item-action" aria-current="true" style="border:none; border-bottom:1px solid #c8c9ca;>
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1" style="color: black;">${articles[i]["title"]}</h5>
                                                </div>
                                                <p class="mb-1" style="color: black;">${descr}</p>
                                            </a>`
        }
        part7mid.innerHTML = newsHtml;
    }
    let part8 = document.getElementById('part8');
    let xhrPart8 = new XMLHttpRequest();
    xhrPart8.open('GET', `https://newsapi.org/v2/everything?q='business'&apiKey=${apikey}`, true);
    xhrPart8.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 0; i < 6; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                                    
                <div class="col" style="margin: 0 12px 0 0; border-right: 2px solid rgb(215, 215, 215);">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                    <div class="card cardMid" style="width: auto; border:none;">
                        <div class="imgContainer">
                            <img src="${articles[i]["urlToImage"]}" class="card-img-top" alt="...">
                        </div>
                        <div class="upImage-top-left"><span
                                style="background-color: rgb(1, 48, 82); padding: 1px 10px 1px 10px;">Business</span>
                        </div>
                        <div class="card-body" style="padding-top:1rem;">
                            <h5 class="card-title">${articles[i]["title"]}</h5>
                            <p class="card-text">${articles[i]["description"]}</p>
                        </div>
                    </div>
                    </a>
                </div>

                                `;
        }
        part8.innerHTML = newsHtml;
    }
    let part9top = document.getElementById('part9top');
    let xhrPart9top = new XMLHttpRequest();
    xhrPart9top.open('GET', `https://newsapi.org/v2/everything?q='cricket'&apiKey=${apikey}`, true);
    xhrPart9top.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 0; i < 1; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                                    
                    <div class="card mb-3" style="width: 100%; border: none;">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${articles[i]["urlToImage"]}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="upImage-top-left"><span
                                style="background-color: rgb(17, 103, 0); padding: 1px 10px 1px 10px;">Cricket</span>
                        </div>
                        <div class="col-md-8" style="padding-left: 40px;">
                            <div class="card-body">
                                <h2 class="card-title">${articles[i]["title"]}</h2>
                                <p class="card-text" style="font-size:large">${articles[i]["description"]}</p>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>  

                                `;
        }
        part9top.innerHTML = newsHtml;
    }

    let part9bottom1 = document.getElementById('part9bottom1');
    let xhrPart9bottom1 = new XMLHttpRequest();
    xhrPart9bottom1.open('GET', `https://newsapi.org/v2/everything?q='cricket'&apiKey=${apikey}`, true);
    xhrPart9bottom1.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 1; i <= 3; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
                // return;
            // }
            newsHtml +=
                `
                    <div class="col">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                                <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <div class="imgContainer">
                                                <img src="${articles[i]["urlToImage"]}"
                                                    class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                            </div>
                                        </div>
                                        <div class="upImage-top-left"><span
                                                style="background-color: rgb(17, 103, 0); padding: 1px 10px 1px 10px;">Cricket</span>
                                        </div>
                                        <div class="col-md-8" style="padding-left:1rem;">
                                            <div class="card-body">
                                                <h6 class="card-title">${articles[i]["title"]}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                

                                `;
        }

        part9bottom1.innerHTML = newsHtml;
    }

    let part9bottom2 = document.getElementById('part9bottom2');
    let xhrPart9bottom2 = new XMLHttpRequest();
    xhrPart9bottom2.open('GET', `https://newsapi.org/v2/everything?q='cricket'&apiKey=${apikey}`, true);
    xhrPart9bottom2.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 4; i <= 6; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                    <div class="col">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                                <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <div class="imgContainer">
                                                <img src="${articles[i]["urlToImage"]}"
                                                    class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                            </div>
                                        </div>
                                        <div class="upImage-top-left"><span
                                                style="background-color: rgb(17, 103, 0); padding: 1px 10px 1px 10px;">Cricket</span>
                                        </div>
                                        <div class="col-md-8" style="padding-left:1rem;">
                                            <div class="card-body">
                                                <h6 class="card-title">${articles[i]["title"]}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                

                                `;
        }

        part9bottom2.innerHTML = newsHtml;
    }
    let part10 = document.getElementById('part10');
    let xhrPart10 = new XMLHttpRequest();
    xhrPart10.open('GET', `https://newsapi.org/v2/everything?q='omnicron'&apiKey=${apikey}`, true);
    xhrPart10.onload = function () {
        if (this.status != 200) {
            return;
        }
        let newsObj = JSON.parse(this.responseText);
        let articles = newsObj["articles"];
        let newsHtml = ``;
        for (let i = 0; i < 2; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `<div class="col" style="margin: 0 12px 0 0; border-right: 1px solid rgb(215, 215, 215);">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                    <div class="card cardMid" style="width: auto; border:none;">
                        <div class="imgContainer">
                            <img src="${articles[i]["urlToImage"]}" class="card-img-top" alt="...">
                        </div>
                        <div class="upImage-top-left"><span
                                style="background-color: rgb(94, 80, 0); padding: 1px 10px 1px 10px;">Politics</span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${articles[i]["title"]}</h5>
                            <p class="card-text">${articles[i]["description"]}</p>
                        </div>
                    </div>
                    </a>
                </div>
                    `;
        }
        for (let i = 2; i < 3; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                    <div class="col-4" style="margin: 0 12px 0 0; border-right: 1px solid rgb(215, 215, 215);">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                                <div class="card cardMid" style="width: auto; border:none;">
                                    <div class="imgContainer">
                                        <img src="${articles[i]["urlToImage"]}" class="card-img-top" style="height: 300px;" alt="...">
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(94, 80, 0); padding: 1px 10px 1px 10px;">Politics</span>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">${articles[i]["title"]}</h5>
                                        <p class="card-text">${articles[i]["description"]}</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                    `;
        }
        for (let i = 3; i < 5; i++) {
            // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
            //     return;
            // }
            newsHtml +=
                `
                    <div class="col" style="margin: 0 12px 0 0; border-right: 1px solid rgb(215, 215, 215);">
                <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

                                <div class="card cardMid" style="width: auto; border:none;">
                                    <div class="imgContainer">
                                        <img src="${articles[i]["urlToImage"]}" class="card-img-top" alt="...">
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(94, 80, 0); padding: 1px 10px 1px 10px;">Politics</span>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">${articles[i]["title"]}</h5>
                                        <p class="card-text">${articles[i]["description"]}</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                    `;
        }
        part10.innerHTML = newsHtml;
    }
    xhrPart1left.send();
    xhrPart1right.send();
    xhrPart2.send();
    xhrPart3left.send();
    xhrPart3mid.send();
    xhrPart3right.send();
    xhrPart4top.send();
    xhrPart4bottom1.send();
    xhrPart4bottom2.send();
    xhrPart5.send();
    xhrPart6top.send();
    xhrPart6mid.send();
    xhrPart6bottom.send();
    xhrPart7left.send();
    xhrPart7mid.send();
    xhrPart7right.send();
    xhrPart8.send();
    xhrPart9top.send();
    xhrPart9bottom1.send();
    xhrPart9bottom2.send();
    xhrPart10.send();

    let searchGlobalTopic = document.getElementById('searchGlobalTopic');
    let searchGlobalBtn = document.getElementById('searchGlobalBtn');
    searchGlobalBtn.addEventListener('click',searchGlobalFunction);
    function searchGlobalFunction(){
        let globalSearchText = searchGlobalTopic.value.toLowerCase();
        localStorage.setItem('globalSearchText' ,globalSearchText);
        console.log(globalSearchText);
    };

    function navFunc(id){
        let navTopic = id.substring(8,id.length);
        localStorage.setItem('navTopic',navTopic);
    }

    // 30
        // 40
