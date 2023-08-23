const express = require('express');
const morgan = require('morgan');
const MovieController = require('./src/controllers/movie-controller');

//MovieController.findAllMoives();

//MovieController.findMovieByNo(2);

// MovieController.registNewMovie({
//     title: '별 볼일 없는 인생',
//     distributor: '이놀미디어',
//     director: '서동현',
//     genre: '로멘스',
//     release_at: '2023-01-12'
// })

// MovieController.deleteMovieByNo(4);

// MovieController.updateMovieByNo(
//     5,
//     {
//     title: '10일간의 애인',
//     distributor: '그노스',
//     director: '송민경',
//     genre: '로멘스',
//     release_at: '2023-01-12'
// });

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const movieRouter = require('./src/routes/movie-route');
app.use('/movies',movieRouter);

app.listen(8888, () => console.log('Server is running on port 8888'));