export const animate = {
  fadeIn: (element, duration = 600) => {
    element.style.transition = `opacity ${duration}ms`;
    element.style.opacity = '1';
  },

  fadeOut: (element, duration = 600) => {
    element.style.transition = `opacity ${duration}ms`;
    element.style.opacity = '0';
  },

  transform3D: (element, { x = 0, y = 0, z = 0, scale = 1 }, duration = 600) => {
    element.style.transition = `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
  }
};