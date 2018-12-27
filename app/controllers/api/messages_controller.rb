class Api::MessagesController < ApplicationController
  def index
    @messages = Message.joins(:user).select(:id, :body, :channel_id, :user_id, :created_at, :username).all
    render :index
  end

  def show
    @message = Message.find_by(id: params[:id])
    if @message
      @username = @message.user.username
      render :show
    else
      render json: ["Message not found"], status: 404
    end
  end

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id

    if @message.save
      @username = @message.user.username
      render :show
    else
      render @message.errors.full_messages, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :channel_id)
  end
end
