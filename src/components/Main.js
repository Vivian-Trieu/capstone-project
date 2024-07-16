import Card from './Card';
import GreekSalad from '../images/greek_salad.jpg';
import Bruschetta from '../images/bruschetta.jpg';
import LemonDessert from '../images/lemon_dessert.jpg';

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
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        imageSrc: LemonDessert,
    }
];

const Main = () => {
    return (
        <main>
            <section class='specials'>
                <div class='specials-heading'>
                    <h1>This week's specials</h1>
                    <button>Online Menu</button>
                </div>
                {specials.map((special) => (
                    <Card
                        key={special.title}
                        title={special.title}
                        price={special.price}
                        description={special.description}
                        imageSrc={special.imageSrc}
                    />
                ))}
            </section>
        </main>
    );
}

export default Main;