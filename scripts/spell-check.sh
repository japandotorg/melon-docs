#!/bin/bash

set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

source "$DIR/get-files.sh"

cd "$PARENT_DIR"
npx cspell lint --no-progress --no-summary $FILES
