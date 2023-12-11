import express from 'express';
import { StudentControllers } from './students.controller';

const router = express.Router();

//will call controller
router.post('/create-student', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);

// export const StudentRoutes = router;
export const StudentRoutes = router;
