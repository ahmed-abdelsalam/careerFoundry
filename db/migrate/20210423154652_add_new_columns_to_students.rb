class AddNewColumnsToStudents < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :course, :string
    add_column :students, :first_name, :string
    add_column :students, :last_name, :string
  end
end
