import { useState, useEffect } from 'react';

const useUserLocation = () => {
    const [userCountry, setUserCountry] = useState('US'); // Default to US if user location is not available

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

    const askForLocationAccess = async () => {
        try {
            const permission = await new Promise((resolve, reject) => {
                navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
                    resolve(permissionStatus.state);
                }).catch(error => {
                    reject(error);
                });
            });

            if (permission === 'granted') {
                await getUserLocation();
                // showSuccessToast('Location permission granted.');
            } else if (permission === 'prompt') {
                // Prompt the user for geolocation permission
                // showErrorToast('Location permission is required for good user experience.')
            } else {
                // showSuccessToast('Location permission denied.');
            }
        } catch (error) {
            console.error('Error asking for geolocation permission:', error);
        }
    };

    useEffect(() => {
        askForLocationAccess();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return userCountry;
};

export default useUserLocation;
