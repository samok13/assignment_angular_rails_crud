class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.string :item_name, null: false
      t.boolean :buy_sell, default:true
      t.text :description, null: false
      t.integer :user_id, unique: true

      t.timestamps null: false
    end
  end
end
