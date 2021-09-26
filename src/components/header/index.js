import './header.css';
import Scroll from 'utils/scroll/index.js';

const CHANGED_CLASS_NAME = 'header-transition';

class Header {
    constructor(el, critical_point, scrollContainer, eventEL = scrollContainer) {
        this.el = el;
        
        new Scroll({
            critical_point,
            change: () => {
                this.change();
            },
            reset: () => {
                this.reset();
            }
        },
        scrollContainer,
        eventEL
        );
    }
    
    change() {
        this.el.classList.add(CHANGED_CLASS_NAME);
    }

    reset() {
        this.el.classList.remove(CHANGED_CLASS_NAME);
    }
}

export default Header;

