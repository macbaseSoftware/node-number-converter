cmd_Release/obj.target/toHex.node := g++ -o Release/obj.target/toHex.node -shared -pthread -rdynamic -m64  -Wl,-soname=toHex.node -Wl,--start-group Release/obj.target/toHex/toHex.o -Wl,--end-group 
