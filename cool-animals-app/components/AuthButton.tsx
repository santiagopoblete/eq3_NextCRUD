'use client';

import { useState } from 'react';

export default function AuthButton() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const handleAuth = () => {
        if (isAuthenticated) {
            setIsAuthenticated(false);
            console.log('User is not authenticated');
        }
        else {
            setIsAuthenticated(true);
            console.log('User is authenticated');
        }
    };

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAuth}>
            Authenticator
        </button>
    );
}