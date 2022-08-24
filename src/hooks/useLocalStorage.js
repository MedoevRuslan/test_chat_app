import React from "react";


export const useLocalStorage = (key, initValue) => {

    const [value, setValue] = React.useState(JSON.parse(localStorage.getItem(key)) || initValue);

    React.useEffect(() => {
        setValue(localStorage.setItem(key, JSON.stringify(value)))
    }, [key, value])

    return [value, setValue];
}