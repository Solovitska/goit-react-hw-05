
import css from './MovieCast.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieCast, imageBaseUrl } from '../../services-api'
import Loader from '../Loader/Loader'

export default function MovieCast() {
    const [castData, setCastData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const { movieId } = useParams()

    useEffect(() => {
        const fetchCastData = async () => {
            try {
                setIsLoading(true)
                const data = await fetchMovieCast(movieId)
                setCastData(data.slice(0, 5))
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCastData()
    }, [movieId])
    
    return (
        <ul className={css.castList}>
            {castData && castData.map(({ id, name, character, profile_path }) => (
                <li key={id}>
                    <img className={css.castImage} src={imageBaseUrl + profile_path} alt={name} height='400'/>
                    <h3 className={css.actorName}>{name}</h3>
                    {character && <p>{`Character: ${character}`}</p>}
                </li>
            ))}
            {isLoading && <Loader isNotAbsolute={true} />}
        </ul>
    )
}