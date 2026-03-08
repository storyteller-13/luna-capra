.PHONY: install server build preview clean

install:
	npm install

server:
	npx astro dev

build:
	npm run build

preview:
	npm run preview

clean:
	rm -rf dist .astro node_modules
