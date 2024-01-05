const PreLoader = document.getElementById("preloader");

window.addEventListener("load", function () {
  PreLoader.style.display = "none";
});

function CursorAnimation() {
  const CursorPointer = document.querySelector("#follower");
  const PageOne = document.querySelector("#main");

  PageOne.addEventListener("mousemove", function (dets) {
    gsap.to(CursorPointer, {
      x: dets.x,
      y: dets.y,
      scroller: "#main",
    });
  });
  PageOne.addEventListener("mouseenter", function () {
    gsap.to(CursorPointer, {
      scale: 1,
      opacity: 1,
    });
  });

  PageOne.addEventListener("mouseleave", function () {
    gsap.to(CursorPointer, {
      scale: 0,
      opacity: 0,
    });
  });
}
CursorAnimation();

function SideNav() {
  const checkbox = document.getElementById("checkbox");
  const sideNav = document.querySelector(".sidenav");

  // Function to toggle side navigation visibility
  function toggleSideNav() {
    if (checkbox.checked) {
      sideNav.style.left = "0"; // Show side navigation
    } else {
      sideNav.style.left = "-400px"; // Hide side navigation
    }
  }

  // Event listener for checkbox change (hamburger menu click)
  checkbox.addEventListener("change", toggleSideNav);

  function increase() {
    // Change the variable to modify the speed of the number increasing from 0 to (ms)
    let SPEED = 40;
    // Retrieve the percentage value
    let limit = parseInt(document.getElementById("value1").innerHTML, 10);

    for (let i = 0; i <= limit; i++) {
      setTimeout(function () {
        document.getElementById("value1").innerHTML = i + "%";
      }, SPEED * i);
    }
  }

  increase();

  function increase2() {
    // Change the variable to modify the speed of the number increasing from 0 to (ms)
    let SPEED = 40;
    // Retrieve the percentage value
    let limit = parseInt(document.getElementById("value2").innerHTML, 10);

    for (let i = 0; i <= limit; i++) {
      setTimeout(function () {
        document.getElementById("value2").innerHTML = i + "%";
      }, SPEED * i);
    }
  }

  increase2();

  function increase3() {
    // Change the variable to modify the speed of the number increasing from 0 to (ms)
    let SPEED = 40;
    // Retrieve the percentage value
    let limit = parseInt(document.getElementById("value3").innerHTML, 10);

    for (let i = 0; i <= limit; i++) {
      setTimeout(function () {
        document.getElementById("value3").innerHTML = i + "%";
      }, SPEED * i);
    }
  }

  increase3();

  function increase4() {
    // Change the variable to modify the speed of the number increasing from 0 to (ms)
    let SPEED = 40;
    // Retrieve the percentage value
    let limit = parseInt(document.getElementById("value4").innerHTML, 10);

    for (let i = 0; i <= limit; i++) {
      setTimeout(function () {
        document.getElementById("value4").innerHTML = i + "%";
      }, SPEED * i);
    }
  }

  increase4();
}

SideNav();

function CardAnimation() {
  // Initialize ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Define the stacking animation
  function stackCards() {
    gsap.to(".rightcard .card-wrapper", {
      y: function (index, target) {
        return index * -100;
      },
      ease: "power4.out",
      duration: 1,
      stagger: 0.2,
      scrub: true,
    });
  }

  // Create the ScrollTrigger for each card
  gsap.utils.toArray(".card-wrapper").forEach(function (card, index) {
    gsap.set(card, { opacity: 0, y: index * -100 }); // Set initial state
    ScrollTrigger.create({
      trigger: card,
      // scroller: "#main",
      start: "top 60%",
      end: "bottom 20%",
      scrub: true,
      onEnter: function () {
        gsap.to(card, { opacity: 1, duration: 0.5 });
        gsap.to(card, { y: 0, duration: 1, ease: "power4.out" });
      },
      onLeaveBack: function () {
        gsap.to(card, { opacity: 0, duration: 0.5 });
        gsap.to(card, { y: index * -100, duration: 1, ease: "power4.out" });
      },
    });
  });

  // Trigger the stacking animation on page load
  stackCards();
}
CardAnimation();

gsap.to(".mouse", {
  duration: 1,
  y: 50,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
});

// Assuming you've already included the GSAP and ScrollTrigger CDN links
gsap.registerPlugin(ScrollTrigger);

gsap.to(".leftcard", {
  x: "0", // Animate from offscreen left to its original position
  ease: "power2.out",
  duration: 1.5, // Adjust duration as needed
  scrollTrigger: {
    trigger: ".leftcard",

    start: "top 80%", // Adjust trigger point as needed
  },
});
