/* ============================================
   SQUARE MEDICAL BILLING - 3D PREMIUM INTERACTIONS
   + FORM VALIDATION + EMAIL SENDING
   ============================================ */

$(function(){

  function hidePreloader() {
    const $preloader = $('#preloader');
    if (!$preloader.length) {
      return;
    }

    $preloader.stop(true, true).fadeOut(250, function() {
      $(this).remove();
    });
  }

  // ===== BFCACHE RESTORE — force all elements visible =====
  function restorePage() {
    // Hide preloader in case it's stuck
    hidePreloader();

    // Force all reveal elements to be visible
    $('.reveal, .reveal-left, .reveal-right, .reveal-scale').addClass('active');

    // Force all cards/service-cards visible (entrance animation may have left opacity:0)
    $('.service-card, .card-dark').css({
      opacity: 1,
      transform: 'none'
    });

    // Re-run scroll reveal check
    setTimeout(checkReveal, 50);
  }

  // ===== PRELOADER SAFETY TIMEOUT =====
  // Auto-hide preloader after 3s max, in case window.load never fires (BFCache)
  var preloaderSafetyTimer = setTimeout(function() {
    hidePreloader();
  }, 3000);

  // ===== TOAST NOTIFICATION SYSTEM =====
  function showToast(message, type, duration) {
    type = type || 'info';
    duration = duration || 4000;
    let $container = $('.toast-container');
    if (!$container.length) {
      $container = $('<div class="toast-container"></div>');
      $('body').append($container);
    }

    const icons = {
      success: '✅',
      error: '❌',
      info: 'ℹ️',
      warning: '⚠️'
    };

    // Build toast safely to prevent XSS — use .text() for user-facing message
    var $toast = $('<div class="toast-msg"></div>').addClass(type);
    var $icon = $('<span></span>').text(icons[type] || 'ℹ️');
    var $msg = $('<span></span>').text(message);
    $toast.append($icon).append($msg);

    $container.append($toast);

    setTimeout(function() {
      $toast.css('animation', 'toastSlideOut 0.4s ease forwards');
      setTimeout(function() { $toast.remove(); }, 400);
    }, duration);
  }

  // ===== NAVBAR SCROLL EFFECT =====
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });

  // ===== ACTIVE NAV LINK HIGHLIGHTING =====
  const path = window.location.pathname.split('/').pop() || 'index.html';
  $('.navbar-nav .nav-link').each(function(){
    const href = $(this).attr('href');
    if(href === path) {
      $(this).addClass('active');
    }
  });

  // ===== SCROLL REVEAL ANIMATIONS =====
  const revealElements = $('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  function checkReveal() {
    const windowHeight = $(window).height();
    const windowTop = $(window).scrollTop();
    const windowBottom = windowTop + windowHeight;

    revealElements.each(function() {
      const elementTop = $(this).offset().top;
      const elementHeight = $(this).outerHeight();
      const elementBottom = elementTop + elementHeight;

      if (elementBottom >= windowTop + 100 && elementTop <= windowBottom - 50) {
        $(this).addClass('active');
      }
    });
  }

  checkReveal();
  $(window).on('scroll', checkReveal);

  // ===== PARALLAX EFFECT FOR HERO =====
  $(window).on('scroll', function() {
    const scrolled = $(window).scrollTop();
    $('.hero-bg').css('transform', 'translateY(' + scrolled * 0.3 + 'px)');
  });

  // ===== PARTICLE SYSTEM =====
  function createParticles() {
    const $particles = $('<div class="particles"></div>');
    $('body').prepend($particles);

    // Reduce particles on mobile for performance
    var isMobile = window.matchMedia('(max-width: 768px)').matches;
    var particleCount = isMobile ? 15 : 40;

    for (let i = 0; i < particleCount; i++) {
      const $particle = $('<div class="particle"></div>');
      $particle.css({
        left: Math.random() * 100 + '%',
        animationDuration: (Math.random() * 18 + 12) + 's',
        animationDelay: (Math.random() * 12) + 's',
        opacity: Math.random() * 0.35 + 0.1,
        width: (Math.random() * 4 + 2) + 'px',
        height: (Math.random() * 4 + 2) + 'px',
        background: Math.random() > 0.5 ? 'var(--cyan)' : 'var(--purple)'
      });
      $particles.append($particle);
    }
  }
  createParticles();

  // ===== 3D CARD TILT EFFECT =====
  // Disabled on contact form card to prevent shaking
  $('.service-card, .digital-card').on('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    $(this).css({
      'transform': `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${-rotateY}deg) translateZ(20px)`,
      '--mouse-x': (x / rect.width * 100) + '%',
      '--mouse-y': (y / rect.height * 100) + '%'
    });
  }).on('mouseleave', function() {
    $(this).css({
      'transform': '',
      '--mouse-x': '50%',
      '--mouse-y': '50%'
    });
  });

  // ===== MAGNETIC BUTTON EFFECT =====
  // Disabled on contact form to prevent shaking
  $('.btn-cyan:not(#contactForm .btn-cyan), .btn-outline-cyan:not(#contactForm .btn-outline-cyan)').on('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    $(this).css('transform', `translate(${x * 0.15}px, ${y * 0.15}px) translateY(-4px) translateZ(15px) scale(1.02)`);
  }).on('mouseleave', function() {
    $(this).css('transform', '');
  });

  // ===== COUNTER ANIMATION =====
  function animateCounter($element, target, duration = 2000) {
    let start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * target);

      $element.text(current.toLocaleString());

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        $element.text(target.toLocaleString());
      }
    }

    requestAnimationFrame(update);
  }

  let countersTriggered = false;
  $(window).on('scroll', function() {
    const $statsSection = $('.stats-section');
    if ($statsSection.length && !countersTriggered) {
      const sectionTop = $statsSection.offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();

      if (sectionTop < windowBottom - 100) {
        countersTriggered = true;
        $('.counter-number, .stat-number').each(function() {
          const target = parseInt($(this).data('target'));
          if (target) {
            animateCounter($(this), target);
          }
        });
      }
    }
  });

  // ===== FAQ ACCORDION =====
  $('details').on('click', function() {
    $('details').not(this).removeAttr('open');
  });

  // ===== PRELOADER =====
  $(window).on('load', function() {
    clearTimeout(preloaderSafetyTimer);
    hidePreloader();
    setTimeout(checkReveal, 200);
  });

  // ===== BFCACHE: Use native addEventListener to avoid jQuery originalEvent issues =====
  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      restorePage();
    }
  });

  // ===== VISIBILITY CHANGE FALLBACK =====
  // Some mobile browsers don't fire pageshow reliably on BFCache restore
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
      // Small delay to let the page settle after becoming visible
      setTimeout(function() {
        hidePreloader();
        // Check if reveal elements are still hidden (BFCache issue)
        var hasHiddenReveals = false;
        $('.reveal, .reveal-left, .reveal-right, .reveal-scale').each(function() {
          if (!$(this).hasClass('active') && $(this).is(':visible')) {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < windowBottom) {
              hasHiddenReveals = true;
              return false; // break
            }
          }
        });
        if (hasHiddenReveals) {
          restorePage();
        }
      }, 100);
    }
  });

  // ===== SERVICE CARD ENTRANCE =====
  $('.service-card, .card-dark').each(function(i) {
    $(this).css({
      opacity: 0,
      transform: 'translateY(30px)'
    }).delay(i * 120).animate({
      opacity: 1,
      transform: 'translateY(0)'
    }, {
      duration: 700,
      step: function(now, fx) {
        if (fx.prop === 'transform') {
          $(this).css('transform', 'translateY(' + (30 - (now * 30)) + 'px)');
        }
      }
    });
  });

  // ===== FLOATING ORBS =====
  function createFloatingOrbs() {
    const $hero = $('.hero, .about-hero');
    if ($hero.length) {
      $hero.each(function() {
        $(this).append('<div class="floating-orb orb-1"></div>');
        $(this).append('<div class="floating-orb orb-2"></div>');
      });
    }
  }
  createFloatingOrbs();

  // ===== SMOOTH SCROLL =====
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 800, 'easeInOutCubic');
    }
  });

  // ============================================
  // ===== FORM VALIDATION & EMAIL SENDING =====
  // ============================================

  const $contactForm = $('#contactForm');

  if ($contactForm.length) {

    // Prevent browser default validation UI
    $contactForm.find('input, textarea, select').on('invalid', function(e) {
      e.preventDefault();
      return false;
    });

    // Validation rules
    const validators = {
      name: {
        required: true,
        minLength: 2,
        maxLength: 100,
        pattern: /^[a-zA-Z\s.'-]+$/,
        messages: {
          required: 'Please enter your full name',
          minLength: 'Name must be at least 2 characters',
          maxLength: 'Name is too long (max 100 characters)',
          pattern: 'Name can only contain letters, spaces, and hyphens'
        }
      },
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        messages: {
          required: 'Please enter your email address',
          pattern: 'Please enter a valid email address'
        }
      },
      service: {
        required: true,
        messages: {
          required: 'Please select a service'
        }
      },
      message: {
        required: true,
        minLength: 10,
        maxLength: 2000,
        messages: {
          required: 'Please enter your message',
          minLength: 'Message must be at least 10 characters',
          maxLength: 'Message is too long (max 2000 characters)'
        }
      }
    };

    function validateField($field, fieldName) {
      const rules = validators[fieldName];
      if (!rules) return { valid: true };

      const value = $field.val().trim();
      let error = null;

      // Required check
      if (rules.required && !value) {
        error = rules.messages.required;
      }
      // Min length
      else if (rules.minLength && value.length < rules.minLength) {
        error = rules.messages.minLength;
      }
      // Max length
      else if (rules.maxLength && value.length > rules.maxLength) {
        error = rules.messages.maxLength;
      }
      // Pattern
      else if (rules.pattern && !rules.pattern.test(value)) {
        error = rules.messages.pattern;
      }

      return { valid: !error, error: error };
    }

    function showFieldError($field, error) {
      $field.addClass('is-invalid').removeClass('is-valid');

      // Remove existing error
      $field.next('.form-error').remove();

      if (error) {
        var $error = $('<div class="form-error"></div>').text('❌ ' + error);
        $field.after($error);
      }
    }

    function showFieldSuccess($field) {
      $field.removeClass('is-invalid').addClass('is-valid');
      $field.next('.form-error').remove();
    }

    // Real-time validation on blur
    $contactForm.find('input, textarea, select').on('blur', function() {
      const name = $(this).attr('name');
      const result = validateField($(this), name);

      if (!result.valid) {
        showFieldError($(this), result.error);
      } else {
        showFieldSuccess($(this));
      }
    });

    // Clear error on input
    $contactForm.find('input, textarea, select').on('input', function() {
      $(this).removeClass('is-invalid is-valid');
      $(this).next('.form-error').remove();
    });

    // ===== FORM SUBMIT WITH EMAILJS =====
    $contactForm.on('submit', function(e) {
      e.preventDefault();

      const $status = $('#contactStatus');
      let isValid = true;
      const formData = {};

      // Validate all fields
      $contactForm.find('input, textarea, select').each(function() {
        const name = $(this).attr('name');
        const result = validateField($(this), name);

        if (!result.valid) {
          showFieldError($(this), result.error);
          isValid = false;
        } else {
          showFieldSuccess($(this));
          formData[name] = $(this).val().trim();
        }
      });

      if (!isValid) {
        showToast('Please fix the errors in the form', 'error');

        return;
      }

      // Show loading state
      const $submitBtn = $contactForm.find('button[type="submit"]');
      const originalText = $submitBtn.html();
      $submitBtn.prop('disabled', true).html(`
        <span class="shimmer" style="padding:0.3rem 0.8rem;border-radius:8px;">
          <span style="display:inline-block;animation:spin 1s linear infinite;">⟳</span> Sending...
        </span>
      `);

      $status.html('<div style="color:var(--cyan);display:flex;align-items:center;gap:0.5rem;"><span style="animation:spin 1s linear infinite;display:inline-block;">⟳</span> Sending your message...</div>');

      // Prepare email data for EmailJS
      const currentDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

      const emailData = {
        to_email: 'office@squaremedicalbilling.in',
        from_name: formData.name,
        from_email: formData.email,
        service: formData.service,
        message: formData.message,
        reply_to: formData.email,
        subject: `New Contact Form Submission - ${formData.service}`,
        time: currentDate,
        // Comprehensive message body for template
        email_body: `
Dear SquareMedical Team,

You have received a new contact form submission from your website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name:           ${formData.name}
📧 Email:          ${formData.email}
📋 Service:        ${formData.service}
🕐 Date & Time:    ${currentDate}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please respond to ${formData.email} at your earliest convenience.

Best regards,
Square Medical Billing Website
        `.trim()
      };

      // Send via EmailJS - matching template variables
      // Template uses: {{emaildata}} for subject, {{email}} for reply_to

      // Create comprehensive email content with ALL form values - clean plain text format
      const maxLabelWidth = 15;
      const padRight = (str, len) => str + ' '.repeat(Math.max(0, len - str.length));

      const emailContent = 
`================================================================================
                    NEW CONTACT FORM SUBMISSION
================================================================================

Dear SquareMedical Team,

You have received a new contact form submission from your website.

--------------------------------------------------------------------------------
                           CONTACT DETAILS
--------------------------------------------------------------------------------

  ${padRight('Name', maxLabelWidth)} : ${formData.name}
  ${padRight('Email', maxLabelWidth)} : ${formData.email}
  ${padRight('Service', maxLabelWidth)} : ${formData.service}
  ${padRight('Date & Time', maxLabelWidth)} : ${currentDate}

--------------------------------------------------------------------------------
                              MESSAGE
--------------------------------------------------------------------------------

${formData.message.split('\n').map(line => '  ' + line).join('\n')}

--------------------------------------------------------------------------------

Please respond to ${formData.email} at your earliest convenience.

================================================================================

Best regards,
Square Medical Billing Website
================================================================================`;

      // Send email - matching template variable names exactly
      // In your EmailJS template, put {{emaildata}} in the CONTENT/Message area
      emailjs.send('service_13d2jbh', 'template_qlz2ebm', {
        // Main content for email body - put {{emaildata}} in Content field
        emaildata: emailContent,

        // Also send as 'message' variable for template flexibility
        content: emailContent,

        // Individual fields for template use
        email: formData.email,
        name: formData.name,
        service: formData.service,
        message: formData.message,
        time: currentDate,

        // For reply functionality
        reply_to: formData.email
      }, {
        publicKey: 'r8Zz5EtOmdkEzuKzx'
      }) 
        .then(function(response) {
          console.log('Email sent successfully:', response);

          // Show success
          const $card = $('#contactCard');
          $card.css({
            'transform': 'scale(0.95) rotateX(5deg)',
            'opacity': '0'
          });

          setTimeout(function() {
            $card.html(`
              <div class="thankyou">
                <div class="emoji">✉️</div>
                <h2 class="text-white">Thank You!</h2>
                <p class="text-muted">Your message has been sent to <strong>office@squaremedicalbilling.in</strong>. Our team will get back to you within 24 hours.</p>
                <div style="margin:1.5rem 0;">
                  <div style="display:inline-block;padding:0.5rem 1rem;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.2);border-radius:10px;color:#22c55e;font-size:0.85rem;">
                    ✅ Message delivered successfully
                  </div>
                </div>
                <button id="sendAnother" class="btn btn-cyan mt-2">Send Another Message</button>
              </div>
            `);

            $card.css({
              'transform': 'scale(1) rotateX(0deg)',
              'opacity': '1',
              'transition': 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            });

            $('#sendAnother').on('click', function() {
              location.reload();
            });

            // showToast('Message sent successfully! We'll reply within 24 hours.', 'success', 6000);
          }, 300);

        }, function(error) {
          const status = error && typeof error.status !== 'undefined' ? error.status : 'unknown';
          const reason = error && error.text ? error.text : 'Unknown error';
          console.error('Email send failed:', { status: status, reason: reason, raw: error });

          $submitBtn.prop('disabled', false).html(originalText);
          $status.html(`<div style="color:#ef4444;">❌ Failed to send (status: ${status}). Please try again or email us directly.</div>`);
          showToast(`Failed to send message (${status}). Please try again.`, 'error');
        });
    });
  }

  // ===== 3D MOUSE PARALLAX ON HERO =====
  // Disabled to prevent shaking effect on hero section
  // $('.hero').on('mousemove', function(e) { ... });

});

// ===== CUSTOM EASING =====
jQuery.easing.easeInOutCubic = function(x, t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t + 2) + b;
};