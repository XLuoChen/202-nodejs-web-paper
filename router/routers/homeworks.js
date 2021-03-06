const {Router} = require('express');
const HomeworkController = require('../../controller/homework-controller');

const router = Router();
const homeworkCtrl = new HomeworkController();

router.get('/', homeworkCtrl.getAll);
router.get('/:homeworkId', homeworkCtrl.getOne);
router.delete('/:homeworkId', homeworkCtrl.delete);
router.put('/:homeworkId', homeworkCtrl.update);
router.post('/', homeworkCtrl.create);

module.exports = router;