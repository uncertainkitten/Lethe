class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    server_channel = ChannelsChannel.find(params[:channel])
    stream_for server_channel
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
