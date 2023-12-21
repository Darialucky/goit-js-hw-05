const getTotalBalanceByGender = (users, gender) => {
    return users
    .filter(user => user.gender === gender)
    .reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

const allUsers1 = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allUsers1, "male")); // 12053

console.log(getTotalBalanceByGender(allUsers1, "female")); // 8863




































/*function getShippingCost(country) {
    let price;
    switch (country) {
        case "China":
            price = 100;
            break;

        case "Chile":
                price = 250;
                break;

        case "Australia":
            price = 170;
            break;

        case "Jamaica":
            price = 120;
            break;

        default:
            return `Sorry, there is no delivery to your country`;
         }
    return `Shipping to ${country} will cost ${price} credits`;
}


console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"*/