jQuery-FormHelp
=================

A jQuery utility plugin providing contextual help on input fields in a form.

##Why this plugin?

Providing contextual help in a standard HTML form requires all kinds of extra HTML and 
CSS (and JavaScript if you want it to play nice with the user). This plugin
gives you an easy way to place contextual help at every input field in a form. 
All you have to do is insert a span element with the helptext and a reference to the corresponding
input field and this plugin does the heavy work for you.

When you're done it looks like this:<br>
![Screenshot of a helpbox](/doc/screenshot_1.png)

The plugin comes with a CSS that contains only two classes so you can merge it easily
with your existing CSS files. The arrow in the helpbox is also a separate image that
you can replace by some kind of arrow you like.

##Installing
Grab *jquery.formhelp.js*, *jquery.formhelp.css* and *arrow_left.png* from the repository
and make sure you insert the following lines in you HTML document. Insert
jquery.formhelp.js _after_ the jQuery script:

```html
<link rel="stylesheet" href="jquery.formhelp.css">
<script src="jquery.formhelp.js"></script>
```

Also make sure the CSS is pointing at the right location of arrow_left.png
```css
.form-helpbox {
    (...)
    background-image: url('arrow_left.png');
    (...)
}
```

##Usage

```javascript
$.formHelp();
```
The plugin walks through your HTML document searching for span elements containing
the class _.helptext_ and a _data-for_ attribute containing a jQuery selector to select
the corresponding input element(s):

```html
<input id="username" type="text"/>
<span class="helptext" data-for="#username">
    Please pick your username wisely, you can only choose it once!
</span>
```

When the plugin is ready all the user has to do is click on an element (or hover over it
in case of buttons, radio elements and checkboxes) and the helptext shows up in a nice helpbox.

###Triggering
The type of the input element determines on what event the helpbox shows up. The main
difference is the result of a mouseclick on the element. If a click causes a direct action
as is the case with buttons, checkboxes and radio's, then the helpbox should show up
on mouseover. For example: it's not intuitive to see a helpbox after having clicked on a 
checkbox or submit button...

These are the events and their corresponding input elements:

* On focus (a click or tab on the element)
  * Text
  * Password
  * Url
  * Date
  * Time
  * Week
  * Month
  * Datetime
  * Datetime-local
  * Email
  * Number
  * Tel
  * Search

* On mouseover
  * Button
  * Submit
  * Reset
  * Color
  * Range
  * Radio
  * Checkbox
  * File
  * Image

###Location of span elements
You can choose to insert the span elements at any place in your HTML. So it's your
choice to either place the span element after every input field or to group the span elements
together at the end of the HTML.

###Multiple input fields
Radio and checkbox elements are multiple input elements. When you select multiple input
elements for one helpbox, the helpbox show up at the top right of these elements like this:<br>

![Screenshot of a helpbox for checkboxes](/doc/screenshot_2.png)

##Example

Check out this [live](http://www.invetek.nl/samples/formhelp) sample (and its [source](sample)).


