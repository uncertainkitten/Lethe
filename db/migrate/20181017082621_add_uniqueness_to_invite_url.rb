class AddUniquenessToInviteUrl < ActiveRecord::Migration[5.2]
  def change
    remove_index :invites, :url
    add_index :invites, :url, unique: true
  end
end
