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

require 'test_helper'

class InviteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
