test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
	  --timeout 20000

.PHONY: test
