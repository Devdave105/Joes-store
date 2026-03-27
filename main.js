/* =====================================================
   JOE'S STORE — MAIN JAVASCRIPT
   ===================================================== */

'use strict';

// ── PRODUCT DATA ──────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: 'Ivory Linen Wide-Leg Trouser',
    category: 'wide-leg',
    price: 180,
    oldPrice: 220,
    badge: 'Sale',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4a3d?w=600&q=80',
    colors: ['#f5f5dc', '#2d5a3d', '#1a1816'],
    sizes: ['S','M','L','XL'],
    description: 'Fluid linen wide-leg silhouette in cream. Perfect for casual elegance.'
  },
  {
    id: 2,
    name: 'Forest Green Palazzo Pant',
    category: 'palazzo',
    price: 210,
    oldPrice: null,
    badge: 'New',
    badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80',
    colors: ['#2d5a3d', '#1a1816', '#8B7355'],
    sizes: ['S','M','L','XL'],
    description: 'Luxurious deep green palazzo pants with flowing fabric and elegant drape.'
  },
  {
    id: 3,
    name: 'Beige Tailored Casual Trouser',
    category: 'casual',
    price: 155,
    oldPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80',
    colors: ['#f5ede0', '#d9c9a8', '#6b6560'],
    sizes: ['S','M','L','XL'],
    description: 'Classic beige tailored trouser — effortless style for office or weekend.'
  },
  {
    id: 4,
    name: 'Charcoal Wide-Leg Crepe Pant',
    category: 'wide-leg',
    price: 195,
    oldPrice: 240,
    badge: 'Sale',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=600&q=80',
    colors: ['#3d3d3d', '#2d5a3d', '#f5ede0'],
    sizes: ['S','M','L','XL'],
    description: 'Sophisticated charcoal crepe wide-leg trouser. A wardrobe essential.'
  },
  {
    id: 5,
    name: 'Printed Floral Palazzo Pant',
    category: 'palazzo',
    price: 230,
    oldPrice: null,
    badge: 'New',
    badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1616095531444-d4b6c4b7a6e1?w=600&q=80',
    colors: ['#e8a87c', '#2d5a3d', '#fff'],
    sizes: ['S','M','L','XL'],
    description: 'Vibrant floral palazzo pant — bring colour and joy to any occasion.'
  },
  {
    id: 6,
    name: 'White Wide-Leg Linen Pant',
    category: 'wide-leg',
    price: 175,
    oldPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=600&q=80',
    colors: ['#ffffff', '#f5ede0', '#2d5a3d'],
    sizes: ['S','M','L','XL'],
    description: 'Pure white linen wide-leg pant. Breathable, elegant, and timeless.'
  },
  {
    id: 7,
    name: 'Terracotta Casual Lounge Trouser',
    category: 'casual',
    price: 145,
    oldPrice: 170,
    badge: 'Sale',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80',
    colors: ['#c17754', '#2d5a3d', '#1a1816'],
    sizes: ['S','M','L','XL'],
    description: 'Relaxed terracotta lounge trouser — comfort meets sophisticated style.'
  },
  {
    id: 8,
    name: 'Sage Green Palazzo Maxi Pant',
    category: 'palazzo',
    price: 250,
    oldPrice: null,
    badge: 'New',
    badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&q=80',
    colors: ['#8fbc8f', '#2d5a3d', '#f5ede0'],
    sizes: ['S','M','L','XL'],
    description: 'Flowy sage green palazzo maxi — an effortless statement piece.'
  },
  {
    id: 9,
    name: 'Black High-Waist Wide-Leg Pant',
    category: 'wide-leg',
    price: 200,
    oldPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=600&q=80',
    colors: ['#1a1816', '#2d5a3d', '#f5ede0'],
    sizes: ['S','M','L','XL'],
    description: 'The perfect black high-waist wide-leg pant. Effortlessly versatile.'
  },
  {
    id: 10,
    name: 'Dusty Rose Casual Trouser',
    category: 'casual',
    price: 160,
    oldPrice: null,
    badge: 'New',
    badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
    colors: ['#e8a0a0', '#f5ede0', '#2d5a3d'],
    sizes: ['S','M','L','XL'],
    description: 'Soft dusty rose casual trouser — romantic, modern, and comfortable.'
  },
  {
    id: 11,
    name: 'Navy Blue Palazzo Pant',
    category: 'palazzo',
    price: 220,
    oldPrice: 260,
    badge: 'Sale',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    colors: ['#1a3a6b', '#f5ede0', '#2d5a3d'],
    sizes: ['S','M','L','XL'],
    description: 'Deep navy palazzo pant with fluid drape and luxurious finish.'
  },
  {
    id: 12,
    name: 'Olive Green Wide-Leg Trouser',
    category: 'wide-leg',
    price: 185,
    oldPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    colors: ['#6b7c45', '#2d5a3d', '#1a1816'],
    sizes: ['S','M','L','XL'],
    description: 'Earthy olive wide-leg trouser. A versatile everyday essential.'
  },
  {
    id: 13,
    name: 'Camel Tailored Wide-Leg Pant',
    category: 'wide-leg',
    price: 215,
    oldPrice: null,
    badge: 'New',
    badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
    colors: ['#c19a6b', '#f5ede0', '#2d5a3d'],
    sizes: ['S','M','L','XL'],
    description: 'Camel tailored wide-leg pant — a luxury wardrobe staple.'
  },
  {
    id: 14,
    name: 'Burgundy Satin Palazzo Pant',
    category: 'palazzo',
    price: 265,
    oldPrice: 310,
    badge: 'Sale',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
    colors: ['#722f37', '#1a1816', '#f5ede0'],
    sizes: ['S','M','L','XL'],
    description: 'Lustrous burgundy satin palazzo — pure elegance for evening wear.'
  },
  {
    id: 15,
    name: 'Striped Casual Linen Trouser',
    category: 'casual',
    price: 150,
    oldPrice: null,
    badge: 'New',
    badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
    colors: ['#f5ede0', '#1a1816', '#2d5a3d'],
    sizes: ['S','M','L','XL'],
    description: 'Playful striped linen trouser. Easy, breezy style for every occasion.'
  }
];

// ── CART STATE ────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('joesCart')) || [];

// ── DOM READY ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initAOS();
  initNavbar();
  initHamburger();
  initSmoothScroll();
  initHeroSlider();
  initCart();
  initPopupNotifications();
  initBackToTop();
  initFAQ();
  initContactForm();
  initCountdown();
  renderProducts();
  initFilterSort();
  document.body.classList.add('page-transition');
});

// ── PRELOADER ─────────────────────────────────────────
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hidden'), 1800);
  });
  // Fallback
  setTimeout(() => preloader && preloader.classList.add('hidden'), 3000);
}

// ── AOS ───────────────────────────────────────────────
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60
    });
  }
}

// ── NAVBAR ────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active link
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));
}

// ── HAMBURGER ─────────────────────────────────────────
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });

  mobileNav.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.classList.remove('menu-open');
    }
  });
}

// ── SMOOTH SCROLL ─────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── HERO SLIDER ───────────────────────────────────────
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function start() {
    timer = setInterval(() => goTo(current + 1), 5500);
  }

  function reset() {
    clearInterval(timer);
    start();
  }

  document.querySelector('.hero-next')?.addEventListener('click', () => { goTo(current + 1); reset(); });
  document.querySelector('.hero-prev')?.addEventListener('click', () => { goTo(current - 1); reset(); });
  dots.forEach(dot => {
    dot.addEventListener('click', () => { goTo(+dot.dataset.slide); reset(); });
  });

  start();
}

// ── PRODUCT RENDERING ─────────────────────────────────
function renderProductCard(product, isPreview = false) {
  const waMsg = encodeURIComponent(
    `Hello Joe's Store! I'd like to order:\n*${product.name}*\nPrice: ₵${product.price}\n\nPlease help me with availability and delivery options. Thank you!`
  );
  const waLink = `https://wa.me/233558136631?text=${waMsg}`;

  const badgeHTML = product.badge
    ? `<span class="product-badge ${product.badgeType}">${product.badge}</span>`
    : '';

  const oldPriceHTML = product.oldPrice
    ? `<span class="product-price-old">₵${product.oldPrice}</span>`
    : '';

  const colorsHTML = product.colors.map((c, i) =>
    `<span class="color-dot ${i === 0 ? 'selected' : ''}" style="background:${c}" 
     title="Color ${i + 1}" data-color="${c}" aria-label="Color option"></span>`
  ).join('');

  const sizesHTML = product.sizes.map((s, i) =>
    `<button class="size-btn ${i === 0 ? 'selected' : ''}" data-size="${s}">${s}</button>`
  ).join('');

  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.category = product.category;
  card.dataset.price = product.price;
  card.dataset.name = product.name;
  card.dataset.aos = 'fade-up';

  card.innerHTML = `
    <div class="product-image-wrap">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      ${badgeHTML}
    </div>
    <div class="product-info">
      <div class="product-category">${product.category.replace('-', ' ')}</div>
      <h3 class="product-name">${product.name}</h3>
      <div class="product-price-row">
        <span class="product-price">₵${product.price}</span>
        ${oldPriceHTML}
      </div>
      ${isPreview ? '' : `
      <div class="product-sizes">${sizesHTML}</div>
      <div class="product-colors">${colorsHTML}</div>
      `}
      <div class="product-btns">
        <button class="btn-add-cart" data-id="${product.id}">
          <i class="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <a href="${waLink}" class="btn-whatsapp-product" target="_blank" rel="noopener">
          <i class="fab fa-whatsapp"></i> Order
        </a>
      </div>
    </div>
  `;

  // Size selection
  card.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      card.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // Color selection
  card.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      card.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
      dot.classList.add('selected');
    });
  });

  // Add to cart
  card.querySelector('.btn-add-cart').addEventListener('click', (e) => {
    e.preventDefault();
    const selectedSize = card.querySelector('.size-btn.selected')?.dataset.size || product.sizes[0];
    const selectedColor = card.querySelector('.color-dot.selected')?.dataset.color || product.colors[0];
    addToCart(product, selectedSize, selectedColor);
    animateCartBtn(e.currentTarget);
  });

  return card;
}

function renderProducts() {
  // Preview on homepage
  const previewGrid = document.getElementById('preview-grid');
  if (previewGrid) {
    const preview = PRODUCTS.slice(0, 4);
    preview.forEach((p, i) => {
      const card = renderProductCard(p, true);
      card.dataset.aosDelay = (i * 100).toString();
      previewGrid.appendChild(card);
    });
    if (typeof AOS !== 'undefined') AOS.refresh();
  }

  // Full collection
  const collectionGrid = document.getElementById('collection-grid');
  if (collectionGrid) {
    PRODUCTS.forEach((p, i) => {
      const card = renderProductCard(p, false);
      card.dataset.aosDelay = ((i % 4) * 80).toString();
      collectionGrid.appendChild(card);
    });
    if (typeof AOS !== 'undefined') AOS.refresh();
  }
}

// ── FILTER & SORT ─────────────────────────────────────
function initFilterSort() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const sortSelect = document.getElementById('sort-select');
  const grid = document.getElementById('collection-grid');
  if (!grid) return;

  let activeFilter = 'all';

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      applyFilterSort();
    });
  });

  sortSelect?.addEventListener('change', applyFilterSort);

  function applyFilterSort() {
    const cards = [...grid.querySelectorAll('.product-card')];
    const sortVal = sortSelect?.value || 'default';

    // Filter
    cards.forEach(card => {
      const cat = card.dataset.category;
      const show = activeFilter === 'all' || cat === activeFilter;
      card.style.display = show ? '' : 'none';
    });

    // Sort
    const visible = cards.filter(c => c.style.display !== 'none');
    visible.sort((a, b) => {
      if (sortVal === 'price-low') return +a.dataset.price - +b.dataset.price;
      if (sortVal === 'price-high') return +b.dataset.price - +a.dataset.price;
      if (sortVal === 'name') return a.dataset.name.localeCompare(b.dataset.name);
      return 0;
    });
    visible.forEach(card => grid.appendChild(card));
  }
}

// ── CART ──────────────────────────────────────────────
function initCart() {
  const cartBtn = document.getElementById('cart-btn');
  const closeCart = document.getElementById('close-cart');
  const cartOverlay = document.getElementById('cart-overlay');

  cartBtn?.addEventListener('click', openCart);
  closeCart?.addEventListener('click', closeCartFn);
  cartOverlay?.addEventListener('click', closeCartFn);

  updateCartUI();
}

function openCart() {
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('active');
  document.body.classList.add('cart-open');
  renderCartItems();
}

function closeCartFn() {
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('active');
  document.body.classList.remove('cart-open');
}

function addToCart(product, size, color) {
  const key = `${product.id}-${size}-${color}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key, id: product.id, name: product.name,
      price: product.price, image: product.image,
      size, color, qty: 1
    });
  }
  saveCart();
  updateCartUI();
  openCart();
  showToast(`${product.name} added to your bag!`);
}

function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(key);
    return;
  }
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() {
  localStorage.setItem('joesCart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const checkoutLink = document.getElementById('checkout-whatsapp');
  if (checkoutLink) {
    const msg = cart.map(i => `• ${i.name} (${i.size}) x${i.qty} = ₵${i.price * i.qty}`).join('\n');
    const waText = encodeURIComponent(
      `Hello Joe's Store! I'd like to checkout:\n\n${msg}\n\n*Total: ₵${total}*\n\nPlease confirm my order. Thank you!`
    );
    checkoutLink.href = `https://wa.me/233558136631?text=${waText}`;
  }
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total-price');
  if (!container) return;

  if (!cart.length) {
    container.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Your bag is empty.</p>
        <p>Add some beautiful pieces!</p>
      </div>`;
    if (totalEl) totalEl.textContent = '₵0.00';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">Size: ${item.size} &nbsp;|&nbsp; 
          <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${item.color};vertical-align:middle;"></span>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQty('${item.key}', -1)"><i class="fas fa-minus"></i></button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty('${item.key}', 1)"><i class="fas fa-plus"></i></button>
          <button class="btn-remove-item" onclick="removeFromCart('${item.key}')"><i class="fas fa-trash"></i></button>
        </div>
      </div>
      <div class="cart-item-price">₵${(item.price * item.qty).toFixed(2)}</div>
    </div>
  `).join('');

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  if (totalEl) totalEl.textContent = `₵${total.toFixed(2)}`;
}

function animateCartBtn(btn) {
  btn.style.transform = 'scale(0.92)';
  setTimeout(() => btn.style.transform = '', 200);
}

// ── TOAST ─────────────────────────────────────────────
function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed; bottom:20px; right:20px; 
    background:#2d5a3d; color:#f5ede0;
    padding:12px 20px; border-radius:8px;
    font-size:0.82rem; font-family:var(--font-sans);
    box-shadow:0 8px 24px rgba(45,90,61,0.3);
    z-index:3000; transform:translateY(10px);
    opacity:0; transition:all 0.3s ease;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ── POPUP NOTIFICATIONS ───────────────────────────────
function initPopupNotifications() {
  const container = document.getElementById('popup-container');
  if (!container) return;

  const notifications = [
    { name: 'Adwoa', location: 'Accra', item: 'Forest Green Palazzo Pant', time: '2 minutes ago' },
    { name: 'Efua', location: 'Kumasi', item: 'Ivory Wide-Leg Trouser', time: '5 minutes ago' },
    { name: 'Ama', location: 'Takoradi', item: 'Beige Casual Trouser', time: '8 minutes ago' },
    { name: 'Abena', location: 'Tema', item: 'Charcoal Wide-Leg Pant', time: '12 minutes ago' },
    { name: 'Akosua', location: 'Madina', item: 'Burgundy Palazzo Pant', time: '15 minutes ago' },
    { name: 'Yaa', location: 'Kasoa', item: 'Sage Green Palazzo', time: '3 minutes ago' },
    { name: 'Araba', location: 'Accra', item: 'Black Wide-Leg Pant', time: '7 minutes ago' },
    { name: 'Maame', location: 'Sunyani', item: 'Camel Wide-Leg Pant', time: '20 minutes ago' },
    { name: 'Nana Ama', location: 'Koforidua', item: 'Navy Palazzo Pant', time: '4 minutes ago' },
    { name: 'Adwoah', location: 'Tamale', item: 'Dusty Rose Trouser', time: '11 minutes ago' },
  ];

  let idx = 0;

  function showNext() {
    const notif = notifications[idx % notifications.length];
    idx++;

    const el = document.createElement('div');
    el.className = 'popup-notification';
    el.innerHTML = `
      <div class="popup-icon"><i class="fas fa-shopping-bag"></i></div>
      <div class="popup-text">
        <strong>${notif.name} from ${notif.location} just ordered</strong>
        <span>${notif.item} · ${notif.time}</span>
      </div>
    `;
    container.appendChild(el);

    setTimeout(() => {
      el.classList.add('fade-out');
      setTimeout(() => el.remove(), 300);
    }, 4500);
  }

  // Show first after 4 seconds, then every 8 seconds
  setTimeout(() => {
    showNext();
    setInterval(showNext, 8000);
  }, 4000);
}

// ── BACK TO TOP ───────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── FAQ ───────────────────────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    btn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ── CONTACT FORM ──────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cf-name')?.value || '';
    const phone = document.getElementById('cf-phone')?.value || '';
    const email = document.getElementById('cf-email')?.value || '';
    const msg = document.getElementById('cf-msg')?.value || '';

    if (!name || !msg) {
      showToast('Please fill in your name and message.');
      return;
    }

    const waText = encodeURIComponent(
      `Hello Joe's Store!\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage: ${msg}`
    );
    window.open(`https://wa.me/233558136631?text=${waText}`, '_blank');
    showToast('Message sent via WhatsApp!');
    form.reset();
  });
}

// ── COUNTDOWN TIMER ───────────────────────────────────
function initCountdown() {
  const daysEl = document.getElementById('c-days');
  const hoursEl = document.getElementById('c-hours');
  const minsEl = document.getElementById('c-mins');
  const secsEl = document.getElementById('c-secs');
  if (!daysEl) return;

  // Set end date 3 days from now
  const stored = localStorage.getItem('joesCountdownEnd');
  let endTime = stored ? +stored : Date.now() + 3 * 24 * 60 * 60 * 1000;
  if (!stored) localStorage.setItem('joesCountdownEnd', endTime);

  function pad(n) { return String(n).padStart(2, '0'); }

  function update() {
    const diff = endTime - Date.now();
    if (diff <= 0) {
      // Reset
      endTime = Date.now() + 3 * 24 * 60 * 60 * 1000;
      localStorage.setItem('joesCountdownEnd', endTime);
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minsEl.textContent = pad(mins);
    secsEl.textContent = pad(secs);
  }

  update();
  setInterval(update, 1000);
}