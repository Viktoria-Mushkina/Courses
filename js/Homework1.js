// Задание 1
function task1(){
 function calculateGrade(students){
  for(student of students){
   let marks = student.scores;
   let sum = 0;
   for (let i = 0; i < marks.length; i++){
    sum += marks[i];
   }
   let avg = (sum / marks.length).toFixed(2);
   let gd = '';
   if (avg >= 90) gd = "A";
   else if (avg >= 80) gd = "B";
   else if (avg >= 70) gd = "C";
   else gd = "F";
   student.average = avg;
   student.grade = gd;
  }
  return students
 }
 const students = [
  { name: "Алексей", scores: [85, 92, 78] },
  { name: "Мария", scores: [95, 87, 92] }
 ];
 console.log(calculateGrade(students));
}
task1();

// Задание 2
function task2(){
 const new_products = (products, filters = undefined) => {
  if(filters == undefined) return products;
  else{
   let newpr = [];
   for(product of products){
    if (product.category == filters.category && product.price <= filters.maxPrice){
     newpr.push(product);
    }
   }
   return newpr;
  }
 }
 const products = [
  { name: "Ноутбук", price: 50000, category: "электроника" },
  { name: "Стул", price: 5000, category: "мебель" },
  { name: "Кофеварка", price: 15000, category: "электроника" }
 ];
 const filters = { maxPrice: 20000, category: "электроника"};
 console.log(new_products(products,filters));
}
task2()
