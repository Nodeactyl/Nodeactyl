#!/bin/bash

TYPE_ERRORS="$(tsc --project ./tsconfig.json)"

if [[ -n $TYPE_ERRORS ]]; then
    echo "FOUND ERRORS"
    echo $TYPE_ERRORS
    echo "EXITING TEST"
    exit
fi
    echo "NO ERRORS FOUND"