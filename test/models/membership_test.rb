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

require 'test_helper'

class MembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
