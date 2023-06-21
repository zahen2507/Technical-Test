document.getElementById("button1").addEventListener("click", function() {
    showNotification();
  });
  
  document.getElementById("button2").addEventListener("click", function() {
    showNotification();
  });
  
  document.getElementById("button3").addEventListener("click", function() {
    showNotification();
  });
  
  function showNotification() {
    var notification = document.getElementById("notification");
    notification.classList.add("show");
  
    setTimeout(function() {
      notification.classList.remove("show");
    }, 3000);
  }
  