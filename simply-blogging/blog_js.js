var blogObj = [];
var i = 0;
//let blogContainer = document.getElementById("blog-container")
let cardContainer = document.getElementById("card-container");

function retrieveFromSession(){
    //cardContainer.remove();
    insertNewArticle();
}

function insertNewArticle(){
    //let cardContainer = document.createElement("card-container");
    //blogContainer.appendChild(cardContainer);
    //document.getElementById("card-container").innerHTML = "";
    let keys = Object.keys(localStorage);
    console.log(keys);
    var items = JSON.parse(localStorage.getItem(keys));
    for(var x=0;x<Object.keys(items).length;x++){
        console.log(items[x].title);

        let card = document.createElement('div');
        card.className = 'card shadow cursor-pointer';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let title = document.createElement('h5');
        title.innerText = items[x].title;
        title.className = 'card-title';

        let article = document.createElement('div');
        article.innerText = items[x].articles;
        article.className = 'card-article';

        let image = document.createElement('img');
        image.src = items[x].image;
        image.className = 'card-image';


        cardBody.appendChild(title);
        cardBody.appendChild(article);
        cardBody.appendChild(image);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
    }
    //localStorage.clear();
}

function storeInSession(){
    let keys = "blogInfo";
    localStorage.setItem(keys, JSON.stringify(blogObj));
    retrieveFromSession();
}


function addBlog(){
    var data = readFromData();
    document.getElementById("card-container").innerHTML = "";
    console.log(data);
    blogObj.push(data);
    //console.log(data);
    storeInSession();
}

function readFromData(){
    var obj = {};    // empty object
    obj.title = document.getElementById("title").value;
    console.log(obj.title);
    obj.articles = document.getElementById("articles").value;
    console.log(obj.articles);
    obj.image = document.getElementById("image").files[0].name;
    console.log(obj);
    return obj;
}

function clearLocalStorage(){
    localStorage.clear();
    let keys = Object.keys(localStorage);
    console.log(keys)
}

// let initListOfTasks = () => {
//     if (cardContainer) {
//       document.getElementById('card-container').replaceWith(cardContainer);
//       return;
//     }
  
//     cardContainer = document.getElementById('card-container');
//     tasks.forEach((task) => {
//       createTaskCard(task);
//     });
//   };