class CreateBloodGlucoses < ActiveRecord::Migration[6.0]
  def change
    create_table :blood_glucoses do |t|
      t.float :value
      t.timestamp :date_time
      t.references :patient, foreign_key: true

      t.timestamps
    end
  end
end