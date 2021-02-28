install:
	gem install jekyll bundler
	bundle install

up:
	JEKYLL_GITHUB_TOKEN=blank PAGES_API_URL=http://0.0.0.0 bundle exec jekyll server --livereload

