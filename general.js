document.addEventListener('touchmove', function(e) {
  if (e.touches.length > 1 || e.touches[0].clientY > 0) {
    e.preventDefault();
  }
}, { passive: false });