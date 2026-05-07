var products = [
  {
    id: 1,
    name: '1 Product',
    price: 'Price',
    desc: 'information',
    img: '2.jpg',
    images: ['2.jpg']
  },
  {
    id: 2,
    name: '2 Product',
    price: 'Price',
    desc: 'information',
    img: '3.jpg',
    images: ['3.jpg']
  },
  {
    id: 3,
    name: '3 Product',
    price: 'Price',
    desc: 'information',
    img: '4.jpg',
    images: ['4.jpg']
  },
  {
    id: 4,
    name: '4 Product',
    price: 'Price',
    desc: 'information',
    img: '5.webp',
    images: ['5.webp']
  }
];

var state = {
  currentPage: 'home',
  currentProduct: null,
  sliderIndex: 0,
  formData: {
    name: '',
    email: '',
    message: ''
  }
};
