import React from "react";

const getLocalValue = (key, initialValue) => {
    const localValue = JSON.parse(localStorage.getItem(key));
    if (localValue) return localValue;
    if (initialValue instanceof Function) return initialValue();
    return initialValue;
}

export const useLocalStorage = (key, initValue) => {

    const [value, setValue] = React.useState(() => getLocalValue(key, initValue));

    React.useEffect(() => {
        setValue(localStorage.setItem(key, JSON.stringify(value)))
    }, [key, value])

    return [value, setValue];
}