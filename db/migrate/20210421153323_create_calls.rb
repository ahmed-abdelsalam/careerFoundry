class CreateCalls < ActiveRecord::Migration[6.0]
  def change
    create_table :calls do |t|
      t.belongs_to :student, foreign_key: true
      t.belongs_to :mentor, foreign_key: true
      t.datetime :start_time
      t.integer :duration, default: 60

      t.timestamps
    end
  end
end
