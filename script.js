function myFunction() {
  document.getElementById("demo1").innerHTML = "Yay";
  document.getElementById("demo2").innerHTML = "Wanna go to the arcade🕹";
}

const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

const messages  = [ 
    "No",
    "Nice try 😏",
    "Too slow 🏃",
    "Not happening",
    "Wrong button😂"
];
function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = x + "px";
    noBtn.style.top = y +"px";

    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    noBtn.textContent = randomMsg;
}

noBtn.addEventListener("mouseover", moveButton);

noBtn.addEventListener("click", moveButton);



const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {
    message.textContent = "Wanna go to the cinema🍿"
    
    setTimeout(() => {
        document.getElementById("demo1").textContent =
        "Nice😃 when are you free";
    }, 1000);

    // button animation
    yesBtn.style.animation = "pop 0.3s ease forwards";
    yesBtn.textContent = "YAY!!! 💖";
    yesBtn.style.backgroundColor = "#00ff08";

    // reset animation so it can play again if clicked
    setTimeout(() => {
        yesBtn.style.animation = "";
    }, 300);

    // create hearts
    for (let i = 0; i < 8; i++) {
        createHeart();
    }
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    heart.style.left = x + "px";
    heart.style.top = y + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}

noBtn.style.transition = "transform 0.4s ease, opacity 0.4s ease";
noBtn.style.transform = "scale(1)";
noBtn.style.opacity = "0";

setTimeout(() => {
    noBtn.style.display = "none";
}, 400);
});
