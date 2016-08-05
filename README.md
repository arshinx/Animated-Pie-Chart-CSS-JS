# Animated Pie Chart 

Add Animated Pie Charts using the template files.

Add a element to your site to represent chart and add the **data-percent** attribute with the percent number the pie chart should have:

`<div class="chart" data-percent="73">73%</div>`

Finally you have to initialize the plugin with your desired configuration:
`
<script type="text/javascript">
$(function() {
    $('.chart').easyPieChart({
        //your configuration goes here
    });
});
</script>
`

## Configure Charts

__barColor__	`#ef1e25`	The color of the curcular bar. You can pass either a css valid color string like rgb, rgba hex or string colors. But you can also pass a function that accepts the current percentage as a value to return a dynamically generated color.

__trackColor__	`#f2f2f2`	The color of the track for the bar, false to disable rendering.

__scaleColor__	`#dfe0e0`	The color of the scale lines, false to disable rendering.

__lineCap__	`round`	Defines how the ending of the bar line looks like. Possible values are: butt, round and square.

__lineWidth__	`3`	Width of the bar line in px.

__size__	`110`	Size of the pie chart in px. It will always be a square.

__animate__	`false`	Time in milliseconds for a eased animation of the bar growing, or false to deactivate.
__onStart__	`$.noop` Callback function that is called at the start of any animation (only if animate is not false).
__onStop__	`$.noop`	Callback function that is called at the end of any animation (only if animate is not false).
__onStep__	`$.noop`	Callback function that is called during animations providing the current value (the context is the plugin, so you can access the DOM element via this.$el).

Credits:
Rendo - Creator of Easy Pie Charts: visit http://rendro.github.io/easy-pie-chart/ for detailed instructions.
