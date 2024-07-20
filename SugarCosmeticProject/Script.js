function navigateToHome() {
  window.location.href = 'index.html';
}

function openCartPage() {
  window.location.href = './cart.html';
}

function openOfferPage() {
  window.location.href = './offer.html';
}

function logout() {
  // Add your logout logic here
  alert('Logged out!');
}

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

document.getElementById('signupButton').addEventListener('click', function() {
  const email = document.getElementById('emailInput').value;
  if (email) {
      alert('Thank you for subscribing with ' + email);
      // Add your subscription logic here, e.g., send the email to your server
      document.getElementById('emailInput').value = ''; // Clear the email input field
  } else {
      alert('Please enter a valid email address.');
  }
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email && password) {
      alert('Login successful!');
  } else {
      alert('Please enter a valid email and password.');
  }
});

document.getElementById('forgotPasswordLink').addEventListener('click', function(event) {
  event.preventDefault();
  alert('Forgot password functionality is not implemented yet.');
});

document.getElementById('registerLink').addEventListener('click', function(event) {
  event.preventDefault();
  alert('Register functionality is not implemented yet.');
});


