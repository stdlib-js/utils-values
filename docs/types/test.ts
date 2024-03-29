/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import objectValues = require( './index' );


// TESTS //

// The function returns an array of values...
{
	objectValues( { 'beep': 'boop', 'foo': 'bar' } ); // $ExpectType string[]
	objectValues( { 'beep': 'boop', 'foo': 3.14 } ); // $ExpectType (string | number)[]
	objectValues( { 'beep': 'boop', 'foo': true } ); // $ExpectType (string | boolean)[]
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	objectValues(); // $ExpectError
	objectValues( [], 2 ); // $ExpectError
}
