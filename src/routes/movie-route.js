const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/movie-controller');

router.get('/', MovieController.findAllMoives);
router.get('/:movieNo', MovieController.findMovieByNo);
router.post('/', MovieController.registNewMovie);
router.put('/:movieNo', MovieController.updateMovieByNo);
router.delete('/:movieNo', MovieController.deleteMovieByNo);

module.exports = router;