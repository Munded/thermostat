require 'sinatra'
require 'sinatra/base'

set :public_folder, proc { File.join(root) }
