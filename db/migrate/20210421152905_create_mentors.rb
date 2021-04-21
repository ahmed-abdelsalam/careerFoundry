class CreateMentors < ActiveRecord::Migration[6.0]
  def change
    create_table :mentors do |t|
      t.string :name, unique: true
      t.string :avatar_url
      t.string :course

      t.timestamps
    end
  end
end
