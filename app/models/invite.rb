# == Schema Information
#
# Table name: invites
#
#  id         :bigint(8)        not null, primary key
#  server_id  :integer          not null
#  url        :string           not null
#  num_uses   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Invite < ApplicationRecord
  validates :url, presence: true, uniqueness: true

  after_initialize :ensure_url

  belongs_to :server,
  primary_key: :id,
  foreign_key: :server_id,
  class_name: :Server

  def self.generate_url
    SecureRandom.hex(5)
  end

  def ensure_url
    self.url ||= Invite.generate_url
  end

  def self.use!(invite)
    invite.num_uses = invite.num_uses - 1
    invite.save!

    if invite.num_uses <= 0
      invite.destroy
    end
  end
end
