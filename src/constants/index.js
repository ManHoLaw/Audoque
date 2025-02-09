export const navLists = ["Chef's Selection", "Cake", "Roll", "Basque Cake"];

import { 
    machacakeImg,
} from "../utils"

export const cakePrice =  [
    {
        type: 'cake',
        price: '£32 - £45'
    }
]
export const basqueCakePrice =  [
    {
        price: '£28 - £34',
        type: 'basquecake',
        flavour: 'Original'
    },
    {
        price: '£30 - £36',
        type: 'basquecake',
        flavour: 'Flavoured'
    }
]

export const rollCakePrice = [
    {
        type: 'roll',
        price: '£6.5 - £35'
    }
]


export const cakes = [
    {
        id:1,
        chefSelection: true,
        type: 'cake',
        title: 'Matcha Whole cake',
        flavour: false,
        img: machacakeImg
    },
    {
        id:2,
        chefSelection: true,
        type: 'roll',
        title: 'Matcha roll',
        flavour: false,
        img: machacakeImg
    },
    {
        id:3,
        chefSelection: false,
        type: 'basquecake',
        title: 'Chocolate basque cake',
        flavour: true,
        img: machacakeImg
    },
    {
        id:4,
        chefSelection: false,
        type: 'cake',
        title: 'Strawberry Whole cake',
        flavour: false,
        img: machacakeImg
    },
    {
        id:5,
        chefSelection: false,
        type: 'cake',
        title: 'Coffee Whole cake',
        flavour: false,
        img: machacakeImg
    },
    {
        id:6,
        chefSelection: false,
        type: 'roll',
        title: 'Coffee roll',
        flavour: false,
        img: machacakeImg
    },
    {
        id:7,
        chefSelection: false,
        type: 'basquecake',
        title: 'Black Sesame Basque cake',
        flavour: true,
        img: machacakeImg
    },
    {
        id:8,
        chefSelection: true,
        type: 'basquecake',
        title: '.. Basque cake',
        flavour: false,
        img: machacakeImg
    },
    {
        id:9,
        chefSelection: false,
        type: 'roll',
        title: 'Chocolate roll',
        flavour: false,
        img: machacakeImg
    },
];