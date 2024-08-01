import { faS, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ name, username, comment, imageSrc}) => {
    return (
        <div className="rating">
            <div className="stars">
                {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} />
                ))}
            </div>
            <div className="user">
                <img className="icon" src={imageSrc} alt={name} />
                <h5>{name}</h5>
                <h6 className="username">{username}</h6>
            </div>
                <h6>{comment}</h6>
        </div>
    )
}

export default Rating;