interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    imageUrl: string;
    rating: number;
    reviews: number;
    isAvailable: boolean;
    discount:number;
  }
  
   const products: Product[] = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepade",
      description: "Good quality with high speed",
      price: 120,
      category: "Flash Sales",
      stock: 50,
      imageUrl: "/img2.png",
      rating: 4.5,
      reviews: 120,
      isAvailable: true,
      discount: 40,
    },

    {
        id: 2,
        name: "AK-900 wired Keyboard",
        description: "Good quality with wired ",
        price: 960,
        category: "Flash Sales",
        stock: 50,
        imageUrl: "/img3.png",
        rating: 4.5,
        reviews: 116,
        isAvailable: true,
        discount: 35,
    },
      

      {
        id: 3,
        name: "IPS LCD Gaming Monitor",
        description: "Good quality gaming monitor ",
        price: 370,
        category: "Flash Sales",
        stock: 50,
        imageUrl: "/img4.png",
        rating: 4.5,
        reviews: 45,
        isAvailable: true,
        discount: 30,
    
      },

      {
        id: 4,
        name: "S-Series Comfort Chair",
        description: "Good quality comfortable chair ",
        price: 375,
        category: "Flash Sales",
        stock: 60,
        imageUrl: "/img5.png",
        rating: 4.5,
        reviews: 450,
        isAvailable: true,
        discount: 25,
    },
      

      {
        id: 5,
        name: "The North Coat",
        description: "pink and warm coat for winter collection ",
        price: 260,
        category: "Best Selling Products",
        stock: 40,
        imageUrl: "/s1.png",
        rating: 4.5,
        reviews: 250,
        isAvailable: true,
        discount:40,
      },

      {
        id: 6,
        name: "Gucci duffel bag",
        description: "lavish and stylish wear ",
        price: 960,
        category: "Best Selling Products",
        stock: 40,
        imageUrl: "/s2.png",
        rating: 4.5,
        reviews: 165,
        isAvailable: true,
        discount: 25
      },

      {
        id: 7,
        name: "RGB Liquid CPU Cooler",
        description: "Best quality ",
        price: 160,
        category: "Best Selling Products",
        stock: 30,
        imageUrl: "/s3.png",
        rating: 4.5,
        reviews: 140,
        isAvailable: true,
        discount:20
      },

      {
        id: 8,
        name: "Small Bookshelf",
        description: "stylish interior deacorative piece ",
        price: 360,
        category: "Best Selling Products",
        stock: 25,
        imageUrl: "/s4.png",
        rating: 4.5,
        reviews: 65,
        isAvailable: true,
        discount:40,
      },

      {
        id: 9,
        name: "Breed Dry Dog Food",
        description: "best quality ",
        price: 100,
        category: "Browse By Category",
        stock: 25,
        imageUrl: "/e1.png",
        rating: 4.5,
        reviews: 40,
        isAvailable: true,
        discount:20
      },
      
      {
        id: 10,
        name: "Canon EOS DSLR Camera",
        description: "best quality and high pixels ",
        price: 360,
        category: "Browse By Category",
        stock: 25,
        imageUrl: "/e2.png",
        rating: 4.5,
        reviews: 40,
        isAvailable: true,
        discount:25,
      },

      {
        id: 11,
        name: "ASUS FHD Gaming Laptop",
        description: "full HD Laptop ",
        price: 700,
        category: "Browse By Category",
        stock: 25,
        imageUrl: "/e3.png",
        rating: 4.5,
        reviews: 20,
        isAvailable: true,
        discount:20,
      },

      {
        id: 12,
        name: "Small bookshelf",
        description: "stylish interior deacorative piece ",
        price: 260,
        category: "Browse By Category",
        stock: 25,
        imageUrl: "/s4.png",
        rating: 4.5,
        reviews: 20,
        isAvailable: true,
        discount:40,
      },

      {
        id: 13,
        name: "Kids Electric Car",
        description: "stylish Kids Electric Car ",
        price: 960,
        category: "Browse By Category",
        stock: 25,
        imageUrl: "/e5.png",
        rating: 4.5,
        reviews: 20,
        isAvailable: true,
        discount:40,
      },

      {
        id: 14,
        name: "Jr- Zoom Soccer Cleates",
        description: "stylish and best quality ",
        price: 1160,
        category: "Browse By Category",
        stock: 40,
        imageUrl: "/e6.png",
        rating: 4.5,
        reviews: 160,
        isAvailable: true,
        discount: 40,
    
      },

      {
        id: 15,
        name: "GPII Shooter USB Gamepad",
        description: "Best quality USB Gampad ",
        price: 660,
        category: "Browse By Category",
        stock: 30,
        imageUrl: "/e7.png",
        rating: 4.5,
        reviews: 140,
        isAvailable: true,
        discount: 40,
    
      },

      {
        id: 16,
        name: "Quilted Satin Jacket",
        description: "warm jackect for winter collection ",
        price: 660,
        category: "Browse By Category",
        stock: 10,
        imageUrl: "/e8.png",
        rating: 4.5,
        reviews: 140,
        isAvailable: true,
        discount: 40,
    
      },


      
]

export default products;
    
    