// Các bộ chọn User
const info = document.querySelector(".info");
const submit = document.querySelector(".btn-email");
const errorEmail = document.getElementById("error-email");
const submitEmail = document.querySelector(".submit-email");
const noteEmail = document.querySelector(".note-email");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Ẩn thông tin cá nhân
info.classList.add("hidden");

// Chức năng ẩn thông tin cá nhân
submit.addEventListener("click", function () {
  // Lấy giá trị email và chuyển sang chữ thường
  const emailValue = document.getElementById("email").value.toLowerCase();

  // Check email
  const checkEmail = emailValue.match(regex);

  if (checkEmail) {
    info.classList.remove("hidden");
    submitEmail.classList.add("hidden");
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng";
    noteEmail.classList.add("hidden");
    emailValue.textContent = "";
  }
});

// Chức năng ẩn thông tin nghề nghiệp
const itJobs = document.querySelectorAll(".intro-job");

itJobs.forEach((itJob) => {
  const btView = itJob.querySelector(".btn-view");
  const jbLay = itJob.querySelector(".job-layout");
  itJob.addEventListener("mouseover", function () {
    btView.classList.remove("hidden");
  });

  itJob.addEventListener("mouseout", function () {
    btView.classList.add("hidden");
  });

  btView.addEventListener("click", function () {
    if (jbLay.classList.value.includes("hidden")) {
      jbLay.classList.remove("hidden");
      this.textContent = "▲ VIEW LESS";
      itJob.classList.add("h-100");
    } else {
      jbLay.classList.add("hidden");
      this.textContent = "▼ VIEW MORE";
      itJob.classList.remove("h-100");
    }
  });
});
