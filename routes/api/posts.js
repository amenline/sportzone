const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/authorization');

//Post model
let Post = require('../../models/post.model');

// @route   GET api/posts
// @desc    Get all Posts
// @access  PUblic
router.get('/', (req, res) => {
  Post.find()
  .sort({ date: -1 })
  .then(posts => res.json(posts))
  .catch(err => res.status(400).json({Error: err}))
});

// @route   POST api/posts
// @desc    Create a Post
// @access  Private
router.post('/', auth, (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    pictures: req.body.pictures,
    body: req.body.body,
    toDisplay: {
      homepage: req.body.toDisplay.homepage,
      news: req.body.toDisplay.news,
      teams: req.body.toDisplay.teams,
      competitions: req.body.toDisplay.competitions
    },
    tags: req.body.tags
  })
  //save Post
  newPost.save()
  .then(post => res.json(post))
  .catch(err => res.status(400).json({Error: err}));
});

// @route   GET api/posts/:id
// @desc    Get Post by ID
// @access  Public
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json({Error: err}));
});

// @route   DELETE api/posts/:id
// @desc    Delete Post by ID
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Post.findByIdAndRemove(req.params.id)
    .then(() => res.json('Post deleted'))
    .catch(err => res.status(404).json({Error: err}));
});

// @route   PUT api/posts/update/:id
// @desc    Update Post by ID
// @access  Private
router.put('/test/:id', (req, res) => {
  const filter = { _id: req.params.id }
  let updatedItems = {};
  // append item to object if provided by user
  if (req.body.title) {
    updatedItems = Object.assign({title: req.body.title}, updatedItems)
  }
  if (req.body.pictures) {
    updatedItems = Object.assign({pictures: req.body.pictures}, updatedItems)
  }
  if (req.body.body) {
    updatedItems = Object.assign({body: req.body.body}, updatedItems)
  }
  // use the user defined objects
  const updatedProd = { $set: updatedItems };
  // update function
  Post.findOneAndUpdate(
    filter,
    updatedProd,
    {new: true},
    (err, data) => {
      if (err) res.status(404).json({Error: err});
      res.json({ msg: data });
    }
  )
})

module.exports = router;