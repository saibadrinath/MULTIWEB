const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  signupForm.style.opacity = 0;
  signupForm.style.transform = "translateY(-100px)";

  setTimeout(() => {
    window.location.href = "dashboard.html"; 
  }, 500); 
});

const activityForm = document.getElementById("activity-form");
activityForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const activity = document.getElementById("activity").value;
  const steps = document.getElementById("steps").value;
  const calories = document.getElementById("calories").value;
  const distance = document.getElementById("distance").value;

  const activityLog = document.getElementById("activity-log");
  const listItem = document.createElement("li");
  listItem.innerText = `${activity} - Steps: ${steps} | Calories: ${calories} | Distance: ${distance} km`;
  listItem.style.opacity = 0;
  listItem.style.transform = "translateX(-100px)";

  activityLog.appendChild(listItem);

  setTimeout(() => {
    listItem.style.opacity = 1;
    listItem.style.transform = "translateX(0)";
  }, 100); 
  activityForm.reset();
});