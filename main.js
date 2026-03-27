/* =============================================
   JOE WEARS — app.js
   ============================================= */

// ─── INIT AOS ───
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-cubic' });
  }
});

// ─── PRODUCTS DATA ───
const products = [
  {
    id: 1, name: "Ivory Breeze Wide-Leg", category: "wide-leg",
    price: 250, oldPrice: 310,
    image: "https://i.pinimg.com/1200x/26/3e/02/263e02d50ea82a166cb0946f942b2d00.jpg",
    tag: "Bestseller",
    colors: ["#F8F5F2","#3A2E2A","#8B7355"],
    sizes: ["S","M","L","XL"]
  },
  {
    id: 2, name: "Midnight Flow Palazzo", category: "palazzo",
    price: 280, oldPrice: null,
    image: "https://i.pinimg.com/1200x/aa/30/71/aa3071d1a009951c01040664a5748220.jpg",
    tag: "New",
    colors: ["#1a1a1a","#3A2E2A","#5C4B3A"],
    sizes: ["S","M","L","XL"]
  },
  {
    id: 3, name: "Cocoa Linen Trouser", category: "casual",
    price: 220, oldPrice: null,
    image: "https://i.pinimg.com/1200x/25/29/a6/2529a6004767d4c3cb578c94590e3428.jpg",
    tag: null,
    colors: ["#8B7355","#F8F5F2","#c4a882"],
    sizes: ["S","M","L","XL"]
  },
  {
    id: 4, name: "Sage Comfort Wide-Leg", category: "wide-leg",
    price: 260, oldPrice: 300,
    image: "https://i.pinimg.com/1200x/bc/56/42/bc564271a8df6087dac54d68063e6af6.jpg",
    tag: "Sale",
    colors: ["#8a9e7f","#F8F5F2","#3A2E2A"],
    sizes: ["S","M","L","XL"]
  },
  {
    id: 5, name: "Blush Satin Palazzo", category: "palazzo",
    price: 295, oldPrice: null,
    image: "https://i.pinimg.com/1200x/09/3b/2e/093b2ea4fdd57b6473ead44502595785.jpg",
    tag: "New",
    colors: ["#e8c4b8","#F8F5F2","#3A2E2A"],
    sizes: ["S","M","L","XL"]
  },
  {
    id: 6, name: "Espresso Tailored Trouser", category: "casual",
    price: 235, oldPrice: 270,
    image: "https://i.pinimg.com/1200x/d1/76/29/d17629d0c26906c6c1b224e3e7954e66.jpg",
    tag: "Sale",
    colors: ["#3A2E2A","#6B4F3A","#F8F5F2"],
    sizes: ["S","M","L","XL"]
  },
  {
    id: 7, name: "Cream Palazzo Luxe", category: "palazzo",
    price: 310, oldPrice: null,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    tag: "Premium",
    colors: ["#fdf6ee","#e0d5c8","#3A2E2A"],
    sizes: ["S","M","L","XL"]
  },
  {
    id: 8, name: "Dusk Wide-Leg Pants", category: "wide-leg",
    price: 245, oldPrice: null,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    tag: null,
    colors: ["#8B7D8B","#3A2E2A","#F8F5F2"],
    sizes: ["S","M","L","XL"]
  },
  {
    id: 9, name: "Nude Linen Wide-Leg", category: "wide-leg",
    price: 255, oldPrice: 290,
    image: "https://images.unsplash.com/photo-1558171813-3b97e3d8b8b6?w=600&q=80",
    tag: "Sale",
    colors: ["#d4b896","#F8F5F2","#3A2E2A"],
    sizes: ["S","M","L","XL"]
  },
  {
    id: 10, name: "Onyx Evening Trouser", category: "casual",
    price: 270, oldPrice: null,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    tag: "New",
    colors: ["#1a1a1a","#3A2E2A","#8B7355"],
    sizes: ["S","M","L","XL"]
  },
  {
    id: 11, name: "Warm Terracotta Palazzo", category: "palazzo",
    price: 285, oldPrice: null,
    image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&q=80",
    tag: "Popular",
    colors: ["#c17a5a","#F8F5F2","#3A2E2A"],
    sizes: ["S","M","L","XL"]
  },
  {
    id: 12, name: "Stone Grey Slim Trouser", category: "casual",
    price: 215, oldPrice: 250,
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80",
    tag: "Sale",
    colors: ["#9e9e9e","#F8F5F2","#3A2E2A"],
    sizes: ["S","M","L","XL"]
  },
  {
    id: 13, name: "Pearl Flowy Wide-Leg", category: "wide-leg",
    price: 265, oldPrice: null,
    image: "https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=600&q=80",
    tag: "New",
    colors: ["#F8F5F2","#e8e0d8","#3A2E2A"],
    sizes: ["S","M","L","XL"]
  },
  {
    id: 14, name: "Caramel Drape Palazzo", category: "palazzo",
    price: 290, oldPrice: 330,
    image: "https://images.unsplash.com/photo-1554412933-514a83d2f3cc?w=600&q=80",
    tag: "Sale",
    colors: ["#c9974f","#F8F5F2","#3A2E2A"],
    sizes: ["S","M","L","XL"]
  },
  {
    id: 15, name: "Chocolate Pleated Trouser", category: "casual",
    price: 240, oldPrice: null,
    image: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=600&q=80",
    tag: "Popular",
    colors: ["#3A2E2A","#6B4F3A","#F8F5F2"],
    sizes: ["S","M","L","XL"]
  }
];

// ─── CART STATE ───
let cart = JSON.parse(localStorage.getItem('joewearsCart') || '[]');

function saveCart() {
  localStorage.setItem('joewearsCart', JSON.stringify(cart));
}

// ─── RENDER PRODUCT CARD ───
function renderCard(p, animated = true) {
  const delay = animated ? `data-aos-delay="${(p.id % 4) * 80}"` : '';
  const oldPriceHtml = p.oldPrice ? `<del>₵${p.oldPrice}</del> ` : '';
  const tagHtml = p.tag ? `<span class="product-tag">${p.tag}</span>` : '';
  const colorDots = p.colors.map((c, i) =>
    `<span class="color-dot ${i===0?'selected':''}" style="background:${c}" data-color="${c}" onclick="selectColor(this)"></span>`
  ).join('');
  const sizeBtns = p.sizes.map((s, i) =>
    `<button class="size-btn ${i===0?'selected':''}" onclick="selectSize(this)">${s}</button>`
  ).join('');
  return `
    <div class="product-card" data-aos="fade-up" ${delay} data-category="${p.category}">
      <div class="product-img">
        ${tagHtml}
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <div class="product-price">${oldPriceHtml}₵${p.price}</div>
        <div class="product-sizes">${sizeBtns}</div>
        <div class="product-colors">${colorDots}</div>
        <div class="product-actions">
          <button class="btn-cart" onclick="addToCart(${p.id}, this)">Add to Cart</button>
          <button class="btn-wa" onclick="quickWhatsApp(${p.id}, this)" title="Order on WhatsApp">
            <i class="fab fa-whatsapp"></i>
          </button>
        </div>
      </div>
    </div>`;
}

// ─── RENDER HOME (6 items) ───
function renderHomeProducts() {
  const grid = document.getElementById('homeProducts');
  if (!grid) return;
  const preview = products.slice(0, 6);
  grid.innerHTML = preview.map(p => renderCard(p)).join('');
  if (typeof AOS !== 'undefined') AOS.refresh();
}

// ─── RENDER COLLECTION (all items) ───
function renderCollection(filter = 'all') {
  const grid = document.getElementById('collectionGrid');
  if (!grid) return;
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(p => renderCard(p)).join('');
  if (typeof AOS !== 'undefined') AOS.refresh();
}

// ─── SIZE SELECT ───
function selectSize(btn) {
  const parent = btn.closest('.product-sizes');
  parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

// ─── COLOR SELECT ───
function selectColor(dot) {
  const parent = dot.closest('.product-colors');
  parent.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
  dot.classList.add('selected');
}

// ─── ADD TO CART ───
function addToCart(productId, btn) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  const card = btn.closest('.product-card');
  const selectedSize = card.querySelector('.size-btn.selected')?.textContent || 'M';
  const selectedColor = card.querySelector('.color-dot.selected')?.dataset.color || p.colors[0];
  const existing = cart.find(x => x.id === productId && x.size === selectedSize && x.color === selectedColor);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, name: p.name, price: p.price, image: p.image, size: selectedSize, color: selectedColor, qty: 1 });
  }
  saveCart();
  updateCartUI();
  openCart();
  btn.textContent = '✓ Added!';
  btn.style.background = '#4caf50';
  btn.style.borderColor = '#4caf50';
  btn.style.color = '#fff';
  setTimeout(() => {
    btn.textContent = 'Add to Cart';
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.style.color = '';
  }, 1800);
}

// ─── REMOVE FROM CART ───
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

// ─── UPDATE CART UI ───
function updateCartUI() {
  const totalQty = cart.reduce((s, x) => s + x.qty, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = totalQty;
    badge.classList.toggle('visible', totalQty > 0);
  }
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');
  if (!itemsEl) return;
  if (cart.length === 0) {
    itemsEl.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }
  let html = '';
  let total = 0;
  cart.forEach((item, i) => {
    total += item.price * item.qty;
    html += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>Size: ${item.size} | Qty: ${item.qty}</p>
          <button class="cart-item-remove" onclick="removeFromCart(${i})">Remove</button>
        </div>
        <div class="cart-item-price">₵${(item.price * item.qty).toFixed(2)}</div>
      </div>`;
  });
  itemsEl.innerHTML = html;
  if (totalEl) totalEl.textContent = `₵${total.toFixed(2)}`;
  if (footerEl) footerEl.style.display = 'block';
}

// ─── CART OPEN/CLOSE ───
function openCart() {
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

// ─── SEND TO WHATSAPP ───
function sendToWhatsApp() {
  const name = document.getElementById('custName')?.value.trim();
  const phone = document.getElementById('custPhone')?.value.trim();
  const location = document.getElementById('custLocation')?.value.trim();
  const address = document.getElementById('custAddress')?.value.trim();
  if (!name || !phone || !location || !address) {
    alert('Please fill in all your details (Name, Phone, Location, Address) before ordering.');
    return;
  }
  if (cart.length === 0) { alert('Your cart is empty.'); return; }
  let msg = `Hello Joe Wears! 🛍️\n\nI'd like to place an order:\n\n`;
  cart.forEach((item, i) => {
    msg += `${i+1}. ${item.name}\n   Size: ${item.size} | Qty: ${item.qty} | ₵${(item.price*item.qty).toFixed(2)}\n`;
  });
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  msg += `\nTotal: ₵${total.toFixed(2)}\n`;
  msg += `\n📋 Customer Details:\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\nAddress: ${address}\n`;
  msg += `\nPlease confirm my order. Thank you!`;
  const waNumber = '233558136631';
  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ─── QUICK WHATSAPP (per product) ───
function quickWhatsApp(productId, btn) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  const card = btn.closest('.product-card');
  const size = card.querySelector('.size-btn.selected')?.textContent || 'M';
  const msg = `Hello Joe Wears! 👗\n\nI'm interested in:\n${p.name}\nSize: ${size}\nPrice: ₵${p.price}\n\nPlease assist me with this order. Thank you!`;
  window.open(`https://wa.me/233558136631?text=${encodeURIComponent(msg)}`, '_blank');
}

// ─── HERO SLIDER ───
let currentSlide = 0;
let slideInterval;
const slides = () => document.querySelectorAll('.hero-slide');
const dotsContainer = () => document.getElementById('heroDots');

function buildDots() {
  const dc = dotsContainer();
  if (!dc) return;
  slides().forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = `hero-dot${i === 0 ? ' active' : ''}`;
    btn.setAttribute('aria-label', `Slide ${i+1}`);
    btn.onclick = () => goToSlide(i);
    dc.appendChild(btn);
  });
}

function goToSlide(n) {
  const sl = slides();
  const dc = dotsContainer();
  if (!sl.length) return;
  sl[currentSlide].classList.remove('active');
  dc?.querySelectorAll('.hero-dot')[currentSlide]?.classList.remove('active');
  currentSlide = (n + sl.length) % sl.length;
  sl[currentSlide].classList.add('active');
  dc?.querySelectorAll('.hero-dot')[currentSlide]?.classList.add('active');
}

function changeSlide(dir) {
  clearInterval(slideInterval);
  goToSlide(currentSlide + dir);
  slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

function startSlider() {
  if (!slides().length) return;
  buildDots();
  slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

// ─── COUNTDOWN ───
function startCountdown() {
  const target = new Date();
  target.setDate(target.getDate() + 3);
  target.setHours(23, 59, 59, 0);
  const cdDays = document.getElementById('cd-days');
  const cdHours = document.getElementById('cd-hours');
  const cdMins = document.getElementById('cd-mins');
  const cdSecs = document.getElementById('cd-secs');
  if (!cdDays) return;
  function tick() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) { cdDays.textContent = cdHours.textContent = cdMins.textContent = cdSecs.textContent = '00'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    cdDays.textContent = String(d).padStart(2, '0');
    cdHours.textContent = String(h).padStart(2, '0');
    cdMins.textContent = String(m).padStart(2, '0');
    cdSecs.textContent = String(s).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
}

// ─── POPUP NOTIFICATIONS ───
const ghanaianNotifs = [
  { name: "Adwoa", city: "Accra", item: "Ivory Breeze Wide-Leg", time: "2 mins" },
  { name: "Efua", city: "Kumasi", item: "Midnight Flow Palazzo", time: "5 mins" },
  { name: "Akosua", city: "Takoradi", item: "Blush Satin Palazzo", time: "8 mins" },
  { name: "Abena", city: "Tema", item: "Cocoa Linen Trouser", time: "3 mins" },
  { name: "Ama", city: "Cape Coast", item: "Sage Comfort Wide-Leg", time: "12 mins" },
  { name: "Yaa", city: "Sunyani", item: "Pearl Flowy Wide-Leg", time: "6 mins" },
  { name: "Adjoa", city: "Bolgatanga", item: "Cream Palazzo Luxe", time: "1 min" },
  { name: "Maame", city: "Koforidua", item: "Espresso Tailored Trouser", time: "9 mins" },
  { name: "Serwa", city: "Accra", item: "Warm Terracotta Palazzo", time: "4 mins" },
  { name: "Naana", city: "Tamale", item: "Caramel Drape Palazzo", time: "15 mins" }
];
let notifIndex = 0;

function showNextNotif() {
  const n = ghanaianNotifs[notifIndex % ghanaianNotifs.length];
  const el = document.getElementById('popup-notification');
  const txt = document.getElementById('popup-text');
  if (!el || !txt) return;
  txt.textContent = `${n.name} from ${n.city} ordered the "${n.item}" ${n.time} ago`;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 5000);
  notifIndex++;
}

function startNotifications() {
  setTimeout(() => {
    showNextNotif();
    setInterval(showNextNotif, 18000);
  }, 4000);
}

// ─── HAMBURGER MENU ───
function closeMenu() {
  document.getElementById('navLinks')?.classList.remove('open');
  document.getElementById('hamburger')?.classList.remove('open');
  document.body.style.overflow = '';
}

function initHamburger() {
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!ham || !links) return;
  ham.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    ham.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

// ─── NAVBAR SCROLL ───
function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

// ─── BACK TO TOP ───
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ─── FAQ ───
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = answer.classList.contains('open');
      document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
      document.querySelectorAll('.faq-q').forEach(b => b.classList.remove('open'));
      if (!isOpen) {
        answer.classList.add('open');
        btn.classList.add('open');
      }
    });
  });
}

// ─── FILTER TABS ───
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCollection(btn.dataset.filter);
    });
  });
}

// ─── CART EVENTS ───
function initCartEvents() {
  document.getElementById('cartToggle')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
}

// ─── SPINNER ───
function handleSpinner() {
  const spinner = document.getElementById('spinner');
  if (!spinner) return;
  setTimeout(() => {
    spinner.style.opacity = '0';
    spinner.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      spinner.style.display = 'none';
    }, 500);
  }, 3000);
}

// ─── BOOT ───
document.addEventListener('DOMContentLoaded', () => {
  handleSpinner();
  initHamburger();
  initNavbarScroll();
  initBackToTop();
  initFAQ();
  initCartEvents();
  updateCartUI();
  startSlider();
  startCountdown();
  startNotifications();
  renderHomeProducts();
  renderCollection();
  initFilters();
});