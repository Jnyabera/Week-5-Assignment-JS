 // 1. Change text content dynamically
  document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    logo.textContent = "WELCOME TO PINGLINK!";

    // 2. Modify CSS styles via JavaScript
    document.body.style.backgroundColor = "#e6f2ff"; // light blue background
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
      box.style.border = "2px solid #004466";
    });

    // 3. Add or remove an element when a button is clicked
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Extra Info";
    toggleBtn.style.marginTop = "20px";
    toggleBtn.style.padding = "10px";
    toggleBtn.style.backgroundColor = "#004466";
    toggleBtn.style.color = "#fff";
    toggleBtn.style.border = "none";
    toggleBtn.style.borderRadius = "5px";
    toggleBtn.style.cursor = "pointer";

    const targetBox = document.querySelector(".container .box");
    targetBox.appendChild(toggleBtn);

    let extraInfo;

    toggleBtn.addEventListener("click", () => {
      if (!extraInfo) {
        extraInfo = document.createElement("p");
        extraInfo.textContent = "This is some extra information about PINGLINK's mission!";
        extraInfo.style.marginTop = "10px";
        targetBox.appendChild(extraInfo);
      } else {
        extraInfo.remove();
        extraInfo = null;
      }
    });
  });

