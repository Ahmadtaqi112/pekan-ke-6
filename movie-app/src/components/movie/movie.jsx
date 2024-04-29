import styles from "./movie.module.css"

function Movie (props) {
    const { movie } = props;
    return (
        <div className={styles.movie}>
                    <img
                     className={styles.movie_image}   
                    src={movie.poster}
                     alt={movie.title} 
                     />
                     <h3 className={styles.movie__title}>{movie.title}</h3>
                     <p className={styles.movie__date}>{movie.year}</p>
                </div>
    )
}
export default Movie