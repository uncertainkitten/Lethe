class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :server_id, index: true, null: false
      t.string :name, null: false
      t.timestamps
    end

    add_index :channels, [:name, :server_id], unique: true
  end
end
