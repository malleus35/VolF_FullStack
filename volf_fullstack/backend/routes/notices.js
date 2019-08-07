const router = require('express').Router();
let Notice = require('../models/notice.model');

router.route('/').get((req, res) => {
	Notice.find()
		.then(notices => res.json(notices))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const title = req.body.title;
	const article = req.body.article;
	const author = req.body.author;
	const newNotice = new Notice({
		title,
		article,
		author
	});

	newNotice.save()
	.then(() => res.json('Notice added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Notice.findById(req.params.id)
		.then(notice => res.json(notice))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Notice.findByIdAndDelete(req.params.id)
		.then(() => res.json('Notice deleted.'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
	Notice.findById(req.params.id)
		.then(notice => {
			notice.title = req.body.title;
			notice.article = req.body.article;
			notice.author = req.body.author;
			
			notice.save()
				.then(() => res.json('Notice modified!'))
				.catch(err => res.status(400).json('Error: '+ err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
