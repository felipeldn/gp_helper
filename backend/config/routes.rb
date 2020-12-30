Rails.application.routes.draw do
  get '/clinicians', to: 'clinicians#idnex'
  post '/signup', to: 'clinicians#signup'

  get '/validate', to: 'auth#validate'
  post '/signin', to: 'auth#signin'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
