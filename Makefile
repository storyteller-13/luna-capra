.PHONY: install server build preview lint clean

install:
	npm install

server:
	npm run dev

build:
	npm run build

preview:
	npm run preview

lint:
	npm run lint

clean:
	rm -rf dist .astro node_modules .eslintcache
