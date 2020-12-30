Rails.application.routes.draw do
  resources :mindful_minutes
  resources :falls
  resources :heights
  resources :weights
  resources :exercise_durations
  resources :flights_climbeds
  resources :time_standings
  resources :steps
  resources :calorie_intakes
  resources :blood_glucoses
  resources :irreg_episodes
  resources :temps
  resources :o2_sats
  resources :resp_rates
  resources :blood_pressures
  resources :heart_rates
  resources :contacts
  resources :clinicians
  resources :active_calories
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
