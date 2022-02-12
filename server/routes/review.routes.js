const ReviewController = require('../controllers/review.controller'); 
const { authenticate } = require('../config/jwt.config');
const { upload } = require('../helpers/filehelper');



module.exports = (app) => {
    app.get('/api', ReviewController.getAll);
    app.post('/api/review/post', [upload.single('image'), authenticate], ReviewController.post);
    app.get('/api/review/user', ReviewController.getAllByLoggedInUserId);  
    app.get('/api/review/:id', ReviewController.getOne);
    app.put('/api/review/update/:id', [upload.single('image'), authenticate], ReviewController.update);
    app.delete('/api/review/delete/:id', authenticate, ReviewController.delete);  
}

