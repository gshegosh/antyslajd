function Antyslajd() {
  this.rule = false;
  this.urls = [];
  this.urlHtmls = {};

  this.main = () => {
    this.rule = this.matchRule();
    if (this.rule) {
      console.log('Antyslajd', this.rule.name, this.rule);
      this.showBtn();
    }
  };

  this.matchRule = () => {
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];
      const triggerCount = rule.trigger.split(',').length;
      if (document.querySelectorAll(rule.trigger).length === triggerCount && (!rule.antiTrigger || document.querySelectorAll(rule.antiTrigger).length === 0)) {
        return rule;
      }
    }
    return false;
  };

  this.parseForNext = (dom) => {
    const next = dom.querySelector(this.rule.nextSelector);
    if (next != null) {
      const nextUrl = next.getAttribute('href');
      if (nextUrl != null) {
        this.load(nextUrl);
        return;
      }
    }
    this.render();
  };

  this.load = (url) => {
    const aprogress = document.querySelector('#antyslajdprogress');
    if (aprogress) aprogress.innerHTML = '<span style="color: #333">Anty</span><span style="color: #fff">slajd</span>: Wczytuję slajdy (' + (this.urls.length + 1) + ')...';

    const basedUrl = this.baseUrl(url);
    if (!this.urls.includes(basedUrl)) {
      this.urls.push(basedUrl);
      const req = new XMLHttpRequest();
      req.addEventListener('load', (e) => {
          var sanitizedHtml = DOMPurify.sanitize(e.target.responseText, {
          WHOLE_DOCUMENT: true,
          RETURN_DOM: true,
          FORBID_TAGS: ['script'],
          SANITIZE_DOM: false
        });
        this.urlHtmls[basedUrl] = sanitizedHtml;
        this.parseForNext(sanitizedHtml);
      });
      req.open('GET', basedUrl);
      req.send();
    } else {
      this.render();
    }
  };

  this.showBtn = () => {
    browser.storage.local.get('autorun').then(result => {
      if (result && result.autorun) {
        this.onBtnClick();
      } else {
        browser.runtime.sendMessage("showBtn");
      }
    });
  }

  this.onBtnClick = () => {
    const aprogress = document.createElement('div');
    aprogress.setAttribute('id', 'antyslajdprogress');
    aprogress.innerHTML = '<span class="antygreen">Anty</span><span style="color: #fff">slajd</span>: Wczytuję slajdy...';
    document.querySelector('body').appendChild(aprogress);

    this.load(location.href);
  };

  this.baseUrl = (url) => url.startsWith('http') ? url : (window.location.protocol + '//' + window.location.host + url);

  this.render = () => {
    const aprogress = document.querySelector('#antyslajdprogress');
    if (aprogress) aprogress.remove();

    // try sorting on gallery page number extracted from URL
    this.urls.sort();
    const commonUrlStart = this.commonStart(this.urls[0], this.urls[this.urls.length - 1]);
    const commonUrlEnd = this.commonEnd(this.urls[0], this.urls[this.urls.length - 1]);
    this.urls.sort(this.createUrlComparator(commonUrlStart, commonUrlEnd));

    const placeholder = document.querySelector(this.rule.placeholderSelector);
    placeholder.innerHTML = '';

    if (this.rule.removeFromPage) {
      const tmp = document.querySelectorAll(this.rule.removeFromPage);
      for (let i = 0; i < tmp.length; i++) tmp[i].remove();
    }

    if (this.rule.elementsToEmpty) {
      const tmp = document.querySelectorAll(this.rule.elementsToEmpty);
      for (let i = 0; i < tmp.length; i++) tmp[i].innerHTML = '';
    }

    let slide = 0;
    this.urls.forEach(url => {
      const item = this.urlHtmls[url].querySelector(this.rule.itemSelector);

      const tmp = item.querySelectorAll(this.rule.removeFromContainer);
      for (let i = 0; i < tmp.length; i++) tmp[i].remove();

      const h3 = document.createElement('h3');
      h3.setAttribute('class', 'antyslajd');
      h3.innerHTML = '<span class="antygreen">Anty</span>slajd ' + (++slide) + ' / ' + this.urls.length;

      placeholder.insertAdjacentElement('beforeend', h3);
      placeholder.insertAdjacentElement('beforeend', item);
    });

    const tmp = document.querySelectorAll('video');
    for (let i = 0; i < tmp.length; i++) {
      tmp[i].load();
      tmp[i].play();
    }
  };

  this.commonStart = (a, b) => {
    let start = -1;
    for (let i = 0; i < a.length && i < b.length; i++) {
      if (a[i] == b[i]) {
        start = i;
      } else {
        break;
      }
    }
    return start === -1 ? '' : a.substring(0, start + 1);
  };

  this.commonEnd = (a, b) => {
    let end = -1;
    for (let i = a.length - 1; i >= 0 && i + b.length - a.length >= 0; i--) {
      if (a[i] === b[i + b.length - a.length]) {
        end = i;
      } else {
        break;
      }
    }
    return end === -1 ? '' : a.substring(end, a.length);
  };

  this.isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  this.createUrlComparator = (start, end) => (oa, ob) => {
    let a = oa.replace(start, '').replace(end, '');
    let b = ob.replace(start, '').replace(end, '');
    if (this.isNumber(a) && this.isNumber(b)) {
      a = 1 * a;
      b = 1 * b;
    }
    return a < b ? -1 : (a === b ? 0 : 1);
  };
}

const antyslajd = new Antyslajd();
antyslajd.main();

browser.runtime.onMessage.addListener(msg => {
  antyslajd.onBtnClick();
});