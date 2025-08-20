import { Carousel } from "react-bootstrap";

export const CarouselComponent = ({ countries }) => (
    <Carousel indicators controls={false} interval={3000} >
        {countries.map((country, idx) => (
            <Carousel.Item key={idx}>
                <div
                    className="d-flex justify-content-center align-items-center carousel-border"
                >
                    <img
                        src={country.flag}
                        alt={country.name}
                        className="d-block w-100 h-100"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <Carousel.Caption >
                    <h5>{country.name}</h5>
                    <p>{country.region}</p>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
);
