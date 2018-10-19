class Api::UsersController < ApplicationController
  before_action :protected, only: [:show, :destroy, :update]
  before_action :require_logout, only: :create

  def show
    @user = User.find_by(id: params[:id])
    if @user
      @servers = @user.joined_servers
      render :show
    else
      render json: ["User not found"], status: 404
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    unless @user
      render json: ['User not found'], status: 404
    end

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])

    unless @user
      render json: ["User not found"], status: 404
    end

    if @user.destroy
      logout!
      render :show
    else
      render json: ["Permission Denied"], status: 401
    end
  end


  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
