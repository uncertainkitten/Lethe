class Api::SessionsController < ApplicationController
  before_action :require_logout, only: :create

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user == -1
      render json: ["Email does not exist"], status: 401
    elsif @user == 0
      render json: ["Password does not match"], status: 401
    elsif @user
      login!(@user)
      render :show
    else
      render json: ["You seem confused"], status: 418
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ["Not logged in"], status: 422
    end
  end
end
