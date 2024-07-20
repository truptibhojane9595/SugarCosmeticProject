//search bar code...

//...........................................................................................................
//middle section.....
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.image-container');
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
    
    const images = document.querySelectorAll('.image-container img');
    let currentIndex = 0;
  
    function updateImagePosition() {
      imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    leftButton.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateImagePosition();
      }
    });
  
    rightButton.addEventListener('click', function() {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImagePosition();
      }
    });
  });
  //..............................................................................................................................  
  function handleJoinNow() {
    alert("Thank you for joining Club Vellvette!");
}

//subscribe section
function openNewPage() {
    window.location.href = "https://startuptalky.com/sugar-cosmetics-success-story/";
}

function handleSubscribe() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
    
    if (validateEmail(email)) {
        alert(`Thank you for subscribing with email: ${email}`);
    } else {
        alert('Please enter a valid email address.');
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
//.......................................................................................................................................