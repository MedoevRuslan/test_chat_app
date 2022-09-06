import { useLocalStorage } from "./useLocalStorage"

const useTogglePersist = (key, initValue) => {
    console.log('in toggle');

    const [value, setValue] = useLocalStorage(key, initValue);

    const toggle = () => {
        setValue(prev => typeof value === 'boolean' ? value : !prev)
    }

    return [value, toggle]
}

export default useTogglePersist
