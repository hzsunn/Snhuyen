function createHeartEffects() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart-particle");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.backgroundColor = `hsl(${Math.random() * 20 + 330}, 80%, ${Math.random() * 20 + 60}%)`;
    document.body.appendChild(heart);
  }
}

window.addEventListener("load", () => {
  createHeartEffects();

  update();
}

document.addEventListener('DOMContentLoaded', () => {
  const giftBtn = document.getElementById('giftBtn');
  const slider = document.querySelector('.slider');
  const hbdText = document.getElementById('hbdText');
  const cake = document.querySelector('.cake');
  const audio = document.getElementById('birthday-audio');

  giftBtn.addEventListener('click', () => {
    try {
      giftBtn.style.display = 'none';
      setTimeout(() => {
        hbdText.classList.remove('hidden');
        console.log('Hiển thị chữ chúc mừng');
      }, 0);
      setTimeout(() => {
        slider.classList.remove('hidden');
        console.log('Hiển thị slider');
      }, 200);
      setTimeout(() => {
        cake.classList.remove('hidden');
        console.log('Hiển thị bánh');
      }, 400);

      audio.play().catch((error) => {
        console.error('Lỗi phát nhạc:', error);
        alert('Vui lòng bật âm thanh trên trình duyệt để nghe nhạc sinh nhật!');
      });

      createHeartEffects(); // ← gọi hiệu ứng trái tim thay vì pháo hoa
      console.log('Bắt đầu hiệu ứng trái tim');
    } catch (error) {
      console.error('Lỗi khi mở quà:', error);
    }
  });
});
