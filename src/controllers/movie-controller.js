const HttpStatus = require('http-status');
const MovieService = require('../services/movie-service');
const MovieDTO = require('../dto/movie-dto');

exports.findAllMoives = async (req, res, next) => {

    const results = await MovieService.findAllMoives();

    // console.log('🤖 results : ', results);

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'OK',
        results: results
    });
};

exports.findMovieByNo = async (req, res, next) => {

    movieNo = req.params.movieNo;
    console.log('🤖 movieNo : ', movieNo, '을 조회합니다');

    const result = await MovieService.findMovieByNo(movieNo);

    // console.log('🤖 result : ', result);

    if (result && result.length > 0) {
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'OK',
            result: result
        });
    }
    if (result && result.length === 0) {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'NOT FOUND',
            result: result
        });
    }
};

exports.registNewMovie = async (req, res, next) => {

    newMovie = new MovieDTO(req.body);

    const result = await MovieService.registNewMovie(newMovie);

    //console.log('🤖 result : ', result);

    if (result) {
        //성공응답
        res.status(HttpStatus.CREATED).send({
            status: HttpStatus.CREATED,
            message: 'CREATED',
            result: {
                movieNo: result.movieNo,
                title: result.title,
            },
            contentLocation: `/moives/${result.movieNo}`
        });
    } else {
        //실패응답
        res.status(HttpStatus.BAD_REQUEST).send({
            status: HttpStatus.BAD_REQUEST,
            message: 'BAD REQUEST',
            result: [],
            links: [
                {
                    rel: 'movieRegist',
                    method: 'POST',
                    href: '에러 관련 링크 공유'
                }
            ]
        });
    }
}

exports.deleteMovieByNo = async (req, res, next) => {

    movieNo = req.params.movieNo;

    const result = await MovieService.deleteMovieByNo(movieNo);

    //console.log('🤖 result : ', result);
    if (result) {
        //성공응답
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'OK',
            result:
            {
                movieNo: movieNo,
            }
        });
    } else {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'NOT FOUND',
            result: [],
            links: [
                {
                    rel: 'movieDelete',
                    method: 'DELETE',
                    href: '에러 관련 링크 공유'
                }
            ]
        })
    }
}

exports.updateMovieByNo = async (req, res, next) => {
    
    movieNo = req.params.movie_No;
    console.log('🤖 movieNo : ', movieNo, );
    changeInfo = new MovieDTO(req.body);
    console.log('🤖 changeInfo : ', changeInfo.title);

    const result = await MovieService.updateMovieByNo(movieNo, changeInfo);

    //console.log('🤖 result : ', result);
    if (result) {
        //성공응답
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'OK',
            result:
            {
                movieNo: movieNo,
            }
        });
    } else {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'NOT FOUND',
            result: [],
            links: [
                {
                    rel:'movieUpdate',
                    method: 'PUT',
                    href: '에러 관련 링크 공유'
                }
            ]
        })
    }
}