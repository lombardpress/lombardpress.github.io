require 'rack/jekyll'
require "rack/rewrite"
require 'yaml'

run Rack::Jekyll.new