import test from 'ava';
import m from '.';

test('Test multiplication', t => {
	t.is(21, m(7, 3));
});
