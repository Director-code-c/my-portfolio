import{C as e}from"./index-DQZFpKJe.js";import{n as t,r as n}from"./dates-vEHvV2bt.js";var r={name:`download`,size:24,node:[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]};r.node;var i=e(r),a={name:`shield-alert`,size:24,node:[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]};a.node;var o=e(a);function s(e){return(e??``).split(`
`).map(e=>e.trim()).filter(Boolean)}function c(e){return(e??``).split(/[、，,/；;]+/).map(e=>e.trim()).filter(Boolean)}function l(e,t){let n=e.sections.find(e=>e.type===t);return n?.visible?n:void 0}var u=e=>!!(e&&e.trim());function d(e){let r=l(e,`basics`)?.basics,i={name:r?.name?.trim()||`未命名`,title:r?.title?.trim()??``,photo:r?.photo&&r.photo.startsWith(`data:image/`)?r.photo:null,accent:/^#[0-9a-fA-F]{6}$/.test(e.style?.accent??``)?e.style.accent:`#2563eb`,summary:l(e,`summary`)?.text?.trim()??``,extras:[],contact:{email:r?.email?.trim()??``,phone:r?.phone?.trim()??``,city:r?.city?.trim()??``,links:(r?.links??[]).filter(e=>u(e.url)).map(e=>({label:e.label?.trim()||`链接`,url:e.url.trim()}))},education:[],work:[],research:[],campus:[],projects:[],awards:[],skills:[],generatedAt:Date.now()};for(let t of e.sections)t.type===`custom`&&t.visible&&u(t.text)&&i.extras.push({title:t.title?.trim()||`补充`,text:t.text.trim()});for(let t of l(e,`education`)?.items??[]){let e=t,r=[e.gpa.trim()?`GPA ${e.gpa.trim()}${e.gpaScale.trim()?`/${e.gpaScale.trim()}`:``}`:``,e.rank.trim()?`排名：${e.rank.trim()}`:``,e.courses.trim()?`主修：${e.courses.trim()}`:``].filter(Boolean).join(` · `);i.education.push({school:e.school.trim(),degree:e.degree.trim(),major:e.major.trim(),time:n(e.time),detail:r})}for(let t of l(e,`work`)?.items??[]){let e=t;i.work.push({org:e.org.trim(),role:e.role.trim(),time:n(e.time),lines:s(e.description)})}for(let t of l(e,`research`)?.items??[]){let e=t,r=[...s(e.method),...s(e.contribution)];u(e.outcome)&&r.push(e.outcome.trim()),i.research.push({direction:e.direction.trim(),org:e.org.trim(),time:n(e.time),lines:r,status:e.pubStatus??``})}for(let t of l(e,`campus`)?.items??[]){let e=t,r=[...s(e.description),...s(e.result)];i.campus.push({org:e.org.trim(),role:e.role.trim(),time:n(e.time),lines:r,hours:e.hours.trim()})}for(let t of l(e,`project`)?.items??[]){let e=t;i.projects.push({name:e.name.trim(),role:e.role.trim(),time:n(e.time),goal:e.goal.trim(),tech:c(e.tech),lines:s(e.actions),link:u(e.link)?e.link.trim():``})}for(let n of l(e,`awards`)?.items??[]){let e=n;i.awards.push({name:e.name.trim(),level:e.level.trim(),org:e.org.trim(),time:t(e.time)})}for(let t of l(e,`skills`)?.skills?.groups??[])(u(t.category)||u(t.text))&&i.skills.push({category:t.category.trim(),text:t.text.trim()});return i}var f=[{id:`home`,label:`首页`,available:()=>!0},{id:`about`,label:`关于我`,available:e=>!!(e.summary||e.extras.length||e.skills.length||e.education.length)},{id:`experience`,label:`经历`,available:e=>!!(e.work.length||e.research.length||e.campus.length)},{id:`projects`,label:`项目`,available:e=>e.projects.length>0},{id:`awards`,label:`荣誉`,available:e=>e.awards.length>0},{id:`contact`,label:`联系`,available:e=>!!(e.contact.email||e.contact.phone||e.contact.city||e.contact.links.length)}];function p(e){return f.filter(t=>t.available(e))}function m(e){return JSON.stringify(e).replace(/</g,`\\u003c`).replace(/\u2028/g,`\\u2028`).replace(/\u2029/g,`\\u2029`)}function h(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}var g=`
:root {
  --accent: __ACCENT__;
  --accent-2: color-mix(in srgb, var(--accent) 70%, #06b6d4);
  --bg: #f7f7f5; --panel: #ffffff; --ink: #1a1d23; --ink2: #4b5563; --ink3: #9aa1ad;
  --line: #e6e4df; --soft: #f1f0ec;
  --r: 14px; --shadow: 0 1px 2px rgba(20,22,26,.05), 0 10px 30px rgba(20,22,26,.06);
}
/* 明暗双通道：应用内预览/导出可通过 data-color-mode 强制明暗（跟随应用界面主题）；
   未强制时（data-color-mode 缺省）回退到系统偏好，保证分享出去的文件的自适应能力 */
:root[data-color-mode='dark'] { --bg: #14161a; --panel: #1d2026; --ink: #e8e6e1; --ink2: #b3b8c2; --ink3: #7a8290;
  --line: #2c3038; --soft: #23262d; --shadow: 0 1px 2px rgba(0,0,0,.3), 0 10px 30px rgba(0,0,0,.35); }
@media (prefers-color-scheme: dark) {
  :root:not([data-color-mode='light']) { --bg: #14161a; --panel: #1d2026; --ink: #e8e6e1; --ink2: #b3b8c2; --ink3: #7a8290;
    --line: #2c3038; --soft: #23262d; --shadow: 0 1px 2px rgba(0,0,0,.3), 0 10px 30px rgba(0,0,0,.35); }
}
* { box-sizing: border-box; margin: 0; padding: 0 }
html { scroll-behavior: smooth }
body { font-family: "PingFang SC", "Microsoft YaHei", "Segoe UI", system-ui, sans-serif;
  background:
    radial-gradient(900px 500px at 12% -5%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 60%),
    radial-gradient(700px 500px at 95% 8%, color-mix(in srgb, #06b6d4 9%, transparent), transparent 58%),
    var(--bg);
  color: var(--ink); line-height: 1.75; font-size: 15.5px;
  position: relative; overflow-x: hidden; }
body::before { content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(2px 2px at 20% 30%, color-mix(in srgb, var(--accent) 40%, transparent), transparent),
    radial-gradient(1px 1px at 70% 60%, color-mix(in srgb, var(--accent) 25%, transparent), transparent),
    radial-gradient(1.5px 1.5px at 40% 80%, color-mix(in srgb, #06b6d4 30%, transparent), transparent);
  background-size: 320px 320px, 260px 260px, 400px 400px;
  opacity: .5; animation: floatBg 26s linear infinite; }
@keyframes floatBg { from { background-position: 0 0, 0 0, 0 0 } to { background-position: 320px 320px, -260px 260px, 400px -400px } }
a { color: inherit; text-decoration: none }
img { display: block; max-width: 100% }
.wrap { max-width: 1020px; margin: 0 auto; padding: 0 22px }
/* 顶部导航 */
.nav { position: sticky; top: 0; z-index: 50; background: color-mix(in srgb, var(--panel) 78%, transparent);
  backdrop-filter: blur(18px) saturate(1.4); border-bottom: 1px solid color-mix(in srgb, var(--line) 60%, transparent);
  box-shadow: 0 4px 24px rgba(15,23,42,.06); }
.nav .wrap { display: flex; align-items: center; justify-content: space-between; height: 60px; gap: 12px }
.brand { font-weight: 700; font-size: 16px; letter-spacing: .5px; white-space: nowrap;
  display: flex; align-items: center; gap: 9px }
.brand i { width: 10px; height: 10px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 0 10px color-mix(in srgb, var(--accent) 50%, transparent); flex: none; animation: pulseDot 2.4s ease-in-out infinite; }
@keyframes pulseDot { 0%,100% { transform: scale(1) } 50% { transform: scale(1.25) } }
.nav-links { display: flex; gap: 4px; overflow-x: auto; -webkit-overflow-scrolling: touch }
.nav-links a { padding: 7px 13px; border-radius: 9px; color: var(--ink2); font-size: 14px;
  white-space: nowrap; transition: color .18s, background .18s, transform .18s }
.nav-links a:hover { color: var(--ink); background: var(--soft); transform: translateY(-1px) }
.nav-links a.on { color: var(--accent); background: color-mix(in srgb, var(--accent) 11%, transparent);
  font-weight: 600; box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--accent) 18%, transparent) }
/* 页面容器 */
.page { display: none; animation: fade .35s ease }
.page.on { display: block }
@keyframes fade { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
main { padding: 48px 0 30px; min-height: calc(100vh - 60px - 66px) }
h2.sec { font-size: 21px; font-weight: 700; margin: 34px 0 16px; display: flex; align-items: center; gap: 10px;
  position: relative; padding-left: 14px; }
h2.sec:first-child { margin-top: 0 }
h2.sec::before { content: ""; position: absolute; left: 0; top: 4px; bottom: 4px; width: 4px; border-radius: 3px;
  background: linear-gradient(180deg, var(--accent), var(--accent-2)); box-shadow: 0 0 8px color-mix(in srgb, var(--accent) 40%, transparent); }
h2.sec::after { content: ""; flex: 1; height: 1px; background: linear-gradient(90deg, var(--line), transparent) }
/* 首页 Hero */
.hero { display: flex; align-items: center; gap: 34px; padding: 30px 0 10px; position: relative }
.hero img { width: 132px; height: 132px; border-radius: 28px; object-fit: cover;
  border: 3px solid var(--panel); box-shadow: 0 8px 28px color-mix(in srgb, var(--accent) 22%, transparent), var(--shadow);
  animation: floatY 5s ease-in-out infinite; }
@keyframes floatY { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-7px) } }
.hero .kicker { color: var(--accent); font-weight: 600; font-size: 13.5px; letter-spacing: 3px; margin-bottom: 8px;
  text-transform: uppercase; }
.hero h1 { font-size: clamp(30px, 5.4vw, 44px); font-weight: 800; letter-spacing: 1px; line-height: 1.25;
  background: linear-gradient(120deg, var(--ink) 0%, var(--accent) 60%, var(--accent-2) 100%);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
.hero h1 span { font-family: Georgia, "Songti SC", "SimSun", serif }
.hero .sub { color: var(--ink2); font-size: 16.5px; margin-top: 8px }
.hero .meta { color: var(--ink3); font-size: 13.5px; margin-top: 10px }
.cta { display: flex; gap: 12px; margin-top: 22px; flex-wrap: wrap }
.cta a { padding: 10px 22px; border-radius: 12px; font-size: 14.5px; font-weight: 600;
  transition: transform .2s, box-shadow .2s, background .2s; position: relative; overflow: hidden }
.cta a:hover { transform: translateY(-2px) }
.cta .p { background: linear-gradient(120deg, var(--accent), var(--accent-2)); color: #fff;
  box-shadow: 0 8px 22px color-mix(in srgb, var(--accent) 38%, transparent); }
.cta .p:hover { box-shadow: 0 12px 30px color-mix(in srgb, var(--accent) 46%, transparent); }
.cta .p::after { content: ""; position: absolute; top: 0; left: -80%; width: 60%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent);
  transform: skewX(-20deg); animation: shine 3.2s ease-in-out infinite; }
@keyframes shine { 0% { left: -80% } 60%,100% { left: 120% } }
.cta .g { background: var(--panel); border: 1px solid var(--line); color: var(--ink) }
.cta .g:hover { border-color: color-mix(in srgb, var(--accent) 40%, var(--line)); color: var(--accent) }
/* 卡片 */
.card { background: var(--panel); border: 1px solid var(--line); border-radius: var(--r);
  box-shadow: var(--shadow); padding: 20px 22px; margin-bottom: 14px;
  transition: transform .22s, box-shadow .22s, border-color .22s;
  position: relative; overflow: hidden; animation: cardIn .5s ease both; }
.card::before { content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
  background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 22%, transparent), transparent 40%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; opacity: 0; transition: opacity .22s; }
.card:hover { transform: translateY(-3px); box-shadow: 0 14px 36px color-mix(in srgb, var(--accent) 14%, rgba(20,22,26,.10));
  border-color: color-mix(in srgb, var(--accent) 22%, var(--line)); }
.card:hover::before { opacity: 1; }
@keyframes cardIn { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: none } }
.card:nth-child(2) { animation-delay: .05s } .card:nth-child(3) { animation-delay: .1s }
.card:nth-child(4) { animation-delay: .15s } .card:nth-child(5) { animation-delay: .2s }
.card .top { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; flex-wrap: wrap }
.card h3 { font-size: 16.5px; font-weight: 700 }
.card h3 small { color: var(--ink3); font-weight: 500; margin-left: 8px; font-size: 13.5px }
.card .time { color: var(--ink3); font-size: 13px; font-variant-numeric: tabular-nums; white-space: nowrap }
.card ul { margin: 10px 0 0; padding-left: 20px; color: var(--ink2) }
.card ul li { margin: 3px 0; font-size: 14.5px }
.card p.desc { color: var(--ink2); font-size: 14.5px; margin-top: 8px }
.tagrow { display: flex; gap: 7px; flex-wrap: wrap; margin-top: 12px }
.tag { font-size: 12px; padding: 4px 11px; border-radius: 999px; background: var(--soft); color: var(--ink2);
  border: 1px solid var(--line); transition: background .18s, color .18s, border-color .18s, transform .18s; }
.tag:hover { background: color-mix(in srgb, var(--accent) 10%, var(--soft)); color: var(--accent);
  border-color: color-mix(in srgb, var(--accent) 30%, var(--line)); transform: translateY(-1px); }
.badge { font-size: 12px; padding: 4px 11px; border-radius: 999px; font-weight: 600;
  background: linear-gradient(120deg, color-mix(in srgb, var(--accent) 14%, transparent), color-mix(in srgb, var(--accent-2) 14%, transparent));
  color: var(--accent); box-shadow: 0 2px 8px color-mix(in srgb, var(--accent) 18%, transparent); }
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px }
@media (max-width: 720px) { .grid2 { grid-template-columns: 1fr } .hero { flex-direction: column; text-align: center; gap: 20px }
  .hero .cta { justify-content: center } .card .top { flex-direction: column; gap: 2px } }
/* 技能 */
.skillcat { margin-bottom: 16px }
.skillcat h4 { font-size: 14px; color: var(--ink3); font-weight: 600; margin-bottom: 8px; letter-spacing: 1px }
.chips { display: flex; flex-wrap: wrap; gap: 8px }
.chips span { padding: 6px 14px; border-radius: 999px; background: var(--panel); border: 1px solid var(--line);
  font-size: 13.5px; box-shadow: 0 1px 2px rgba(20,22,26,.04);
  transition: transform .18s, box-shadow .18s, border-color .18s, color .18s; }
.chips span:hover { transform: translateY(-2px); border-color: color-mix(in srgb, var(--accent) 35%, var(--line));
  color: var(--accent); box-shadow: 0 4px 12px color-mix(in srgb, var(--accent) 14%, transparent); }
/* 联系页 */
.contact-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 14px }
.contact-list a.item, .contact-list div.item { display: flex; align-items: center; gap: 13px;
  background: var(--panel); border: 1px solid var(--line); border-radius: var(--r); padding: 17px 19px;
  box-shadow: var(--shadow); transition: transform .2s, box-shadow .2s, border-color .2s; }
.contact-list a.item:hover { transform: translateY(-3px); border-color: color-mix(in srgb, var(--accent) 30%, var(--line));
  box-shadow: 0 12px 28px color-mix(in srgb, var(--accent) 16%, rgba(20,22,26,.08)); }
.contact-list .ic { width: 38px; height: 38px; border-radius: 12px;
  background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 18%, transparent), color-mix(in srgb, var(--accent-2) 18%, transparent));
  color: var(--accent); display: flex; align-items: center; justify-content: center; font-weight: 700; flex: none;
  box-shadow: 0 2px 8px color-mix(in srgb, var(--accent) 18%, transparent); }
.contact-list .lb { color: var(--ink3); font-size: 12px }
.contact-list .vl { font-size: 14.5px; font-weight: 600; word-break: break-all }
.prose { color: var(--ink2); font-size: 15.5px; max-width: 72ch }
.prose + .prose { margin-top: 10px }
.empty { color: var(--ink3); text-align: center; padding: 70px 0 }
footer { border-top: 1px solid var(--line); padding: 22px 0 26px; color: var(--ink3); font-size: 12.5px;
  background: color-mix(in srgb, var(--panel) 60%, transparent); backdrop-filter: blur(8px); }
footer .wrap { display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap }
`,_=`
(function () {
  var DATA = JSON.parse(document.getElementById('site-data').textContent);
  var PAGES = JSON.parse(document.getElementById('site-pages').textContent);
  function safeUrl(u) {
    if (!u) return null;
    if (/^https?:\\/\\//i.test(u) || /^mailto:/i.test(u) || /^tel:/i.test(u)) return u;
    return null;
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function link(href, cls, text) {
    var a = el('a', cls, text);
    var u = safeUrl(href);
    if (u) a.href = u; else a.removeAttribute('href');
    return a;
  }
  function card(topNodes, lines, desc) {
    var c = el('div', 'card');
    var top = el('div', 'top');
    topNodes.forEach(function (n) { top.appendChild(n) });
    c.appendChild(top);
    if (desc) c.appendChild(el('p', 'desc', desc));
    if (lines && lines.length) {
      var ul = el('ul');
      lines.forEach(function (l) { ul.appendChild(el('li', null, l)) });
      c.appendChild(ul);
    }
    return c;
  }
  function head(text) { return el('h2', 'sec', text) }
  var R = {
    home: function () {
      var w = el('div');
      var hero = el('div', 'hero');
      var right = el('div');
      right.appendChild(el('div', 'kicker', 'HELLO, I AM'));
      var h1 = el('h1');
      var nm = el('span', null, DATA.name); h1.appendChild(nm);
      right.appendChild(h1);
      if (DATA.title) right.appendChild(el('div', 'sub', DATA.title));
      var meta = [DATA.contact.city, DATA.contact.email].filter(Boolean).join('  ·  ');
      if (meta) right.appendChild(el('div', 'meta', meta));
      var cta = el('div', 'cta');
      PAGES.forEach(function (p, idx) {
        if (idx === 0) return;
        var a = link('#/' + p.id, idx === 1 ? 'p' : 'g', p.label);
        cta.appendChild(a);
      });
      if (cta.childNodes.length) right.appendChild(cta);
      if (DATA.photo) { var img = el('img'); img.src = DATA.photo; img.alt = DATA.name; hero.appendChild(img) }
      hero.appendChild(right);
      w.appendChild(hero);
      if (DATA.summary) {
        w.appendChild(head('简介'));
        DATA.summary.split('\\n').forEach(function (para) {
          if (para.trim()) w.appendChild(el('p', 'prose', para.trim()));
        });
      }
      return w;
    },
    about: function () {
      var w = el('div');
      if (DATA.summary) {
        w.appendChild(head('自我介绍'));
        DATA.summary.split('\\n').forEach(function (para) {
          if (para.trim()) w.appendChild(el('p', 'prose', para.trim()));
        });
      }
      if (DATA.skills.length) {
        w.appendChild(head('技能特长'));
        DATA.skills.forEach(function (g) {
          var sc = el('div', 'skillcat');
          if (g.category) sc.appendChild(el('h4', null, g.category));
          var chips = el('div', 'chips');
          g.text.split(/[、，,;；\\/]+/).forEach(function (t) {
            t = t.trim(); if (t) chips.appendChild(el('span', null, t));
          });
          sc.appendChild(chips); w.appendChild(sc);
        });
      }
      if (DATA.education.length) {
        w.appendChild(head('教育背景'));
        DATA.education.forEach(function (e) {
          var h = el('h3'); h.appendChild(document.createTextNode(e.school));
          if (e.degree || e.major) h.appendChild(el('small', null, [e.degree, e.major].filter(Boolean).join(' · ')));
          var top = [h]; if (e.time) top.push(el('span', 'time', e.time));
          var c = card(top, null, e.detail || '');
          w.appendChild(c);
        });
      }
      DATA.extras.forEach(function (x) {
        w.appendChild(head(x.title));
        x.text.split('\\n').forEach(function (para) {
          if (para.trim()) w.appendChild(el('p', 'prose', para.trim()));
        });
      });
      if (!w.childNodes.length) w.appendChild(el('div', 'empty', '这一页还没有内容'));
      return w;
    },
    experience: function () {
      var w = el('div');
      function block(title, items, build) {
        if (!items.length) return;
        w.appendChild(head(title));
        items.forEach(function (it) { w.appendChild(build(it)) });
      }
      block('工作经历', DATA.work, function (j) {
        var h = el('h3'); h.appendChild(document.createTextNode(j.org));
        if (j.role) h.appendChild(el('small', null, j.role));
        var top = [h]; if (j.time) top.push(el('span', 'time', j.time));
        return card(top, j.lines);
      });
      block('科研经历', DATA.research, function (s) {
        var h = el('h3'); h.appendChild(document.createTextNode(s.direction));
        if (s.org) h.appendChild(el('small', null, s.org));
        var top = [h]; if (s.time) top.push(el('span', 'time', s.time));
        var c = card(top, s.lines);
        if (s.status) { var tr = el('div', 'tagrow'); tr.appendChild(el('span', 'badge', s.status)); c.appendChild(tr) }
        return c;
      });
      block('校园与公益', DATA.campus, function (c0) {
        var h = el('h3'); h.appendChild(document.createTextNode(c0.org));
        if (c0.role) h.appendChild(el('small', null, c0.role));
        var top = [h]; if (c0.time) top.push(el('span', 'time', c0.time));
        var lines = c0.hours ? c0.lines.concat('服务时长：' + c0.hours) : c0.lines;
        return card(top, lines);
      });
      return w;
    },
    projects: function () {
      var w = el('div');
      w.appendChild(head('项目与作品'));
      var grid = el('div', 'grid2');
      DATA.projects.forEach(function (p) {
        var h = el('h3'); h.appendChild(document.createTextNode(p.name || '未命名项目'));
        if (p.role) h.appendChild(el('small', null, p.role));
        var top = [h]; if (p.time) top.push(el('span', 'time', p.time));
        var c = card(top, p.lines, p.goal || '');
        if (p.tech.length) {
          var tr = el('div', 'tagrow');
          p.tech.forEach(function (t) { tr.appendChild(el('span', 'tag', t)) });
          c.appendChild(tr);
        }
        if (p.link) {
          var tr2 = el('div', 'tagrow');
          var a = link(p.link, 'badge', '访问链接 ↗');
          a.target = '_blank'; a.rel = 'noopener noreferrer';
          tr2.appendChild(a); c.appendChild(tr2);
        }
        grid.appendChild(c);
      });
      w.appendChild(grid);
      return w;
    },
    awards: function () {
      var w = el('div');
      w.appendChild(head('荣誉奖项'));
      DATA.awards.forEach(function (a) {
        var h = el('h3'); h.appendChild(document.createTextNode(a.name));
        if (a.level) { var b = el('span', 'badge', a.level); h.appendChild(document.createTextNode(' ')); h.appendChild(b) }
        var top = [h]; if (a.time) top.push(el('span', 'time', a.time));
        w.appendChild(card(top, null, a.org || ''));
      });
      return w;
    },
    contact: function () {
      var w = el('div');
      w.appendChild(head('联系我'));
      var list = el('div', 'contact-list');
      function item(label, value, href) {
        var a = el(href ? 'a' : 'div', 'item');
        if (href) { var u = safeUrl(href); if (u) a.href = u; }
        a.appendChild(el('div', 'ic', label.charAt(0)));
        var box = el('div');
        box.appendChild(el('div', 'lb', label));
        box.appendChild(el('div', 'vl', value));
        a.appendChild(box);
        list.appendChild(a);
      }
      if (DATA.contact.email) item('邮箱', DATA.contact.email, 'mailto:' + DATA.contact.email);
      if (DATA.contact.phone) item('电话', DATA.contact.phone, 'tel:' + DATA.contact.phone);
      if (DATA.contact.city) item('所在城市', DATA.contact.city, null);
      DATA.contact.links.forEach(function (l) { item(l.label, l.url, l.url) });
      w.appendChild(list);
      return w;
    }
  };
  var nav = document.getElementById('nav-links');
  PAGES.forEach(function (p) {
    var a = el('a', null, p.label);
    a.href = '#/' + p.id;
    a.dataset.page = p.id;
    nav.appendChild(a);
  });
  function current() {
    var h = location.hash.replace(/^#\\//, '');
    return PAGES.some(function (p) { return p.id === h }) ? h : PAGES[0].id;
  }
  // 当前页：优先用内存状态（srcdoc 预览里 hash 不可靠），hash 只作为初始值与同步源
  var cur = current();
  function render(forceId) {
    if (forceId) cur = forceId;
    if (!PAGES.some(function (p) { return p.id === cur })) cur = PAGES[0].id;
    var id = cur;
    var main = document.getElementById('app');
    main.textContent = '';
    main.appendChild((R[id] || R.home)());
    var as = nav.querySelectorAll('a');
    for (var i = 0; i < as.length; i++) {
      as[i].classList.toggle('on', as[i].dataset.page === id);
    }
    var label = (PAGES.find(function (p) { return p.id === id }) || {}).label || '';
    document.title = id === PAGES[0].id ? DATA.name + ' · 个人网站' : label + ' · ' + DATA.name;
    window.scrollTo(0, 0);
  }
  // 页内点击直接渲染（srcdoc 预览环境与真实文件都可靠）；
  // 真实浏览器文件里同时更新地址栏 hash，hashchange 兜底处理前进/后退与手动改地址。
  document.addEventListener('click', function (e) {
    var t = e.target;
    while (t && t !== document && !(t.tagName === 'A' && /^#\\//.test(t.getAttribute('href') || ''))) t = t.parentNode;
    if (!t || t === document) return;
    e.preventDefault();
    var href = t.getAttribute('href') || '';
    var id = href.replace(/^#\\//, '');
    try { history.replaceState(null, '', href) } catch (err) { /* srcdoc 环境可能受限 */ }
    render(id);
  });
  window.addEventListener('hashchange', function () { cur = current(); render() });
  render();
})();
`,v={precision:`minimal`,tech:`tech`,warm:`serif`,vivid:`vivid`},y=[{id:`minimal`,label:`极简黑白`,desc:`干净卡片与留白，对应精致克制皮肤`},{id:`serif`,label:`杂志衬线`,desc:`衬线标题与纸感底色，对应温暖高级皮肤`},{id:`vivid`,label:`活力强调`,desc:`渐变点缀与大圆角，对应活力品牌皮肤`},{id:`tech`,label:`冷调科技`,desc:`玻璃导航与微发光，对应冷调科技皮肤`}],b={minimal:`
/* 精致克制：素色标题、静态点缀、克制投影，与 precision 皮肤同源 */
body::before { opacity: .3; animation: none }
.brand i { animation: none; box-shadow: none; background: var(--accent) }
.hero h1 { background: none; -webkit-text-fill-color: var(--ink); letter-spacing: 0 }
.hero h1 span { font-family: inherit }
.cta .p { background: var(--accent); box-shadow: none }
.cta .p:hover { box-shadow: none }
.cta .p::after { display: none }
.card::before { display: none }
.card:hover { transform: translateY(-2px); box-shadow: var(--shadow) }
h2.sec::before { box-shadow: none }
`,serif:`
/* 温暖高级：纸感底色 + 衬线标题 + 零阴影扁平 + 发丝线，与 warm 皮肤同源 */
:root { --bg: #faf8f4; --panel: #fffdf9; --line: #e8e2d6; --soft: #f3efe6; --r: 6px;
  --shadow: none }
:root[data-color-mode='dark'] { --bg: #17150f; --panel: #1f1c15; --line: #35301f; --soft: #262217 }
@media (prefers-color-scheme: dark) {
  :root:not([data-color-mode='light']) { --bg: #17150f; --panel: #1f1c15; --line: #35301f; --soft: #262217 }
}
body::before { opacity: .25; animation: none }
h1, h2, h3, .brand, .nav-links a.on { font-family: Georgia, "Songti SC", "SimSun", serif }
h2.sec { font-size: 23px; letter-spacing: 1px }
h2.sec::before { box-shadow: none }
h2.sec::after { height: 2px; background: color-mix(in srgb, var(--accent) 30%, var(--line)) }
.brand i { animation: none; box-shadow: none; background: var(--accent) }
.hero { padding: 34px 0 14px }
.hero .kicker { letter-spacing: 5px }
.hero h1 { font-weight: 700; background: none; -webkit-text-fill-color: var(--ink) }
.hero img { border-radius: 8px; border-width: 4px; box-shadow: none }
.cta .p { background: var(--accent); box-shadow: none }
.cta .p:hover { box-shadow: none }
.cta .p::after { display: none }
.card, .contact-list a.item, .contact-list div.item, .chips span { box-shadow: none }
.card { border-left: 3px solid color-mix(in srgb, var(--accent) 45%, transparent) }
.card:hover { transform: none; box-shadow: none; border-color: color-mix(in srgb, var(--accent) 40%, var(--line)) }
.card::before { display: none }
.card h3 { font-size: 17.5px; letter-spacing: .5px }
.prose { font-size: 16px; line-height: 1.9 }
.chips span { border-radius: 4px }
footer { letter-spacing: 1px }
`,vivid:`
:root { --r: 22px;
  --shadow: 0 2px 4px rgba(20,22,26,.06), 0 16px 40px rgba(20,22,26,.12) }
body { background:
  radial-gradient(1000px 560px at 10% -6%, color-mix(in srgb, var(--accent) 20%, transparent), transparent 62%),
  radial-gradient(820px 560px at 96% 6%, color-mix(in srgb, var(--accent-2) 17%, transparent), transparent 60%),
  radial-gradient(700px 500px at 50% 110%, color-mix(in srgb, var(--accent-2) 12%, transparent), transparent 58%),
  var(--bg); }
body::before { opacity: .85; animation-duration: 16s; }
.hero { position: relative; padding: 46px 40px; margin-top: 12px; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 24%, var(--panel)) 0%, color-mix(in srgb, var(--accent-2) 16%, var(--panel)) 55%, var(--panel) 100%);
  border: 1.5px solid color-mix(in srgb, var(--accent) 30%, var(--line)); border-radius: 30px;
  box-shadow: 0 24px 60px color-mix(in srgb, var(--accent) 22%, rgba(20,22,26,.12)); }
.hero::before, .hero::after { content: ""; position: absolute; border-radius: 50%; pointer-events: none; filter: blur(46px); opacity: .62; }
.hero::before { width: 260px; height: 260px; right: -60px; top: -70px;
  background: radial-gradient(circle, var(--accent), transparent 70%); animation: blobA 7s ease-in-out infinite; }
.hero::after { width: 210px; height: 210px; left: -50px; bottom: -60px;
  background: radial-gradient(circle, var(--accent-2), transparent 70%); animation: blobB 9s ease-in-out infinite; }
@keyframes blobA { 0%,100% { transform: translate(0,0) scale(1) } 50% { transform: translate(-24px,18px) scale(1.14) } }
@keyframes blobB { 0%,100% { transform: translate(0,0) scale(1) } 50% { transform: translate(28px,-12px) scale(1.18) } }
.hero > * { position: relative; z-index: 1; }
.hero img { border-radius: 38px; box-shadow: 0 14px 40px color-mix(in srgb, var(--accent) 34%, transparent); }
.hero .kicker { font-size: 14px; letter-spacing: 4px }
.hero h1 { font-size: clamp(32px, 6vw, 50px);
  background: linear-gradient(120deg, var(--ink), var(--accent) 45%, var(--accent-2) 80%);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 12px color-mix(in srgb, var(--accent) 30%, transparent)); }
.cta a { border-radius: 999px; padding: 12px 28px; font-size: 15px; }
.cta .p { background: linear-gradient(120deg, var(--accent), var(--accent-2), var(--accent)); background-size: 220% 220%;
  animation: gradFlow 5s ease infinite;
  box-shadow: 0 10px 30px color-mix(in srgb, var(--accent) 46%, transparent); }
.cta .p:hover { box-shadow: 0 16px 40px color-mix(in srgb, var(--accent) 56%, transparent); }
@keyframes gradFlow { 0%,100% { background-position: 0% 50% } 50% { background-position: 100% 50% } }
.card { border-radius: 20px; border-color: color-mix(in srgb, var(--accent) 16%, var(--line)); }
.card::before { opacity: 1; background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 32%, transparent), color-mix(in srgb, var(--accent-2) 22%, transparent) 55%, transparent); }
.card:hover { transform: translateY(-5px) scale(1.008);
  box-shadow: 0 20px 48px color-mix(in srgb, var(--accent) 24%, rgba(20,22,26,.14)); }
.tag { background: linear-gradient(120deg, color-mix(in srgb, var(--accent) 9%, var(--panel)), color-mix(in srgb, var(--accent-2) 9%, var(--panel))); }
.badge { box-shadow: 0 2px 10px color-mix(in srgb, var(--accent) 32%, transparent); }
.chips span { box-shadow: 0 2px 8px rgba(20,22,26,.06); }
h2.sec { background: linear-gradient(120deg, var(--ink) 20%, var(--accent) 75%);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
h2.sec::before { box-shadow: 0 0 14px color-mix(in srgb, var(--accent) 55%, transparent); }
.contact-list .ic { border-radius: 14px; box-shadow: 0 4px 14px color-mix(in srgb, var(--accent) 26%, transparent); }
.nav { background: color-mix(in srgb, var(--panel) 88%, transparent); }
/* 活力品牌：粗字重 + 无衬线标题，与 vivid 皮肤的视觉冲击同源 */
.hero h1, h2.sec, .card h3 { font-weight: 800; letter-spacing: .2px }
.hero h1 span { font-family: inherit }
@media (max-width: 720px) { .hero { padding: 30px 22px } }
`,tech:`
/* 冷调科技：默认暗色；浅色由 data-color-mode='light' 强制或系统浅色偏好（且未被强制暗色）触发 */
:root { --bg: #0b0f16; --panel: #131a24; --ink: #e8eef8; --ink2: #a3b2c7; --ink3: #6c7a90;
  --line: #212b38; --soft: #18202c; --r: 16px;
  --accent-2: color-mix(in srgb, var(--accent) 62%, #22d3ee);
  --shadow: 0 1px 2px rgba(0,0,0,.35), 0 18px 44px rgba(0,0,0,.45) }
:root[data-color-mode='light'] { --bg: #eef2f9; --panel: #fbfdff; --ink: #0b1220; --ink2: #48566e; --ink3: #8a97ac;
  --line: #d6e0ef; --soft: #f3f7fd; --shadow: 0 1px 2px rgba(15,23,42,.05), 0 14px 34px rgba(15,23,42,.08) }
@media (prefers-color-scheme: light) {
  :root:not([data-color-mode='dark']) { --bg: #eef2f9; --panel: #fbfdff; --ink: #0b1220; --ink2: #48566e; --ink3: #8a97ac;
    --line: #d6e0ef; --soft: #f3f7fd; --shadow: 0 1px 2px rgba(15,23,42,.05), 0 14px 34px rgba(15,23,42,.08) }
}
body { background:
  radial-gradient(1000px 560px at 8% -6%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 62%),
  radial-gradient(820px 520px at 96% 4%, color-mix(in srgb, #22d3ee 16%, transparent), transparent 60%),
  var(--bg); }
body::before { opacity: .35; animation-duration: 34s; }
/* 玻璃导航 */
.nav { background: color-mix(in srgb, var(--panel) 62%, transparent);
  backdrop-filter: blur(22px) saturate(1.6);
  border-bottom: 1px solid color-mix(in srgb, var(--accent) 26%, transparent);
  box-shadow: 0 6px 30px rgba(0,0,0,.35), 0 0 0 1px color-mix(in srgb, var(--accent) 12%, transparent); }
.nav-links a { border-radius: 999px }
.nav-links a.on { background: color-mix(in srgb, var(--accent) 18%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--accent) 42%, transparent),
    0 0 16px color-mix(in srgb, var(--accent) 45%, transparent); }
/* Hero：网格底纹 + 发光边 */
.hero { padding: 40px 34px; margin-top: 10px; overflow: hidden;
  background: linear-gradient(140deg, color-mix(in srgb, var(--accent) 16%, var(--panel)) 0%, var(--panel) 62%);
  border: 1px solid color-mix(in srgb, var(--accent) 34%, var(--line)); border-radius: 20px;
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 10%, transparent),
    0 24px 60px rgba(0,0,0,.42), inset 0 1px 0 color-mix(in srgb, #ffffff 8%, transparent); }
.hero::before { content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .26;
  background:
    linear-gradient(color-mix(in srgb, var(--accent) 22%, transparent) 1px, transparent 1px) 0 0 / 100% 26px,
    linear-gradient(90deg, color-mix(in srgb, var(--accent) 22%, transparent) 1px, transparent 1px) 0 0 / 26px 100%; }
:root[data-color-mode='dark'] .hero::before { opacity: .5 }
@media (prefers-color-scheme: dark) { :root:not([data-color-mode='light']) .hero::before { opacity: .5 } }
.hero > * { position: relative; z-index: 1 }
.hero .kicker { letter-spacing: 5px; text-shadow: 0 0 14px color-mix(in srgb, var(--accent) 60%, transparent) }
.hero h1 { text-shadow: 0 0 26px color-mix(in srgb, var(--accent) 34%, transparent) }
.hero img { border-radius: 18px; border-color: color-mix(in srgb, var(--accent) 46%, var(--panel));
  box-shadow: 0 0 26px color-mix(in srgb, var(--accent) 40%, transparent), 0 14px 34px rgba(0,0,0,.4); }
h2.sec::before { width: 3px; box-shadow: 0 0 14px color-mix(in srgb, var(--accent) 70%, transparent) }
h2.sec::after { background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 44%, transparent), transparent) }
/* 卡片：冷玻璃 + 悬停微发光 */
.card { background: color-mix(in srgb, var(--panel) 90%, transparent);
  border-color: color-mix(in srgb, var(--accent) 18%, var(--line));
  backdrop-filter: blur(8px); }
.card:hover { border-color: color-mix(in srgb, var(--accent) 46%, var(--line));
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 22%, transparent),
    0 18px 44px color-mix(in srgb, var(--accent) 22%, rgba(0,0,0,.4)); }
.card::before { opacity: 1;
  background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 32%, transparent), transparent 46%); }
.cta a { border-radius: 999px }
.cta .p { box-shadow: 0 0 22px color-mix(in srgb, var(--accent) 55%, transparent) }
.cta .g { background: color-mix(in srgb, var(--panel) 78%, transparent);
  backdrop-filter: blur(10px); }
.tag, .chips span { background: color-mix(in srgb, var(--accent) 12%, var(--panel));
  border: 1px solid color-mix(in srgb, var(--accent) 24%, transparent); }
.badge { box-shadow: 0 0 14px color-mix(in srgb, var(--accent) 46%, transparent) }
.contact-list .ic { box-shadow: 0 0 14px color-mix(in srgb, var(--accent) 30%, transparent) }
footer { border-top: 1px solid color-mix(in srgb, var(--accent) 20%, var(--line)) }
/* 冷调科技：等宽字体用于时间/元信息/页脚等点缀位，与 tech 皮肤的终端气质同源 */
.hero h1 span { font-family: inherit }
.hero .kicker, .hero .meta, .card .time, .card h3 small, .post-card .pdate, .year-label, footer {
  font-family: ui-monospace, SFMono-Regular, "Cascadia Mono", Consolas, monospace }
`};function x(e){return e.colorMode===`light`||e.colorMode===`dark`?` data-color-mode="${e.colorMode}"`:``}function S(e,t={}){let n=y.some(e=>e.id===t.theme)?t.theme:`minimal`,r=/^#[0-9a-fA-F]{6}$/.test(t.accent??``)?t.accent:e.accent,i=p(e).map(e=>({id:e.id,label:e.label})),a=new Date(e.generatedAt).getFullYear(),o=g.replace(`__ACCENT__`,r)+b[n];return`<!doctype html>
<html lang="zh-CN" data-site-theme="${n}"${x(t)}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="generator" content="简历工坊 Resume Workshop">
<title>${h(e.name)} · 个人网站</title>
<style>${o}</style>
</head>
<body>
<nav class="nav"><div class="wrap">
  <div class="brand"><i></i>${h(e.name)}</div>
  <div class="nav-links" id="nav-links"></div>
</div></nav>
<main><div class="wrap" id="app"></div></main>
<footer><div class="wrap">
  <span>© ${a} ${h(e.name)}</span>
  <span>由简历工坊生成 · 内容基于本人真实简历</span>
</div></footer>
<script id="site-data" type="application/json">${m(e)}<\/script>
<script id="site-pages" type="application/json">${m(i)}<\/script>
<script>${_}<\/script>
</body>
</html>`}var C=`
.sec-block { scroll-margin-top: 76px; padding: 6px 0 }
.sec-block + .sec-block { border-top: 1px solid var(--line); margin-top: 30px; padding-top: 26px;
  border-image: linear-gradient(90deg, color-mix(in srgb, var(--accent) 30%, var(--line)), transparent 70%) 1; }
h3.subhead { font-size: 14.5px; color: var(--ink3); font-weight: 700; letter-spacing: .5px; margin: 22px 0 10px;
  display: flex; align-items: center; gap: 8px; }
h3.subhead::before { content: ""; width: 6px; height: 6px; border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-2)); flex: none; }
h3.subhead:first-child { margin-top: 4px }
.year-label { display: flex; align-items: center; gap: 12px; font-size: 15px; font-weight: 700;
  color: var(--accent); margin: 24px 0 12px; font-variant-numeric: tabular-nums }
.year-label::after { content: ""; flex: 1; height: 1px; background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 30%, transparent), transparent) }
.timeline { position: relative; padding-left: 22px }
.timeline::before { content: ""; position: absolute; left: 4px; top: 10px; bottom: 10px; width: 1px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 40%, transparent), var(--line) 60%, transparent) }
.timeline .card { position: relative; margin-bottom: 12px }
.timeline .card::before { content: ""; position: absolute; left: -22px; top: 22px; width: 9px; height: 9px;
  border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 16%, transparent), 0 0 8px color-mix(in srgb, var(--accent) 40%, transparent) }
.timeline .card:hover::before { box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 22%, transparent), 0 0 14px color-mix(in srgb, var(--accent) 55%, transparent) }
.post-card .pdate { color: var(--ink3); font-size: 13px; font-variant-numeric: tabular-nums }
.post-body p { color: var(--ink2); font-size: 14.8px; margin: 7px 0 }
`,w=`
(function () {
  var DATA = JSON.parse(document.getElementById('site-data').textContent);
  var SECTIONS = DATA.sections || [];
  function safeUrl(u) {
    if (!u) return null;
    if (/^https?:\\/\\//i.test(u) || /^mailto:/i.test(u) || /^tel:/i.test(u)) return u;
    return null;
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function link(href, cls, text) {
    var a = el('a', cls, text);
    var u = safeUrl(href);
    if (u) a.href = u; else a.removeAttribute('href');
    return a;
  }
  function card(topNodes, linesArr, desc) {
    var c = el('div', 'card');
    var top = el('div', 'top');
    topNodes.forEach(function (n) { top.appendChild(n) });
    c.appendChild(top);
    if (desc) c.appendChild(el('p', 'desc', desc));
    if (linesArr && linesArr.length) {
      var ul = el('ul');
      linesArr.forEach(function (l) { ul.appendChild(el('li', null, l)) });
      c.appendChild(ul);
    }
    return c;
  }
  function titleNode(main, small) {
    var h = el('h3');
    h.appendChild(document.createTextNode(main));
    if (small) h.appendChild(el('small', null, small));
    return h;
  }
  function tagRow(tags) {
    var tr = el('div', 'tagrow');
    tags.forEach(function (t) { tr.appendChild(el('span', 'tag', t)) });
    return tr;
  }
  function chips(groups) {
    var w = el('div');
    groups.forEach(function (g) {
      var sc = el('div', 'skillcat');
      if (g.category) sc.appendChild(el('h4', null, g.category));
      var box = el('div', 'chips');
      g.text.split(/[、，,;；\\/]+/).forEach(function (t) {
        t = t.trim(); if (t) box.appendChild(el('span', null, t));
      });
      sc.appendChild(box); w.appendChild(sc);
    });
    return w;
  }
  var R = {
    about: function () {
      var w = el('div');
      DATA.bio.forEach(function (p) { w.appendChild(el('p', 'prose', p)) });
      if (DATA.education.length) {
        w.appendChild(el('h3', 'subhead', '教育背景'));
        DATA.education.forEach(function (e) {
          var top = [titleNode(e.school, [e.degree, e.major].filter(Boolean).join(' · '))];
          if (e.time) top.push(el('span', 'time', e.time));
          w.appendChild(card(top, null, e.detail || ''));
        });
      }
      if (DATA.skills.length) {
        w.appendChild(el('h3', 'subhead', '技能'));
        w.appendChild(chips(DATA.skills));
      }
      var c = DATA.contact;
      if (c.email || c.phone || c.city || c.links.length) {
        w.appendChild(el('h3', 'subhead', '联系方式'));
        var list = el('div', 'contact-list');
        function item(label, value, href) {
          var a = el(href ? 'a' : 'div', 'item');
          if (href) { var u = safeUrl(href); if (u) a.href = u; }
          a.appendChild(el('div', 'ic', label.charAt(0)));
          var box = el('div');
          box.appendChild(el('div', 'lb', label));
          box.appendChild(el('div', 'vl', value));
          a.appendChild(box);
          list.appendChild(a);
        }
        if (c.email) item('邮箱', c.email, 'mailto:' + c.email);
        if (c.phone) item('电话', c.phone, 'tel:' + c.phone);
        if (c.city) item('所在城市', c.city, null);
        c.links.forEach(function (l) { item(l.label, l.url, l.url) });
        w.appendChild(list);
      }
      return w;
    },
    experience: function () {
      var w = el('div');
      DATA.experience.forEach(function (g) {
        w.appendChild(el('div', 'year-label', g.year));
        var tl = el('div', 'timeline');
        g.items.forEach(function (it) {
          var top = [titleNode(it.title, it.subtitle)];
          if (it.time) top.push(el('span', 'time', it.time));
          var cd = card(top, it.lines);
          if (it.tags.length) cd.appendChild(tagRow(it.tags));
          tl.appendChild(cd);
        });
        w.appendChild(tl);
      });
      return w;
    },
    portfolio: function () {
      var w = el('div');
      var grid = el('div', 'grid2');
      DATA.portfolio.forEach(function (p) {
        var top = [titleNode(p.name, p.role)];
        if (p.time) top.push(el('span', 'time', p.time));
        var cd = card(top, p.lines, p.goal || '');
        if (p.tech.length) cd.appendChild(tagRow(p.tech));
        if (p.link) {
          var tr = el('div', 'tagrow');
          var a = link(p.link, 'badge', '访问链接 ↗');
          a.target = '_blank'; a.rel = 'noopener noreferrer';
          tr.appendChild(a); cd.appendChild(tr);
        }
        grid.appendChild(cd);
      });
      w.appendChild(grid);
      return w;
    },
    posts: function () {
      var w = el('div');
      DATA.posts.forEach(function (p) {
        var cd = el('div', 'card post-card');
        var top = el('div', 'top');
        top.appendChild(titleNode(p.title));
        if (p.date) top.appendChild(el('span', 'pdate', p.date));
        cd.appendChild(top);
        var body = el('div', 'post-body');
        p.paras.forEach(function (t) { body.appendChild(el('p', null, t)) });
        cd.appendChild(body);
        if (p.tags.length) cd.appendChild(tagRow(p.tags));
        w.appendChild(cd);
      });
      return w;
    },
    resume: function () {
      var w = el('div');
      var M = DATA.resume.model;
      var intro = '以下为本人简历正文（' + DATA.resume.name
        + (DATA.resume.purpose ? ' · ' + DATA.resume.purpose : '') + '）。';
      w.appendChild(el('p', 'prose', intro));
      if (M.education.length) {
        w.appendChild(el('h3', 'subhead', '教育背景'));
        M.education.forEach(function (e) {
          var top = [titleNode(e.school, [e.degree, e.major].filter(Boolean).join(' · '))];
          if (e.time) top.push(el('span', 'time', e.time));
          w.appendChild(card(top, null, e.detail || ''));
        });
      }
      if (M.work.length) {
        w.appendChild(el('h3', 'subhead', '实习与工作'));
        M.work.forEach(function (j) {
          var top = [titleNode(j.org, j.role)];
          if (j.time) top.push(el('span', 'time', j.time));
          w.appendChild(card(top, j.lines));
        });
      }
      if (M.projects.length) {
        w.appendChild(el('h3', 'subhead', '项目经历'));
        var grid = el('div', 'grid2');
        M.projects.forEach(function (p) {
          var top = [titleNode(p.name, p.role)];
          if (p.time) top.push(el('span', 'time', p.time));
          var cd = card(top, p.lines, p.goal || '');
          if (p.tech.length) cd.appendChild(tagRow(p.tech));
          grid.appendChild(cd);
        });
        w.appendChild(grid);
      }
      if (M.research.length) {
        w.appendChild(el('h3', 'subhead', '科研经历'));
        M.research.forEach(function (s) {
          var top = [titleNode(s.direction, s.org)];
          if (s.time) top.push(el('span', 'time', s.time));
          var cd = card(top, s.lines);
          if (s.status) cd.appendChild(tagRow([s.status]));
          w.appendChild(cd);
        });
      }
      if (M.campus.length) {
        w.appendChild(el('h3', 'subhead', '校园与公益'));
        M.campus.forEach(function (c0) {
          var top = [titleNode(c0.org, c0.role)];
          if (c0.time) top.push(el('span', 'time', c0.time));
          var arr = c0.hours ? c0.lines.concat('服务时长：' + c0.hours) : c0.lines;
          w.appendChild(card(top, arr));
        });
      }
      if (M.awards.length) {
        w.appendChild(el('h3', 'subhead', '荣誉奖项'));
        M.awards.forEach(function (a) {
          var h = el('h3'); h.appendChild(document.createTextNode(a.name));
          if (a.level) { h.appendChild(document.createTextNode(' ')); h.appendChild(el('span', 'badge', a.level)) }
          var top = [h]; if (a.time) top.push(el('span', 'time', a.time));
          w.appendChild(card(top, null, a.org || ''));
        });
      }
      if (M.skills.length) {
        w.appendChild(el('h3', 'subhead', '技能'));
        w.appendChild(chips(M.skills));
      }
      return w;
    }
  };
  var app = document.getElementById('app');
  app.id = 'top';
  var hero = el('div', 'hero');
  var right = el('div');
  right.appendChild(el('div', 'kicker', 'HELLO, I AM'));
  right.appendChild(el('h1', null, DATA.name));
  if (DATA.headline) right.appendChild(el('div', 'sub', DATA.headline));
  var meta = [DATA.contact.city, DATA.contact.email].filter(Boolean).join('  ·  ');
  if (meta) right.appendChild(el('div', 'meta', meta));
  var cta = el('div', 'cta');
  SECTIONS.forEach(function (s, idx) {
    cta.appendChild(link('#sec-' + s.id, idx === 0 ? 'p' : 'g', s.label));
  });
  if (DATA.contact.email) cta.appendChild(link('mailto:' + DATA.contact.email, 'g', '联系我'));
  if (cta.childNodes.length) right.appendChild(cta);
  if (DATA.avatar) { var img = el('img'); img.src = DATA.avatar; img.alt = DATA.name; hero.appendChild(img) }
  hero.appendChild(right);
  app.appendChild(hero);
  SECTIONS.forEach(function (s) {
    var sec = el('section', 'sec-block');
    sec.id = 'sec-' + s.id;
    sec.appendChild(el('h2', 'sec', s.label));
    sec.appendChild((R[s.id] || function () { return el('div') })());
    app.appendChild(sec);
  });
  var nav = document.getElementById('nav-links');
  var navLinks = [];
  function addNav(href, label, id) {
    var a = el('a', null, label);
    a.href = href; a.dataset.sec = id;
    nav.appendChild(a); navLinks.push(a);
  }
  addNav('#top', '首页', 'top');
  SECTIONS.forEach(function (s) { addNav('#sec-' + s.id, s.label, s.id) });
  function setActive(id) {
    navLinks.forEach(function (a) { a.classList.toggle('on', a.dataset.sec === id) });
  }
  document.addEventListener('click', function (e) {
    var t = e.target;
    while (t && t !== document && !(t.tagName === 'A' && (t.getAttribute('href') || '').charAt(0) === '#')) t = t.parentNode;
    if (!t || t === document) return;
    var href = t.getAttribute('href');
    var target = document.getElementById(href.slice(1));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    try { history.replaceState(null, '', href) } catch (err) { /* srcdoc 环境受限 */ }
    var id = href.slice(1);
    setActive(id === 'top' ? 'top' : id.replace(/^sec-/, ''));
  });
  function onScroll() {
    var y = window.scrollY + 130;
    var cur = 'top';
    SECTIONS.forEach(function (s) {
      var sec = document.getElementById('sec-' + s.id);
      if (sec && sec.getBoundingClientRect().top + window.scrollY <= y) cur = s.id;
    });
    setActive(cur);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
  document.title = DATA.name + (DATA.headline ? ' · ' + DATA.headline : '') + ' · 个人网站';
})();
`;function T(e,t={}){let n=y.some(e=>e.id===t.theme)?t.theme:`minimal`,r=/^#[0-9a-fA-F]{6}$/.test(t.accent??``)?t.accent:e.accent,i=new Date(e.generatedAt).getFullYear(),a=g.replace(`__ACCENT__`,r)+b[n]+C;return`<!doctype html>
<html lang="zh-CN" data-site-theme="${n}"${x(t)}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="generator" content="简历工坊 Resume Workshop">
<title>${h(e.name)} · 个人网站</title>
<style>${a}</style>
</head>
<body>
<nav class="nav"><div class="wrap">
  <div class="brand"><i></i>${h(e.name)}</div>
  <div class="nav-links" id="nav-links"></div>
</div></nav>
<main><div class="wrap" id="app"></div></main>
<footer><div class="wrap">
  <span>© ${i} ${h(e.name)}</span>
  <span>由简历工坊生成 · 内容基于本人真实资料</span>
</div></footer>
<script id="site-data" type="application/json">${m(e)}<\/script>
<script>${w}<\/script>
</body>
</html>`}export{d as a,S as i,v as n,o,T as r,i as s,y as t};