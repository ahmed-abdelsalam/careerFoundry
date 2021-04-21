Rails.application.routes.draw do
  devise_for :students
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'home#index'
  get '/app', to: 'home#app'
  get '/app/*page', to: 'home#app', via: :all
  
  get '/api/v1/agendas', to: 'home#agenda'

  namespace :api do
    namespace :v1 do
      resources :mentors do
        resources :agendas
      end
      resources :students do
        resources :agendas
      end
    end
  end
end
