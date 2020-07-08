import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', initialValue);

    useEffect(() => {
        const body = document.getElementsByTagName('BODY')[0];
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode;