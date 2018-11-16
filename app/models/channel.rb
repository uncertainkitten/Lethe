# == Schema Information
#
# Table name: channels
#
#  id         :bigint(8)        not null, primary key
#  server_id  :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
    validates :name, uniqueness: {scope: :server_id}
    validates :name, presence: true

    belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Server

    has_many :messages
end
