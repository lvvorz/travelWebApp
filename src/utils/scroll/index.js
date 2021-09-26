import {
    INIT_STATE,
    CHANGED_STATE
} from './constants';
import DEFAULTS from './defaults';

class Scroll {
    constructor(options, scrollContainer, eventEL = scrollContainer) {
        this.options = Object.assign({}, DEFAULTS, options);
        //滚动条所在容器
        this.scrollContainer = scrollContainer;
        //监听滚动事件的元素
        this.eventEL = eventEL;

        this.setState(INIT_STATE);
        this.bindEvent();
    }

    // 初始状态为init
    setState(state) {
        this.state = state;
    }

    bindEvent() {
        const {
            change,
            reset
        } = this.options;
        this.eventEL.addEventListener('scroll', () => {
            if (this.needChange()) {
                this.setState(CHANGED_STATE);
                if (typeof change === 'function') {
                    change();
                }
            } else if (this.needReset()) {
                this.setState(INIT_STATE);
                if (typeof reset === 'function') {
                    reset();
                }
            }

        }, false);

    }


    needChange() {
        return (
            this.state !== CHANGED_STATE &&
            this.scrollContainer.scrollTop > this.options.critical_point
        );
    }

    needReset() {
        return (
            this.state !== INIT_STATE &&
            this.scrollContainer.scrollTop <= this.options.critical_point
        );
    };

}

export default Scroll;