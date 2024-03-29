Rails.application.routes.draw do
  root "dashboard#index"

  resource :sessions, only: [:new, :create, :destroy]

  resources :registrations, only: [:new,:create]

  resources :dashboard, only: [:index]
  namespace :dashboard do
    resources :tasks
  end

  namespace :tasks do
    resources :completes, only: [:update]
    resources :positions, only: [:update]
  end

  namespace :stages do
    resources :positions, only: [:update]
  end
end
