function openProductPage(id) {
  var product = products.find(function(p) { return p.id === id; });
  if (!product) return;

  state.currentProduct = product;
  state.sliderIndex = 0;

  document.getElementById('detail-name').textContent = product.name;
  document.getElementById('detail-desc').textContent = product.desc;
  document.getElementById('detail-price').textContent = product.price;
  updateSliderImage();

  renderSimilar(id);
}

function updateSliderImage() {
  var product = state.currentProduct;
  if (!product) return;
  var img = document.getElementById('detail-img');
  if (img) {
    img.src = product.images[state.sliderIndex] || product.img;
  }
}

function renderSimilar(currentId) {
  var grid = document.getElementById('similar-grid');
  if (!grid) return;

  var similar = products.filter(function(p) { return p.id !== currentId; });

  grid.innerHTML = similar.map(function(p) {
    return '<div class="product-card" onclick="openProduct(' + p.id + ')">' +
      '<div class="product-image-wrap">' +
        '<img src="' + p.img + '" alt="' + p.name + '" class="product-img">' +
        '<div class="product-overlay"><p>Натисни щоб переглянути</p></div>' +
      '</div>' +
      '<p class="product-name">' + p.name + '</p>' +
      '<span class="product-price">' + p.price + '</span>' +
    '</div>';
  }).join('');
}

document.addEventListener('DOMContentLoaded', function() {

  var prevBtn = document.getElementById('prev-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      var product = state.currentProduct;
      if (!product) return;
      state.sliderIndex = (state.sliderIndex - 1 + product.images.length) % product.images.length;
      updateSliderImage();
    });
  }

  var nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      var product = state.currentProduct;
      if (!product) return;
      state.sliderIndex = (state.sliderIndex + 1) % product.images.length;
      updateSliderImage();
    });
  }

  var nameInput = document.getElementById('name');
  if (nameInput) {
    nameInput.addEventListener('input', function() {
      var err = document.getElementById('name-error');
      err.textContent = nameInput.value.length < 2 ? 'Мінімум 2 символи' : '';
      state.formData.name = nameInput.value;
    });
  }

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var name     = document.getElementById('name').value;
      var email    = document.getElementById('email').value;
      var message  = document.getElementById('message').value;
      var emailErr = document.getElementById('email-error');
      var isValid  = true;

      if (!email.includes('@') || !email.includes('.')) {
        emailErr.textContent = 'Введіть коректний email';
        isValid = false;
      } else {
        emailErr.textContent = '';
      }

      if (isValid && name.length >= 2) {
        state.formData = { name: name, email: email, message: message };

        document.getElementById('success-msg').style.display = 'block';

        var list = document.getElementById('reviews-list');
        var li = document.createElement('li');
        li.innerHTML = '<strong>' + name + '</strong>: ' + (message || 'Без повідомлення');
        list.appendChild(li);

        form.reset();

        setTimeout(function() {
          document.getElementById('success-msg').style.display = 'none';
        }, 4000);
      }
    });
  }

  navigate('home');

  window.addEventListener('popstate', function(e) {
    if (e.state && e.state.page) {
      navigate(e.state.page);
    }
  });

});
