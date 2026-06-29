(function () {
  if (!window.gsap) return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.hero h1', { y: 20, opacity: 0, duration: 0.8 })
    .from('.hero-sub', { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')
    .from('.hero-actions', { y: 20, opacity: 0, duration: 0.6 }, '-=0.5')
    .from('.media-frame', { y: 30, opacity: 0, duration: 0.9 }, '-=0.4');
})();