export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

const Products: Product[] = [
  {
    id: "0",
    name: "Milk 1L",
    price: 20,
    stock: 100,
    status: true,
  },
  {
    id: "1",
    name: "Mentos",
    price: 20,
    stock: 350,
    status: true,
  },
  {
    id: "2",
    name: "Rice",
    price: 9,
    stock: 120,
    status: false,
  },
  {
    id: "3",
    name: "Butter",
    price: 35,
    stock: 670,
    status: true,
  },
  {
    id: "4",
    name: "Yogurt",
    price: 60,
    stock: 180,
    status: false,
  },
];

export default Products;
