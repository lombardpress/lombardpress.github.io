require 'rack/jekyll'
require "rack/rewrite"
require 'yaml'

use Rack::Rewrite do
    rewrite %r{/(.+)}, lambda {     |match, rack_env| 
        if File.exists?('_site/' + match[1] + '.html')
            return '/' + match[1]  
        end
    }
end

run Rack::Jekyll.new