// Task 1
interface ApiResponse<T>{
 data: T | null;
 status : boolean;
 message ?: string ;
 error: number;
}
type User = {
 id: number;
 name: string | null;
 email ?: string;
}
let response:ApiResponse<User> = {
 data: {
  id: 1,
  name: 'Vika'
 },
 status: true,
 message: 'hello world',
 error: 200
};

// Task 2
type Product = {
 id: number;
 title: string;
 price: number;
}
type DiscountedProduct = Product & {
 discount: number;
}
let item: DiscountedProduct = {
 id: 1,
 title: 'apple',
 price: 100,
 discount: 10
};

// Task 3
function wrap<T>(value:T) {
  return { value };
}