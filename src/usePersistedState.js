import { useEffect, useState } from 'react';

const usePersistedState = (defaulValue, storageKey) => {
    const localStorageValue = localStorage.getItem(storageKey);
    const [Value, SetValue] = useState(localStorageValue ? localStorageValue : defaulValue);

    useEffect(() => {
        if (Value !== 'en' && Value !== 'fr') {
            localStorage.setItem(storageKey, 'en');
            return;
        }
        localStorage.setItem(storageKey, Value);
    }, [Value]);

    return [Value, SetValue];
};

export default usePersistedState;
