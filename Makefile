.PHONY: clean publish install dev
clean:
	rm -fr node_modules

install: package-lock.json

dev: install
	npm run dev

docs: install
	npm run build && rm -r docs && mv dist/ docs/

package-lock.json: node_modules package.json
	$(MAKE clean)
	npm i

node_modules:
	mkdir -p $@

publish: docs
	git add docs/
	git commit docs -m "published" 
	git push
