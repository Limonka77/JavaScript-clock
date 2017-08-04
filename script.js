const canvas = document.getElementById('clock');
const ctx = canvas.getContext('2d');

canvas.width = 250;
canvas.height = 250;
const w = canvas.width;
const h = canvas.height;


const centerX = w / 2;
const centerY = h / 2;
const radius = 120;


ctx.beginPath();
ctx.arc(centerX, centerY, radius , 0, 2 * Math.PI, false);
ctx.fillStyle = 'white';
ctx.fill();
ctx.lineWidth = 3;
ctx.strokeStyle = 'black';
ctx.stroke();

ctx.beginPath();
ctx.translate(w / 2, h / 2);
ctx.font = '24px Arial';
ctx.fillStyle = '#000';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
for (var n = 1; n <= 12; n++) {
  var theta = (n - 3) * (Math.PI * 2) / 12;
  var x = (radius -20 ) * 0.9 * Math.cos(theta);
  var y = (radius - 20)  * 0.9 * Math.sin(theta);
  ctx.fillText(n, x, y);
}

const clockSec = document.querySelector('.clock-sec');
const clockMin = document.querySelector('.clock-min');
const clockHour = document.querySelector('.clock-hour');

function setTime() {
  const now = new Date();

  const sec = now.getSeconds();
  const secDegrees = ((sec / 60) * 360);
  clockSec.style.transform = `rotate(${secDegrees}deg)`;

  const min = now.getMinutes();
  const minDegrees = ((min / 60) * 360) + ((sec / 60) * 6) + 90;
  clockMin.style.transform = `rotate(${minDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((min / 60) * 30) + 90;
  clockHour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setTime, 1000);
