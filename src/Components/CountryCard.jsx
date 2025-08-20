export const CountryCard = ({ country }) => {

    return (
        <div className="country-card">
            <img src={country.flag} alt={country.name} className="flag-img" />
            <div>
                <span className="country-name">{country.name}</span>
                <br />
                <span className="country-region">{country.region}</span>
            </div>
        </div>
    )
}