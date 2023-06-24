"use strict"
const btnTitle = document.querySelector('#btn-title');
const elSee = document.querySelector('#el-see');
const elCon = document.querySelector('#el-con')
const elShow = document.querySelector('#show');
const elChoose = document.querySelector('#choose');



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
   } 
});



elSubBtn.addEventListener('click', (e) => {
   if(elYesNo.style.display = 'none') {
      elNoBack.style.display = 'inline';
      elYesNo.style.display = 'inline';
      elShow.textContent = "Are you happy now?"
      elButBtn.remove();
      elSubBtn.remove();

      elSee.style.fontWeight = '500';
      elCon.style.fontWeight = 'bold';
   }
});


elYesNo.addEventListener('click', (e) => {
  if (elYesNo.style.display = 'none') {
   elYesNo.remove();
   elNoBack.remove();
    elShow.textContent = "Ok, we're done. Thanks for sending us your data!"
    elCon.style.fontWeight = '500';
  }
});



/* radioga click */

elSee.addEventListener('click', (e) => {
      if (elSubBtn.style.opacity = '1') {
     elSubBtn.style.display = 'inline';
     elButBtn.style.display = 'inline';
     btnTitle.remove();
     elShow.textContent = "Choose description content";

     elChoose.style.fontWeight = "500";
     elSee.style.fontWeight = 'bold';
   } 
});


elCon.addEventListener('click', (e) => {
      if(elYesNo.style.display = 'none') {
      elNoBack.style.display = 'inline';
      elYesNo.style.display = 'inline';
      elShow.textContent = "Are you happy now?"
      elButBtn.remove();
      elSubBtn.remove();

      elSee.style.fontWeight = '500';
      elCon.style.fontWeight = 'bold';
   }
})




/* Orqaga qaytish */

//elButBtn.addEventListener('click', (e) => {
//   if(btnTitle.style. = '1') {
//      btnTitle.style.opacity = '1';
//   }
//});