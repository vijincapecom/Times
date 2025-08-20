import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCountries,
    filterByRegion,
    loadMore,
} from "../Redux/Slices/CountriesSlice";
import { Button, Container, Row, Col } from "react-bootstrap";
import { CarouselComponent } from "../Components/CarouselComp";
import { HomeFooter } from "../Components/HomeFooter";
import { CountryCard } from "../Components/CountryCard";
import { LoadingComp } from "../Components/LoadingComp";
import "../customCss/homePage.css";


const Home = () => {
    const dispatch = useDispatch();
    const { filtered, region, visibleCount, loading } = useSelector(
        (state) => state.countries
    );

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    const regions = ["All", "Asia", "Europe"];

    return (
        <Container className="home-container py-4">
            <div className="top-header d-flex justify-content-between align-items-center">
                <h4 className="section-title mb-0">Countries</h4>

                <div className="hamburger d-md-none" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className="bi bi-list" style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>
                </div>

                <div className={`region-tabs ${menuOpen ? "show" : ""}`}>
                    {regions.map((r) => (
                        <button
                            key={r}
                            className={r === region ? "active" : "not"}
                            onClick={() => {
                                dispatch(filterByRegion(r));
                                setMenuOpen(false);
                            }}
                        >
                            {r}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <LoadingComp/>
            ) : (
                <>
                    <h2 className="text-center mb-4 welcome-title">WELCOME</h2>
                    <Row className="mb-4 flex-column-reverse flex-md-row">
                        <Col md={10} className="mb-3">
                            <CarouselComponent countries={filtered.slice(0, 5)} />
                        </Col>
                        <Col md={2} className="mb-3">
                            <CarouselComponent countries={filtered.slice(6, 10)} />
                        </Col>
                    </Row>
                    <Row className="g-3">
                        {filtered.slice(0, visibleCount).map((country, i) => (
                            <Col xs={12} md={6} key={i}>
                                <CountryCard country={country} />
                            </Col>
                        ))}
                    </Row>
                    {visibleCount < filtered.length && (
                        <div className="text-center mt-4">
                            <Button onClick={() => dispatch(loadMore())} className="load-more-btn">
                                Load more
                            </Button>
                        </div>
                    )}
                </>
            )}
            <HomeFooter />
        </Container>
    );
};

export default Home;
