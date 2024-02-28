const product1 = {
    // id: "recZkNf2kwmdBcqd0",
    id: "recZkNf2kwmdBcqd0",
    name: "Bape vintage hoodie zip",
    price: 12199,
    image: require('../assets/temp/b1.jpg'), // Sử dụng require để chỉ định đường dẫn của hình ảnh
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "bape",
    category: "hoodie",
    shipping: true
  };
  const product2 = {
    id: "recEHmzvupvT8ZONH",
    name: "Champion hoodie zip",
    price: 1199,
    image: require('../assets/temp/c1.jpg'), // Sử dụng require để chỉ định đường dẫn của hình ảnh
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "champion",
    category: "hoodie",
    shipping: true
  };
  const product3 = {
    id: "recEHmzvupvT8ZONH1200",
    name: "Ecko baggy",
    price: 1199,
    image: require('../assets/temp/e1.jpg'), // Sử dụng require để chỉ định đường dẫn của hình ảnh
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "Ecko",
    category: "Pants",
    shipping: true
  };
  const product4 = {
    id: "recEHmzvupvT8ZONH1200",
    name: "Fubu baggy",
    price: 1199,
    image: require('../assets/temp/f1.jpg'), // Sử dụng require để chỉ định đường dẫn của hình ảnh
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "Fubu",
    category: "Pants",
    shipping: true
  };
  const productData = {
    "id": "recZkNf2kwmdBcqd0",
    "stock": 1,
    "price": 12199,
    "length": 65,
    "width": 55,
    "shipping": true,
    "colors": ["#ff0000", "#00ff00", "#0000ff"],
    "images": [
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/b2.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/b3.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/b4.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/b5.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/b6.jpg'),
        "type": "image/jpeg",
      }
    ],
    "reviews": 25,
    "stars": 4.9,
    "name": "Bape vintage hoodie zip",
    "description": "Có vài vết lủng li ti nhưng nhìn khá nghệ, bo tay có tưa, khoá zip 2 chiều , vải dày đứng form, grailed sold 265$ với tag này",
    "company": "A Bathing Ape"
  };
  const productData2 = {
    "id": "recEHmzvupvT8ZONH",
    "stock": 1,
    "price": 1199,
    "length": 72,
    "width": 68,
    "shipping": true,
    "colors": ["#ff0000", "#00ff00", "#0000ff"],
    "images": [
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/c2.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/c3.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/c4.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/c5.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/c6.jpg'),
        "type": "image/jpeg",
      }
    ],
    "reviews": 25,
    "stars": 4.9,
    "name": "Champion hoodie zip",
    "description": "Có xù lông nhẹ nhàng",
    "company": "Champion"
  };
  const productData3 = {
    "id": "recEHmzvupvT8ZONH1200",
    "stock": 0,
    "price": 22199,
    "length": 72,
    "width": 68,
    "shipping": true,
    "colors": ["#ff0000", "#00ff00", "#0000ff"],
    "images": [
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/e2.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/e3.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/e4.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/e5.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/e6.jpg'),
        "type": "image/jpeg",
      }
    ],
    "reviews": 25,
    "stars": 4.9,
    "name": "Ecko baggy pant",
    "description": "Form siêu đỉnh, detail nét căng.",
    "company": "Ecko"
  };
  const productData4 = {
    "id": "recEHmzvupvT8ZONH1200",
    "stock": 0,
    "price": 22199,
    "length": 72,
    "width": 68,
    "shipping": true,
    "colors": ["#ff0000", "#00ff00", "#0000ff"],
    "images": [
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/f2.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/f3.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/f4.jpg'),
        "type": "image/jpeg",
      },
      {
        "width": 1000,
        "height": 667,
        "url": require('../assets/temp/f5.jpg'),
        "type": "image/jpeg",
      }
    ],
    "reviews": 25,
    "stars": 4.9,
    "name": "Fubu baggy pant",
    "description": "Form siêu đỉnh, detail nét căng.",
    "company": "Fubu"
  };

  const products = [product1, product2, product3, product4]; 
  const productsData = [
    { id: productData.id, value: productData },
    { id: productData2.id, value: productData2 },
    { id: productData3.id, value: productData3 },
    { id: productData4.id, value: productData4 },
    // Other product data...
];
export default {products, productsData};