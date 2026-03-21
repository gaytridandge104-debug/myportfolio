function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
  const btn = document.querySelector('.start-btn');
  const reaction = document.querySelector('.reaction');
  const mainContent = document.getElementById('main-content');

  btn.addEventListener('click', function() {
    // trigger green chemical effect
    reaction.classList.add('active');

    // After animation, show all main content
    
    }, 1200);
  });
});

      
const btn = document.querySelector('.start-btn');
const reaction = document.querySelector('.reaction');
const about = document.getElementById("about");

btn.addEventListener('click', function() {
  reaction.classList.add('active');  // trigger green effect

  setTimeout(() => {
    about.classList.remove("hidden"); // show about
    about.scrollIntoView({ behavior: "smooth" });
  }, 1200);  // wait for animation to finish
});


// typing
const text = ["welcome", "gayatri", "dandge"];
let i = 0, j = 0;
let current = "", deleting = false;

function type() {
  current = text[i];

  if (!deleting) {
    document.getElementById("typing").innerHTML = current.substring(0, j++);
  } else {
    document.getElementById("typing").innerHTML = current.substring(0, j--);
  }

  if (j == current.length) deleting = true;
  if (j == 0) {
    deleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, deleting ? 50 : 100);
}
type();

// scroll animation
const elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
function expandCard(card) {
  document.getElementById("expand-title").innerText = card.dataset.title;
  document.getElementById("expand-desc").innerText = card.dataset.desc;
  document.getElementById("expand-img").src = card.dataset.img;

  document.getElementById("expand-view").style.display = "block";
}

function closeExpand() {
  document.getElementById("expand-view").style.display = "none";
}
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', () => {
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const message = document.getElementById('messageInput').value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  
});
