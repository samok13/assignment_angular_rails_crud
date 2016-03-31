class PinsController < ApplicationController

  def index
    @pins = Pin.order(:created_at => :desc)

    respond_to do |format|
      format.json { render json: @pins.to_json(include: :user)}
    end

  end

  def create
    @pin = Pin.new(whitelisted_params)

    respond_to do |format|
      if @pin.save
        format.json { render json: @pin.to_json }
      else
        format.json { render json: @pin.to_json, status: 422 }
      end
    end
  end


  private

    def whitelisted_params
      params.require(:pin).permit(:item_name, :buy_sell, :description, :user_id)
    end
end
