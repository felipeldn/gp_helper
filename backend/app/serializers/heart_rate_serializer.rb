class HeartRateSerializer < ActiveModel::Serializer
    attributes :id, :value, :date_time
    has_one :patient
end