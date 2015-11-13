require 'active_support/core_ext/array/grouping'

activate :livereload
activate :directory_indexes

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end

activate :google_analytics do |ga|
  ga.tracking_id = ''
  ga.minify = true
end

activate :s3_sync do |s3_sync|
  s3_sync.bucket = 'atlas.networkedartifacts.info'
  s3_sync.region = 'eu-central-1'
  s3_sync.aws_access_key_id = ENV['ACCESS_KEY_ID']
  s3_sync.aws_secret_access_key = ENV['SECRET_ACCESS_KEY']
end
