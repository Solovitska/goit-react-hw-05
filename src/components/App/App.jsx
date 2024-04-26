import Navigation from '../Navigation/Navigation';
import Loader from '../Loader/Loader';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';

const App = () => {
    return (
        <>
            <Navigation />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/movies' element={<MoviesPage />} />
                    <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
                        <Route path='cast' element={<MovieCast />} />
                        <Route path='reviews' element={<MovieReviews />} />
                    </Route>
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default App;