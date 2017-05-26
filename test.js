const assert = require('assert');
const isProgrammeID = require('./');

try {
  assert(!isProgrammeID("1234"), 'IDs under 8 chars should fail');
  assert(!isProgrammeID("123413123123213421341123412423412412341232314"), 'IDs over 15 chars should fail');
  assert(!isProgrammeID(null), 'Null should fail');
  assert(!isProgrammeID(), 'Undefined should fail');
  assert(isProgrammeID("b00c3wwg"), 'Normal ID should pass');
  console.log('Tests passed');
} catch (e) {
  console.log('Tests failed');
}
