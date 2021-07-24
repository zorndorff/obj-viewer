.PHONY: clean publish install
clean:
	rm -f node_modules

node_modules:
	npm i

install: node_modules

.PHONY: dev
dev: install
	npm run dev

docs: install
	npm run build && mv dist docs

publish: docs
	git commit docs -m "published" && git push