import Backtop from 'components/backtop';

const backtopEL = document.querySelector('.backtop');
const scrollcontainer = document.getElementById('destination-content');

new Backtop(backtopEL, scrollcontainer.offsetHeight, scrollcontainer);