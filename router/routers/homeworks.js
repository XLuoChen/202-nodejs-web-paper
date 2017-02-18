const {Router} = require('express');
const HomeworkController = require('../../controller/homework-controller');
const router = Router();
const homeworkCtrl = new HomeworkController();

router.get('/', homeworkCtrl.getAll);

module.exports = router;