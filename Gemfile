# frozen_string_literal: true

source "https://rubygems.org"

#######################
gem "jekyll-theme-chirpy", "~> 6.3", ">= 6.3.1"

group :test do
  gem "html-proofer", "~> 4.4"
end
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Lock jekyll-sass-converter to 2.x on Linux-musl
if RUBY_PLATFORM =~ /linux-musl/
  gem "jekyll-sass-converter", "~> 2.0"
end
##########################
gemspec

gem "html-proofer", "~> 5.0", group: :test

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

#gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
