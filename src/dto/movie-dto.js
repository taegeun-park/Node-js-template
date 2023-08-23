class MovieDTO {

    movie_no;
    title;
    distributor;
    director;
    genre;
    release_at;

    constructor(data) {
        this.movie_no = data.movie_no;
        this.title = data.title;
        this.distributor = data.distributor;
        this.director = data.director;
        this.genre = data.genre;
        this.release_at = data.release_at;
    }
}

module.exports = MovieDTO;