setup:
	yarn

dev:
	yarn dev

release:
	yarn build && yarn export
	@echo Production projects are in the ./out folder
