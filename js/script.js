//alert
Swal.fire({
  title: "Hi dear👋 <br> Welcome to my Personal Website",
  width: 600,
  padding: "3em",
  color: "rgb(238, 202, 213)",
  background: "#fff url(/images/trees.png)",
  backdrop: `
    rgba(84, 83, 80, 0.58)
    left top
    no-repeat
  `,
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
    }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
    }
});

//feedback
const form = document.querySelector(".contact-form");
const messageBox = document.getElementById("messages");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value;
  const message = form.message.value;

  if (!name || !message) return;

  const card = document.createElement("div");
  card.classList.add("message-card");

  card.innerHTML = `
    <img src="./Image/profile.png" class="avatar">
    <div class="message-content">
      <h4>${name}</h4>
      <span class="time">just now</span>
      <p>${message}</p>
    </div>
  `;

  messageBox.prepend(card);
  form.reset();
});
