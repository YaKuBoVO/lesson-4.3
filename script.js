"use strict"
const btnTitle = document.querySelector('#btn-title');
const elSee = document.querySelector('#el-see');
const elCon = document.querySelector('#el-con')
const elShow = document.querySelector('#show');
const elChoose = document.querySelector('#choose');

const elRound = document.querySelector('#round');
const active = document.querySelector('.active');
const elRound1 = document.querySelector('.round1');
const elRound2 = document.querySelector('.round2');
const elRound3 = document.querySelector('.round3');


const elButBtn = document.querySelector('#but-btn');
const elSubBtn = document.querySelector('#sub-btn');
const elNoBack = document.getElementById('no-back');
const elYesNo = document.getElementById('yes-no')

elChoose.style.fontWeight = "bold";

elShow.style.fontSize = "16px";
elShow.style.fontWeight = "500";
elShow.style.marginLeft = "105px";

btnTitle.style.marginLeft = "60px"

elButBtn.style.display = 'none';
elButBtn.style.padding = '9px 18px';

elSubBtn.style.display = 'none';
elSubBtn.style.padding = '9px 18px';

elNoBack.style.display = 'none';
elNoBack.style.padding = '9px 18px'

elYesNo.style.display = 'none';
elYesNo.style.padding = '9px 18px'





btnTitle.addEventListener('click', (e) => {
   if (elSubBtn.style.opacity = '1') {
     elSubBtn.style.display = 'inline';
     elButBtn.style.display = 'inline';
     btnTitle.remove();
     elShow.textContent = "Choose description content";

     elChoose.style.fontWeight = "500";
     elSee.style.fontWeight = 'bold';
     
     elRound2.classList.add("active");
   } 
});



elSubBtn.addEventListener('click', (e) => {
   if(elYesNo.style.display = 'none') {
      elNoBack.style.display = 'inline';
      elYesNo.style.display = 'inline';
      elShow.textContent = "Are you happy now?"
      elButBtn.remove();
      elSubBtn.remove();

      elRound3.classList.add("active");

      elSee.style.fontWeight = '500';
      elCon.style.fontWeight = 'bold';
   }
});


elYesNo.addEventListener('click', (e) => {
  if (elYesNo.style.display = 'none') {
   elYesNo.remove();
   elNoBack.remove();
    elShow.textContent = `Ok, we're done. Thanks for sending us your data!`;

    elRound1.classList.remove("active");
    elRound2.classList.remove("active");
    elRound3.classList.remove("active");
    elCon.style.fontWeight = '500';
  }
});



/* radioga click */

elChoose.addEventListener('click', (e) => {
   elRound1.classList.add("active");

   elChoose.style.fontWeight = "bold";
    elSee.style.fontWeight = '500';
     elCon.style.fontWeight = '500';
});


elSee.addEventListener('click', (e) => {
      if (elSubBtn.style.opacity = '1') {
     elSubBtn.style.display = 'inline';
     elButBtn.style.display = 'inline';
     btnTitle.remove();
     elShow.textContent = "Choose description content";

     elRound2.classList.add("active");

     elChoose.style.fontWeight = "500";
     elSee.style.fontWeight = 'bold';
     elCon.style.fontWeight = '500';
   } 
});



elCon.addEventListener('click', (e) => {
      if(elYesNo.style.display = 'none') {
      elNoBack.style.display = 'inline';
      elYesNo.style.display = 'inline';
      elShow.textContent = "Are you happy now?"
      elButBtn.remove();
      elSubBtn.remove();
      btnTitle.remove();

      elRound3.classList.add("active");

      elChoose.style.fontWeight = '500';
      elSee.style.fontWeight = '500';
      elCon.style.fontWeight = 'bold';
   }
});






/* Orqaga qaytish */

elButBtn.addEventListener('click', (e) => {
   elButBtn.textContent = "Submit title";
   elSubBtn.remove();
   elShow.textContent = "Choose title content";

   elRound1.classList.add("active");
   elRound2.classList.remove("active");
   elChoose.style.fontWeight = "bold";
   elSee.style.fontWeight = '500';
});


elNoBack.addEventListener('click', (e) => {
   elNoBack.textContent = "Back";
   elYesNo.textContent = "Submit description";
   elShow.textContent = "Choose description content";

   elRound2.classList.add("active");
   elRound3.classList.remove("active");

   elSee.style.fontWeight = "bold";
   elCon.style.fontWeight = '500';
});