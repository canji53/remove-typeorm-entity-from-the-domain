/**
 * value文字列がminLengthより短いか判別する関数
 * @param value 文字列
 * @param minLength 最小文字数
 * @return boolean
 */
export const isShorter = (value: string, minLength: number): boolean => {
  if (value.length < minLength) {
    return true;
  }
  return false;
};

/**
 * value文字列がmaxLengthより長いか判別する関数
 * @param value
 * @param maxLength
 */
export const isLonger = (value: string, maxLength: number): boolean => {
  if (value.length > maxLength) {
    return true;
  }
  return false;
};

/**
 * value文字列がUUID(for v4)であるか判別する関数
 */
export const isUUIDv4 = (value: string): boolean => {
  const regExpForUUIDv4 = new RegExp(
    /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  );

  if (regExpForUUIDv4.test(value)) {
    return true;
  }
  return false;
};
