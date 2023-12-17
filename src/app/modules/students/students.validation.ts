import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1)
    .refine((value) => /^[A-Z][a-z]*$/.test(value), {
      message: 'First name is not in capitalize format',
    }),
  middleName: z.string(),
  lastName: z
    .string()
    .min(1)
    .refine((value) => /^[A-Z][a-z]*$/.test(value), {
      message: 'Last name is not valid',
    }),
});

const gurdianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContactNo: z.string().min(1),
});

const localGurdianValidationSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  ContactNo: z.string().min(1),
  address: z.string().min(1),
});

const studentValidationSchema = z.object({
  id: z.string().min(1),
  password: z.string().max(20),
  name: userNameValidationSchema,
  gender: z
    .enum(['male', 'female', 'other'])
    .refine((value) => typeof value === 'string', {
      message: 'Gender is required',
    }),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNumber: z.string().min(1),
  emergencyContactNo: z.string().min(1),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  gurdian: gurdianValidationSchema,
  localGurdian: localGurdianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;
