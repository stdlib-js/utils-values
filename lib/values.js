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

var objectKeys = require( '@stdlib/utils-keys' );
var isObjectLike = require( '@stdlib/assert-is-object-like' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Returns an array of an object's own enumerable property values.
*
* @param {ObjectLike} obj - input object
* @throws {TypeError} must provide an object-like value
* @returns {Array} value array
*
* @example
* var obj = {
*     'beep': 'boop',
*     'foo': 'bar'
* };
*
* var vals = objectValues( obj );
* // e.g., returns [ 'boop', 'bar' ]
*/
function objectValues( obj ) {
	var keys;
	var out;
	var len;
	var i;
	if ( !isObjectLike( obj ) ) {
		throw new TypeError( format( 'invalid argument. Must provide an object (except null). Value: `%s`.', obj ) );
	}
	keys = objectKeys( obj );
	len = keys.length;
	out = new Array( len );
	for ( i = 0; i < len; i++ ) {
		out[ i ] = obj[ keys[i] ];
	}
	return out;
}


// EXPORTS //

module.exports = objectValues;
