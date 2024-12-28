//welcome Gesture....
const username = sessionStorage.getItem('loggedInUser')|| 'Guest';

document.getElementById('welcome').textContent = `Dear, ${username}. Welcome to Mega Cart!`;

document.getElementById('username').textContent =`${username}` ;
const email = sessionStorage.getItem('email')||`User-Email`;
document.getElementById('email').textContent = `${email}`;

// Function to filter products based on category
// function filterCategory(category) {
    
//     const allProducts = document.querySelectorAll('.product-card');

    
//     allProducts.forEach(product => {
//         if (product.classList.contains(category)) {
//             product.style.display = 'block'; 
//         } else {
//             product.style.display = 'none'; 
//         }
//     });
// }

// Initially show all products when page loads
// window.onload = function () {
//     filterCategory('electronics');
//     filterCategory('clothing');
//     filterCategory('appliances');
//     filterCategory('books');
// };
// footer scroll button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Image slideshow
let slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3","mySlides4","mySlides5","mySlides6","mySlides7","mySlides8", "mySlides9", "mySlides10","mySlides11","mySlides12","mySlides13","mySlides14",
    "mySlides15", "mySlides16", "mySlides17","mySlides18","mySlides19","mySlides20","mySlides21", "mySlides22","mySlides23","mySlides24"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);
showSlides(1, 13);
showSlides(1, 14);
showSlides(1, 15);
showSlides(1, 16);
showSlides(1, 17);
showSlides(1, 18);
showSlides(1, 19);
showSlides(1, 20);
showSlides(1, 21);
showSlides(1, 22);
showSlides(1, 23);




function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


//logout
function logout() {
    // Clear all session storage
    sessionStorage.clear();

    // Redirect to login page
    window.location.href = 'login.html';
}


//Checkout button 
let count=0;
const counter=document.getElementById('counter'); 
document.getElementById('btn_add1').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add2').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add3').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add4').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add5').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add6').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add7').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add8').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add9').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add10').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add11').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add12').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add13').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add14').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add15').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add16').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add17').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add18').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add19').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add20').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add21').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add22').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add23').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});
document.getElementById('btn_add24').addEventListener('click',event => {
    const cl=counter.classList;
    const c='animated-counter';
    count++;
    counter.innerText=count;
    cl.remove(c,cl.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter'),1)

});