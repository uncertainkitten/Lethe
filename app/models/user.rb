# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :servers,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :Server

  has_many :memberships,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Membership,
  dependent: :destroy

  has_many :joined_servers,
  through: :memberships,
  source: :server

  has_one_attached :avatar


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    verify = -1

    if user && user.is_password?(password)
      verify = 1
    elsif user
      verify = 0
    end

    if verify < 1
      return verify
    else
      return user
    end
  end
end
