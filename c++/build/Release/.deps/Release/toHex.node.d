cmd_Release/toHex.node := ln -f "Release/obj.target/toHex.node" "Release/toHex.node" 2>/dev/null || (rm -rf "Release/toHex.node" && cp -af "Release/obj.target/toHex.node" "Release/toHex.node")
