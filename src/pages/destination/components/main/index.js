import './main.css';
import Tab from '../tab';
import Content from '../content';
import 'components/loading';

const tabEl = document.querySelector('.tab');
const tab = new Tab(tabEl);
const content = new Content(document.getElementById('destination-content'));

const itemEls = tabEl.querySelectorAll('.tab-item');

tabEl.addEventListener('click', e => {
    const itemEl = e.target;

    if(itemEl.classList.contains('tab-item')) {
        const index = itemEl.dataset.id - 1;
        const tabPromise = tab.to(index);
        
        content.setLoading();

        tabPromise.then(data => {
            content.set(data);
        });
    }
}, false);

itemEls[0].click();