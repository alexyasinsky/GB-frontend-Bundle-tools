export default class {
  constructor(title, img = '', audio = '', video = '') {
    this.title = title;
    this.img = img;
    this.audio = audio;
    this.video = video;
  }
  render() {
    return `
      <div class="gallery__item">
        ${ this.img && "<img src=" + this.img + " alt=" + this.img + ">"}
        ${ this.audio && "<audio controls><source src=" + this.audio + " type='audio/mpeg'></audio>"}
        ${ this.video && "<video controls='controls'><source src=" + this.video + "></video>"}
        <h4>${this.title}</h4>
      </div>
    `
  }
}