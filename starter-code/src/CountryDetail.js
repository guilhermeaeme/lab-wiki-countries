import React, { Component, Fragment } from 'react';
import countries from './countries.json';
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
    getCountry(cca3) {
        const country = countries.filter((item) => item.cca3 === cca3);

        return country[0];
    }

    render() {
        const country = this.getCountry(this.props.match.params.cca3);

        return (
            <Fragment>
                <h1>{country.flag} {country.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30%' }}>Capital</td>
                            <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                        <td>Area</td>
                            <td>
                                {country.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        {
                            (country.borders.length) ?
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {country.borders.map((item) => {
                                            const border = this.getCountry(item);

                                            return (
                                                <li key={item}><Link to={`/${item}`}>{border.flag} {border.name.common}</Link></li>
                                            )
                                        })}
                                    </ul>
                                </td>
                            </tr>
                            :
                            null
                        }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default CountryDetail;
