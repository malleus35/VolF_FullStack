const router = require('express').Router();
let Notice = require('../models/notice.model');

router.route('/').get((req, res) => {
	Notice.find()
		.then(notices => res.json(notices))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const title = req.body.title;
	const article = req.body.title;
	const author = req.body.author;
	const newNotice = new Notice({
		title,
		article,
		author
	});

	newNotice.save()
	.then(() => res.json('Exercise added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
