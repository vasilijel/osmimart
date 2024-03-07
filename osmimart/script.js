let flowerCount = 0;

document.getElementById('flower-button').addEventListener('click', function() {
  flowerCount++;
  const flowerContainer = document.createElement('div');
  flowerContainer.classList.add('flower');
  const roseImg = document.createElement('img');
  roseImg.src = 'https://www.pngitem.com/pimgs/m/146-1468479_rose-flower-png-rose-flowers-hd-png-transparent.png'; // Link za ružu
  roseImg.alt = 'Rose';
  flowerContainer.appendChild(roseImg);
  document.body.appendChild(flowerContainer);
  
  const messageBox = document.getElementById('message-box');
  messageBox.textContent = 'Volim te';
  for(let i = 0; i < flowerCount; i++) {
    messageBox.textContent += ' ❤️';
  }
});
