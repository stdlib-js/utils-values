/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var defineProperty = require( '@stdlib/utils-define-property' );
var indexOf = require( '@stdlib/utils-index-of' );
var objectValues = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof objectValues, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a value which is not object-like', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			objectValues( value );
		};
	}
});

tape( 'the function returns an array of an object\'s own enumerable property values', function test( t ) {
	var expected;
	var actual;
	var obj;
	var idx;
	var i;

	obj = {
		'beep': 'boop',
		'a': {
			'b': 'c'
		},
		'foo': [ 'bar' ]
	};

	expected = [
		obj.beep,
		obj.a,
		obj.foo
	];

	actual = objectValues( obj );

	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property value: '+expected[i] );
	}
	t.end();
});

tape( 'the function ignores prototype properties', function test( t ) {
	var expected;
	var actual;
	var foo;
	var idx;
	var i;

	function Foo() {
		this.a = 1;
		this.b = 2;
		return this;
	}
	Foo.prototype.beep = 'boop';

	foo = new Foo();

	actual = objectValues( foo );
	expected = [ 1, 2 ];

	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property value: '+expected[i] );
	}
	t.end();
});

tape( 'the function ignores non-enumerable properties', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {};
	defineProperty( obj, 'foo', {
		'configurable': true,
		'writable': true,
		'enumerable': false,
		'value': 'bar'
	});

	actual = objectValues( obj );
	expected = [];

	t.deepEqual( actual, expected, 'ignores non-enumerable properties' );
	t.end();
});
