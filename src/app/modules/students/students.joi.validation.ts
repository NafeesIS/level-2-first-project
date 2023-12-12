import Joi from 'Joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Z][a-z]*$/),
  middleName: Joi.string().allow(''),
  lastName: Joi.string()
    .required()
    .pattern(/^[A-Z][a-z]*$/),
});

const gurdianValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

const localgurdianValidationSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  ContactNo: Joi.string().required(),
  address: Joi.string().required(),
});

const studentValidaionSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required(),
  contactNumber: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'O+',
    'O-',
    'AB+',
    'AB-',
  ),
  presentAddress: Joi.string().required(),
  parmanentAddress: Joi.string().required(),
  gurdian: gurdianValidationSchema.required(),
  localGurdian: localgurdianValidationSchema.required(),
  profileImg: Joi.string().allow(''),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidaionSchema;
