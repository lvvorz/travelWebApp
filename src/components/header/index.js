import './header.css';

const CHANGED_CLASS_NAME = 'header-transition';
const INIT_STATE = 'init';
const CHANGED_STATE = 'changed';

class Header {
    constructor(el, critical_point, scrollContainer, eventEL = scrollContainer) {
        this.el = el;
        this.critical_point = critical_point;
        this.scrollContainer = scrollContainer;
        this.eventEL = eventEL;
        this.setState(INIT_STATE);
        this.bindEvent();
    }
    // 初始状态为init
    setState(state) {
        this.state = state;
    }

    bindEvent() {
        this.eventEL.addEventListener('scroll', () => {
            if(this.needChange()) {
                this.setState(CHANGED_STATE);
                this.change();
            } else if (this.needReset()) {
                this.setState(INIT_STATE);
                this.reset();
            }
        }, false);
    }

    needChange() {
        return (
            this.state !== CHANGED_STATE && 
            this.scrollContainer.scrollTop > this.critical_point
        );
    }

    needReset() {
        return (
            this.state !== INIT_STATE &&
            this.scrollContainer.scrollTop <= this.critical_point
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

