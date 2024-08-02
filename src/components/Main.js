import Card from './Card';
import Rating from './Rating';
import GreekSalad from '../images/greek_salad.jpg';
import Bruschetta from '../images/bruschetta.jpg';
import LemonDessert from '../images/lemon_dessert.jpg';
import user1 from '../images/user1.png';
import user2 from '../images/user2.png';
import user3 from '../images/user3.png';
import user4 from '../images/user4.png';
import MarioAndAdrianB from '../images/Mario_and_Adrian_B.jpg';
import RestaurantChefB from '../images/restaurant_chef_B.jpg';

const specials = [
    {
        title: 'Greek Salad',
        price: '$12.99',
        description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        imageSrc: GreekSalad,
    },
    {
        title: 'Bruschetta',
        price: '$5.99',
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        imageSrc: Bruschetta,
    },
    {
        title: 'Lemon Dessert',
        price: '$5.99',
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        imageSrc: LemonDessert,
    }
];

const ratings = [
    {
        name: 'John Green',
        username: 'jgreen',
        comment: "Amazing food and fantastic service! Will return!",
        imageSrc: user1,
    },
    {
        name: 'Michael Smith',
        username: 'mike_smith',
        comment: "Delicious dishes with wonderful ambiance!",
        imageSrc: user2,
    },
    {
        name: 'Sarah Brown',
        username: 'sarahb123',
        comment: "Best Mediterranean food in town!",
        imageSrc: user3,
    },
    {
        name: 'Jen Lopez',
        username: 'j_lo',
        comment: "Incredible dining experience every time!",
        imageSrc: user4,
    }
]

const Main = () => {
    return (
        <main>
            <section className="specials">
                <div className="specials-heading">
                    <h1>This week's specials</h1>
                    <button>Online Menu</button>
                </div>
                <div className="dishes">
                    {specials.map((special) => (
                        <Card
                            key={special.title}
                            title={special.title}
                            price={special.price}
                            description={special.description}
                            imageSrc={special.imageSrc}
                        />
                    ))}
                </div>
            </section>
            <section className="testimonials">
                    <h2>What our customers say!</h2>
                    <div className="ratings">
                    {ratings.map((ratings) => (
                        <Rating
                            key={ratings.name}
                            name={ratings.name}
                            username={ratings.username}
                            comment={ratings.comment}
                            imageSrc={ratings.imageSrc}
                        />
                    ))}
                </div>
            </section>
            <section className="about">
                <div className="about-desc">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <h6>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist. The chefs draw inspiration
                        from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally.
                        The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place
                        for a meal any time of the day.
                        <br />
                        Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States
                        to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family
                        recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant
                        and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines
                        from the Mediterranean region.
                    </h6>
                </div>
                <div className="about-images">
                    <img src={MarioAndAdrianB} alt='Mario and Adrian in the kitchen' />
                    <img src={RestaurantChefB} alt='Restaurant chef preparing dish'/>
                </div>

            </section>
        </main>
    );
}

export default Main;