/**
 * create a new object without null properties
 * @param {Object} object - object to parse
 * @returns {Object} a new object without null properties
 */
const deleteObjectNullProperties = (object = {}) => {
  const copyObject = { ...object };
  Object.keys(object).forEach((keyname) => {
    if (!copyObject[keyname]) delete copyObject[keyname];
  });
  return copyObject;
};

export default deleteObjectNullProperties;
