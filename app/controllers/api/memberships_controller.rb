class Api::MembershipsController < ApplicationController
  before_action :require_login
  before_action :protected_membership, only: :destroy

  def index
    @server = Server.find_by(id: params[:server_id])
    if @server
      @memberships = Membership.where(server_id: @server.id).includes(:user, :server)
      render :index
    else
      render json: ["Server not found"], status: 404
    end
  end

  def create
    @membership = Membership.new
    @membership.user_id = current_user.id
    @membership.server_id = Server.find_by(id: params[:server_id]).id

    if @membership.save
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @membership = Membership.find_by(id: params[:id])

    unless @membership
      render json: ["You aren't a member of this server"], status: 403 and return
    else
      membershipId = @membership.id
    end

    if @membership.destroy
      render :show
    else
      render json: @membership.errors.full_messages, status: 418
    end
  end
end
