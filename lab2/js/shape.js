var DEFAULT_FILL_COLOR = "#FF4340";
var DEFAULT_BORDER_COLOR = "#00FF00";

function Shape()
{
    this.fillColor = DEFAULT_FILL_COLOR;
    this.borderColor = DEFAULT_BORDER_COLOR;

    this.setFillColor = function(value)
    {
        this.fillColor = value;
    }
    this.getBorderColor = function()
    {
        return this.borderColor;
    }
    this.setBorderColor = function(value)
    {
        this.borderColor = value;
    }
    this.getFillColor = function()
    {
        return this.fillColor;
    }    
}






