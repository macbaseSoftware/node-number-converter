cmd_Release/toOct.node := ln -f "Release/obj.target/toOct.node" "Release/toOct.node" 2>/dev/null || (rm -rf "Release/toOct.node" && cp -af "Release/obj.target/toOct.node" "Release/toOct.node")
