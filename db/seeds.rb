# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do
  user = User.create(username: Faker::Internet.user_name)

  3.times do
    pin = Pin.create(
      item_name: Faker::Commerce.product_name,
      description: Faker::Lorem.paragraph)
    user.pins << pin
  end

end

