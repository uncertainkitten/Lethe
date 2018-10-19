class Channel < ApplicationRecord
    validates :name, uniqueness: {scope: :server_id}
    validates :name, presence: true

    belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Server
end
