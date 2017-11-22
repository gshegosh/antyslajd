function Antyslajd() {
  this.rule = false;
  this.urls = [];
  this.urlHtmls = {};

  this.main = () => {
    this.rule = this.matchRule();
    if (this.rule) {
      this.load(location.href);
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
  
  this.baseUrl = (url) => url.startsWith('http') ? url : (window.location.protocol + '//' + window.location.host + url);

  this.render = () => {
    // try sorting on gallery page number extracted from URL
    this.urls.sort();
    const commonUrlStart = this.commonStart(this.urls[0], this.urls[this.urls.length - 1]);
    const commonUrlEnd = this.commonEnd(this.urls[0], this.urls[this.urls.length - 1]);
    this.urls.sort(this.createUrlComparator(commonUrlStart, commonUrlEnd));

    const tmp = document.querySelectorAll('#antyslajd');
    for (let i = 0; i < tmp.length; i++) tmp[i].remove();

    let el = document.createElement('div');
    el.setAttribute('id', 'antyslajd');
    // el.style.background = window.getComputedStyle(document.querySelector('body')).backgroundColor;

    let slide = 0;
    this.urls.forEach(url => {
      const div = this.urlHtmls[url].querySelector(this.rule.container);
      div.style.display = 'inline-block';
      div.style.clear = 'both';
      div.style.margin = '20px auto';

      const tmp = div.querySelectorAll(this.rule.removeFromContainer);
      for (let i = 0; i < tmp.length; i++) tmp[i].remove();

      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'antyslajd-wrapper');
      wrapper.appendChild(div);

      const h3 = document.createElement('h3');
      h3.setAttribute('class', 'antyslajd');
      h3.innerHTML = 'Slajd ' + (++slide) + ' / ' + this.urls.length;

      el.appendChild(h3);
      el.appendChild(wrapper);
    });

    document.querySelector('body').insertAdjacentElement('afterbegin', el);
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

new Antyslajd().main();

/*


function load(seenUrls, htmls, rule, url) {
  const req = new XMLHttpRequest();
  req.addEventListener('load', function() {
    var sanitizedHtml = DOMPurify.sanitize(this.responseText, {
      SAFE_FOR_JQUERY: true,
      WHOLE_DOCUMENT: true,
      RETURN_DOM: true,
      FORBID_TAGS: ['script'],
      SANITIZE_DOM: false
    });
    htmls.push(sanitizedHtml);

    const next = sanitizedHtml.querySelector(rule.nextSelector);
    const nextUrl = next.getAttribute('href');
    console.log('aaa', next, !seenUrls.includes(nextUrl));
    if (next && !seenUrls.includes(nextUrl)) {
      console.log('l22', load);
      seenUrls.push(nextUrl);
      load(seenUrls, htmls, rule, nextUrl);
    } else {
      console.log('ll3');
      render(htmls, rule);
    }
  });
  req.open('GET', baseUrl(url));
  req.send();
}

function render(htmls, rule) {
  let divs = [];
  divs.push(document.querySelector(rule.container));
  for (let i = 0; i < htmls.length; i++) {
    divs.push(htmls[i].querySelector(rule.container));
  }
  console.log(42, divs);

  const tmp = document.querySelectorAll('#antyslajd');
  for (let i = 0; i < tmp.length; i++) tmp[i].remove();

  let el = document.createElement('div');
  el.setAttribute('id', 'antyslajd');
  el.style.background = window.getComputedStyle(document.querySelector('body')).backgroundColor;

  divs.forEach(div => {
    div.style.display = 'inline-block';
    div.style.clear = 'both';
    div.style.margin = '20px auto';

    const tmp = div.querySelectorAll(rule.removeFromContainer);
    for (let i = 0; i < tmp.length; i++) tmp[i].remove();

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'antyslajd-wrapper');
    wrapper.appendChild(div);

    el.appendChild(wrapper);
  });

  document.querySelector('body').insertAdjacentElement('afterbegin', el);
} 

const rule = matchRule();
if (rule) {
  console.log('MATCHED', rule);
  const next = document.querySelector(rule.nextSelector);
  const nextUrl = next.getAttribute('href');
  let htmls = [];
  let seenUrls = [ nextUrl ];
  if (next) {
    load(seenUrls, htmls, rule, nextUrl);
  }
} else {
  console.log('Antyslajd: nothing matched1');
}
*/