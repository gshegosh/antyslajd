const base = window.location.protocol + '//' + window.location.host;

function baseUrl(url) {
  return url.startsWith('http') ? url : (base + url);
}

function matchRule() {
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    const rulesCount = rule.selector.split(',').length;
    if (document.querySelectorAll(rule.selector).length === rulesCount && (!rule.antiSelector || document.querySelectorAll(rule.antiSelector).length === 0)) {
      return rule;
    }
  }
  return false;
}

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
