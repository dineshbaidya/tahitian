console.log('script is running');
const listLinks = document.getElementsByClassName('unordered-list')[0];
const listLi = listLinks.getElementsByTagName("li");
var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
if(
isChromium !== null &&
typeof isChromium !== "undefined" &&
vendorName === "Google Inc.")
{
console.log('chrome');
for(let i=0; i<listLi.length;i++){
listLi[i].style.paddingTop=1;
listLi[i].style.paddingBottom=0;}
}else{
console.log('another browser');
}


const faqDivs = document.querySelectorAll('.faq-sub-divs');
const iconImgs = document.querySelectorAll('.faq-icon-img');
const contentDivs = document.querySelectorAll('.content-div');


window.addEventListener("load", (event) => {
iconImgs[0].classList.toggle('active-icon');
contentDivs[0].classList.toggle('active');
});


for(let i=0; i<faqDivs.length;i++){
	faqDivs[i].addEventListener("click", function(){
	contentDivs[i].classList.toggle('active');
	iconImgs[i].classList.toggle('active-icon');
	}); 
}




const socialLinksImg = document.querySelectorAll('.social-icons');
const socialLinks = document.querySelectorAll('.social-links');

for(let i=0; i<socialLinksImg.length;i++){
	socialLinksImg[i].addEventListener("mouseover", function(){
	socialLinksImg[i].style.transform = 'scale(1.2)';
	socialLinks[i].style.color="rgb(110,174,223)";
	}); 
}

for(let i=0; i<socialLinks.length;i++){
	socialLinks[i].addEventListener("mouseover", function(){
	socialLinksImg[i].style.transform = 'scale(1.2)';
	socialLinks[i].style.color="rgb(110,174,223)";
	}); 
}

for(let i=0; i<socialLinksImg.length;i++){
	socialLinksImg[i].addEventListener("mouseout", function(){
	socialLinksImg[i].style.transform = 'scale(1)';
	socialLinks[i].style.color="rgb(178,246,9)";
	}); 
}

for(let i=0; i<socialLinks.length;i++){
	socialLinks[i].addEventListener("mouseout", function(){
	socialLinksImg[i].style.transform = 'scale(1)';
	socialLinks[i].style.color="rgb(178,246,9)";
	}); 
}









































