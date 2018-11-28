class Message < ApplicationRecord
  after_create_commit do
    MessageCreationEventBroadcastJob.perform_later(self)
  end

  belongs_to :channel,
  primary_key: :id,
  foreign_key: :channel_id,
  class_name: :Channel

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
end
