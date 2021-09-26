import './backtop.css';
import 'icons/iconfont.css';
import Scroll from 'utils/scroll';

const CHANGED_CLASS_NAME = 'backtop-hidden';

class Backtop {
    constructor(el, critical_point, scrollContainer, eventEL = scrollContainer) {
        this.el = el;
        this.critical_point = critical_point;
        //滚动条所在容器
        this.scrollContainer = scrollContainer;
        //监听滚动事件的元素
        this.eventEL = eventEL;

        new Scroll({
            critical_point,
            change: () => {
                this.show();
            },
            reset: () => {
                this.hide();
            }
        }, scrollContainer, eventEL);

        this.bindEvent();
    }

    bindEvent() {
        this.el.addEventListener('click', () => {
            this.scrollTo();
        }, false)
    }

    scrollTo(top = 0, left = 0) {
        this.scrollContainer.scrollTo({
            top,
            left,
            behavior: 'smooth'
        });
    }

    show() {
        this.el.classList.remove(CHANGED_CLASS_NAME);
    }

    hide() {
        this.el.classList.add(CHANGED_CLASS_NAME);
    }
}

export default Backtop;