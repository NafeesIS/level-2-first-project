export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type LocalGurdian = {
  name: string;
  occupation: string;
  ContactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  email: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  presentAddress: 'string';
  parmanentAddress: 'string';
  gurdian: Gurdian;
  localGurdian: LocalGurdian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
