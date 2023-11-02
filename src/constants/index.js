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
    { href: "#event", label: "Events" },
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
        labelName: "Donation of school supplies",
        smallDesc: "Encouraging the donation of school supplies to disadvantaged populations can help provide children with the tools they need to succeed.",
        description: "Encouraging the donation of school supplies to disadvantaged populations can help provide children with the tools they need to succeed. Here are some ways to promote and encourage these donations:<br />1. Raise awareness: Educate the community about the importance of school supplies for disadvantaged students. Explain that having the necessary supplies can enhance their learning experience and increase their chances of academic success.<br />2. Partner with local organizations: Collaborate with local non-profit organizations, schools, or community centers that work with disadvantaged populations. These organizations can help facilitate the collection and distribution of school supplies to those in need.<br />3. Organize school supply drives: Set up collection points in various locations, such as schools, libraries, community centers, and businesses, where people can donate new or gently used school supplies. Promote the drives through social media, local newspapers, and community bulletin boards to maximize participation.<br />4. Provide a list of needed supplies: Clearly communicate the specific school supplies that are needed, such as backpacks, notebooks, pencils, pens, rulers, calculators, and art materials. Make it easy for donors by providing a shopping list or suggesting specific brands or items that are durable and long-lasting.<br />5. Seek corporate or organizational support: Approach local businesses, corporations, and community groups to sponsor or support the school supply drive financially or by organizing employee donation campaigns. Their assistance can significantly increase the number of supplies donated.<br />6. Host fundraising events: Organize fundraising events, such as bake sales, car washes, or online crowdfunding campaigns, to raise money specifically for purchasing school supplies. This can supplement the donations and help meet the needs of more students.<br />7. Engage schools and educators: Reach out to local schools and teachers to inform them about the donation drive. They can help identify students who are in need of school supplies and distribute them to the students directly.<br />8. Express gratitude and provide updates: Thank and acknowledge donors for their contributions. Provide updates on the impact their donations have made in the lives of disadvantaged students. Sharing success stories and testimonials can further motivate others to participate and donate.<br />Remember to organize the donated school supplies, ensure their quality, and work with partner organizations to distribute them fairly and efficiently. By encouraging school supply donations, we can support disadvantaged students in their educational journey and give them a better chance to succeed.",
        rate: "22",
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: 'donation',
    },
    {
        imgUrl: event2,
        labelName: "clothing donation",
        smallDesc: "Donating clothes to disadvantaged populations can make a significant difference in their lives. To encourage clothing donations, we...",
        description: "Donating clothes to disadvantaged populations can make a significant difference in their lives. Here are a few points to encourage clothing donations: 1. Spread awareness: Raise awareness about the importance of clothing donations and the impact they can have on disadvantaged communities. Use social media platforms, local community groups, and organizations to spread the message of the clothing drive.2. Highlight the benefits: Explain how clothing donations can help individuals in need by providing them with warmth, comfort, and protection from the elements. Emphasize that donated clothes can also boost their self-esteem and improve their overall well-being.<br />3. Share success stories: Share stories of individuals or families who have benefitted from clothing donations. This can help inspire others to participate and contribute to the cause. Personal stories create a connection and demonstrate the positive impact of their donations.<br />4. Collaborate with local organizations: Partner with local charities, shelters, or non-profit organizations that are already involved in helping disadvantaged populations. They have the infrastructure and distribution networks in place to ensure that donated clothes reach those who need them the most.<br />5. Provide convenient donation options: Make it easy for people to donate their clothes by offering multiple drop-off locations or organizing clothing drives in schools, workplaces, and community centers. Consider implementing online platforms where individuals can request pick-ups or find nearby donation centers.<br />6. Educate about sustainability: Emphasize the environmental benefits of clothing donations. Explain how reusing and recycling clothes reduce waste and minimize the negative impact on the planet. Encourage individuals to donate gently used clothes instead of throwing them away.<br />7. Thank and recognize donors: Show appreciation for those who donate their clothes by publicly thanking them. Acknowledge their generosity through social media posts, newsletters, or local media to encourage more people to participate.<br />Remember to provide clear instructions on how and where to donate clothes and address any frequently asked questions. By encouraging clothing donations, we can collectively make a positive difference in the lives of disadvantaged populations.",
        rate: "23",
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: 'donation',
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