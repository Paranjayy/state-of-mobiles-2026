#!/bin/bash
cd "/Users/paranjay/Developer/State Of Mobiles"
rm -rf .next out
npx next build > build-output.log 2>&1
echo "EXIT:$?" > build-exit.log
