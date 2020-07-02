const express = require('express');
const router = express.Router();

const calculate 	= require('../c++/build/Release/calculate'); // done
const toBinary 		= require('../c++/build/Release/toBinary'); // done
const toDecimal 	= require('../c++/build/Release/toDecimal'); //done with a warning
// const toHex 		= require('../c++/build/Release/toHex');
const toOct 		= require('../c++/build/Release/toOct'); // done with bugs




router.get('/api/getBinary', (req, res) => {
 	var result =0;

 	
	var id =req.query.id;
	result = toBinary.RUN( parseInt(id) );

  res.json(result);
});

// router.get('/dashboard', (req, res)=>{
// 	res.render('dashboard');
// });

// as u can see, i passed it in as a secondParameter
module.exports = router;
