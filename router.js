function navigate(page, productId) {
  state.currentPage = page;

  document.querySelectorAll('.page-view').forEach(function(el) {
    el.classList.remove('active');
    el.style.display = 'none';
  });

  var target = document.getElementById('page-' + page);
  if (target) {
    target.style.display = 'block';
    setTimeout(function() { target.classList.add('active'); }, 10);
  }

  var backBtn = document.getElementById('back-btn');
  if (backBtn) {
    backBtn.style.display = (page === 'product') ? 'block' : 'none';
  }

  var paths = {
    home: '/',
    about: '/about',
    contact: '/contact',
    product: '/product'
  };
  history.pushState({ page: page }, '', paths[page] || '/');

  if (page === 'product' && productId) {
    openProductPage(productId);
  }
}

function openProduct(id) {
  navigate('product', id);
}
