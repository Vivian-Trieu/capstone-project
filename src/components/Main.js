import Card from './Card';
import GreekSalad from '../images/greek_salad.jpg';

const Main = () => {
    const specials = [
        {
            title: 'Greek Salad',
            price: '$12.99',
            description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            imageSrc: GreekSalad,
        }
    ];

    return (
        <main>
            <section class='specials'>
                <div class='specials-heading'>
                    <h1>This week's specials</h1>
                    <button>Online Menu</button>
                </div>
                {specials.map ((special) => (
                    <Card
                        key={special.title}
                        title={special.title}
                        price={special.price}
                        description={special.description}
                        getImageSrc={special.imageSrc}
                    />
                ))}
            </section>
        </main>
    );
}

export default Main;