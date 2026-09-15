const canvas = document.getElementById('cosmosCanvas');
const ctx = canvas.getContext('2d');

let width, height;
function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const BRIGHT_STARS = [
  { 
    id: 1, 
    name: "Sirius", 
    displayDate: "16.02", 
    constellation: "Canis Major", 
    color: "#a78bfa", 
    ra: "06h 45m", 
    dec: "-16° 42'", 
    memory: "ვარსკვლავი, რომელიც გამოირჩევა ყველა სხვა ვარსკვლავისგან თავისი სიკაშკაშით, ამიტომ მას ვაიგივებ ჩვენ anniversary-სთან. ამ ღამეს ოფიციალურად დავიწყეთ დეითინგი, ამიტომ ყველაზე 'კაშკაშა', ნათელი და დაუვიწყარი მოგონებაა ჩემთვის.", 
    normX: 0.18, 
    normY: 0.32 
  },
  { 
    id: 2, 
    name: "Betelgeuse", 
    displayDate: "19.01", 
    constellation: "Orion", 
    color: "#e0f2fe", 
    ra: "05h 55m", 
    dec: "+07° 24'", 
    memory: "ეს ვარსკვლავი თეთრი, ცივი სიკაშკაშით გამოირჩევა, თუმცა რეალურად ძალიან დიდ სითბოს ინახავს. ამ ვაკრსკვლავს უკავშირდება ჩვენი პირველი მოგონება, როდესაც პირველად წავედით ერთად ისთ ფოინთში სუსხიან ზამთარში. ბევრი თოვლი ვჭამეთ, ბევრი ვიგორავეთ და ვიცინეთ. ეს იყო პირველი მნიშვნელოვანი მოგონება და დღე, რომელმაც შენთან უფრო დამაკავშირა.", 
    normX: 0.35, 
    normY: 0.25 
  },
  { 
    id: 3, 
    name: "Vega", 
    displayDate: "20.01", 
    constellation: "Lyra", 
    color: "#f472b6", 
    ra: "18h 36m", 
    dec: "+38° 47'", 
    memory: "ამ ვარსკვლავის ვარდისფერი ფერი შემთხვევითი არ არის, მას უკავშირდება პირველი ჩვენი ჩახუტება. მართალია გარემო მსგავსად ვარდისფერი არ იყო, უცნაური ვარკეთილის უბანი, სკამი და ცივი ზამთარი, თუმცა ჩვენი იქ ყოფნა დარწმუნებული ვარ ორივეს კარგად და ძალიან თბლიად გვახსოვს. იმდენად საყვარელი იყავი რომ ვეღარ შევიკავე თავი, გავბედე და პირველად ჩაგეხუტე.", 
    normX: 0.52, 
    normY: 0.30 
  },
  { 
    id: 4, 
    name: "Capella", 
    displayDate: "23.01", 
    constellation: "Auriga", 
    color: "#c084fc", 
    ra: "05h 16m", 
    dec: "+45° 59'", 
    memory: "ეს ვარსკვლავი ღამ-ღამობით მაგიურ სხივებს გამოყოფს, თითქმის ისეთივე მაგიურს, როგორც ჩვენი ერთად გატარებული დრო იყო ზამთარში, გვიან ღამით. ამ დღეს პირველად ცხოვრებაში, ღამე გამოვიპარე სახლიდან, რომ მენახე. ძალიან ციოდა, გვიანი იყო, მაგრამ რაც მთავარია მოვახერხე შენი ნახვა.", 
    normX: 0.68, 
    normY: 0.42 
  },
  { 
    id: 5, 
    name: "Arcturus", 
    displayDate: "01.02", 
    constellation: "Boötes", 
    color: "#f87171", 
    ra: "14h 15m", 
    dec: "+19° 10'", 
    memory: "ყველაზე წითელი ვარსკვლავი ჩვენს კოსმოსში, მისი ფერი და სიკაშკაშე შემთხვევითი არ არის და ასოცირდება ჩვენს პირველ კოცნასთან, რომელიც მოულოდნელობით იყო აღსავსე. მართალია ბევრი ვიწვალე მაგრამ საბოლოოდ მაინც მოულოდნელად გაკოცე.", 
    normX: 0.82, 
    normY: 0.58 
  },
  { 
    id: 6, 
    name: "Rigel", 
    displayDate: "05.02", 
    constellation: "Orion", 
    color: "#fbbf24", 
    ra: "05h 14m", 
    dec: "-08° 12'", 
    memory: "თბილი ყვითელი სხივები და უამრავი სითბო, ეს ჩვენი ოფიციალური პირველი დეითი, ციგურები, არშემდგარი სუში და მაკი (როცა მოვინდომებ შემძლებია დაგეგმვა).", 
    normX: 0.28, 
    normY: 0.70 
  },
  { 
    id: 7, 
    name: "Spica", 
    displayDate: "19.02", 
    constellation: "Virgo", 
    color: "#34d399", 
    ra: "13h 25m", 
    dec: "-11° 09'", 
    memory: "მარადმწვანე სხივები, რომელიც კავშირშია პირველ ყვავილებთან. დიდი ხნის ძიების შემდეგ მოვნახე ადამიანი ვინც გამიკეთებდა სპაიდერ ლილიების თაიგულს და პირველი ოფიციალური თაიგულიც ამ დღეს გაჩუქე, ახლაც ამშვენებს შენი სახლის ვაზას.", 
    normX: 0.55, 
    normY: 0.75 
  },
  { 
    id: 8, 
    name: "Polaris", 
    displayDate: "16.10", 
    constellation: "Ursa Minor", 
    color: "#fef08a", 
    ra: "02h 31m", 
    dec: "+89° 15'", 
    memory: "პოლარული ვარსკვლავი, რომელიც ცნობილია უძრაობითა და გზამკვლევის ფუნქციით. ის არის მანიშნებელი ჩვენი ყოველი მომდევნო anniversary-ის!", 
    normX: 0.78, 
    normY: 0.80 
  }
];

const staticStars = [];
for (let i = 0; i < 450; i++) {
  staticStars.push({
    x: Math.random(),
    y: Math.random(),
    size: Math.random() * 1.4 + 0.3,
    alpha: Math.random() * 0.7 + 0.2,
    twinkleSpeed: Math.random() * 0.02 + 0.005
  });
}

let targetCamera = { x: width / 2, y: height / 2, zoom: 1 };
let currentCamera = { x: width / 2, y: height / 2, zoom: 1 };
let selectedStar = null;
let isAnimatingModal = false;

function getStarScreenPos(star) {
  const worldX = star.normX * width;
  const worldY = star.normY * height;
  const screenX = (worldX - currentCamera.x) * currentCamera.zoom + width / 2;
  const screenY = (worldY - currentCamera.y) * currentCamera.zoom + height / 2;
  return { x: screenX, y: screenY };
}

function render(time) {
  currentCamera.x += (targetCamera.x - currentCamera.x) * 0.05;
  currentCamera.y += (targetCamera.y - currentCamera.y) * 0.05;
  currentCamera.zoom += (targetCamera.zoom - currentCamera.zoom) * 0.05;

  ctx.clearRect(0, 0, width, height);

  const bgGrad = ctx.createRadialGradient(width/2, height/2, 50, width/2, height/2, Math.max(width, height));
  bgGrad.addColorStop(0, '#0a1024');
  bgGrad.addColorStop(0.6, '#040714');
  bgGrad.addColorStop(1, '#020308');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  staticStars.forEach(s => {
    const worldX = s.x * width;
    const worldY = s.y * height;
    const sx = (worldX - currentCamera.x) * currentCamera.zoom + width / 2;
    const sy = (worldY - currentCamera.y) * currentCamera.zoom + height / 2;

    if (sx >= 0 && sx <= width && sy >= 0 && sy <= height) {
      const twinkle = Math.sin(time * s.twinkleSpeed) * 0.2;
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, s.alpha + twinkle)})`;
      ctx.beginPath();
      ctx.arc(sx, sy, s.size * currentCamera.zoom, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  BRIGHT_STARS.forEach(star => {
    const pos = getStarScreenPos(star);

    const pulse = Math.sin(time * 0.003 + star.id) * 3;
    const baseRadius = (8 + pulse) * Math.sqrt(currentCamera.zoom);

    const glow = ctx.createRadialGradient(pos.x, pos.y, 1, pos.x, pos.y, baseRadius * 3.5);
    glow.addColorStop(0, star.color);
    glow.addColorStop(0.5, star.color + '55');
    glow.addColorStop(1, 'transparent');

    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, baseRadius * 3.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = star.color;
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, baseRadius * 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.font = '11px Montserrat';
    ctx.fillStyle = 'rgba(247, 231, 196, 0.85)';
    ctx.fillText(`${star.name} (${star.displayDate})`, pos.x + 14, pos.y + 4);
  });

  if (isAnimatingModal && Math.abs(currentCamera.zoom - targetCamera.zoom) < 0.05) {
    openModal(selectedStar);
    isAnimatingModal = false;
  }

  requestAnimationFrame(render);
}
requestAnimationFrame(render);

canvas.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  let foundHover = false;

  BRIGHT_STARS.forEach(star => {
    const pos = getStarScreenPos(star);
    const dist = Math.hypot(pos.x - mouseX, pos.y - mouseY);
    if (dist < 25) foundHover = true;
  });

  canvas.style.cursor = foundHover ? 'pointer' : 'default';
});

canvas.addEventListener('click', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  BRIGHT_STARS.forEach(star => {
    const pos = getStarScreenPos(star);
    const dist = Math.hypot(pos.x - mouseX, pos.y - mouseY);

    if (dist < 30) {
      selectedStar = star;
      targetCamera = {
        x: star.normX * width,
        y: star.normY * height,
        zoom: 2.8
      };
      isAnimatingModal = true;
    }
  });
});

function openModal(star) {
  document.getElementById('modalStarName').innerText = star.name;
  document.getElementById('modalDate').innerText = `✨ ${star.displayDate}`;
  document.getElementById('modalCoords').innerText = `${star.constellation} • RA ${star.ra}`;
  document.getElementById('modalMemory').innerText = star.memory;

  const modal = document.getElementById('starModal');
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('starModal');
  modal.classList.remove('active');
  targetCamera = { x: width / 2, y: height / 2, zoom: 1 };
}
