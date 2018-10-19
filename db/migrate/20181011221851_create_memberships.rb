class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.integer :user_id, presence: true, index: true
      t.integer :server_id, presence: true

      t.timestamps
    end
    add_index :memberships, [:server_id, :user_id], unique: true
  end
end
