const ssb = require('./index.js');
const assert = require('assert');

var builder = ssb();
builder.add('hello');
builder.add(['world!']);
assert.deepEqual(builder.toString(), 'hello world!');

builder.setDelimiter(',');
assert.deepEqual(builder.toString(), 'hello,world!');

assert.deepEqual(builder.toString(), builder.valueOf());

builder.clear();
assert.deepEqual(builder.toString(), '');

builder.setDelimiter(' ').add('chain').add('test');
assert.deepEqual(builder.toString(), 'chain test');

builder.clear();
builder.setReplaceString('%sgg');
builder.add('Hello, %sgg!', 'Justin');
assert.deepEqual(builder.toString(), 'Hello, Justin!');
