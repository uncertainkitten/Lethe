class CreateInvites < ActiveRecord::Migration[5.2]
  def change
    create_table :invites do |t|
      t.integer :server_id, null: false, index: true
      t.string :url, null: false, index: true
      t.integer :num_uses
      t.timestamps
    end
  end
end
