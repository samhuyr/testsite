// Contact Form Multi-select Functionality
document.addEventListener('DOMContentLoaded', function() {
  const multiselect = document.getElementById('services-multiselect');
  const selectedText = document.getElementById('selected-services-text');
  const servicesList = document.getElementById('services-list');
  const checkboxes = servicesList.querySelectorAll('input[type="checkbox"]');
  
  // Toggle dropdown
  multiselect.addEventListener('click', function(e) {
    e.stopPropagation();
    servicesList.classList.toggle('active');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function() {
    servicesList.classList.remove('active');
  });
  
  // Handle checkbox changes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      updateSelectedText();
    });
  });
  
  // Update selected text
  function updateSelectedText() {
    const selected = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
    
    if (selected.length === 0) {
      selectedText.textContent = 'Select Services';
    } else if (selected.length === 1) {
      selectedText.textContent = selected[0];
    } else {
      selectedText.textContent = `${selected.length} services selected`;
    }
  }
  
  // Form submission
  const contactForm = document.querySelector('.contact-form');
  const formError = document.getElementById('form-error');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const selectedServices = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
    
    if (!name || !email || !message || selectedServices.length === 0) {
      formError.style.display = 'block';
      formError.textContent = 'Please fill in all required fields and select at least one service.';
      return;
    }
    
    // Here you would typically send the form data to your server
    // For now, we'll just show a success message
    formError.style.display = 'none';
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
    updateSelectedText();
  });
});

// WhatsApp Chat Button & Box Functionality
const whatsappBtn = document.getElementById('whatsapp-chat-btn');
const whatsappBox = document.getElementById('whatsapp-chat-box');
const whatsappClose = document.getElementById('whatsapp-chat-close');
const whatsappSend = document.getElementById('whatsapp-send-btn');
const whatsappInput = document.getElementById('whatsapp-user-message');

function openWhatsappBox() {
  whatsappBox.style.display = 'block';
  whatsappBox.classList.remove('fadeInUp', 'fadeOut');
  void whatsappBox.offsetWidth; // Force reflow for animation restart
  whatsappBox.classList.add('fadeInUp', 'open');
}
function closeWhatsappBox() {
  whatsappBox.classList.remove('fadeInUp', 'fadeOut');
  void whatsappBox.offsetWidth; // Force reflow for animation restart
  whatsappBox.classList.add('fadeOut');
  whatsappBox.classList.remove('open');
  setTimeout(() => {
    whatsappBox.style.display = 'none';
    whatsappBox.classList.remove('fadeOut');
  }, 600);
}

if (whatsappBtn && whatsappBox && whatsappClose && whatsappSend && whatsappInput) {
  whatsappBtn.addEventListener('click', function() {
    if (whatsappBox.classList.contains('open')) {
      closeWhatsappBox();
    } else {
      openWhatsappBox();
    }
  });
  whatsappClose.addEventListener('click', function() {
    closeWhatsappBox();
  });
  whatsappSend.addEventListener('click', function() {
    const message = whatsappInput.value.trim();
    if (message) {
      const phone = '919887133425';
      const url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);
      window.open(url, '_blank');
    }
  });
  window.addEventListener('scroll', function() {
    if (whatsappBox.classList.contains('open')) {
      closeWhatsappBox();
    }
  });
}

// Animation classes for WhatsApp chat box
const style = document.createElement('style');
style.innerHTML = `
  .fadeInUp { animation: whatsappFadeInUp 0.5s cubic-bezier(.4,0,.2,1); }
  .fadeOut { animation: whatsappFadeOutDown 0.6s cubic-bezier(.4,0,.2,1); }
  @keyframes whatsappFadeOutDown {
    from { opacity: 1; transform: none; }
    to { opacity: 0; transform: translateY(40px); }
  }
`;
document.head.appendChild(style);

// Portfolio Modal Gallery Logic
const portfolioProjects = [
  {
    title: 'Business Website',
    desc: 'A modern, responsive business website for a leading startup.',
    images: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
    ],
    features: [
      'Responsive design',
      'SEO optimized',
      'Contact form',
      'Admin dashboard'
    ],
    technologies: [
      'HTML', 'CSS', 'JavaScript', 'Node.js'
    ],
    liveLink: 'https://example.com',
    github: 'https://github.com/example/business-website'
  },
  {
    title: 'Mobile App UI',
    desc: 'A sleek mobile app interface designed for user engagement.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80'
    ],
    features: [
      'Intuitive navigation',
      'Custom animations',
      'Dark mode support'
    ],
    technologies: [
      'Figma', 'React Native', 'Expo'
    ],
    liveLink: 'https://example.com/mobile-app',
    github: 'https://github.com/example/mobile-app-ui'
  },
  {
    title: 'Branding & Logo',
    desc: 'Distinctive branding and logo design for a new business.',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
    ],
    features: [
      'Unique logo concepts',
      'Brand guidelines',
      'Color palette selection'
    ],
    technologies: [
      'Adobe Illustrator', 'Photoshop'
    ],
    liveLink: 'https://example.com/branding',
    github: 'https://github.com/example/branding-logo'
  },
  {
    title: 'E-commerce Platform',
    desc: 'A robust, scalable e-commerce solution for online sales.',
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    ],
    features: [
      'Product catalog',
      'Shopping cart',
      'Payment gateway integration',
      'Order management'
    ],
    technologies: [
      'Shopify', 'React', 'Node.js', 'MongoDB'
    ],
    liveLink: 'https://example.com/ecommerce',
    github: 'https://github.com/example/ecommerce-platform'
  },
  {
    title: 'SEO & Marketing',
    desc: 'SEO and digital marketing campaign for business growth.',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80'
    ],
    features: [
      'Keyword research',
      'On-page SEO',
      'Content marketing',
      'Analytics reporting'
    ],
    technologies: [
      'Google Analytics', 'SEMrush', 'WordPress'
    ],
    liveLink: 'https://example.com/seo',
    github: 'https://github.com/example/seo-marketing'
  },
  {
    title: 'Video Editing',
    desc: 'Professional video editing for brand promotion and ads.',
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
    ],
    features: [
      'Motion graphics',
      'Color grading',
      'Sound design',
      'Social media formats'
    ],
    technologies: [
      'Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'
    ],
    liveLink: 'https://example.com/video-editing',
    github: 'https://github.com/example/video-editing'
  }
];

const modal = document.getElementById('portfolio-modal');
const modalImg = document.getElementById('portfolio-modal-img');
const modalTitle = document.getElementById('portfolio-modal-title');
const modalDesc = document.getElementById('portfolio-modal-desc');
const modalClose = document.querySelector('.portfolio-modal-close');
const modalPrev = document.querySelector('.portfolio-modal-prev');
const modalNext = document.querySelector('.portfolio-modal-next');

let currentProject = 0;
let currentImage = 0;

function showModal(projectIdx, imageIdx, direction = null) {
  const project = portfolioProjects[projectIdx];
  const modalContent = document.querySelector('.portfolio-modal-content');

  // Slide animation
  if (direction === 'left') {
    modalContent.classList.add('slide-out-left');
  } else if (direction === 'right') {
    modalContent.classList.add('slide-out-right');
  }

  // Wait for slide-out, then update content and slide-in
  let transitionTime = (direction ? 250 : 0);
  setTimeout(() => {
    modal.classList.add('open');
    currentProject = projectIdx;
    currentImage = imageIdx;

    // Build image slider with arrows
    let imageSliderHtml = `
      <button aria-label="Previous Image" class="img-arrow left" style="position:absolute;left:-36px;top:50%;transform:translateY(-50%);background:#25d366;border:none;width:48px;height:48px;border-radius:50%;color:#fff;font-size:2rem;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(37,211,102,0.15);cursor:pointer;z-index:2;">&#8592;</button>
      <img id="portfolio-modal-img" src="${project.images[imageIdx]}" alt="${project.title} image" style="max-width:100%;max-height:280px;display:block;margin:0 auto;border-radius:1em;box-shadow:0 4px 24px rgba(64,196,255,0.10);background:#f8fafc;object-fit:cover;">
      <button aria-label="Next Image" class="img-arrow right" style="position:absolute;right:-36px;top:50%;transform:translateY(-50%);background:#25d366;border:none;width:48px;height:48px;border-radius:50%;color:#fff;font-size:2rem;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(37,211,102,0.15);cursor:pointer;z-index:2;">&#8594;</button>
    `;

    // Build features, tech, links
    let extraHtml = '';
    if (project.features) {
      extraHtml += '<div style="margin-top:1.2em;"><b style="font-size:1.1em;">Features:</b><ul style="text-align:left;margin:0.5em 0 0.5em 1.2em;">' + project.features.map(f => `<li>${f}</li>`).join('') + '</ul></div>';
    }
    if (project.technologies) {
      extraHtml += '<div style="margin-top:0.7em;"><b style="font-size:1.1em;">Technologies:</b> ' + project.technologies.join(', ') + '</div>';
    }
    if (project.liveLink) {
      extraHtml += `<div style="margin-top:0.7em;"><a href="${project.liveLink}" target="_blank" style="color:#25d366;font-weight:bold;">Live Site</a></div>`;
    }
    if (project.github) {
      extraHtml += `<div><a href="${project.github}" target="_blank" style="color:#3366ff;font-weight:bold;">GitHub Repo</a></div>`;
    }

    // Main content
    const infoDiv = document.querySelector('.portfolio-modal-info');
    infoDiv.innerHTML = `
      <div style="text-align:center;padding:0 1em;max-width:600px;margin:0 auto;">
        <h2 style="color:#25d366;font-size:2em;font-weight:900;margin:0.5em 0 0.2em 0;">${project.title}</h2>
        <div style="color:#222;font-size:1.1em;margin-bottom:0.7em;">${project.desc}</div>
        ${extraHtml}
      </div>
    `;

    // Inject image slider
    const galleryDiv = document.querySelector('.portfolio-modal-gallery');
    galleryDiv.style.position = 'relative';
    galleryDiv.innerHTML = imageSliderHtml;

    // Add image slider event listeners
    const leftArrow = galleryDiv.querySelector('.img-arrow.left');
    const rightArrow = galleryDiv.querySelector('.img-arrow.right');
    leftArrow.onclick = function(e) {
      e.stopPropagation();
      let newImgIdx = (currentImage - 1 + project.images.length) % project.images.length;
      showModal(currentProject, newImgIdx);
    };
    rightArrow.onclick = function(e) {
      e.stopPropagation();
      let newImgIdx = (currentImage + 1) % project.images.length;
      showModal(currentProject, newImgIdx);
    };

    // Style project slider buttons
    const prevProjectBtn = document.getElementById('portfolio-modal-prev-project');
    const nextProjectBtn = document.getElementById('portfolio-modal-next-project');
    if (prevProjectBtn && nextProjectBtn) {
      prevProjectBtn.style = 'position:absolute;left:1.2rem;top:1.2rem;z-index:3;background:#25d366;color:#fff;border:none;border-radius:1.5em;padding:0.5em 1.3em;cursor:pointer;font-weight:bold;font-size:1.1em;box-shadow:0 2px 8px rgba(37,211,102,0.15);transition:background 0.2s;';
      nextProjectBtn.style = 'position:absolute;right:1.2rem;top:1.2rem;z-index:3;background:#25d366;color:#fff;border:none;border-radius:1.5em;padding:0.5em 1.3em;cursor:pointer;font-weight:bold;font-size:1.1em;box-shadow:0 2px 8px rgba(37,211,102,0.15);transition:background 0.2s;';
      prevProjectBtn.onmouseover = nextProjectBtn.onmouseover = function() { this.style.background = '#1ebe5d'; };
      prevProjectBtn.onmouseout = nextProjectBtn.onmouseout = function() { this.style.background = '#25d366'; };
    }

    // Slide in after content update
    if (direction === 'left') {
      modalContent.classList.remove('slide-out-left');
      modalContent.classList.add('slide-in-right');
      setTimeout(() => { modalContent.classList.remove('slide-in-right'); }, 250);
    } else if (direction === 'right') {
      modalContent.classList.remove('slide-out-right');
      modalContent.classList.add('slide-in-left');
      setTimeout(() => { modalContent.classList.remove('slide-in-left'); }, 250);
    } else {
      modalContent.style.opacity = 1;
    }
  }, transitionTime);
}

function closeModal() {
  modal.classList.remove('open');
}

function showNextImage() {
  const project = portfolioProjects[currentProject];
  currentImage = (currentImage + 1) % project.images.length;
  modalImg.src = project.images[currentImage];
}

function showPrevImage() {
  const project = portfolioProjects[currentProject];
  currentImage = (currentImage - 1 + project.images.length) % project.images.length;
  modalImg.src = project.images[currentImage];
}

// Attach click listeners to portfolio cards
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    showModal(idx, 0);
  });
});

modalClose.addEventListener('click', closeModal);
modalNext.addEventListener('click', showNextImage);
modalPrev.addEventListener('click', showPrevImage);

// Close modal on overlay click
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Multi-select dropdown functionality
// (from index.html lines 932-1106)
document.addEventListener('DOMContentLoaded', function() {
  const multiselect = document.getElementById('services-multiselect');
  const selectedText = document.getElementById('selected-services-text');
  const checkboxes = document.querySelectorAll('#services-list input[type="checkbox"]');
  const contactForm = document.querySelector('.contact-form');

  // Toggle dropdown
  multiselect.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function() {
    multiselect.classList.remove('active');
  });

  // Handle checkbox changes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      updateSelectedText();
    });
  });

  // Update selected text
  function updateSelectedText() {
    const selected = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
    if (selected.length === 0) {
      selectedText.textContent = 'Select Services';
    } else if (selected.length === 1) {
      selectedText.textContent = selected[0];
    } else {
      selectedText.textContent = `${selected.length} services selected`;
    }
  }

  // Handle form submission
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const selectedServices = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
    const formError = document.getElementById('form-error');
    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    let errorMsg = '';
    if (!name) {
      errorMsg = 'Name is required.';
    } else if (!email) {
      errorMsg = 'Email is required.';
    } else if (!emailPattern.test(email)) {
      errorMsg = 'Please enter a valid email address.';
    } else if (document.getElementById('phone').value.trim() && !phonePattern.test(document.getElementById('phone').value.trim())) {
      errorMsg = 'Phone number must be exactly 10 digits.';
    } else if (selectedServices.length === 0) {
      errorMsg = 'Please select at least one service.';
    } else if (!message) {
      errorMsg = 'Message is required.';
    }
    if (errorMsg) {
      formError.textContent = errorMsg;
      formError.style.display = 'block';
      console.log('Validation failed:', errorMsg);
      return;
    } else {
      formError.style.display = 'none';
    }
    const formData = {
      name,
      email,
      phone: document.getElementById('phone').value,
      subject: document.getElementById('subject').value,
      services: selectedServices,
      message
    };
    // Store form data in localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    console.log('Validation passed, redirecting to thank-you.html');
    // Redirect to new form
    window.location.href = 'thank-you.html';
  });
});

// Scroll-triggered section animation
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.section-animate').forEach(section => {
    observer.observe(section);
  });
})();

// Mobile navbar toggle
(function() {
  const hamburger = document.getElementById('navbar-hamburger');
  const mobileMenu = document.getElementById('mobile-navbar-menu');
  hamburger.addEventListener('click', function() {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('mobile-menu-open', !expanded);
  });
  // Close menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', false);
      mobileMenu.classList.remove('open');
      document.body.classList.remove('mobile-menu-open');
    });
  });
  // Close menu on outside click
  document.addEventListener('click', function(e) {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.setAttribute('aria-expanded', false);
      mobileMenu.classList.remove('open');
      document.body.classList.remove('mobile-menu-open');
    }
  });
})();

// Show chat box on button click
if (document.getElementById('whatsapp-chat-btn')) {
  document.getElementById('whatsapp-chat-btn').onclick = function() {
    document.getElementById('whatsapp-chat-box').style.display = 'block';
  };
}
// Hide chat box on close
if (document.getElementById('whatsapp-chat-close')) {
  document.getElementById('whatsapp-chat-close').onclick = function() {
    document.getElementById('whatsapp-chat-box').style.display = 'none';
  };
}
// Send message to WhatsApp
if (document.getElementById('whatsapp-send-btn')) {
  document.getElementById('whatsapp-send-btn').onclick = function() {
    var message = document.getElementById('whatsapp-user-message').value.trim();
    if (message) {
      // WhatsApp number (with country code, no +)
      var phone = '919887133425';
      var url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);
      window.open(url, '_blank');
    }
  };
}

// Portfolio modal open/close
if (document.getElementById('open-portfolio-btn')) {
  document.getElementById('open-portfolio-btn').onclick = function(e) {
    e.preventDefault();
    document.getElementById('portfolio').style.display = 'block';
    document.body.style.overflow = 'hidden';
  };
}
if (document.getElementById('close-portfolio-btn')) {
  document.getElementById('close-portfolio-btn').onclick = function() {
    document.getElementById('portfolio').style.display = 'none';
    document.body.style.overflow = '';
  };
}

// Add project slider buttons to the modal (if not already present)
(function addProjectSliderButtons() {
  const modalContent = document.querySelector('.portfolio-modal-content');
  if (!document.getElementById('portfolio-modal-prev-project')) {
    const prevBtn = document.createElement('button');
    prevBtn.id = 'portfolio-modal-prev-project';
    prevBtn.textContent = '← Previous Project';
    prevBtn.style = 'position:absolute;left:1.2rem;top:1.2rem;z-index:3;background:#25d366;color:#fff;border:none;border-radius:0.5em;padding:0.4em 1em;cursor:pointer;font-weight:bold;';
    modalContent.appendChild(prevBtn);
  }
  if (!document.getElementById('portfolio-modal-next-project')) {
    const nextBtn = document.createElement('button');
    nextBtn.id = 'portfolio-modal-next-project';
    nextBtn.textContent = 'Next Project →';
    nextBtn.style = 'position:absolute;right:1.2rem;top:1.2rem;z-index:3;background:#25d366;color:#fff;border:none;border-radius:0.5em;padding:0.4em 1em;cursor:pointer;font-weight:bold;';
    modalContent.appendChild(nextBtn);
  }
})();

// Add slide animation CSS
(function addSlideAnimationCSS() {
  const style = document.createElement('style');
  style.innerHTML = `
    .slide-out-left { animation: slideOutLeft 0.25s forwards; }
    .slide-in-right { animation: slideInRight 0.25s forwards; }
    .slide-out-right { animation: slideOutRight 0.25s forwards; }
    .slide-in-left { animation: slideInLeft 0.25s forwards; }
    @keyframes slideOutLeft { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(-80px); } }
    @keyframes slideInRight { from { opacity:0; transform:translateX(80px); } to { opacity:1; transform:translateX(0); } }
    @keyframes slideOutRight { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(80px); } }
    @keyframes slideInLeft { from { opacity:0; transform:translateX(-80px); } to { opacity:1; transform:translateX(0); } }
  `;
  document.head.appendChild(style);
})();

// Update project slider button event listeners to use direction
const prevProjectBtn = document.getElementById('portfolio-modal-prev-project');
const nextProjectBtn = document.getElementById('portfolio-modal-next-project');
if (prevProjectBtn && nextProjectBtn) {
  prevProjectBtn.onclick = function(e) {
    e.stopPropagation();
    let newIdx = (currentProject - 1 + portfolioProjects.length) % portfolioProjects.length;
    showModal(newIdx, 0, 'left');
  };
  nextProjectBtn.onclick = function(e) {
    e.stopPropagation();
    let newIdx = (currentProject + 1) % portfolioProjects.length;
    showModal(newIdx, 0, 'right');
  };
} 