// // What You Will Learn
// // 1 How to change the content of HTML elements
// let dali;

// dali = document.getElementById('lorem1');
// console.log(dali);
// dali = document.getElementById('lorem1').id;
// console.log(dali);
// dali = document.getElementById('lorem1').className;
// console.log(dali);
// dali=document.getElementsByClassName('text')
// console.log(dali);

// dali = document.getElementById('lorem1');
// //dali = dali.id;
// dali = dali.className;
// console.log(dali);


// // 2 How to change the style (CSS) of HTML elements
// let dali;
// dali = document.getElementById('lorem1');
// dali.style.fontSize='60px';
// //dali.style.color='red';
// //dali.style.fontWeight='bold';
// //dali.style.display='none';


// 4 How to add and delete HTML elements
// let dali;
// document.getElementById('lorem1').innerText='ben bu isi ogrendim gibi';
// document.getElementById('lorem2').innerText='<b>ben bu isi ogrendim gibi</b>';
// document.getElementById('lorem3').innerHTML='<b>ben bu isi ogrendim gibi</b>';
// console.log(dali);


// 5 document.querySelector()//id classname ve taglara gore secimlerin hepsinde kullanilir
// let dali;
// console.log(document.querySelector('#lorem1'));
// console.log(document.querySelector('.text'));//html sayfasindaki ilk classname text olani secer digerlerini secmez
// console.log(document.querySelector('p'));//html sayfasindaki ilk p tagini  secer digerlerini secmez

// document.querySelector('p').style.color='red';
// document.querySelector('p:last-child').style.color='blue';
// document.querySelector('p:nth-child(2)').style.color='yellow';
// document.querySelector('p:nth-child(3)').textContent='textcontent ile degistirdim';
// document.querySelector('p:nth-child(4)').textContent='textcontent ile degistirdim';

//console.log(document.querySelectorAll('.text'));



// 6 className classList olayi

// document.getElementById('lorem1').className='eklenenclassname2';
// console.log(lorem1);
// document.getElementById('lorem2').classList.add('eklenenclassname');
// console.log(lorem2);


