const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
// const { Post, User, Hashtag } = require('../models');

const router = express.Router();

// router.use((req, res, next) => {
//   res.locals.user = req.user;
//   res.locals.followerCount = req.user ? req.user.Followers.length : 0;
//   res.locals.followingCount = req.user ? req.user.Followings.length : 0;
//   res.locals.followerIdList = req.user ? req.user.Followings.map(f => f.id) : [];
//   next();
// });

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile', { title: '내 정보' });
});

router.get('/login', isNotLoggedIn, (req, res) => {
  res.render('login', { title: '로그인' });
});

router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('join', { title: '회원가입' });
});

router.get('/', (req, res) => {
    res.render('main', { title: 'NodeBird' });
});

module.exports = router;