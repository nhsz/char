import test from 'ava'
import chr from '../lib'

test('Test 1', t => {
  t.is(chr(65), 'A')
})

test('Test 2', t => {
  t.is(chr(97), 'a')
})

test('Test 3', t => {
  t.is(chr(8364), '€')
})

test('Test 4', t => {
  t.is(chr(64), '@')
})

test('Test 5: out of valid range', t => {
  const error = t.throws(() => {
    chr(-1)
  }, RangeError)

  t.is(error.message, 'Invalid code point -1')
})
