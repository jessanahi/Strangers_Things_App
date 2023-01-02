import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Logout({ logoutTime }) {
    const history = useHistory();

    const [timeoutId, setTimeoutId] = useState(null);

    useEffect(() => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        let theTimeout = setTimeout(() => {
            history.push('/home');
        }, 3000);

    setTimeoutId(theTimeout);
    }, [logoutTime, history, timeoutId]);

    return (
        <div>
            <h1>You've successfully logged out.</h1>
        </div>
    );
};

export default Logout;