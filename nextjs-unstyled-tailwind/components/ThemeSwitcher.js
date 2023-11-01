
import React, { useState } from 'react';

export const ThemeSwitcher = () => {
    const [iconClassName, setIconClassName] = useState('pi-moon');

    const onThemeToggler = () => {
        const root = document.getElementsByTagName('html')[0];

        root.classList.toggle('dark');
        setIconClassName((prevClasName) => (prevClasName === 'pi-moon' ? 'pi-sun' : 'pi-moon'));
    };

    return (
        <div className="card flex justify-end mb-4">
            <button type="button" className="flex border-1 w-2rem h-2rem p-0 align-center justify-center" onClick={onThemeToggler}>
                <i className={`dark:text-white pi ${iconClassName}`} />
            </button>
        </div>
    );
};
