import Joi from 'joi';

export const createContactsSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.string().pattern(/^\+\d{12}$/).required().messages({
    'string.pattern.base': 'Phone number must be in the format +380... (12 digits after +)'
  }),
  email: Joi.string().email().required(),
  isFavourite: Joi.boolean().default(false).required(),
  contactType: Joi.string().valid('work', 'home', 'personal').default('personal').required(),
  userId: Joi.string().required(),
  photo: Joi.binary().required()
});

export const updateContactsSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  phoneNumber: Joi.string().pattern(/^\+\d{12}$/).messages({
    'string.pattern.base': 'Phone number must be in the format +380... (12 digits after +)'
  }),
  email: Joi.string().email(),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string().valid('work', 'home', 'personal').default('personal'),
  age: Joi.number().integer().min(6).max(16),
  gender: Joi.string().valid('male', 'female', 'other'),
  avgMark: Joi.number().min(2).max(12),
  onDuty: Joi.boolean(),
  photo: Joi.binary()
});

const dataToValidate = {
  name: 'Yulia Shevchenko',
  phoneNumber: '+380000000001',
  email: 'oleh1@example.com',
  isFavourite: false,
  contactType: 'personal',
};

export const validationResult = createContactsSchema.validate(dataToValidate);
if (validationResult.error) {
  console.error(validationResult.error.message);
} else {
  console.log('Data is valid!');
};
