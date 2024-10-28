// 設置邊界反彈和顏色變換的移動函數
function bounceMove(element) {
    const padding = 50;
    const speedX = Math.random() * 0.5 + 1;
    const speedY = Math.random() * 0.5 + 1;
    let directionX = Math.random() < 0.5 ? 1 : -1;
    let directionY = Math.random() < 0.5 ? 1 : -1;
  
    let posX = Math.random() * (window.innerWidth - padding * 2) + padding;
    let posY = Math.random() * (window.innerHeight - padding * 2) + padding;
    element.style.left = `${posX}px`;
    element.style.top = `${posY}px`;
    element.style.position = "absolute";
  
    function move() {
      posX += speedX * directionX;
      posY += speedY * directionY;
  
      if (posX <= padding || posX >= window.innerWidth - element.offsetWidth - padding) {
        directionX *= -1;
        changeColor(element);
      }
  
      if (posY <= padding || posY >= window.innerHeight - element.offsetHeight - padding) {
        directionY *= -1;
        changeColor(element);
      }
  
      element.style.left = `${posX}px`;
      element.style.top = `${posY}px`;
    }
  
    setInterval(move, 10);
  }
  
  // 隨機更改顏色
  function changeColor(element) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    element.style.color = randomColor;
  }
  
  // 點擊👻顯示"spooky!"的功能
  function addSpookyEffect(element) {
    element.addEventListener("click", () => {
      // 創建一個span顯示"spooky!"
      const spookyText = document.createElement("span");
      spookyText.innerText = "spooky!";
      spookyText.style.position = "absolute";
      spookyText.style.top = "-30px"; // 將 "spooky!" 放在 👻 的上方
      spookyText.style.left = "50%";
      spookyText.style.transform = "translateX(-50%)";
      spookyText.style.color = "white";
      spookyText.style.fontSize = "20px";
      spookyText.style.fontWeight = "bold";
  
      // 將 "spooky!" 添加到 👻 元素
      element.appendChild(spookyText);
  
      // 2 秒後移除 "spooky!" 字樣
      setTimeout(() => {
        spookyText.remove();
      }, 2000);
    });
  }
  
  // 獲取所有 .ghost 元素並對每個元素應用反彈效果和點擊事件
  const elements = document.querySelectorAll(".ghost");
  elements.forEach(element => {
    bounceMove(element);
    addSpookyEffect(element);
  });
  
  // 點擊「點我」按鈕後顯示訊息
  document.getElementById("trickButton").addEventListener("click", function() {
    window.open("https://imgur.com/e9twWaR", "_blank");
    document.getElementById("content-container2").style.display = "flex";
    document.getElementById("content-container").style.display = "none";
    document.getElementById("trickButton").style.display = "none";
  });
  
  document.getElementById("real-link").addEventListener("click", function() {
    window.open("https://www.canva.com/design/DAGUz69PdqE/sQ9IE362g9H9BRtDXALIXQ/view?utm_content=DAGUz69PdqE&utm_campaign=designshare&utm_medium=link&utm_source=editor", "_blank");
  });
  