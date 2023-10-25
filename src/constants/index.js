import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, 
    customer1, customer2, 
    shoe4, shoe5, shoe6, shoe7, 
    thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, 
    ljflogo, 
    evtImg1, evtImg2, evtImg3,
    actor1, actor2, actor3,
    event1, event2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#events", label: "Events" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const eventsImages = [
    {
        thumbnail: evtImg1,
        eventImg: evtImg1,
    },
    {
        thumbnail: evtImg2,
        eventImg: evtImg2,
    },
    {
        thumbnail: evtImg3,
        eventImg: evtImg3,
    },
];

export const events = [
    {
        imgUrl: event1,
        labelName: " furniture donations",
        rate: "22",
    },
    {
        imgUrl: event2,
        labelName: "cloths donation",
        rate: "23",
    },
]

export const statistics = [
    { value: '10', label: 'Members' },
    { value: '12', label: 'Events' },
    { value: '4', label: 'Partners' },
];

export const products = [
    {
        imgUrl: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgUrl: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgUrl: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgUrl: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgUrl: truckFast,
        label: "Education",
        subtext: "We provide sholarship to vulnerable and brillant children, didactic materials to shools of the Mondoni community "
    },
    {
        imgUrl: shieldTick,
        label: "Healthcare",
        subtext: "We partner with healthcare institutions to facilitate high-quality consultations and treatments."
    },
    {
        imgUrl: support,
        label: "Love to help",
        subtext: ""
    },
];

export const reviews = [
    {
        imgUrl: actor1,
        customerName: 'LIBONG Joseph',
        rating: 4.5,
        feedback: "President"
    },
    {
        imgUrl: actor2,
        customerName: 'LIBONG Patricia Mussi',
        rating: 4.5,
        feedback: "Vice President"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: instagram, alt: "instagram logo" },
    // { src: whatsapp, alt: "whatsapp logo" },
];