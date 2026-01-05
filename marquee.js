(() => {
  const wrapper = document.querySelector('.marquee-wrapper');
  const track = wrapper.querySelector('.marquee-track');

  let posX = 0;
  let speed = -0.6; // auto scroll speed
  let isDown = false;
  let isDragging = false;
  let startX = 0;

  const DRAG_THRESHOLD = 5;

  const loop = () => {
    if (!isDown) {
      posX += speed;
    }

    const width = track.scrollWidth / 2;

    if (posX <= -width) posX += width;
    if (posX >= 0) posX -= width;

    track.style.transform = `translateX(${posX}px)`;
    requestAnimationFrame(loop);
  };

  // =====================
  // MOUSE
  // =====================
  wrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    isDragging = false;
    startX = e.pageX;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    const delta = e.pageX - startX;
    startX = e.pageX;

    if (Math.abs(delta) > DRAG_THRESHOLD) {
      isDragging = true;
    }

    posX += delta;
  });

  window.addEventListener('mouseup', () => {
    isDown = false;
  });

  // =====================
  // TOUCH
  // =====================
  wrapper.addEventListener('touchstart', (e) => {
    isDown = true;
    isDragging = false;
    startX = e.touches[0].clientX;
  }, { passive: true });

  wrapper.addEventListener('touchmove', (e) => {
    if (!isDown) return;

    const delta = e.touches[0].clientX - startX;
    startX = e.touches[0].clientX;

    if (Math.abs(delta) > DRAG_THRESHOLD) {
      isDragging = true;
    }

    posX += delta;
  }, { passive: true });

  wrapper.addEventListener('touchend', () => {
    isDown = false;
  });

  // =====================
  // BLOCK CLICK SAAT DRAG
  // =====================
  wrapper.addEventListener('click', (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopImmediatePropagation();
      isDragging = false;
    }
  }, true);

  loop();
})();


(() => {
  const wrapper = document.querySelector('.image-marquee-wrapper');
  const track = wrapper.querySelector('.image-marquee-track');

  let posX = 0;
  let speed = -0.5; // auto scroll speed
  let isDown = false;
  let isDragging = false;
  let startX = 0;

  const DRAG_THRESHOLD = 5;

  const loop = () => {
    if (!isDown) {
      posX += speed;
    }

    const width = track.scrollWidth / 2;

    if (posX <= -width) posX += width;
    if (posX >= 0) posX -= width;

    track.style.transform = `translateX(${posX}px)`;
    requestAnimationFrame(loop);
  };

  // =====================
  // MOUSE
  // =====================
  wrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    isDragging = false;
    startX = e.pageX;
    wrapper.classList.add('dragging');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    const delta = e.pageX - startX;
    startX = e.pageX;

    if (Math.abs(delta) > DRAG_THRESHOLD) {
      isDragging = true;
    }

    posX += delta;
  });

  window.addEventListener('mouseup', () => {
    isDown = false;
    wrapper.classList.remove('dragging');
  });

  // =====================
  // TOUCH
  // =====================
  wrapper.addEventListener('touchstart', (e) => {
    isDown = true;
    isDragging = false;
    startX = e.touches[0].clientX;
    wrapper.classList.add('dragging');
  }, { passive: true });

  wrapper.addEventListener('touchmove', (e) => {
    if (!isDown) return;

    const delta = e.touches[0].clientX - startX;
    startX = e.touches[0].clientX;

    if (Math.abs(delta) > DRAG_THRESHOLD) {
      isDragging = true;
    }

    posX += delta;
  }, { passive: true });

  wrapper.addEventListener('touchend', () => {
    isDown = false;
    wrapper.classList.remove('dragging');
  });

  // =====================
  // BLOCK CLICK SAAT DRAG
  // =====================
  wrapper.addEventListener('click', (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopImmediatePropagation();
      isDragging = false;
    }
  }, true);

  loop();
})();

(() => {
  const wrapper = document.querySelector('.partner-marquee-wrapper');
  const track = wrapper.querySelector('.partner-marquee-track');

  let posX = 0;
  let speed = -0.5; // auto scroll speed
  let isDown = false;
  let isDragging = false;
  let startX = 0;

  const DRAG_THRESHOLD = 5;

  const loop = () => {
    if (!isDown) {
      posX += speed;
    }

    const width = track.scrollWidth / 2;

    if (posX <= -width) posX += width;
    if (posX >= 0) posX -= width;

    track.style.transform = `translateX(${posX}px)`;
    requestAnimationFrame(loop);
  };

  // =====================
  // MOUSE
  // =====================
  wrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    isDragging = false;
    startX = e.pageX;
    wrapper.classList.add('dragging');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    const delta = e.pageX - startX;
    startX = e.pageX;

    if (Math.abs(delta) > DRAG_THRESHOLD) {
      isDragging = true;
    }

    posX += delta;
  });

  window.addEventListener('mouseup', () => {
    isDown = false;
    wrapper.classList.remove('dragging');
  });

  // =====================
  // TOUCH
  // =====================
  wrapper.addEventListener('touchstart', (e) => {
    isDown = true;
    isDragging = false;
    startX = e.touches[0].clientX;
    wrapper.classList.add('dragging');
  }, { passive: true });

  wrapper.addEventListener('touchmove', (e) => {
    if (!isDown) return;

    const delta = e.touches[0].clientX - startX;
    startX = e.touches[0].clientX;

    if (Math.abs(delta) > DRAG_THRESHOLD) {
      isDragging = true;
    }

    posX += delta;
  }, { passive: true });

  wrapper.addEventListener('touchend', () => {
    isDown = false;
    wrapper.classList.remove('dragging');
  });

  // =====================
  // BLOCK CLICK SAAT DRAG
  // =====================
  wrapper.addEventListener('click', (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopImmediatePropagation();
      isDragging = false;
    }
  }, true);

  loop();
})();
