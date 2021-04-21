class ChangeMentorNameRequired < ActiveRecord::Migration[6.0]
  def change
    change_column :mentors, :name, :string, null: false
  end
end
