 /**
 * Get a random integer between the specified minimum and maximum
 * @param {number} min minimum
 * @param {number} max maximum
 * @return {number} random number between the requested minimum and maximum
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

 /**
 * Exports a string builder constructor
 * @return {constructor}
 */
module.exports = function() {
  var strings = [];
  var delimiter = ' ';
  var replace_string = '%s';
  var simpleStringBuilder = {
    add: function(toAdd) {
      var string_to_push = '';
      if (typeof toAdd == 'string') {
        string_to_push = toAdd;
      } else {
        var index = getRandomInt(0, toAdd.length);
        string_to_push = toAdd[index];
      }
      for (var index = 1; index < arguments.length; index++) {
        string_to_push =
            string_to_push.replace(replace_string, arguments[index]);
      }
      strings.push(string_to_push);
      return this;
    },
    clear: function() {
      strings = [];
      return this;
    },
    setDelimiter: function(newDelimiter) {
      delimiter = newDelimiter;
      return this;
    },
    setReplaceString: function(newReplaceString) {
      replace_string = newReplaceString;
      return this;
    },
    toString: function() {
      var returnString = '';
      for (var index = 0; index < strings.length; index++) {
        returnString += strings[index];
        if (index != strings.length - 1) {
          returnString += delimiter;
        }
      }
      return returnString;
    },
    valueOf: function() {
      return this.toString();
    }
  };

  return simpleStringBuilder;
};
