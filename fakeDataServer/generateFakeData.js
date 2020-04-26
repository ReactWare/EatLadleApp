const faker = require('faker');
const fs = require('fs');
const path = require('path')

const arrayOfRestaurantInfo = [];
const restaurantSuffixes = [' House', ' Express', ' Restaurant', ' Bistro', ' Cuisine', ' Bar', ' Pub', ' Deli', ' Barbeque', ' BBQ', ' Buffet', ' Sandwiches', ' Chicken'];
const category = ['Asian', 'American', 'Italian', 'Mexican'];
const possibleOpenHours = [8,9,10,11,12];
const possibleCloseHours = [18,19,20,21,22];
const possibleCity = [['San Francisco', 'CA'], ['New York', 'NY'], ['Dallas', 'TX'], ['Los Angeles', 'CA'], ['San Diego', 'CA']];
const foodCategory = ['entree', 'side', 'drink', 'dessert'];
const boolean = [true, false]

const getRandomElement = (array) => {
  return (array[Math.floor(Math.random() * array.length)])
}

menuItemsGenerator = () => {
  const result = [];
  for (var i = 0; i < Math.floor(Math.random() * (8) + 6); i++) {
    result.push({
        name: faker.random.words(),
        itemId: i,
        category: getRandomElement(foodCategory),
        description: faker.lorem.sentence(),
        allergies: {
          vegetarian: getRandomElement(boolean),
          vegan: getRandomElement(boolean),
          nutFree: getRandomElement(boolean),
          eggFree: getRandomElement(boolean),
          shellfishFree: getRandomElement(boolean),
          glutenFree: getRandomElement(boolean),
          other: '',
        },
        picture: faker.image.food(),
    })
  }
  return [result, i]
}

const kitGenerator = (foodNumber) => {
  const result = []
  
  
  for (let i = 0; i < Math.floor(Math.random() * 5 + 3); i++) {
    let name = faker.random.words();
    let content = [];
    for (let i = 0; i < Math.floor(Math.random() * (3) + 3); i++) {
      content.push(Math.floor(Math.random() * foodNumber))
    }
    result.push({
      name,
      description: faker.lorem.sentence(),
      content,
    })
  }
  return result;
}


module.exports = () => {
for (let i = 0; i < 40; i++) {
  let city = getRandomElement(possibleCity);
  let open = getRandomElement(possibleOpenHours);
  let close = getRandomElement(possibleCloseHours);
  const menu = menuItemsGenerator();
  let restaurantInfo = {
    name: faker.name.firstName() + getRandomElement(restaurantSuffixes),
    category: getRandomElement(category),
    hours: {
      monday: {
        open,
        close,
      },
      tuesday: {
        open,
        close,
      },
      wednesday: {
        open,
        close,
      },
      thursday: {
        open,
        close,
      },
      thursday: {
        open,
        close,
      },
      friday: {
        open,
        close,
      },
      saturday: {
        open,
        close,
      },
      sunday: {
        open,
        close,
      }
    },
    phoneNumber: faker.phone.phoneNumberFormat(1),
    location: {
      address: faker.address.streetAddress(),
      city: city[0],
      state: city[1],
      zipCode: faker.address.zipCode(),
      country: 'US'
    },
    menu: {
      items: menu[0],
      kits: kitGenerator(menu[1])
    },
  }
  arrayOfRestaurantInfo.push(restaurantInfo)
}


return arrayOfRestaurantInfo
}
