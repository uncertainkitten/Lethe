class Api::MessagesController < ApplicationController
  def index
    @messages = Message.joins(:user).select(:id, :body, :channel_id, :user_id, :created_at, :username).all
    render :index
  end

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id

    if @message.save
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
