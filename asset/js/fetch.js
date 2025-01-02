// Furniture dataset
const products = [
  {
    "id":"1",
    "type":"Furniture",
    "name":"Beds and Mattresses",
    "price": 150,
    "rating": 4,
    "img": "asset/img/Furniture/beds1.jpg"
  },
  {
    "id":"2",
    "type":"Furniture",
    "name":"Beds and Mattresses",
    "price": 300,
    "rating": 5,
    "img": "asset/img/Furniture/beds2.jpg"
  },
  {
    "id":"3",
    "type":"Furniture",
    "name":"Sofas and Couches",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Furniture/Sofa.jpg"
  },
  {
    "id":"4",
    "type":"Furniture",
    "name":"Chairs and Recliners",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Furniture/chair1.webp"
  },
  {
    "id":"5",
    "type":"Furniture",
    "name":"Chairs and Recliners",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Furniture/chair2.webp"
  },
  {
    "id":"6",
    "type":"Furniture",
    "name":"Dining Tables",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Furniture/diningTable1.jpg"
  },
  {
    "id":"7",
    "type":"Furniture",
    "name":"Dining Tables",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Furniture/diningTable2.jpg"
  },
  {
    "id":"8",
    "type":"Furniture",
    "name":"Storage",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Furniture/storage1.jpg"
  },
  {
    "id":"8",
    "type":"Furniture",
    "name":"Storage",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Furniture/storage2.jpg"
  },
  {
    "id":"9",
    "type":"Lighting",
    "name":"Ceiling Lights",
    "price": 600,
    "rating": 3,
    "img": "asset/img/lighting/celling1.jpeg"
  },
  {
    "id":"10",
    "type":"Lighting",
    "name":"Ceiling Lights",
    "price": 600,
    "rating": 3,
    "img": "asset/img/lighting/celling2.jpeg"
  },
  {
    "id":"11",
    "type":"Lighting",
    "name":"Wall Lights",
    "price": 600,
    "rating": 3,
    "img": "asset/img/lighting/wall1.jpeg"
  },
  {
    "id":"12",
    "type":"Lighting",
    "name":"Wall Lights",
    "price": 600,
    "rating": 3,
    "img": "asset/img/lighting/wall2.jpeg"
  },
  {
    "id":"13",
    "type":"Lighting",
    "name":"Floor Lamps",
    "price": 600,
    "rating": 3,
    "img": "asset/img/lighting/floor1.jpeg"
  },
  {"id":"14",
    "type":"Lighting",
    "name":"Floor Lamps",
    "price": 600,
    "rating": 3,
    "img": "asset/img/lighting/floor2.jpeg"
  },
  {
    "id":"15",
    "type":"Lighting",
    "name":"Table Lamps",
    "price": 600,
    "rating": 3,
    "img": "asset/img/lighting/table1.jpeg"
  },
  {
    "id":"16",
    "type":"Lighting",
    "name":"Outdoor Lighting",
    "price": 600,
    "rating": 3,
    "img": "asset/img/lighting/outdoor1.jpeg"
  },
  {
    "id":"17",
    "type":"Lighting",
    "name":"Outdoor Lighting",
    "price": 600,
    "rating": 3,
    "img": "asset/img/lighting/outdoor2.jpg"
  },
  {
    "id":"18",
    "type":"Decor",
    "name":"Rugs and Carpets",
    "price": 600,
    "rating": 3,
    "img": "asset/img/decor/rug 2.jpg"
  },
  {
    "id":"19",
    "type":"Decor",
    "name":"Rugs and Carpets",
    "price": 600,
    "rating": 3,
    "img": "asset/img/decor/rugs 1.jpg"
  },
  {
    "id":"20",
    "type":"Decor",
    "name":"Curtains and Blinds",
    "price": 600,
    "rating": 3,
    "img": "asset/img/decor/curtains.webp"
  },
  {
    "id":"21",
    "type":"Decor",
    "name":"Wall Art and Mirrors",
    "price": 600,
    "rating": 3,
    "img": "asset/img/decor/mirror1.jpg"
  },
  {
    "id":"22",
    "type":"Decor",
    "name":"Wall Art and Mirrors",
    "price": 600,
    "rating": 3,
    "img": "asset/img/decor/mirror2.webp"
  },
  {
    "id":"23",
    "type":"Decor",
    "name":"Cushions and Throws",
    "price": 600,
    "rating": 3,
    "img": "asset/img/decor/cushions 1.webp"
  },
  {
    "id":"24",
    "type":"Decor",
    "name":"Cushions and Throws",
    "price": 600,
    "rating": 3,
    "img": "asset/img/decor/cushions 2.jfif"
  },
  {
    "id":"25",
    "type":"Decor",
    "name":"Vases and Plant Pots",
    "price": 600,
    "rating": 3,
    "img": "asset/img/decor/Swing_Planter_-_2.webp"
  },
  {
    "id":"26",
    "type":"Decor",
    "name":"Vases and Plant Pots",
    "price": 600,
    "rating": 3,
    "img": "asset/img/decor/Vases-planters 1.jpg"
  },
  {
    "id":"27",
    "type":"Kitchen",
    "name":"Cabinets and Pantries",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Kitchen/cabinets 1.jpg"
  },
  {
    "id":"28",
    "type":"Kitchen",
    "name":"Cabinets and Pantries",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Kitchen/cabinets.webp"
  },
  {
    "id":"29",
    "type":"Kitchen",
    "name":"Countertops",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Kitchen/countertop1.png"
  },
  {
    "id":"30",
    "type":"Kitchen",
    "name":"Countertops",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Kitchen/countertop2.jpg"
  },
  {
    "id":"31",
    "type":"Kitchen",
    "name":"Sinks and Faucets",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Kitchen/Sink1.jpg"
  },
  {
    "id":"32",
    "type":"Kitchen",
    "name":"Sinks and Faucets",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Kitchen/sink2.jpg"
  },
  {
    "id":"33",
    "type":"Kitchen",
    "name":"Kitchen Islands and Carts",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Kitchen/island1.jpg"
  },
  {
    "id":"34",
    "type":"Kitchen",
    "name":"Kitchen Islands and Carts",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Kitchen/island2.jpg"
  },
  {
    "id":"35",
    "type":"Kitchen",
    "name":"Backsplashes",
    "price": 600,
    "rating": 3,
    "img": "asset/img/Kitchen/back1.jpg"
  },
  {
    "id":"36",
    "type":"Bathroom",
    "name":"Vanities and Cabinets",
    "price": 600,
    "rating": 3,
    "img": "asset/img/bathroom/MEDICINE_CABINETS1.jpg"
  },
  {
    "id":"37",
    "type":"Bathroom",
    "name":"Vanities and Cabinets",
    "price": 600,
    "rating": 3,
    "img": "asset/img/bathroom/bathroom_vanity.webp"
  },
  {
    "id":"38",
    "type":"Bathroom",
    "name":"Showers and Bathtubs",
    "price": 600,
    "rating": 3,
    "img": "asset/img/bathroom/bathroom1.png"
  },
  {
    "id":"39",
    "type":"Bathroom",
    "name":"Showers and Bathtubs",
    "price": 600,
    "rating": 3,
    "img": "asset/img/bathroom/bathroom2.jpg"
  },
  {
    "id":"40",
    "type":"Bathroom",
    "name":"Toilets and Bidets",
    "price": 600,
    "rating": 3,
    "img": "asset/img/bathroom/toilets1.jpg"
  },
  {
    "id":"41",
    "type":"Bathroom",
    "name":"Toilets and Bidets",
    "price": 600,
    "rating": 3,
    "img": "asset/img/bathroom/toilets2.webp"
  },
  {
    "id":"42",
    "type":"Bathroom",
    "name":"Bathroom Sinks",
    "price": 600,
    "rating": 3,
    "img": "asset/img/bathroom/bathrooomsinks2.jpg"
  },
  {
    "id":"43",
    "type":"Bathroom",
    "name":"Mirrors and Medicine Cabinets",
    "price": 600,
    "rating": 3,
    "img": "asset/img/bathroom/MEDICINE_CABINETS1.jpg"
  },
  {
    "id":"44",
    "type":"Bathroom",
    "name":"Mirrors and Medicine Cabinets",
    "price": 600,
    "rating": 3,
    "img": "asset/img/bathroom/MEDICINE_CABINETS2.jpg"
  }
]