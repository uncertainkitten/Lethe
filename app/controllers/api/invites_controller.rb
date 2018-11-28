class Api::InvitesController < ApplicationController
  before_action :require_login

  def index
    @invites = Invite.all
    render :index
  end

  def show
    @invite = Invite.find_by(id: params[:id])

    if @invite
      render :show
    else
      render json: ["Invite not found"], status: 404
    end
  end

  def create
    @invite = Invite.new(invite_params)
    @server = Server.find_by(id: params[:server_id])
    @invite.server_id = @server.id

    if @invite.save
      render :show
    else
      render json: @invite.errors.full_messages, status: 422
    end
  end

  def update
    @invite = Invite.find_by(id: params[:id])
    @membership = Membership.new(user_id: current_user.id, server_id: @invite.server_id)

    if @membership.save
      Invite.use!(@invite)
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  private
  def invite_params
    params.require(:invite).permit(:num_uses)
  end
end
