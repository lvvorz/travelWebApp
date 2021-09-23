import './product.css';
// import {
//     getData,
//     getDelayData
// } from 'api/getData';
import render from './items.art';
import data from './product.json';

// getData(data).then(data => {
//     document.getElementById('product-list').innerHTML = render({
//         items: data
//     });
// });

(function dataRender(data) {
    document.getElementById('product-list').innerHTML = render({
        items: data
    });
})(data);
