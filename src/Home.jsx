
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(({ data }) => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Home</h1>
            {users.map(item => (
                <h1 key={item.id}>
                    <Link to={`/user/${item.id}`}>{item.name}</Link>
                </h1>
            ))}
        </div>
    );
}

export default Home;
