class PinsController < ApplicationController

  def index
    @pins = Pin.all

    respond_to do |format|
      format.json { render json: @pins.to_json(include: :user)}
    end

  end

  def create
    @pin = new Pin(whitelisted_params)

    respond_to do |format|
      if @pin.save
        format.json { render :index }
      else

      end
    end
  end


  private

    def whitelisted_params
      Params.require(:pin).permit(:item_name, :buy_sell, :description, :user_id)
    end
end
