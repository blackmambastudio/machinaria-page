
const SELECTORS = {
  'tvButton': '.tv__button',
  'channel': '.tv__channel',
  'active': '.active',
};

const CLASSNAMES = {
  'active': 'active',
};

class Television {
  constructor(element) {
    this.element = element;
    this.buttons = this.element.querySelectorAll(SELECTORS.tvButton);
    this.channels = this.element.querySelectorAll(SELECTORS.channel);
    this.currentChannel = 0;

    this.init();
  }

  init() {
    window.cosito = this;
    // Add event handlers
    this.buttons.forEach(element => {
      element.addEventListener('click', () => {
        this.setChannel(element.dataset.channel);
      });
    });
  }

  setChannel(channel) {
    console.log(channel);
    // Hide current active channel
    this.channels[this.currentChannel].classList.remove(CLASSNAMES.active);

    // Enable requested channel
    this.channels[channel].classList.add(CLASSNAMES.active);

    // Set new current channel in memory
    this.currentChannel = channel;

  }
}

var initTelevision = function initTelevision() {
  return [...document.querySelectorAll('[data-television]')].map((el => new Television(el)))
};



// Init Television
initTelevision();
