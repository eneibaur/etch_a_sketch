# etch_a_sketch

The Etch-A-Sketch assignment from the Odin Project.

From what I can see, the most basic functionality of this app is a simple grid, one whose squares toggle
between two states - black and white. The prompt for this change is the mouse hovering over each individual
square. Additionally, the square starts as a 16x16 grid, but has the option to go all the way up to a 64x64
"pixel" grid.

Bonus functionality is an "opacity" mode, where you add levels of black one step at a time, and "rainbow" mode,
where a random bright hue is placed on the canvas instead of straight black. Other possible bonus features would
be a "reset" feature, which returns the squares to white, an "eraser", which is essentially a hard-coded white
color choice, and a color picker - both for the canvas, and the user to choose a color that isn't just black.

My order of operations are going to be as follows: build the basic shell in HTML and CSS, then begin adding features.
First, I will attempt to build the grid in flexbox, using (assumedly) a loop to fill in the grid. Once the grid is in place
as expected, I will want to add event listeners to each of the squares listening for an event, or sequence of events, telling them
to change their style to black (or perhaps a javascript color variable?) on execution of the event. At that point, most of the
functionality of the website should be in place, and further experimentation is building upon those features.
