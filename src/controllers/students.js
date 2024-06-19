
import { getAllStudents, getStudentById } from '../services/students.js';
import createHttpError from 'http-errors';

export const getStudentByIdController = async (
  req,
  res,
  next,
) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);

  if (!student) {
    next(createHttpError(404, 'Student not found'));
    return;
  }

try {
	const students = await getAllStudents();

	res.json({
	status: 200,
	message: 'Successfully found students!',
	data: students,
	});
} catch(err) {
	next(err);
}

    res.json({
    status: 200,
    message: `Successfully found student with id ${studentId}!`,
    data: student,
  });
};
