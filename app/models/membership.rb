# == Schema Information
#
# Table name: memberships
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer
#  server_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ApplicationRecord
  validates :server_id, uniqueness: {scope: :user_id}

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :server,
  primary_key: :id,
  foreign_key: :server_id,
  class_name: :Server
end
