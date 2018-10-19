Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy] do
      resources :memberships, only: [:index, :create]
      resources :invites, only: [:create]
      resources :channels, only: [:index, :create, :destroy]
    end
    resources :memberships, only: :destroy
    resources :invites, only: [:show, :update, :index]
    resources :channels, only: [:show]
  end
end
