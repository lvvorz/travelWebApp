import './main.css';
import Tab from '../tab';
import Content from '../content';
import 'components/loading';
import {
    set,
    get
} from 'utils/sessionStorage';

const tabEl = document.querySelector('.tab');
const tab = new Tab(tabEl);
const content = new Content(document.getElementById('destination-content'));

const itemEls = tabEl.querySelectorAll('.tab-item');

tabEl.addEventListener('click', e => {
    const itemEl = e.target;

    if (itemEl.classList.contains('tab-item')) {
        const index = itemEl.dataset.id - 1;

        const storageName = `destination_content_${index}`;
        const storageContent = get(storageName);

        if (storageContent) {
            tab.setActiveItem(index);
            content.set(storageContent);
        } else {
            const tabPromise = tab.to(index);

            content.setLoading();

            tabPromise.then(data => {
                content.set(data);
                set(storageName, data);
            });
        }

    }
}, false);

itemEls[0].click();