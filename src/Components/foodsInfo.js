const foodsInfo = [
    {
        key:"JB4K0SpF",
        title: 'Egg Benedict',
        image: "https://i.imgur.com/TK5qFcw.png",
        price: 8.99,
        type: 'breakfast',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key: "lCYfJd0z",
        title: 'Bagel and Cream Cheese',
        image: "https://i.imgur.com/RYvM09O.png",
        price: 6.99,
        type: 'breakfast',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key: "1w0gxpWx",
        title: 'Breakfast Sandwitch',
        image: "https://i.imgur.com/jOI2GFB.png",
        price: 9.99,
        type: 'breakfast',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key: "ieXZwlYM",
        title: 'Baked Chicken',
        image: "https://i.imgur.com/XCLr8PR.png",
        price: 10.99,
        type: 'breakfast',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key:"9jKYIOpK",
        title: 'Toast Corrisant Fried Egg',
        image: "https://i.imgur.com/S6d2Gmi.png",
        price: 19.99,
        type: 'breakfast',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key:"bDFXWNhm",
        title: 'Full Breakfast Fried Eggs',
        image: "https://i.imgur.com/Jddefov.png",
        price: 15.99,
        type: 'breakfast',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {

        key: "A9uKB21j",
        title: 'Healty Meal Combo',
        image: "https://i.imgur.com/JnPUJuD.png",
        price: 23.99,
        type: 'lunch',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key: "BtKo9A3u",
        title: 'Fried Chicken Bento',
        image: "https://i.imgur.com/xefsUOX.png",
        price: 9.99,
        type: 'lunch',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key: "xseXCcde",
        title: 'Tarragon Rubbed Salmon',
        image: "https://i.imgur.com/6ybZfrY.png",
        price: 6.99,
        type: 'lunch',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key: "F3mDcZxh",
        title: 'Indian Lunch',
        image: "https://i.imgur.com/5NtMMem.png",
        price: 8.99,
        type: 'lunch',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key: "bQI1R45T",
        title: 'Beef Steak',
        image: "https://i.imgur.com/jNhC8gT.png",
        price: 15.99,
        type: 'lunch',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key: "6DazE2Ke",
        title: 'Salmon with Peppers',
        image: "https://i.imgur.com/3khrf2x.png",
        price: 7.99,
        type: 'lunch',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key: "cnPcev3d",
        title: 'Salmon with Lentil Salad',
        image: "https://i.imgur.com/4sr1nCT.png",
        price: 9.99,
        type: 'dinner',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key: "gS3vSCMD",
        title: 'Lemony Salmon Piccata',
        image: "https://i.imgur.com/0StKXW3.png",
        price: 10.99,
        type: 'dinner',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key: "w9Jqw39t",
        title: 'Lamb Tenderloin',
        image: "https://i.imgur.com/fdGrWnj.png",
        price: 12.99,
        type: 'dinner',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key: "2UMVBVpO",
        title: 'French Fries with Cheese',
        image: "https://i.imgur.com/LKr9ZKm.png",
        price: 8.99,
        type: 'dinner',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key: "SReZiAFo",
        title: 'Garlic Butter Baked Salmon',
        image: "https://i.imgur.com/FbesjiD.png",
        price: 6.99,
        type: 'dinner',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    },
    {
        key: "pigJ5R9x",
        title: 'Baked Chicken',
        image: "https://i.imgur.com/giSoSR3.png",
        price: 9.99,
        type: 'dinner',
        phrase: 'Love what you eat',
        description: `“The secret of success in life is to eat what you like and let the food fight it out inside.” 
        -Mark Twain`
    }
]

export default foodsInfo;