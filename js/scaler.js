const FRAME_W = 1080;
const FRAME_H = 1920;

function applyScale() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const scale = Math.min(vw / FRAME_W, vh / FRAME_H);

  const wrapper = document.getElementById('scaleWrapper');
  wrapper.style.transform = `scale(${scale})`;

  // Center vertically when frame is shorter than viewport
  const scaledH = FRAME_H * scale;
  const topOffset = Math.max(0, (vh - scaledH) / 2);
  wrapper.style.marginTop = `${topOffset}px`;
}

window.addEventListener('resize', applyScale);
document.addEventListener('DOMContentLoaded', applyScale);
