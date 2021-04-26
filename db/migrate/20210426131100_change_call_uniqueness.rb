class ChangeCallUniqueness < ActiveRecord::Migration[6.0]
  def change
    change_column :calls, :start_time, :datetime, null: false
  end
end
