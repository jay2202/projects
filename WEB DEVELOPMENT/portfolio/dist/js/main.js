//select dom items

var o=0;
var c=document.getElementsByClassName('skill');
for(var i=0;i<c.length;i++){
  c[i].onmouseover=function(e){
    var x=this.children;
    x[0].lastChild.innerHTML=this.title;
    x[1].firstChild.style.width = this.title;
    x[1].firstChild.style.borderColor = "yellow";    
  }
  c[i].onmouseout=function(e){
    var x=this.children;
    x[0].lastChild.innerHTML="";
    x[1].firstChild.style.width = "0%";
    x[1].firstChild.style.borderColor = "#444";
  }
}

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');

//set initial state of menu

var showMenu=false;

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));
        showMenu=true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));
        showMenu=false;
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("preview");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img[0].onclick = function(){
    modal.style.display = "block";
    modalImg.src = "images/project/Project1.jpg";
    captionText.innerHTML = "A machine learning model to predict the home prices at different locations in Banglore City.";
  document.getElementById('use').innerHTML="Use: With this model, we can easily predict the prices of the houses in Banglore City just by entering few details"
  document.getElementById('dataset').innerHTML="Dataset Used:- Kaggle Bangaluru house price dataset.";
  document.getElementById('tools').innerHTML="Tools used:- LinearRegression, pandas,";
  document.getElementById('result').innerHTML=" Result :- 92.7%";
  }

img[1].onclick = function(){
  modal.style.display = "block";
  modalImg.src = "images/project/Project2.jpg";
  captionText.innerHTML = "A Machine Learning model to make a difference between real and fake news by giving title and article. ";
document.getElementById('use').innerHTML="Use:- With this model, we can stop spreading fake and toxic messages which can spread hate and wrong information in public."
document.getElementById('dataset').innerHTML="Dataset Used:Kaggle fake news Dataset.";
document.getElementById('tools').innerHTML="Tools Used:tfidfvectorizer and Passive-Aggresive Classifier.";
document.getElementById('result').innerHTML="Result :- 92.82%"
}

img[2].onclick = function(){
    modal.style.display = "block";
    modalImg.src = "images/project/Project3.jpg";
    captionText.innerHTML = "A deep neural network model that can classify traffic signs present in the image into Its different categories.";
  document.getElementById('use').innerHTML="Use:- With this model, machines are able to read and understand traffic signs which are a very important task for all autonomous vehicles."
  document.getElementById('dataset').innerHTML="Dataset Used:Kaggle traffic sign Dataset.";
  document.getElementById('tools').innerHTML="Tools Used:- Keras, PIL,Opencv,PIL and image classification.";
  document.getElementById('result').innerHTML=" Result :- 95%";
  }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

//skill

