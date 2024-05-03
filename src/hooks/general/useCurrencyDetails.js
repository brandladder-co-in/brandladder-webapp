import { useEffect, useState } from 'react';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import { countryToCurrency } from '../../.data/currency';

const useCurrencyDetails = async (userCountry) => {
    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
        const freecurrencyapi = new Freecurrencyapi('fca_live_J5XMeeQ2QT6yeTwSOTOQoHb0PNVCIsHi8LZJsKg0');

        async function fetchCurrency() {
            try {
                const response = await freecurrencyapi.latest({
                    base_currency: 'USD',
                    currencies: countryToCurrency[userCountry],
                });
                const curr = countryToCurrency[userCountry];
                setExchangeRate(response.data[curr]);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCurrency();

        // Cleanup function if needed
        return () => {
            // Cleanup code here
        };
    }, [userCountry]);

    return exchangeRate;
};

export default useCurrencyDetails;
