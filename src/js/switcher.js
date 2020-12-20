const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

const backgroundSwitcher = {
  numberId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.numberId = setInterval(() => {
      refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
  },

  stop() {
    clearInterval(this.numberId);

    this.isActive = false;
    this.numberId = null;
  },
};

refs.startBtn.addEventListener(
  'click',
  backgroundSwitcher.start.bind(backgroundSwitcher),
);
refs.stopBtn.addEventListener(
  'click',
  backgroundSwitcher.stop.bind(backgroundSwitcher),
);
