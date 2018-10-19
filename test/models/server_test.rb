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

require 'test_helper'

class ServerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
