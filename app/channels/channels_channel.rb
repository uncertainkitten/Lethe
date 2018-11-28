class ChannelsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "channels_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def create(opts)
    Message.create(
      body: opts.fetch('body'),
      user_id: opts.fetch('user_id'),
      channel_id: opts.fetch('channel_id')
    )
  end
end
