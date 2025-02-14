export const navLists = ["Chef's Selection", "Cake", "Roll", "Basque Cake"];

import { 
    machacakeImg,
    macharollImg,
} from "../utils"

export const Prices = [
    {
        type: 'cake',
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

export const cakes = [
    {
        id:1,
        chefSelection: true,
        type: 'cake',
        title: 'Matcha Whole cake',
        flavour: false,
        img: machacakeImg,
        description: 'Description '
    },
    {
        id:2,
        chefSelection: true,
        type: 'roll',
        title: 'Matcha roll',
        flavour: false,
        img: macharollImg,
        description: 'Description'
    },
    {
        id:3,
        chefSelection: false,
        type: 'basquecake',
        title: 'Chocolate basque cake',
        flavour: true,
        img: machacakeImg,
        description: 'Description'
    },
    {
        id:4,
        chefSelection: false,
        type: 'cake',
        title: 'Strawberry Whole cake',
        flavour: false,
        img: machacakeImg,
        description: 'Description'
    },
    {
        id:5,
        chefSelection: false,
        type: 'cake',
        title: 'Coffee Whole cake',
        flavour: false,
        img: machacakeImg,
        description: 'Description'
    },
    {
        id:6,
        chefSelection: false,
        type: 'roll',
        title: 'Coffee roll',
        flavour: false,
        img: macharollImg,
        description: 'Description'
    },
    {
        id:7,
        chefSelection: false,
        type: 'basquecake',
        title: 'Black Sesame Basque cake',
        flavour: true,
        img: machacakeImg,
        description: 'Description'
    },
    {
        id:8,
        chefSelection: true,
        type: 'basquecake',
        title: '.. Basque cake',
        flavour: false,
        img: machacakeImg,
        description: 'Description'
    },
    {
        id:9,
        chefSelection: false,
        type: 'roll',
        title: 'Chocolate roll',
        flavour: false,
        img: macharollImg,
        description: 'Description'
    },
];