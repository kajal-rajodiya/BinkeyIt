import { Router } from 'express'
import auth from '../middleware/auth.js'
import upload from '../middleware/multer.js'
import {  loginController, logOutController, registerUserController, verifyEmailController,uploadAvatar,updateUserDetails} from '../controllers/user.controller.js'
const userRouter = Router()
userRouter.post('/register',registerUserController)
userRouter.post('/verify-email',verifyEmailController)
userRouter.post('/login',loginController)
userRouter.get('/logout',auth,logOutController)
userRouter.put('/upload-avatar',auth,upload.single('avatar'),uploadAvatar)
userRouter.put('/update-user',auth,updateUserDetails)
export default userRouter;

