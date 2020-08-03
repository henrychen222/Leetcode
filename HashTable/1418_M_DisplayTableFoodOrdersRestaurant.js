/**
 * 8.2 night
 * https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/
 */

const displayTable = (orders) => {
   let data = [];
   orders.sort((a, b) => Number(a[1]) - Number(b[1]));
   console.log(orders);
   let tables = new Set();
   let food = new Set();
   for (const order of orders) {
      tables.add(order[1]);
      food.add(order[2]);
   }
   console.log(tables, food);
};

const main = () => {
    let orders = [
        ["David", "3", "Ceviche"],
        ["Corina", "10", "Beef Burrito"],
        ["David", "3", "Fried Chicken"],
        ["Carla", "5", "Water"],
        ["Carla", "5", "Ceviche"],
        ["Rous", "3", "Ceviche"]
    ];
    let orders2 = [
        ["James", "12", "Fried Chicken"],
        ["Ratesh", "12", "Fried Chicken"],
        ["Amadeus", "12", "Fried Chicken"],
        ["Adam", "1", "Canadian Waffles"],
        ["Brianna", "1", "Canadian Waffles"]
    ];
    let orders3 = [
        ["Laura", "2", "Bean Burrito"],
        ["Jhon", "2", "Beef Burrito"],
        ["Melissa", "2", "Soda"]
    ];
    console.log(displayTable(orders));
    // console.log(displayTable(orders2));
    // console.log(displayTable(orders3));
};

main()