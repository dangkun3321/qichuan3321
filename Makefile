setup: clean
	yarn

dev:
	yarn dev

release:
	yarn build && yarn export
	@echo Production projects are in the ./out folder

install:
	echo upload to xswitch.cn
	rsync -avz out/*  root@xswitch.cn:/var/www/xswitch/

publish: release install

clean:
	rm -rf package-lock.json node_modules
