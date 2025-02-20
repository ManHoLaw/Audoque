export const navLists = ["Chef's Selection", "Whole", "Roll", "Basque"];
export const extraLists= ["Membership Scheme", "Promotion", "Delivery options", "Order form"]



import { 
    machawcakeImg,
    oolongwcakeImg,
    sesamewcakeImg,
    machabcakeImg,
    oolongbcakeImg,
    sesamebcakeImg,
    originbcakeImg,
    matcharollImg,
    oolongarollImg,
    sesamerollImg,
    
} from "../utils"

export const Prices = [
    {
        type: 'whole',
        size: ['6"', '8"'],
        price: ['£32', '£45']
    },
    {
        type: 'basquecake',
        size: ['6"', '8"'],
        price: ['£28', '£34'],
        flavour: 'Original'
    },
    {
        type: 'basquecake',
        size: ['6"', '8"'],
        price: ['£30', '£36'],
        flavour: 'Flavoured'
    },
    {
        type: 'roll',
        size: ['Piece', '13cm', '26cm'],
        price: ['£6.5', '£22', '£35']
    }
]

import { newInImg } from "../utils";

export const newInLists = [newInImg, sesamerollImg, oolongbcakeImg]
export const newInTitlewLists = ["Matcha Series", "Sesame Series", "Oolong Series"]


export const cakes = [
    {
        id:1,
        chefSelection: true,
        type: 'whole',
        title: 'Matcha Whole cake',
        flavour: 'Matcha',
        img: [machawcakeImg, oolongwcakeImg],
        description: 'Description',
        ingredients: 'Ingredients'
    },
    {
        id:2,
        chefSelection: true,
        type: 'whole',
        title: 'Oolong Whole cake',
        flavour: 'Oolong',
        img: [oolongwcakeImg],
        description: 'Description',
        ingredients: 'Ingredients'
    },
    {
        id:3,
        chefSelection: false,
        type: 'whole',
        title: 'Sesame Whole cake',
        flavour: 'Sesame',
        img: [sesamewcakeImg],
        description: 'Description',
        ingredients: 'Ingredients'
    },
    {
        id:4,
        chefSelection: false,
        type: 'basquecake',
        title: 'Macha Basque cake',
        flavour: 'Matcha',
        img: [machabcakeImg],
        description: 'Description',
        ingredients: 'Ingredients'
    },
    {
        id:5,
        chefSelection: false,
        type: 'basquecake',
        title: 'Oolong Basque cake',
        flavour: 'Oolong',
        img: [oolongbcakeImg],
        description: 'Description',
        ingredients: 'Ingredients'
    },
    {
        id:6,
        chefSelection: false,
        type: 'basquecake',
        title: 'Sesame Basque cake',
        flavour: 'Sesame',
        img: [sesamebcakeImg],
        description: 'Description',
        ingredients: 'Ingredients'
    },
    {
        id:7,
        chefSelection: false,
        type: 'basquecake',
        title: 'Original Basque cake',
        flavour: '',
        img: [originbcakeImg],
        description: 'Description',
        ingredients: 'Ingredients'
    },
    {
        id:8,
        chefSelection: true,
        type: 'roll',
        title: 'Matcha roll',
        flavour: 'Matcha',
        img: [matcharollImg],
        description: 'Description',
        ingredients: 'Ingredients'
    },
    {
        id:9,
        chefSelection: false,
        type: 'roll',
        title: 'Oolong roll',
        flavour: 'Oolong',
        img: [oolongarollImg],
        description: 'Description',
        ingredients: 'Ingredients'
    },
    {
        id:10,
        chefSelection: false,
        type: 'roll',
        title: 'Sesame roll',
        flavour: 'Sesame',
        img: [sesamerollImg],
        description: 'Description',
        ingredients: 'Ingredients'
    },
]

