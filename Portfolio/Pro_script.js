function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.onclick = () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
};

// typing effect
const nameText = "Hi, I'm Indronill Dutta Nill";
const descText = "I enjoy solving real-world problems and continuously learning new technologies.";

let i = 0;
let j = 0;

function typeName() {
  if (i < nameText.length) {
    document.getElementById("typing-name").textContent += nameText.charAt(i);
    i++;
    setTimeout(typeName, 80);
  } else {
    setTimeout(typeDesc, 500);
  }
}

function typeDesc() {
  if (j < descText.length) {
    document.getElementById("typing-desc").textContent += descText.charAt(j);
    j++;
    setTimeout(typeDesc, 60);
  }
}

window.onload = () => {
  typeName();
};

// open image
function openModal(src) {
  document.getElementById("imgModal").style.display = "block";
  document.getElementById("modalImg").src = src;
}

// close image
function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

const welcomeText = "-Welcome to my portfolio";
let w = 0;

function typeWelcome() {
  if (w < welcomeText.length) {
    document.getElementById("typing-welcome").textContent += welcomeText.charAt(w);
    w++;
    setTimeout(typeWelcome, 60);
  }
}

window.onload = () => {
  typeWelcome();
  typeName(); // your existing typing
};

// Contact Functions
function sendEmail() {
  window.location.href = 'mailto:indronill.nill12@gmail.com';
}

function sendSMS() {
  const phoneNumber = '+8801234567890'; // Update with your actual number
  const message = encodeURIComponent('Hi Indronill! I came across your portfolio and would love to discuss collaboration opportunities.');
  
  // Try different SMS methods based on device
  if (navigator.userAgent.match(/Android/i)) {
    window.location.href = `sms:${phoneNumber}?body=${message}`;
  } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    window.location.href = `sms:${phoneNumber}&body=${message}`;
  } else {
    // Fallback for desktop
    if (confirm('Open your default SMS app?')) {
      window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=${message}`, '_blank');
    }
  }
}

function makeCall() {
  const phoneNumber = '+8801234567890'; // Update with your actual number
  window.location.href = `tel:${phoneNumber}`;
}