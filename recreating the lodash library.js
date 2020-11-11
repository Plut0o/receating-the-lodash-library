const _ = {
    clamp(num, lower, upper) {
      let lowerClampedValue = Math.max(num, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue
    },
    inRange(num, start, end) {
      let startVal = start
      let endVal = end
      if (end === undefined) {
        endVal = start
        startVal = 0
      }
      if (start > end) {
        startVal = end
        endVal = start
      }
      if (num >= startVal && num < endVal) {return true}
      else {return false}
    },
    words(string) {
      let words = string.split(' ');
      return words; 
    },
    pad(string, length, character) {
      if (character === undefined || character === '' ) character = ' ';
      if (string.length >= length) return string;
      let startPaddingLength = Math.floor((length - string.length)/2);
      let endPaddingLength = (length - string.length) - startPaddingLength;
      let paddedString  = `${character.repeat(startPaddingLength)}${string}${character.repeat(endPaddingLength)}`;
      return paddedString;
    },
    has(object, key) {
      let hasValue = object[key] != undefined ? true : false;
      return hasValue;
    },
    invert(object) {
      let invertedObject = {};
      for (key in object)  {
        let originalValue = object[key]
        invertedObject[originalValue] = key
      }
      // Object.entries(object).forEach(entery => { 
      //   const [key, value] = entery;
      //   invertedObject[value] = key;
      // });
      return invertedObject;
    },
    findKey(object, predicate) {
      for (key  in  object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue === true) return key
      }
      return undefined
    },
    drop(array, number) {
      // let newArray = array;
      // for (let i = 1 ; i <= number; i++) {
      //   newArray.shift();
      // }
      // if (number === undefined || number === 0) newArray.shift();
      // return  newArray;
      if (number === undefined || number === 0) number =1;
      let newArray = array.slice(number, array.length);
      return newArray
    },
    dropWhile(array, predicate ) {
      const cb = (element, index) => {
        return  !predicate(element, index, array);
      };
      let dropNumber = array.findIndex(cb);
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
    chunk(array, size) {
      if (size === undefined || size === 0) size =1;
      let  arrayChunks = [];
      for (let i = 0 ; i < array.length; i+= size) {
        let arrayChunk  = array.slice(i, i+size);
        arrayChunks.push(arrayChunk);
      };
      return arrayChunks;
    },
  };
  