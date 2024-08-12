import "./style.css";
import img1 from './img/cow-1.jpg';
import img2 from './img/cow-2.jpg';
import img3 from './img/cow-3.jpg';

import { initDropdown } from './dropdown';
import { initCarousel } from './carousel';

// Initialize the dropdown functionality
initDropdown();

// Initialize the carousel with an array of images
initCarousel([img1, img2, img3]);