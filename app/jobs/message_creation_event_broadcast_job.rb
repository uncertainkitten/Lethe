class MessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable
      .server
      .broadcast('channels_channel',
                 id: message.id,
                 created_at: message.created_at,
                 body: message.body,
                 user_id: message.user_id,
                 channel_id: message.channel_id)
  end
end