import { useState } from 'react';

// const getStatusDtls = async () => {

//     try {
//         const result = await navigator.permissions.query({ name: 'geolocation' });
//         return result.state;

//     } catch (error) {
//         console.error('Error while getting location permission: ', error);
//     }
// }

const getLatAndLong = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                resolve({
                    lat: latitude,
                    long: longitude,
                });
            },
            (error) => {
                reject(error);
            }
        );
    });
};

const useLocationPermission = () => {
    const [locationData, setLocationData] = useState({
        permissionStatus: null,
        location: {
            lat: 0,
            long: 0,
        },
    });

    const askForLocationAccess = async () => {
        try {
            if (navigator.permissions) {
                const result = await navigator.permissions.query({ name: 'geolocation' });
                const currState = result.state;

                if (currState === 'granted') {
                    const location = await getLatAndLong();
                    setLocationData({
                        permissionStatus: true,
                        location,
                    });
                } else if (currState === 'prompt') {
                    navigator.geolocation.getCurrentPosition(
                        async (position) => {
                            const location = await getLatAndLong();
                            setLocationData({
                                permissionStatus: true,
                                location,
                            });
                        },
                        (error) => {
                            console.error('Error obtaining location', error);
                            setLocationData({
                                permissionStatus: false,
                                location: {
                                    lat: 0,
                                    long: 0,
                                },
                            });
                        }
                    );
                } else if (currState === 'denied') {
                    setLocationData({
                        permissionStatus: false,
                        location: {
                            lat: 0,
                            long: 0,
                        },
                    });
                }
            } else {
                console.error('Permissions API is not supported by this browser');
                setLocationData({
                    permissionStatus: false,
                    location: {
                        lat: 0,
                        long: 0,
                    }, prevState: null,
                });
            }
        } catch (error) {
            console.error('Error while getting location permission: ', error);
            setLocationData({
                permissionStatus: false,
                location: {
                    lat: 0,
                    long: 0,
                },
            });
        }
    };

    return { locationData, askForLocationAccess };
};

export default useLocationPermission;
