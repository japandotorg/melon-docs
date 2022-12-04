#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
PARENT_DIR=$(dirname "$DIR")

FILES=$(find "$PARENT_DIR/docs" "$PARENT_DIR/src/pages/index.js" -type f)
