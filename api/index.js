const express = require('express');
const router = express.Router();

const calculate 	= require('../c++/build/Release/calculate'); // done
const toBinary 		= require('../c++/build/Release/toBinary'); // done
const toDecimal 	= require('../c++/build/Release/toDecimal'); //done with a warning
// const toHex 		= require('../c++/build/Release/toHex');
const toOct 		= require('../c++/build/Release/toOct'); // done with bugs


/*all other functions work with one input... getDecimal has to first check what type number it is.*/

// router.get('/api/getDecimal', (req, res) => {
//  	var result =0;
// 	var value =req.query.value;
// 	var convertTo = req.query.to;
// 	var myObject = {
// 		"value" : value,
// 		"convertTo" : convertTo
// 	}
// 	/*im gonna pass in an object as the second parameter */
// 	result = toBinary.RUN( myObject ); // make this accept 2 params

//   res.json(result);
// });

router.get('/api/getBinary', (req, res) => {
 	var result =0;
	var value =req.query.value;
	result = toBinary.RUN( parseInt(value) );

  res.json(result);
});

router.get('/api/getOctal', (req, res) => {
 	var result =0;
	var value =req.query.value;
	result = toBinary.RUN( parseInt(value) );

  res.json(result);
});

router.get('/api/getHex', (req, res) => {
 	var result =0;
	var value =req.query.value;
	result = toBinary.RUN( parseInt(value) );

  res.json(result);
});



// router.get('/dashboard', (req, res)=>{
// 	res.render('dashboard');
// });

// as u can see, i passed it in as a secondParameter
module.exports = router;
