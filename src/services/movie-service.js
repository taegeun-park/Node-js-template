const getConnection = require('../database/connection');
const MovieRepository = require('../repositories/movie-repo');

exports.findAllMoives = () => {

    return new Promise((resolve, reject) => {

        console.log('🤖 findAllMovies service function called');
        const connection = getConnection();

        const results = MovieRepository.findAllMoives(connection);

        connection.end();

        resolve(results);
    });
}

exports.findMovieByNo = (movieNo) => {

    return new Promise((resolve, reject) => {

        console.log('🤖 findMovieByNo service function called');
        const connection = getConnection();

        const result = MovieRepository.findMovieByNo(connection, movieNo);

        connection.end();

        resolve(result);
    });
};

exports.registNewMovie = (newMovie) => {

    return new Promise(async (resolve, reject) => {

        console.log('🤖 registNewMovie service function called');
        const connection = getConnection();

        connection.beginTransaction(); // 트랜젝션 시작

        try {

            const result = await MovieRepository.registNewMovie(connection, newMovie);
            console.log('🤖 result :', result.insertId);

            const insertedMovie = await MovieRepository.findMovieByNo(connection, result.insertId);
            console.log('🤖 insertedMovie :', insertedMovie);

            connection.commit();
            console.log('🤖 commit successfully');

            resolve(insertedMovie);
        } catch (err) {

            connection.rollback();
            console.error('🤖 rollback successfully');

            reject(err);
        } finally {
            connection.end();
            console.log('🤖 connection end');
        }
    })
}

exports.deleteMovieByNo = (movieNo) => {

    return new Promise(async (resolve, reject) => {

        console.log('🤖 deleteMovieByNo service function called');
        const connection = getConnection();

        const result = await MovieRepository.deleteMovieByNo(connection, movieNo);

        connection.end();

        resolve(result);
    })

};

exports.updateMovieByNo = (movieNo, changeInfo) => {

    return new Promise(async (resolve, reject) => {

        console.log('🤖 updateMovieByNo service function called');
        const connection = getConnection();

        const result = await MovieRepository.updateMovieByNo(connection, movieNo, changeInfo);
        
        connection.end();

        resolve(result);
    });
}