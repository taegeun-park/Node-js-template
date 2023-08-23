exports.findAllMovies = () => {

    return `
    SELECT * FROM TBL_MOVIE
    `;
};

exports.findMovieByNo = () => {

    return `
    SELECT * FROM TBL_MOVIE
    WHERE MOVIE_NO = ?
    `;
};

exports.registNewMovie = () => {

    return `
    INSERT
    INTO TBL_MOVIE
    (TITLE, DISTRIBUTOR, DIRECTOR, GENRE, RELEASE_AT)
    VALUES
    (?,?,?,?,?)
    `;
};

exports.deleteMovieByNo = () => {
    return `
    DELETE FROM TBL_MOVIE
    WHERE MOVIE_NO =?
    `;
};

exports.updateMovieByNo = () => {
    return `
    UPDATE TBL_MOVIE
    SET TITLE =?, DISTRIBUTOR =?, DIRECTOR =?, GENRE =?, RELEASE_AT =?
    WHERE MOVIE_NO = ?
    `;
}