export const navLists = ["Chef's Selection", "Cake", "Roll", "Basque Cake"];

import { 
    machacakeImg,
} from "../utils"

export const cakeSize =  [
    {
        size: '6"',
        type: 'cake',
        price: '£32'
    },
    {
        size: '8"',
        type: 'cake',
        price: '£45'
    },
]
export const basqueCakeSize =  [
    {
        size: '6"',
        price: '£28',
        type: 'basquecake',
        flavour: 'Original'
    },
    {
        size: '8"',
        price: '£34',
        type: 'basquecake',
        flavour: 'Original'
    },
    {
        size: '6"',
        price: '£30',
        type: 'basquecake',
        flavour: 'Flavoured'
    },
    {
        size: '8"',
        price: '£36',
        type: 'basquecake',
        flavour: 'Flavoured'
    },
]

export const rollCakeSize = [
    {
        size: 'Full',
        type: 'roll',
        price: '£35'
    },
    {
        size: 'Half',
        type: 'roll',
        price: '£22'
    },
    {
        size: 'Piece',
        type: 'roll',
        price: '£6.5'
    },
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