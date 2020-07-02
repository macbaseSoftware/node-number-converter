#include <node.h>
#include <iostream>
#include <bits/stdc++.h>
#include <cctype>
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

	/*beginning of main function*/
	void toOct(const FunctionCallbackInfo<Value>&args){
		Isolate* isolate = args.GetIsolate();
		
		
		int i = 0;
		float number;
		int newNumber;
		float base = 8.00;
		int mainer;
		float answer = 0.00;
		// float remainder;
		float decimal ;
		int digit;
		int sum = 0;
		int final =0;
		std::vector<int> bin;

		
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

		answer = number / base;

		while(answer >0){
			
			
			/*may need to figure out why answer never goes below zero.*/
			if(answer == 0){
				i++;
			}
			if(i == 5){
				break;
			}

			/*get the mianer and the decimal*/ //1: turn it into an integer:
			mainer = (int)answer;
			decimal = answer - mainer;
			digit = base * decimal;
			bin.push_back(digit);
			number = answer;	
			answer = number / base;
		}

		newNumber = vectorToIntegerConverter(bin);

		final = newNumber;
		

		auto result = Number::New(isolate, final);
		args.GetReturnValue().Set(result);
	}
	/* end of main function*/

	void Initialize(Local<Object> exports){
		NODE_SET_METHOD(exports, "RUN", toOct);
		// NODE_SET_METHOD(exports, "stringReturner", stringReturner);
	}

	NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);
}
