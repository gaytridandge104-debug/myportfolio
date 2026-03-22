function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector('.start-btn');
  const reaction = document.querySelector('.reaction');
  const mainContent = document.getElementById('main-content');
  const about = document.getElementById("about");

  btn.addEventListener('click', function () {
    // trigger green chemical effect
    reaction.classList.add('active');

    // Allow clicks to pass through reaction during animation
    reaction.style.pointerEvents = "none";

    // After animation, show main content
    setTimeout(() => {
      mainContent.classList.remove("hidden");
      about.classList.remove("hidden");
      about.scrollIntoView({ behavior: "smooth" });

      // Remove the reaction effect
      reaction.classList.remove('active');
    }, 1200);
  });

  // typing effect
  const text = ["student", "learner", "build"];
  let i = 0, j = 0, current = "", deleting = false;

  function type() {
    current = text[i];

    if (!deleting) {
      document.getElementById("typing").innerHTML = current.substring(0, j++);
    } else {
      document.getElementById("typing").innerHTML = current.substring(0, j--);
    }

    if (j === current.length) deleting = true;
    if (j === 0) {
      deleting = false;
      i = (i + 1) % text.length;
    }

    setTimeout(type, deleting ? 70 : 200);
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

  // card expand
  window.expandCard = function (card) {
    document.getElementById("expand-title").innerText = card.dataset.title;
    document.getElementById("expand-desc").innerText = card.dataset.desc;
    document.getElementById("expand-img").src = card.dataset.img;
    document.getElementById("expand-view").style.display = "block";
  }

  window.closeExpand = function () {
    document.getElementById("expand-view").style.display = "none";
  }

  // contact form
  const sendButton = document.getElementById('sendButton');
  sendButton.addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('messageInput').value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  });
});