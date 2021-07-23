let article1Ref = document.getElementById("article1");
let article2Ref = document.getElementById("article2");
let imageRef = document.getElementById("images");


article1Ref.style.display = "none";
article2Ref.style.display = "none";


function showArticle1(){
    event.preventDefault();
    article1Ref.style.display = "";
    imageRef.style.display = "none";
}
function showArticle2(){
    event.preventDefault();
    article2Ref.style.display = "";
    imageRef.style.display = "none";
}
