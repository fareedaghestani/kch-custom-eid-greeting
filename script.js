const canvas = document.getElementById('eidCardCanvas');
const ctx = canvas.getContext('2d');
const nameInput = document.getElementById('nameInput');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const backBtn = document.getElementById('backBtn');
const inputPage = document.getElementById('inputPage');
const cardPage = document.getElementById('cardPage');

const cardImage = new Image();
cardImage.src = 'Eid-Mubarak.png';

function drawCard(name = '') {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(cardImage, 0, 0, canvas.width, canvas.height);
  
    if (name) {
        ctx.font = 'bold 40px "Montserrat", Arial, sans-serif'; // Use Montserrat font
        ctx.fillStyle = '#14213d'; // Navy text color
        ctx.textAlign = 'center';
        const textY = canvas.height / 2 + (canvas.height * 0.2); // 20% below center
        ctx.fillText(name, canvas.width / 2, textY);
        
        // Show the canvas with animation
        canvas.classList.add('card-visible'); // Add class to trigger fade-in
    }
}

cardImage.onload = () => drawCard();

generateBtn.onclick = () => {
    const name = nameInput.value.trim();
    if (!name) {
        alert('Please enter your name!');
        return;
    }
    drawCard(name);
    inputPage.style.display = 'none';
    cardPage.style.display = 'block';
};

downloadBtn.onclick = () => {
    const link = document.createElement('a');
    link.download = 'Eid_Mubarak_Card.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
};

backBtn.onclick = () => {
    cardPage.style.display = 'none';
    inputPage.style.display = 'block';
    canvas.classList.remove('card-visible'); // Reset visibility
};