require 'rails_helper'

describe PinsController do

  let(:user){create(:user)}
  let(:pin){create(:pin, user: user)}

  describe "Get /pins.json" do

    let(:json){JSON.parse(response.body)}

    before do
      pin
      get :index, format: :json
    end

    it 'should respond with a success' do
      expect( response.status).to eq(200)
    end

    it 'returns a valid JSON object' do
      expect( json.first ).to be_a Hash
    end

  end

end