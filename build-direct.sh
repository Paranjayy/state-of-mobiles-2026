#!/bin/bash
cd "/Users/paranjay/Developer/State Of Mobiles"
npx next build > "State Of Mobiles/build-output.log" 2>&1
echo "EXIT:$?" > "State Of Mobiles/build-exit.log"
