class CallSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :duration, :reason
  has_one :mentor
  has_one :student
end
