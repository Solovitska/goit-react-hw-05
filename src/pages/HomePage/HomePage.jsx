
import css from './HomePage.module.css';
import Loader from '../../components/Loader/Loader';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from '../../services-api';

export default function HomePage() {
    const [trends, setTrends] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await fetchTrendingMovies();
            setTrends(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={css.container}>
            <h2 className={css.title}>Trending today</h2>
            <ul className={css.list}>
                {trends.map(({ original_title: title, id }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                    </li>
                ))}
            </ul>
            {loading && <Loader />}
        </div>
    );
}