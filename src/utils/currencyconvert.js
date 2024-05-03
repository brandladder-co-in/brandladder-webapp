import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import { countryToCurrency } from '../.data/currency';

const freecurrencyapi = new Freecurrencyapi('fca_live_J5XMeeQ2QT6yeTwSOTOQoHb0PNVCIsHi8LZJsKg0');

async function fetchCurrency(userCountry) {
    try {
        const convertCurrency = countryToCurrency[userCountry];
        const response = await freecurrencyapi.latest({
            base_currency: 'USD',
            currencies: convertCurrency,
        });
        const curr = convertCurrency;

        return response.data[curr];
    } catch (error) {
        console.error(error);
    }
}

export default fetchCurrency;