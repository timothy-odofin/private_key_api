const express = require('express')
const router = express.Router();
const userRouter = require('../controller/userController')

router.get('/auth-check', userRouter.login)
router.post('/login', userRouter.loginUser)

router.get('/secure', userRouter.secure)
router.post('/secure', userRouter.userSecure)

router.get('/keystore', userRouter.keystore)
router.post('/keystore', userRouter.userKeystore)

router.get('/private', userRouter.privateKey)
router.post('/private', userRouter.userKey)

router.get('/dashboard', userRouter.getAllUser)
router.get('/secure', userRouter.getHomePage)






module.exports = router
