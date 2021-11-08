var mouseEvent = "empty";
var lpox,lpoy;

canvas= document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

color= "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    

    if (mouseEvent =="mouseDown") {
        ctx.beginPath ()
        ctx.strokeStyle = color;
        ctx.lineWidth= width_of_line;

        ctx.moveTo(lpox,lpoy);
        
        ctx.lineTo(current_position_of_x, current_position_of_mouse_y);
        ctx.stroke();

    }

   lpox = current_position_of_mouse_x;
   lpoy = current_position_of_mouse_y; 
}
