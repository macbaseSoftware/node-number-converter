#include <node.h>
#include <iostream>
#include <string>
#include <fstream>
#include <vector>
#include <cmath>
#include <ctime>
#include <cstdlib>
#include <ios>
#include <sstream>
#include <typeinfo>

namespace calculate{
	using v8::Exception;
	using v8::FunctionCallbackInfo;
	using v8::Isolate;
	using v8::Local;
	using v8::Object;
	using v8::Number;
	using v8::Integer;
	using v8::Value;
	using v8::NewStringType;
	using v8::String;

	int vectorToIntegerConverter(std::vector<int> vecNumber){
	    int decimal = 1;
	    int total = 0;
	    for (auto& it : vecNumber)
	    {
	        total += it * decimal;
	        decimal *= 10;
	    }
	    return total;
	}

	int numberOfDigitsInInteger(int number){
		int final;
		unsigned int number_of_digits = 0;
		int n = 0;
		do{
			++number_of_digits;
			n /= number;
		}while(n);

		final = number_of_digits;
		return final;
	}

	//if convertFrom == Octal...
	int octalToDecimal(std::string value){

	}

	//if convertFrom == Binary...
	int binaryToDecimal(std::string value){

	}

	//if convertFrom == Hex...
	int hexToDecimal(std::string value){

	}

	/*beginning of main function*/
	void toDecimal(const FunctionCallbackInfo<Value>&args){
		Isolate* isolate = args.GetIsolate();
		
		int number;
		int base = 2;
		int thePower;
		int digit ;
		int sum =0;
		int final = 0;
		//string ss;


		// get the argumeents and do error checking ...
		if(args.Length() != 1){
			// throw an error:
			isolate->ThrowException(Exception::TypeError(
				String::NewFromUtf8(isolate, "Wrong number of arguments, only 1 required", NewStringType::kNormal).ToLocalChecked())
			);
			return;
		}
		if(!args[0]->IsNumber()){
			// throw an error:
			isolate->ThrowException(Exception::TypeError(
				String::NewFromUtf8(isolate, "Wrong argument types", NewStringType::kNormal).ToLocalChecked())
			);
			return;
		}
		number = args[0].As<Integer>()->Value();
		number = (int)number;

		// convert a number into a string so that we can loop through it.
		std::stringstream ss;
		ss << number;
		std::string str = ss.str();

		thePower = str.size();
		for (int i = 0; i < str.size(); i++){

			thePower--;
			digit = str[i] - '0';		
			digit = digit *pow(base, thePower) ;
			
			sum += digit;
			
		}
		final = sum;
		

		auto result = Number::New(isolate, final);
		args.GetReturnValue().Set(result);
	}
	/* end of main function*/

	void Initialize(Local<Object> exports){
		NODE_SET_METHOD(exports, "RUN", toDecimal);
		// NODE_SET_METHOD(exports, "stringReturner", stringReturner);
	}

	NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);
}
