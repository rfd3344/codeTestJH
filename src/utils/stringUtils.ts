/*****
 * limit message to limited characters
 * @param str
 * @param limitSize default 500 characters
 *
 */
export const trimmedString = (str = '', limitSize = 500) => {
  return str.length > limitSize ? `${str.substring(0, limitSize - 3)}...` : str;
};
