const products = [
  {
    name: 'Audi A1',
    price: 15000,
    reviews: 250,
    seller: 'Audi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CPkSCR9QuNXo4XrENloN0ZoH0AMSDt5YNA&s'    
  },
  {
    name: 'Audi A2',
    price: 3000 ,
    reviews: 150,
    seller: 'Audi',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/2003_Audi_A2_FSi_1.6_Front.jpg/1200px-2003_Audi_A2_FSi_1.6_Front.jpg'
  },
  {
    name: 'Audi A3',
    price: 45000,
    reviews: 320,
    seller: 'Audi',
    image: 'https://www.audihuertasmotor.com/wp-content/uploads/2024/02/A208936_medium-1024x536.webp'
  },
  {
    name: 'Audi A4',
    price: 55000,
    reviews: 200,
    seller: 'Audi',
    image: 'https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/49922/audi-a4-2018-01.jpg'
  },
  {
    name: 'Audi A5',
    price: 60000,
    reviews: 180,
    seller: 'Audi',
    image: 'https://fotos.quecochemecompro.com/audi-a5-sportback/audi-a5-dinamismo-elegancia.jpg?size=750x400'
  },
  {
    name: 'Audi A6',
    price: 75000,
    reviews: 220,
    seller: 'Audi',
    image: 'https://rspremiumcar.com/wp-content/uploads/2022/04/IMG_E8755-scaled.jpg'
  },
  {
    name: 'Audi A7',
    price: 90000,
    reviews: 160,
    seller: 'Audi',
    image: 'https://i0.wp.com/citymagazine.si/wp-content/uploads/2017/10/2019-audi-a7-20.jpg?fit=1920%2C1080&ssl=1'
  },
  {
    name: 'Audi A8',
    price: 130000,
    reviews: 140,
    seller: 'Audi',
    image: 'https://www.autonocion.com/wp-content/uploads/2021/11/Audi-A8-L-2022-2.jpg'
  },
  {
    name: 'Audi Q2',
    price: 40000,
    reviews: 120,
    seller: 'Audi',
    image: 'https://images.coches.com/_vn_/audi/Q2/72852b20aaa695e2281e81667c903e28.jpg?w=1920&ar=16:9'
  },
  {
    name: 'Audi RSQ8',
    price: 150000,
    reviews: 15,
    seller: 'Audi',
    image: 'https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2020/12/mansory-audi-rs-q8-5.jpg'
  }
];

const productListDiv = document.getElementById('product-list');

products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const img = document.createElement('img');
  img.src = product.image;
  productCard.appendChild(img);

  const name = document.createElement('div');
  name.textContent = product.name;
  name.className = 'product-name';
  productCard.appendChild(name);

  const price = document.createElement('div');
  price.textContent = `Precio: $${product.price}`;
  price.className = 'product-price';
  productCard.appendChild(price);

  const seller = document.createElement('div');
  seller.textContent = `Vendedor: ${product.seller}`;
  seller.className = 'product-seller';
  productCard.appendChild(seller);

  productListDiv.appendChild(productCard);
});
