import { useState, useEffect, useMemo } from 'react';

const useLoadIcons = (iconImports) => {
    const [icons, setIcons] = useState({});
    const [loading, setLoading] = useState(true);

    const memoizedIconImports = useMemo(() => iconImports, [iconImports]);

    useEffect(() => {

        let isMounted = true;

        const loadIcons = async () => {

            const loadedIcons = {};

            for (const [iconName, importFunc] of Object.entries(memoizedIconImports)) {
                try {
                    const module = await importFunc();
                    loadedIcons[iconName] = module.default || module; // Handle default export
                } catch (error) {
                    console.error(`Error loading icon ${iconName}:`, error);
                }
            }

            if (isMounted) {
                setIcons(loadedIcons);
                setLoading(false);
            }
        };

        loadIcons();

        return () => {
            isMounted = false;
        };

    }, [memoizedIconImports]);

    return [icons, loading];
};

export default useLoadIcons;
