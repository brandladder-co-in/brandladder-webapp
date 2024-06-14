import { useState } from 'react';

const useUserLocation = () => {
    const [userCountry, setUserCountry] = useState('US');

    const getUserLocation = async () => {
        try {
            if (navigator.geolocation) {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                const { latitude, longitude } = position.coords;

                const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                const data = await response.json();

                // Extract country from response data
                const country = data.countryCode;

                setUserCountry(country);
            } else {
                console.error('Geolocation is not supported by this browser.');
                setUserCountry('US'); // Default to US if geolocation is not supported
            }
        } catch (error) {
            console.error('Error getting user location:', error);
            setUserCountry('US'); // Default to US if there's an error
        }
    };

    return { userCountry, getUserLocation };
};

export default useUserLocation;
