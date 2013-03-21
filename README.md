textcounter
===========

Very simple text input counter.

##Usage

Import the script
```html
<script src="jquery.textcounter.js"></script>
```

An instance of your input or textarea:
```html
<input type="text" name="fname" id="counter"> 
```

Run the plugin
```javascript
$(function() {
  $("#counter").textcounter({
      limit: 50,
      sentence: ' left characters'
  });
});
```

##Options
### Limit
Type: `Number`

Amount of charaters available

### Sentence
Type: `String`

Sentence showed in the Display info. For example: 50 left characters.

