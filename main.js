/* ================================================
   JOE WEARS · app.js  (complete clean build)
   ================================================ */

/* ════════════════════════
   PRODUCTS DATA
════════════════════════ */
const products = [
  { id:1,  name:"Ivory Breeze Wide-Leg",       cat:"wide-leg", price:250, old:310, img:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80", tag:"Bestseller", colors:["#F8F5F2","#3A2E2A","#8B7355"] },
  { id:2,  name:"Midnight Flow Palazzo",        cat:"palazzo",  price:280, old:null,img:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80", tag:"New",       colors:["#1a1a1a","#3A2E2A","#5C4B3A"] },
  { id:3,  name:"Cocoa Linen Trouser",          cat:"casual",   price:220, old:null,img:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80", tag:null,        colors:["#8B7355","#F8F5F2","#c4a882"] },
  { id:4,  name:"Sage Comfort Wide-Leg",        cat:"wide-leg", price:260, old:300, img:"https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=600&q=80", tag:"Sale",      colors:["#8a9e7f","#F8F5F2","#3A2E2A"] },
  { id:5,  name:"Blush Satin Palazzo",          cat:"palazzo",  price:295, old:null,img:"https://images.unsplash.com/photo-1536766820879-059fec98ec0a?w=600&q=80", tag:"New",       colors:["#e8c4b8","#F8F5F2","#3A2E2A"] },
  { id:6,  name:"Espresso Tailored Trouser",    cat:"casual",   price:235, old:270, img:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80", tag:"Sale",      colors:["#3A2E2A","#6B4F3A","#F8F5F2"] },
  { id:7,  name:"Cream Palazzo Luxe",           cat:"palazzo",  price:310, old:null,img:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80", tag:"Premium",  colors:["#fdf6ee","#e0d5c8","#3A2E2A"] },
  { id:8,  name:"Dusk Wide-Leg Pants",          cat:"wide-leg", price:245, old:null,img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80", tag:null,        colors:["#8B7D8B","#3A2E2A","#F8F5F2"] },
  { id:9,  name:"Nude Linen Wide-Leg",          cat:"wide-leg", price:255, old:290, img:"https://images.unsplash.com/photo-1558171813-3b97e3d8b8b6?w=600&q=80", tag:"Sale",      colors:["#d4b896","#F8F5F2","#3A2E2A"] },
  { id:10, name:"Onyx Evening Trouser",         cat:"casual",   price:270, old:null,img:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80", tag:"New",       colors:["#1a1a1a","#3A2E2A","#8B7355"] },
  { id:11, name:"Warm Terracotta Palazzo",      cat:"palazzo",  price:285, old:null,img:"https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&q=80", tag:"Popular",  colors:["#c17a5a","#F8F5F2","#3A2E2A"] },
  { id:12, name:"Stone Grey Slim Trouser",      cat:"casual",   price:215, old:250, img:"https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80", tag:"Sale",      colors:["#9e9e9e","#F8F5F2","#3A2E2A"] },
  { id:13, name:"Pearl Flowy Wide-Leg",         cat:"wide-leg", price:265, old:null,img:"https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=600&q=80", tag:"New",       colors:["#F8F5F2","#e8e0d8","#3A2E2A"] },
  { id:14, name:"Caramel Drape Palazzo",        cat:"palazzo",  price:290, old:330, img:"https://images.unsplash.com/photo-1554412933-514a83d2f3cc?w=600&q=80", tag:"Sale",      colors:["#c9974f","#F8F5F2","#3A2E2A"] },
  { id:15, name:"Chocolate Pleated Trouser",    cat:"casual",   price:240, old:null,img:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=600&q=80", tag:"Popular",  colors:["#3A2E2A","#6B4F3A","#F8F5F2"] }
];

/* ════════════════════════
   CART STATE
════════════════════════ */
let cart = JSON.parse(localStorage.getItem('jw_cart') || '[]');

function saveCart() { localStorage.setItem('jw_cart', JSON.stringify(cart)); }

/* ════════════════════════
   BUILD PRODUCT CARD
════════════════════════ */
function buildCard(p) {
  const oldHtml  = p.old ? `<del>₵${p.old}</del> ` : '';
  const tagHtml  = p.tag ? `<span class="prod-tag">${p.tag}</span>` : '';
  const clrHtml  = p.colors.map((c,i)=>`<span class="clr${i===0?' on':''}" style="background:${c}" data-c="${c}" onclick="pickColor(this)"></span>`).join('');
  const szHtml   = ['S','M','L','XL'].map((s,i)=>`<button class="sz${i===0?' on':''}" onclick="pickSize(this)">${s}</button>`).join('');
  return `
  <div class="prod-card" data-aos="fade-up" data-cat="${p.cat}">
    <div class="prod-img">
      ${tagHtml}
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
    </div>
    <div class="prod-body">
      <h3>${p.name}</h3>
      <div class="prod-price">${oldHtml}₵${p.price}</div>
      <div class="sizes">${szHtml}</div>
      <div class="colors">${clrHtml}</div>
      <div class="prod-actions">
        <button class="btn-cart" onclick="addToCart(${p.id},this)">Add to Cart</button>
        <button class="btn-wa-quick" onclick="quickWA(${p.id},this)" title="Order on WhatsApp"><i class="fab fa-whatsapp"></i></button>
      </div>
    </div>
  </div>`;
}

function pickSize(btn) {
  btn.closest('.sizes').querySelectorAll('.sz').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
}
function pickColor(dot) {
  dot.closest('.colors').querySelectorAll('.clr').forEach(d=>d.classList.remove('on'));
  dot.classList.add('on');
}

/* ════════════════════════
   RENDER GRIDS
════════════════════════ */
function renderHome() {
  const el = document.getElementById('homeGrid');
  if (!el) return;
  el.innerHTML = products.slice(0,6).map(buildCard).join('');
  AOS && AOS.refresh();
}

function renderCollection(filter='all') {
  const el = document.getElementById('collGrid');
  if (!el) return;
  const list = filter==='all' ? products : products.filter(p=>p.cat===filter);
  el.innerHTML = list.map(buildCard).join('');
  AOS && AOS.refresh();
}

/* ════════════════════════
   CART ACTIONS
════════════════════════ */
function addToCart(id, btn) {
  const p = products.find(x=>x.id===id);
  if (!p) return;
  const card   = btn.closest('.prod-card');
  const size   = card.querySelector('.sz.on')?.textContent || 'M';
  const color  = card.querySelector('.clr.on')?.dataset.c  || p.colors[0];
  const exists = cart.find(x=>x.id===id && x.size===size && x.color===color);
  exists ? exists.qty++ : cart.push({id,name:p.name,price:p.price,img:p.img,size,color,qty:1});
  saveCart(); renderCartUI(); openCart();
  btn.textContent = '✓ Added!';
  btn.style.cssText = 'background:#4caf50;border-color:#4caf50;color:#fff';
  setTimeout(()=>{ btn.textContent='Add to Cart'; btn.style.cssText=''; }, 1800);
}

function removeFromCart(i) {
  cart.splice(i,1); saveCart(); renderCartUI();
}

function renderCartUI() {
  const body   = document.getElementById('cartBody');
  const foot   = document.getElementById('cartFoot');
  const total  = document.getElementById('cartTotal');
  const badge  = document.getElementById('cartCount');

  const qty = cart.reduce((s,x)=>s+x.qty, 0);
  if (badge) { badge.textContent = qty; badge.classList.toggle('show', qty>0); }
  if (!body) return;

  if (!cart.length) {
    body.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
    if (foot) foot.style.display = 'none';
    return;
  }

  let html = ''; let sum = 0;
  cart.forEach((item,i)=>{
    sum += item.price * item.qty;
    html += `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" />
        <div>
          <h4>${item.name}</h4>
          <p>Size: ${item.size} &nbsp;·&nbsp; Qty: ${item.qty}</p>
          <button class="cart-item-rm" onclick="removeFromCart(${i})">Remove</button>
        </div>
        <div class="cart-item-price">₵${(item.price*item.qty).toFixed(2)}</div>
      </div>`;
  });
  body.innerHTML = html;
  if (total) total.textContent = `₵${sum.toFixed(2)}`;
  if (foot)  foot.style.display = 'block';
}

function openCart() {
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartBg')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.getElementById('cartBg')?.classList.remove('active');
  document.body.style.overflow = '';
}

/* ════════════════════════
   WHATSAPP ORDER
════════════════════════ */
function sendWhatsApp() {
  const name  = document.getElementById('f-name')?.value.trim();
  const phone = document.getElementById('f-phone')?.value.trim();
  const loc   = document.getElementById('f-location')?.value.trim();
  const addr  = document.getElementById('f-address')?.value.trim();

  if (!name || !phone || !loc || !addr) {
    alert('Please fill in all your details (Name, Phone, Location, Address) before ordering.');
    return;
  }
  if (!cart.length) { alert('Your cart is empty.'); return; }

  let msg = `Hello Joe Wears! 🛍️\n\nI'd like to place an order:\n\n`;
  cart.forEach((item,i)=>{
    msg += `${i+1}. ${item.name}\n   Size: ${item.size} | Qty: ${item.qty} | ₵${(item.price*item.qty).toFixed(2)}\n`;
  });
  const total = cart.reduce((s,x)=>s+x.price*x.qty, 0);
  msg += `\nTotal: ₵${total.toFixed(2)}\n`;
  msg += `\n📋 My Details:\nName: ${name}\nPhone: ${phone}\nLocation: ${loc}\nAddress: ${addr}\n`;
  msg += `\nPlease confirm my order. Thank you! 🙏`;
  window.open(`https://wa.me/233558136631?text=${encodeURIComponent(msg)}`, '_blank');
}

function quickWA(id, btn) {
  const p    = products.find(x=>x.id===id);
  const card = btn.closest('.prod-card');
  const size = card.querySelector('.sz.on')?.textContent || 'M';
  const msg  = `Hello Joe Wears! 👗\n\nI'm interested in:\n${p.name}\nSize: ${size}\nPrice: ₵${p.price}\n\nPlease help me with this order. Thank you!`;
  window.open(`https://wa.me/233558136631?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ════════════════════════
   HERO SLIDER
════════════════════════ */
let slideIdx = 0, slideTimer;

function buildDots() {
  const wrap = document.getElementById('slideDots');
  if (!wrap) return;
  document.querySelectorAll('.slide').forEach((_,i)=>{
    const b = document.createElement('button');
    b.className = `sdot${i===0?' active':''}`;
    b.setAttribute('aria-label', `Slide ${i+1}`);
    b.onclick = ()=>goSlide(i);
    wrap.appendChild(b);
  });
}

function goSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.sdot');
  if (!slides.length) return;
  slides[slideIdx].classList.remove('active');
  dots[slideIdx]?.classList.remove('active');
  slideIdx = (n + slides.length) % slides.length;
  slides[slideIdx].classList.add('active');
  dots[slideIdx]?.classList.add('active');
}

function moveSlide(dir) {
  clearInterval(slideTimer);
  goSlide(slideIdx + dir);
  slideTimer = setInterval(()=>goSlide(slideIdx+1), 5000);
}

function startSlider() {
  if (!document.querySelector('.slide')) return;
  buildDots();
  slideTimer = setInterval(()=>goSlide(slideIdx+1), 5000);
}

/* ════════════════════════
   COUNTDOWN
════════════════════════ */
function startCountdown() {
  const target = new Date();
  target.setDate(target.getDate() + 3);
  target.setHours(23,59,59,0);

  const d = document.getElementById('cd-d');
  const h = document.getElementById('cd-h');
  const m = document.getElementById('cd-m');
  const s = document.getElementById('cd-s');
  if (!d) return;

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) { d.textContent = h.textContent = m.textContent = s.textContent = '00'; return; }
    d.textContent = String(Math.floor(diff/86400000)).padStart(2,'0');
    h.textContent = String(Math.floor(diff%86400000/3600000)).padStart(2,'0');
    m.textContent = String(Math.floor(diff%3600000/60000)).padStart(2,'0');
    s.textContent = String(Math.floor(diff%60000/1000)).padStart(2,'0');
  }
  tick(); setInterval(tick, 1000);
}

/* ════════════════════════
   POPUP NOTIFICATIONS
════════════════════════ */
const notifs = [
  {name:'Adwoa',   city:'Accra',      item:'Ivory Breeze Wide-Leg',    t:'2 mins ago'},
  {name:'Efua',    city:'Kumasi',     item:'Midnight Flow Palazzo',    t:'5 mins ago'},
  {name:'Akosua',  city:'Takoradi',   item:'Blush Satin Palazzo',      t:'8 mins ago'},
  {name:'Abena',   city:'Tema',       item:'Cocoa Linen Trouser',      t:'3 mins ago'},
  {name:'Ama',     city:'Cape Coast', item:'Sage Comfort Wide-Leg',    t:'12 mins ago'},
  {name:'Yaa',     city:'Sunyani',    item:'Pearl Flowy Wide-Leg',     t:'6 mins ago'},
  {name:'Adjoa',   city:'Bolgatanga', item:'Cream Palazzo Luxe',       t:'1 min ago'},
  {name:'Maame',   city:'Koforidua', item:'Espresso Tailored Trouser', t:'9 mins ago'},
  {name:'Serwa',   city:'Accra',      item:'Warm Terracotta Palazzo',  t:'4 mins ago'},
  {name:'Naana',   city:'Tamale',     item:'Caramel Drape Palazzo',    t:'15 mins ago'}
];
let nIdx = 0;

function showNotif() {
  const el  = document.getElementById('popup');
  const msg = document.getElementById('popup-msg');
  if (!el || !msg) return;
  const n = notifs[nIdx % notifs.length];
  msg.textContent = `${n.name} from ${n.city} ordered "${n.item}" · ${n.t}`;
  el.classList.remove('hidden');
  setTimeout(()=>el.classList.add('hidden'), 5500);
  nIdx++;
}

function startNotifs() {
  setTimeout(()=>{ showNotif(); setInterval(showNotif, 18000); }, 4500);
}

/* ════════════════════════
   HAMBURGER MENU
════════════════════════ */
function openMenu() {
  const links = document.getElementById('navLinks');
  const ham   = document.getElementById('ham');
  const bg    = document.getElementById('mobBg');
  if (!links || !ham) return;
  links.classList.add('open');
  ham.classList.add('open');
  ham.setAttribute('aria-expanded','true');
  if (bg) {
    bg.classList.add('show');
    requestAnimationFrame(()=>bg.classList.add('active'));
  }
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  const links = document.getElementById('navLinks');
  const ham   = document.getElementById('ham');
  const bg    = document.getElementById('mobBg');
  links?.classList.remove('open');
  ham?.classList.remove('open');
  ham?.setAttribute('aria-expanded','false');
  document.body.style.overflow = '';
  if (bg) {
    bg.classList.remove('active');
    setTimeout(()=>bg.classList.remove('show'), 360);
  }
}

function initHamburger() {
  const ham   = document.getElementById('ham');
  const links = document.getElementById('navLinks');
  const bg    = document.getElementById('mobBg');
  if (!ham || !links) return;

  // toggle open/close
  ham.addEventListener('click', e => {
    e.stopPropagation();
    links.classList.contains('open') ? closeMenu() : openMenu();
  });

  // close on any nav link click
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // close on backdrop tap
  bg?.addEventListener('click', closeMenu);

  // close on Escape
  document.addEventListener('keydown', e => { if (e.key==='Escape') closeMenu(); });

  // close on resize to desktop
  window.addEventListener('resize', ()=>{ if (window.innerWidth>768) closeMenu(); });
}

/* ════════════════════════
   FILTER TABS
════════════════════════ */
function initFilters() {
  document.querySelectorAll('.ftab').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.ftab').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderCollection(btn.dataset.f);
    });
  });
}

/* ════════════════════════
   NAVBAR SCROLL
════════════════════════ */
function initScroll() {
  const nav = document.getElementById('navbar');
  const top = document.getElementById('topBtn');
  window.addEventListener('scroll', ()=>{
    nav?.classList.toggle('scrolled', window.scrollY > 30);
    top?.classList.toggle('show', window.scrollY > 400);
  }, { passive:true });
  top?.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
}

/* ════════════════════════
   CART EVENTS
════════════════════════ */
function initCart() {
  document.getElementById('cartToggle')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartBg')?.addEventListener('click', closeCart);
}

/* ════════════════════════
   FAQ
════════════════════════ */
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const ans    = btn.nextElementSibling;
      const isOpen = ans.classList.contains('open');
      document.querySelectorAll('.faq-a').forEach(a=>a.classList.remove('open'));
      document.querySelectorAll('.faq-q').forEach(b=>b.classList.remove('open'));
      if (!isOpen) { ans.classList.add('open'); btn.classList.add('open'); }
    });
  });
}

/* ════════════════════════
   SPINNER
════════════════════════ */
function initSpinner() {
  const sp = document.getElementById('spinner');
  if (!sp) return;
  setTimeout(()=>sp.classList.add('hide'), 3000);
}

/* ════════════════════════
   BOOT
════════════════════════ */
document.addEventListener('DOMContentLoaded', ()=>{
  if (typeof AOS !== 'undefined') AOS.init({ duration:700, once:true, offset:60, easing:'ease-out-cubic' });
  initSpinner();
  initHamburger();
  initScroll();
  initCart();
  initFAQ();
  renderCartUI();
  startSlider();
  startCountdown();
  startNotifs();
  renderHome();
  renderCollection();
  initFilters();
});