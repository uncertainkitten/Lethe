class ChannelSerializer < ActiveModel::Serializer
  attributes :id, :name, :server_id
  has_many :messages
end
