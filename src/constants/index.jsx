export const navLists = ["Chef's Selection", "Whole", "Roll", "Basque"];
export const extraLists= ["Membership Scheme", "Promotion", "Delivery options", "Order form"]
export const fillingLists= ["Matcha Panna Cotta", "White Sesame Custard", "Oolong Panna Cotta", "Mochi"]

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


export const cakes = [
    {
        id:1,
        chefSelection: true,
        type: 'whole',
        title: 'Matcha Whole cake',
        flavour: false,
        img: machawcakeImg,
        description: 'Description '
    },
    {
        id:2,
        chefSelection: true,
        type: 'whole',
        title: 'Oolong Whole cake',
        flavour: false,
        img: oolongwcakeImg,
        description: 'Description'
    },
    {
        id:3,
        chefSelection: false,
        type: 'whole',
        title: 'Sesame Whole cake',
        flavour: false,
        img: sesamewcakeImg,
        description: 'Description'
    },
    {
        id:4,
        chefSelection: false,
        type: 'basquecake',
        title: 'Macha Basque cake',
        flavour: true,
        img: machabcakeImg,
        description: 'Description'
    },
    {
        id:5,
        chefSelection: false,
        type: 'basquecake',
        title: 'Oolong Basque cake',
        flavour: true,
        img: oolongbcakeImg,
        description: 'Description'
    },
    {
        id:6,
        chefSelection: false,
        type: 'basquecake',
        title: 'Sesame Basque cake',
        flavour: true,
        img: sesamebcakeImg,
        description: 'Description'
    },
    {
        id:7,
        chefSelection: false,
        type: 'basquecake',
        title: 'Original Basque cake',
        flavour: false,
        img: originbcakeImg,
        description: 'Description'
    },
    {
        id:8,
        chefSelection: true,
        type: 'roll',
        title: 'Matcha roll',
        flavour: false,
        img: matcharollImg,
        description: 'Description'
    },
    {
        id:9,
        chefSelection: false,
        type: 'roll',
        title: 'Oolong roll',
        flavour: false,
        img: oolongarollImg,
        description: 'Description'
    },
    {
        id:10,
        chefSelection: false,
        type: 'roll',
        title: 'Sesame roll',
        flavour: false,
        img: sesamerollImg,
        description: 'Description'
    },
];