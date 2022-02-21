async function apiCall(url) {


    //add api call logic here
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data;
    } catch (error) {
        console.log(error)
    }


}


function appendArticles(articles, main) {

    //add append logic here
    articles.map(function(el)
    {
        let div = document.createElement("div")
        div.setAttribute("id","frame")
        div.addEventListener("click",function()
        {
            var arr =[];
            arr.push(el)
           localStorage.setItem("article",JSON.stringify(arr))
            window.location.href="news.html"
        })

        let des = document.createElement("p")
        des.textContent=el.description

        let image = document.createElement("img")
        image.src = el.urlToImage
        image.setAttribute("id","image")

        let title = document.createElement("h4")
        title.textContent=el.title

        div.append(title,image,des)
        main.append(div)
    })

}

export { apiCall, appendArticles }