import 'swiper/swiper-bundle.min.css';
import './slider.css';

import Swiper from 'swiper/swiper-bundle.min';

import config,{SWIPER_CONTAINER_CLASS, URL, LAYOUT_ID} from './config';

// new Swiper('.swiper-container',config);
import render from './slider.art';
import {getData, getDelayedData} from 'api/getData';

getData(URL).then((data) => {
    document.getElementById(LAYOUT_ID).innerHTML = render({
        // imgs: data
        ...config,
        ...{
            imgs: data
        }
    });
    new Swiper(SWIPER_CONTAINER_CLASS, config);
});

