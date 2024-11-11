
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Page3 = () => {
    const params = useParams();
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(({ data }) => setUser(data));
    }, [params.id]);

    return (
        <div>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
}

export default Page3;
