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
	using v8::Value;
	using v8::NewStringType;
	using v8::String;

	void Method(const FunctionCallbackInfo<Value>&args){
		Isolate* isolate = args.GetIsolate();

		std::vector<int> kv;
		long long i;
		double x = 100.322, y = 200.34;

		for( i = 0; i < 100; i++){
			x += y;
		}

		auto total = Number::New(isolate, x);
		args.GetReturnValue().Set(total);
	}


	/*this function accepts 2 arguments*/
	void add(const FunctionCallbackInfo<Value>&args){
		Isolate* isolate = args.GetIsolate();

		if(args.Length() < 2){
			// throw an error:
			isolate->ThrowException(Exception::TypeError(
				String::NewFromUtf8(isolate, "Wrong number of arguments", NewStringType::kNormal).ToLocalChecked())
			);
			return;
		}

		// check the argument types:
		if(!args[0]->IsNumber() || !args[1]->IsNumber()){
			// throw an error:
			isolate->ThrowException(Exception::TypeError(
				String::NewFromUtf8(isolate, "Wrong argument types", NewStringType::kNormal).ToLocalChecked())
			);
			return;
		}

		// perform operation:
		double value = args[0].As<Number>()->Value() + args[1].As<Number>()->Value();
		Local<Number> num = Number::New(isolate, value);


		args.GetReturnValue().Set(num);
	}

	void stringReturner(const FunctionCallbackInfo<Value>& args) {
	  	Isolate* isolate = args.GetIsolate();
	  	args.GetReturnValue().Set(String::NewFromUtf8(isolate, "world", NewStringType::kNormal).ToLocalChecked());
	}


	void Initialize(Local<Object> exports){
		NODE_SET_METHOD(exports, "calc", Method);
		NODE_SET_METHOD(exports, "add", add);
		NODE_SET_METHOD(exports, "stringReturner", stringReturner);
	}

	NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);
}
