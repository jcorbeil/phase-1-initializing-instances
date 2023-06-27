// Breakfast class
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // Lunch class
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // Dinner class
  class Dinner {
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.dessert = dessert;
    }
  }
  
  // Test cases
  // 1) breakfast has a class of breakfast
  test('breakfast has a class of breakfast', () => {
    const myBreakfast = new Breakfast('eggs', 'coffee');
    expect(myBreakfast instanceof Breakfast).toBe(true);
  });
  
  // 2) breakfast creates a new breakfast with the correct parameters
  test('breakfast creates a new breakfast with the correct parameters', () => {
    const myBreakfast = new Breakfast('eggs', 'coffee');
    expect(myBreakfast.food).toBe('eggs');
    expect(myBreakfast.drink).toBe('coffee');
  });
  
  // 3) lunch has a class of lunch
  test('lunch has a class of lunch', () => {
    const myLunch = new Lunch('salad', 'soup', 'iced tea');
    expect(myLunch instanceof Lunch).toBe(true);
  });
  
  // 4) lunch creates a new lunch with the correct parameters
  test('lunch creates a new lunch with the correct parameters', () => {
    const myLunch = new Lunch('salad', 'soup', 'iced tea');
    expect(myLunch.salad).toBe('salad');
    expect(myLunch.soup).toBe('soup');
    expect(myLunch.drink).toBe('iced tea');
  });
  
  // 5) dinner has a class of dinner
  test('dinner has a class of dinner', () => {
    const myDinner = new Dinner('salad', 'soup', 'steak', 'cake');
    expect(myDinner instanceof Dinner).toBe(true);
  });
  
  // 6) dinner creates a new dinner with the correct parameters
  test('dinner creates a new dinner with the correct parameters', () => {
    const myDinner = new Dinner('salad', 'soup', 'steak', 'cake');
    expect(myDinner.salad).toBe('salad');
    expect(myDinner.soup).toBe('soup');
    expect(myDinner.entree).toBe('steak');
    expect(myDinner.dessert).toBe('cake');
  });
  