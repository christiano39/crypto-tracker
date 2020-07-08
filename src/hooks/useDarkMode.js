import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', false);

    useEffect(() => {
        const body = document.getElementsByName('body')[0];
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode;