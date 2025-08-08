const feedbacks = [
  {
    quote:
      "They are the best people. And this is the suitable platform to learn from distance.",
    author: "Ben Foakes",
    role: "student",
    avatars: [
      "./assets/img/person1.avif",
      "./assets/img/person2.avif",
      "./assets/img/person3.avif",
      "./assets/img/person4.avif",
      "./assets/img/person5.avif",
      "./assets/img/person6.avif",
    ],
  },
  {
    quote: "This platform changed the way I learn and connect with others.",
    author: "Alice Smith",
    role: "designer",
    avatars: [
      "./assets/img/person2.avif",
      "./assets/img/person3.avif",
      "./assets/img/person4.avif",
      "./assets/img/person5.avif",
      "./assets/img/person6.avif",
      "./assets/img/person1.avif",
    ],
  },
  {
    quote:
      "I highly recommend this to anyone seeking quality learning resources.",
    author: "John Doe",
    role: "developer",
    avatars: [
      "./assets/img/person3.avif",
      "./assets/img/person4.avif",
      "./assets/img/person5.avif",
      "./assets/img/person6.avif",
      "./assets/img/person1.avif",
      "./assets/img/person2.avif",
    ],
  },
  {
    quote:
      "Thanks to this tool, we’ve saved countless hours and improved our productivity significantly.",
    author: "David Wilson",
    role: "Operations Manager",
    avatars: [
      "./assets/img/person4.avif",
      "./assets/img/person5.avif",
      "./assets/img/person6.avif",
      "./assets/img/person1.avif",
      "./assets/img/person2.avif",
      "./assets/img/person3.avif",
    ],
  },
  {
    quote:
      "The design and user interface are top-notch. It’s intuitive and pleasant to use.",
    author: "Sarah Johnson",
    role: "UX Designer",
    avatars: [
      "./assets/img/person5.avif",
      "./assets/img/person6.avif",
      "./assets/img/person1.avif",
      "./assets/img/person2.avif",
      "./assets/img/person3.avif",
      "./assets/img/person4.avif",
    ],
  },
  {
    quote:
      "The customer support team is outstanding! Always responsive and ready to help.",
    author: "Michael Lee",
    role: "Marketing Director",
    avatars: [
      "./assets/img/person6.avif",
      "./assets/img/person1.avif",
      "./assets/img/person2.avif",
      "./assets/img/person3.avif",
      "./assets/img/person4.avif",
      "./assets/img/person5.avif",
    ],
  },
];

let currentIndex = 0;

const blockquoteEl = document.querySelector(".feedback__text blockquote");
const authorEl = document.querySelector(".feedback__text .author");
const avatarImgs = document.querySelectorAll(".feedback-avt img");

function renderFeedback(index) {
  const fb = feedbacks[index];
  blockquoteEl.textContent = `“${fb.quote}”`;
  authorEl.innerHTML = `<strong>${fb.author},&nbsp;</strong>${fb.role}.`;
  avatarImgs.forEach((img, i) => {
    img.src = fb.avatars[i];
  });
}

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
  renderFeedback(currentIndex);
});

document.querySelector(".next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % feedbacks.length;
  renderFeedback(currentIndex);
});

renderFeedback(currentIndex);

function updateFeedback(index) {
  quoteElement.style.opacity = 0;
  nameElement.style.opacity = 0;
  titleElement.style.opacity = 0;
  mainAvatar.style.opacity = 0;

  setTimeout(() => {
    quoteElement.textContent = feedbacks[index].quote;
    nameElement.textContent = feedbacks[index].name;
    titleElement.textContent = feedbacks[index].title;
    mainAvatar.src = feedbacks[index].avatar;

    const total = feedbacks.length;
    avatars.forEach((avatar, i) => {
      let pos = (index + i) % total;
      avatar.src = feedbacks[pos].avatar;
    });

    quoteElement.style.transform = "scale(0.98)";
    nameElement.style.transform = "scale(0.98)";
    titleElement.style.transform = "scale(0.98)";
    mainAvatar.style.transform = "scale(0.95)";

    quoteElement.style.opacity = 1;
    nameElement.style.opacity = 1;
    titleElement.style.opacity = 1;
    mainAvatar.style.opacity = 1;

    setTimeout(() => {
      quoteElement.style.transform = "scale(1)";
      nameElement.style.transform = "scale(1)";
      titleElement.style.transform = "scale(1)";
      mainAvatar.style.transform = "scale(1)";
    }, 200);
  }, 200);
}
