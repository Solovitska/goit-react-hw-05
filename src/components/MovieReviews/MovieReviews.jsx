import { useState, useEffect } from 'react'
import css from './MovieReviews.module.css'
import { useParams } from 'react-router-dom'
import { fetchMovieReviews } from '../../services-api'
import Loader from '../Loader/Loader'

export default function MovieReviews() {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false)
    const { movieId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await fetchMovieReviews(movieId)
                setReviews(data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [movieId])

    return (
        <>
            <ul className={css.reviewsList}>
                {reviews.length < 1 && !loading ?
                    <li><p>We dont have any reviews for this movie</p></li> :
                    
                    reviews.map(({ author, content, id }) => 
                        <li key={id}>
                            <h3 className={css.reviewAuthor}>{`Author: ${author}`}</h3>
                            <p className={css.reviewComment}>{content}</p>
                        </li>
                )
                }
            </ul>
            {loading && <Loader isNotAbsolute={true} />}
        </>
    )
}