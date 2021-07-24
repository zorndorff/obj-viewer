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
	npm run build && rm -r docs && mv dist/ docs/

publish: docs
	cp src/*.png docs/
	git add docs/
	git commit docs -m "published" 
	git push
