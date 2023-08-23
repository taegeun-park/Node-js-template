const MovieQuery = require('../database/movie-query');

exports.findAllMoives = (connection) => {
    return new Promise((resolve, reject) => {

        connection.query(MovieQuery.findAllMovies(), (err, results) => {
            if (err) {
                reject(err);
            }

            resolve(results);
        });
    });
};

exports.findMovieByNo = (connection, movieNo) => {
    return new Promise((resolve, reject) => {

        connection.query(MovieQuery.findMovieByNo(),
            [movieNo],
            (err, result) => {
                if (err) {
                    reject(err);
                }

                resolve(result)
            })
    })
}

exports.registNewMovie = (connection, newMovie) => {

    return new Promise((resolve, reject) => {

        connection.query(
            MovieQuery.registNewMovie(),
            [
                newMovie.title,
                newMovie.distributor,
                newMovie.director,
                newMovie.genre,
                newMovie.release_at
            ],
            (err, result) => {
                if (err) {
                    reject(err);
                }
                console.log('repo result : ', result);

                resolve(result);
            });
    });
};

exports.deleteMovieByNo = (connection, movieNo) => {

    return new Promise((resolve, reject) => {

        connection.query(
            MovieQuery.deleteMovieByNo(),
            [movieNo],
            (err, result) => {
                if (err) {
                    reject(err);
                }

                resolve(result);
            });
    });
};

exports.updateMovieByNo = (connection, movieNo, changeInfo) => {

    return new Promise((resolve, reject) => {

        connection.query(
            MovieQuery.updateMovieByNo(),
            [
                changeInfo.title,
                changeInfo.distributor,
                changeInfo.director,
                changeInfo.genre,
                changeInfo.release_at,
                movieNo
            ], (err, result) => {
                if (err) {
                    reject(err);
                }
                console.log('ropo result :', result);

                resolve(result);
            }
        );
    });
};