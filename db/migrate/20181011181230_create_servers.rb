class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.integer :owner_id, null: false, index: true
      t.string :name, null: false, index: true, unique: true

      t.timestamps
    end
  end
end
