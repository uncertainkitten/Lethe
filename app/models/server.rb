# == Schema Information
#
# Table name: servers
#
#  id         :bigint(8)        not null, primary key
#  owner_id   :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Server < ApplicationRecord
  validates :owner_id, :name, presence: true
  validates :name, uniqueness: true

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  has_many :memberships,
  primary_key: :id,
  foreign_key: :server_id,
  class_name: :Membership,
  dependent: :destroy

  has_many :members,
  through: :memberships,
  source: :user

  has_many :invites,
  primary_key: :id,
  foreign_key: :server_id,
  class_name: :Invite,
  dependent: :destroy

  has_one_attached :icon
end
