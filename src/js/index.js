import '../scss/style.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Flip);

document.addEventListener('DOMContentLoaded', () => {
  gsap.from('h1', { y: -30, opacity: 0, duration: 1, ease: "expo.inOut" });
});
