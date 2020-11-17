export {
  isValidType,
};

function isValidType (type, value) {
  if (!value || value.length === 0) return false;

  return value instanceof type ||
    (value !== null && value !== undefined && value.constructor === type);
}
