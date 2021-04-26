class CallNewUniqueIndex < ActiveRecord::Migration[6.0]
  def change
    add_index :calls, %i[start_time mentor_id], unique: true
  end
end
