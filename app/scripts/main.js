
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
    // Add key event handlers
    document.addEventListener('keyup', (event) => {
      this.handleKey(event.keyCode)
    });
    
    // this.buttons.forEach(element => {
    //   element.addEventListener('click', () => {
    //     this.setChannel(element.dataset.channel);
    //   });
    // });
  }

  handleKey(key) {
    if (key === 13) {
      // ENTER
      this.setChannel(1);
    } else if (key === 77) {
      // m
      this.setChannel(this.currentChannel + 1);
    } else if (key === 66) {
      // b
      this.setChannel(this.currentChannel - 1);
      
    } else if (key === 82) {
      // r
      this.setChannel(0);
    } else {
      // Do nothing
    }
  
  }

  setChannel(channel) {
    if (channel === this.channels.length) {
      channel = 0;
    }
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
