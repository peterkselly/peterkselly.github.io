# frozen_string_literal: true

source "https://rubygems.org"

gemspec

gem "html-proofer", "~> 5.0", group: :test

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", ">= 0.1.0" if Gem.win_platform?

#new
#gem "jekyll-theme-chirpy", ">= 6.3.1"
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
if RUBY_PLATFORM =~ /linux-musl/
  gem "jekyll-sass-converter", "~> 2.0"
end