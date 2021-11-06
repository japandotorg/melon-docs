MELON_DOCS=main

all:docs

netlify: all
        npm run build

melon-docs:
        -git clone https://github.com/japandotorog/melon-docs
		cd melon_docs &&
		git checkout $(MELON_DOCS)

docs:
        npm run build > npx http-server ./build

clean: 
        -rm -rf ./build

reset:
        -rm rf/node_modules
		npm install