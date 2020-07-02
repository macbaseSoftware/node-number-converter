#include <node.h>
#include <iostream>
#include <cmath>
#include <vector>

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

	/*beginning of main function*/
	void toBinary(const FunctionCallbackInfo<Value>&args){
		Isolate* isolate = args.GetIsolate();
		
		int number;
		int final =0;
		int newNumber ;
		int data ;
		std::vector<int> bin; /*my array*/
		int newInteger;

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
		newNumber = number;
		while(newNumber > 0){
			data = number % 2;
			newNumber = number / 2;
			if(data > 0){
				bin.push_back(1);
			}else{
				bin.push_back(0);
			}
			number = newNumber;
		}

		newInteger = vectorToIntegerConverter(bin);
		final = newInteger;
		

		auto result = Number::New(isolate, final);
		args.GetReturnValue().Set(result);
	}
	/* end of main function*/

	void Initialize(Local<Object> exports){
		NODE_SET_METHOD(exports, "RUN", toBinary);
		// NODE_SET_METHOD(exports, "stringReturner", stringReturner);
	}

	NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);
}
