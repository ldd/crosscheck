'use strict';

/**
 * Helper module to manipulate item fields and strings.
 * @module parser
 */

var conf = require("./conf"),
  _ = require("lodash"),
  should = require("should"),
  CODE_FENCE = "```", // In GitHub-flavoured markdown
  LINE_ENDING_REGEX = /\r\n|\n\r|\n|\r/g;

  require("string.prototype.endswith");


/**
 * Replace all line endings with Linux line endings (\n).
 * @param {string} text
 * @return {string} Normalized string.
 * @static
 */
function normalizeLineEndings(text) {
  return text.replace(LINE_ENDING_REGEX, "\n");
}  


/**
 * Extract fields from a string. Fields are any line that begins with 
 * a specific prefix. If the same field is found twice, the last one wins.
 *
 * @param {string} text - Input text to filter, will not be modified.
 * @param {Object.<string, string>} fields - A pre-constructed Object to hold
 *    the fields extracted. Can be empty or already contain fields, which will
 *    be overridden if found within the text.
 * @return {string} the text without any line containing a field.
 *
 * @static
 */ 
function extractFields(text, fields) {
  var lines;
  var filteredLines;
  var keywordPrefix = conf.get("keywordPrefix");
  var fieldSeparator = conf.get("fieldSeparator");
  var emptyFieldValue = conf.get("emptyFieldValue");
  var startsWithRegExp = new RegExp("^" + keywordPrefix + "[a-zA-Z]");
  var inCodeFence = false;
  
  fields.should.be.type("object");

  // Could be null...
  if (!text) {
    return "";
  }

  lines = normalizeLineEndings(text).split("\n");

  // Filter out lines containing a field, keeps others.
  filteredLines = lines.filter(function (line) {
    var separatorIndex;
    var fieldName;
    var fieldValue;
    
    // Check for code fence
    if (line.substr(0, 3) === CODE_FENCE) {
      inCodeFence = !inCodeFence;
      return true;
    }

    // Ignore all lines within a code fence
    if (inCodeFence) {
      return true;
    }

    // Must begin with conf.get("keywordPrefix") + a-letter,
    if (!startsWithRegExp.test(line)) {
      return true;
    }

    line = line.trim(); // Basically a trim right due to regexp check above
  
    separatorIndex = line.indexOf(fieldSeparator);

    // Assume we have a field with an empty value
    if (separatorIndex === -1) {
      fields[line.substring(1)] = emptyFieldValue;
      return false;
    }

    // Got a field and value
    fields[line.substring(1, separatorIndex)] = line.substring(separatorIndex + 1);
    return false;
  });

  // If body has unclosed code fence, close it to get a clean canonical form
  if (inCodeFence) {
    filteredLines.push(CODE_FENCE);
  }
  
  // Return the filtered text with normalized line endings
  return filteredLines.join("\n").trim();
}  


/**
 * Serialize fields to a string. 
 *
 * @param {Object.<string, string>} fields
 * @return {string} the serialized string with one field per line. Each line 
 *    starts with a line break). Returns an empty string if there are no fields.
 *
 * @static
 */ 
function serializeFields(fields) {
  var result = "";

  _.forOwn(fields, function (value, key) {
    result += "\n" + conf.get("keywordPrefix") + key + conf.get("fieldSeparator") + value;
  });

  return result;
}

/**
 * Append a field string (produced using serializeFields) to a body while 
 * taking into account body concents to provide escaping and line spacing.
 * 
 * @param  {string} bodyStr
 * @param  {string} fieldsStr
 * @return {string} the result of appending.
 */
function append(bodyStr, fieldsStr) {
  var inCodeFence = false;

  bodyStr = bodyStr.trim();

  if (fieldsStr.length > 0) {
    // Insert 2 blank lines to separate body from fields
    bodyStr += "\n\n" + fieldsStr;
  }

  return bodyStr;
}




module.exports = {
  normalizeLineEndings : normalizeLineEndings,
  extractFields : extractFields,
  serializeFields : serializeFields,
  append : append
};