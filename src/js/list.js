import Item from "./item";

export default class List {
  constructor(items, wrapper) {
    this.items = items;
    this.wrapper = wrapper;
  }

  render() {
    let html = '';
    this.items.forEach(item => {
      const card = new Item(item.title, item.img, item.audio, item.video).render();
      html += card;
    });
    this.wrapper.insertAdjacentHTML('afterbegin', html);
  }
}