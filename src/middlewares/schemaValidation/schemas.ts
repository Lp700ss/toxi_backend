import Joi from 'joi';

/**
 * Joi schema used by the validation middleware
 */
export const createServiceSchema = Joi.object({
  customerName: Joi.string().required(),
  customerEmail: Joi.string().required(),
  customerPhone: Joi.string().required(),
  service: Joi.string().required(),
});