/* eslint-disable no-unused-vars */
import Validate, { SchemaDefinition } from 'validate';

/**
 * validate object
 * @param {Object} data - object to validate
 * @param {SchemaDefinition} schemaDefinition - schema definition
 */
const objectValidator = (data = {}, schemaDefinition = {}) => {
  const schema = new Validate(schemaDefinition);
  const errors = schema.validate(data);

  if (!errors.length) return null;

  return errors.reduce((accumulator, currentError) => ({
    ...accumulator,
    [currentError.path]: currentError.message,
  }), {});
};

export default objectValidator;
