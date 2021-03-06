/* eslint-disable */

/**
 * Counts the occurrences of a value in an array
 * @param {Array} arr - The array
 * @param {any} val - value
 * @return {Number} Number of occurrences
 */
export const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

/**
 * Removes false values from an array
 * @param  {Array} arr - The array
 * @return {Array}     A new array without false values
 */
export const compact = arr => arr.filter(Boolean);

/**
 * Converts a non-array value into array
 * @param {*} val
 * @return {Array}
 */
export const cast = val => (Array.isArray(val) ? val : [val]);

/**
 * append value into array
 * @param  {Array} arr - The array
 * @param {*} val
 * @return {Array}
 */
export const append = (arr, val) => (arr ? (arr.push(val), arr) : [val]);

/**
 * prepend value into array
 * @param  {Array} arr - The array
 * @param {*} val
 * @return {Array}
 */
export const prepend = (arr, val) => (arr ? (arr.unshift(val), arr) : [val]);

/**
 * Converts the elements that don’t have commas or double quotes to strings with comma-separated values
 * @param {Array} arr
 * @param {String} [delimiter=',']
 */
export const toCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

/**
 * Returns true if the predicate function returns true for all elements in a collection and false otherwise
 * @param {Array} arr
 * @param {Function} fn
 */
export const all = (arr, fn) => arr.every(fn);

/**
 * Checks whether all elements of the array are equal
 * @param {Array} arr
 * @return {Boolean}
 */
export const allEqual = arr => arr.every(val => val === arr[0]);

/**
 * Return an array of elements that appear in two arrays
 * @param {Array} arr
 * @param {Array} values
 */
export const similarity = (arr, values) => arr.filter(v => values.includes(v));

/**
 * Returns the average of two or more numerical values
 * @param {...number} nums
 */
export const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;

/**
 * Flattens an array up to a specified depth using recursion
 * @param {Array} arr - The array
 * @param {Number} [depth=1]
 * @return {Array}     A new array with duplicates removed
 */
export const flatten = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );

/**
 * Flattens an array recursively
 * @param  {Array} arr - The array
 * @return {Array}     A new array
 */
export const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

/**
 * Sort array by a category
 * @param {Array} arr - The array
 * @param {Any} p - parameter
 * @return {Array}
 */
export const sortBy = (arr, p) =>
  arr.slice(0).sort((a, b) => (a[p] > b[p] ? 1 : a[p] < b[p] ? -1 : 0));

/**
 * Remove duplicate items from an array
 * @param  {Array} arr - The array
 * @return {Array}     A new array with duplicates removed
 */
export const unDuplicate = arr => Array.from(new Set(arr));

/**
 * Pick a random item in an array
 * @param  {Array} arr - The array
 * @returns {*} A randomly selected value
 */
export const random = arr => arr[Math.floor(Math.random() * arr.length)];

/**
 * Remove an item of an array
 * @param  {Array} arr - The array
 * @param  {*} elem - The array
 */
export const remove = (arr, elem) => {
  if (!arr) return;
  const idx = arr.indexOf(elem);
  if (idx < 0) return;
  arr.splice(idx, 1);
};

/**
 * Split an array into chunks.
 * @param {Array} arr - The array
 * @param {Number} [limit=1]
 * @return {*[]}
 */
export const toChunks = (arr, limit = 1) => {
  if (limit < 1) {
    throw new Error('Limit value should be greater than 1');
  }

  const out = [];
  for (let i = 0, end = arr.length; i < end; i += limit) {
    out.push(arr.slice(i, i + limit));
  }
  return out;
};

/**
 * Group items by common key and return an object of items grouped by key.
 * @param {Array} arr - The array
 * @param fn
 * @return {{}}
 */
export const groupMap = (arr, fn) => {
  const out = {};
  arr.forEach(item => {
    const key = fn(item);
    out[key] = out[key] || {key, items: []};
    out[key].items.push(item);
  });
  return out;
};

/**
 * Group items by common key and return an array of groups.
 * @param {Array} arr - The array
 * @param fn
 * @return {unknown[]}
 */
export const group = (arr, fn) => Object.values(groupMap(arr, fn));

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array - The array to shuffle
 * @return {Array}      The shuffled array
 */
export const shuffle = array => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

/**
 * Returns an object composed from key-value `pairs`.
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _Array.fromEntries([['a', 1], ['b', 2]])
 * // => { 'a': 1, 'b': 2 }
 */
export function fromEntries(pairs) {
  const result = {};
  if (pairs == null) {
    return result;
  }
  for (const pair of pairs) {
    result[pair[0]] = pair[1];
  }
  return result;
}

/**
 * Gets the first element of `array`.
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _Array.head([1, 2, 3])
 * // => 1
 *
 * _Array.head([])
 * // => undefined
 */
export function head(array) {
  return array != null && array.length ? array[0] : undefined;
}

/**
 * Gets the last element of `array`.
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _Array.last([1, 2, 3])
 * // => 3
 */
export function last(array) {
  const length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

/**
 * Gets all but the first element of `array`.
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _Array.tail([1, 2, 3])
 * // => [2, 3]
 */
export function tail(array) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  const [, ...result] = array;
  return result;
}

/**
 * Creates an array of values by running each element of `array` thru `iteratee`.
 * The iteratee is invoked with three arguments: (value, index, array).
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * _Array.map([4, 8], square)
 * // => [16, 64]
 */
export function map(array, iteratee) {
  let index = -1;
  const length = array == null ? 0 : array.length;
  const result = new Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Gets a random element from `array`.
 * @param {Array} array The array to sample.
 * @returns {*} Returns the random element.
 * @example
 *
 * _Array.sample([1, 2, 3, 4])
 * // => 2
 */
export function sample(array) {
  const length = array == null ? 0 : array.length;
  return length ? array[Math.floor(Math.random() * length)] : undefined;
}

/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 * **Note:** This method is used instead of [`Array#slice`](https://mdn.io/Array/slice)
 * to ensure dense arrays are returned.
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position. A negative index will be treated as an offset from the end.
 * @param {number} [stop=array.length] The end position. A negative index will be treated as an offset from the end.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * let array = [1, 2, 3, 4]
 *
 * _Array.slice(array, 2)
 * // => [3, 4]
 */
export function slice(array, start, stop) {
  let length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  let position = start == null ? 0 : start;
  let end = stop === undefined ? length : stop;

  if (position < 0) {
    position = -position > length ? 0 : length + position;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = position > end ? 0 : (end - position) >>> 0;
  position >>>= 0;

  let index = -1;
  const result = new Array(length);
  while (++index < length) {
    result[index] = array[index + position];
  }
  return result;
}
