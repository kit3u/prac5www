var products = [
  {
    id: 1,
    name: '1 Product',
    price: 'Price',
    desc: 'information',
    img: 'prac5www/2.jpg',
    images: ['prac5www/2.jpg']
  },
  {
    id: 2,
    name: '2 Product',
    price: 'Price',
    desc: 'information',
    img: 'prac5www/3.jpg',
    images: ['prac5www/3.jpg']
  },
  {
    id: 3,
    name: '3 Product',
    price: 'Price',
    desc: 'information',
    img: 'prac5www/4.jpg',
    images: ['prac5www/4.jpg']
  },
  {
    id: 4,
    name: '4 Product',
    price: 'Price',
    desc: 'information',
    img: 'prac5www/5.webp',
    images: ['prac5www/5.webp']
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