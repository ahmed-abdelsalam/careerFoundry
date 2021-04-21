class ChangeStarttimeToUniqueField < ActiveRecord::Migration[6.0]
  def change
    change_column :calls, :start_time, :datetime, unique: true
    change_column :calls, :mentor_id, :bigint, null: true
    change_column :calls, :student_id, :bigint, null: true
    add_column :calls, :reason, :string
  end
end
