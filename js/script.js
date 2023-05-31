const faqItems = document.querySelectorAll('.faq-item');
const faqQuestions = document.querySelectorAll('.faq-question');
const image = document.querySelector('#front-image');
const iconImgs = document.querySelectorAll('.faq-icon-img');

const windowOnloadImg = document.getElementById('window-onload-img');


const firstAns= document. getElementsByClassName('faq-answer')[0];


let currentQuestionIndex = 2;

const images = ['images/front-image-1.jpg', 'images/front-image-2.jpg', 'images/front-image-3.jpg', 'images/front-image-4.jpg'];

window.onload = function() { 
faqQuestions[0].click(); 
firstAns.style.transition = 'all 0s ease-in-out';
let currentQuestionIndex = 0;


setTimeout(() => {
      windowOnloadImg.style.opacity=0;
    }, 1000);


}


faqQuestions.forEach((question, index) => {
  question.addEventListener('click', () => {
    if (currentQuestionIndex === index) {
      // Do nothing if the same question is clicked again
      return;
    }

    // Disable cursor for the previously clicked question
    if (currentQuestionIndex !== null) {
      faqQuestions[currentQuestionIndex].style.cursor = 'pointer';
      for (let i = 0; i < iconImgs.length; i++) {
        iconImgs[i].style.transform = 'rotate(90deg)';
      }
    }

    // Enable cursor for the newly clicked question
    faqQuestions[index].style.cursor = 'not-allowed';
    iconImgs[index].style.transform = 'rotate(0deg)';

    // Toggle active icon for the newly clicked question only if the answer is shown
    if (faqItems[index].classList.contains('show') && currentQuestionIndex !== index) {
      iconImgs[index].classList.toggle('active-icon');
    }
    const answer = faqItems[index].querySelector('.faq-answer');
    const currentAnswer = faqItems[currentQuestionIndex]?.querySelector('.faq-answer');
    // Remove active icon from all other question's icon images
    for (let i = 0; i < iconImgs.length; i++) {
      if (i !== index) {
        iconImgs[i].classList.remove('active-icon');
      }
    }



    // Increase height of answer div
    answer.style.height = answer.scrollHeight + 'px';
    answer.style.transition = 'height 0.5s ease-in-out';

    // Decrease height of previous answer div
    if (currentAnswer) {
      currentAnswer.style.height = 0;
      currentAnswer.style.transition = 'height 0.5s ease-in-out';
      setTimeout(() => {
        currentAnswer.classList.remove('show');
      }, 500);
    }

    // Show new answer
    faqItems[index].classList.add('show');

    // Update current question index
    currentQuestionIndex = index;

    // Hide and show the image with a fade effect
    image.classList.add('hide');
    setTimeout(() => {
      image.src = images[index];
      image.classList.remove('hide');
    }, 500);

  });
});
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