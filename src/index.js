import './styles/style.scss';

import List from "./js/list";
import {items} from "./js/assets";

const wrapper = document.querySelector('.gallery__box');

const gallery = new List(items, wrapper);

gallery.render();
