class Api::ServersController < ApplicationController
  before_action :require_login, only: [:show, :create, :index]
  before_action :protected_server, only: [:update, :destroy]

  def index
    @servers = Server.all.includes(:owner)
    render :index
  end

  def show
    @server = Server.find_by(id: params[:id])

    if @server
      @memberships = @server.memberships.map {|membership| membership}
      render :show
    else
      render json: ["Server not found"], status: 404
    end
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id

    if @server.save
      @membership = Membership.new(user_id: @server.owner.id, server_id: @server.id)
      @membership.save
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = Server.find_by(id: params[:id])

    unless @server
      render json: ["Server not found"], status: 404
    end

    if @server.update(server_params)
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find_by(id: params[:id])
    server_id = @server.id

    unless @server
      render json: ["Server not found"], status: 404
    end

    if @server.destroy
      render json: {}
    else
      render json: @server.errors.full_messages, status: 418
    end
  end

  private
  def server_params
    params.require(:server).permit(:name)
  end
end
