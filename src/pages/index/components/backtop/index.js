import Backtop from 'components/backtop';

const scrollContainer = document.getElementById('index-page');
const backtopEL = scrollContainer.querySelector('.backtop');

new Backtop(backtopEL, window.innerHeight, scrollContainer);