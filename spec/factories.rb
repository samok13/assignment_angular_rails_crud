FactoryGirl.define do

  factory :user do
    sequence(:username){|n| "Foo#{n}"}
  end

  factory :pin do
    item_name "box"
    buy_sell true
    description "This is a description"
    user 
  end


end