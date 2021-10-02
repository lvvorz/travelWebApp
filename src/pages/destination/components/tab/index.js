import './tab.css';
import {getData, getDelayedData} from 'api/getData';
import {URL, TAB_ITEM_CLASS, TAB_ACTIVE_ITEM_CLASS_NAME} from './config.js';
class Tab{
    constructor(el) {
        this.itemList = el.querySelectorAll(TAB_ITEM_CLASS);
    }

    setActiveItem(index) {
        for(const item of this.itemList) {
            item.classList.remove(TAB_ACTIVE_ITEM_CLASS_NAME);
        }

        this.itemList[index].classList.add(TAB_ACTIVE_ITEM_CLASS_NAME);
    }

    to(index) {
        // 取消上一次请求
    if(this.dataPromise && this.dataPromise.xhr) {
        this.dataPromise.xhr.abort();
    }
        this.setActiveItem(index);
        this.dataPromise = getData(`${URL}/${this.itemList[index].dataset.id}`);
        
        return this.dataPromise;
    }
    
}

export default Tab;