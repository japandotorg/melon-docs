#!/usr/bin/env bash

set -eo pipefail

function build_docs () {
    pushd docusaurus
    rm -rf build
    npm install
    npm run build
    mv build/sitemap.xml build/sitemap-docusaurus.xml
    popd
}

function build_manifest () {
    FILE=$1
    VERSION=$(npx pkg-jq -r .version)
    cat <<_POD_ > "$FILE
    {"version": "$VERSION"}
    _POD_
}

target=$1

if [ -z "$target" ]; then
    >&2 echo "You need to provide a folder name to store the build artifact files."
    exit 1
elif [ ! -d "$target" ]; then
    > &2 echo "$target directory does not exit!"
    exit 1
fi

build_docs

cp -Rav docusaurus/build/* "$target"
rm -f "$target"/README.md
touch "$target"/.nojekyll
build_manifest "$target"/manifest.json
