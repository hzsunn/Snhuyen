function startHearts(canvas) {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("Không thể lấy context của canvas!");
    return;
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let hearts = [];

  function createHeart() {
    const x = Math.random() * canvas.width;
    const y = canvas.height + 20; // bắt đầu từ dưới cùng
    const size = Math.random() * 10 + 10;
    const color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    const speed = Math.random() * 1 + 0.5;

    hearts.push({ x, y, size, color, speed, alpha: 1, angle: 0 });
  }

  function drawHeart(x, y, size, color, alpha, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.scale(size / 20, size / 20);
    ctx.beginPath();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(0, -3, -5, -15, -10, -15);
    ctx.bezierCurveTo(-25, -15, -25, 10, 0, 20);
    ctx.bezierCurveTo(25, 10, 25, -15, 10, -15);
    ctx.bezierCurveTo(5, -15, 0, -3, 0, 0);
    ctx.fill();
    ctx.restore();
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach((h, i) => {
      h.y -= h.speed;
      h.alpha -= 0.005;
      h.angle += 0.01;

      if (h.alpha <= 0 || h.y + h.size < 0) {
        hearts.splice(i, 1);
      } else {
        drawHeart(h.x, h.y, h.size, h.color, h.alpha, h.angle);
      }
    });

    if (Math.random() < 0.2) createHeart(); // Tăng số lượng tim

    requestAnimationFrame(update);
  }

  update();
}
