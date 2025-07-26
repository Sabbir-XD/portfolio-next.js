import VanillaTilt from 'vanilla-tilt';

export function initTilt(elm, options = {}) {
  return VanillaTilt.init(elm, {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.2,
    ...options
  });
}