# reuters-medal-widget

<h2 align="center">Extra libraries</h2>
<ul>
  <li>webpack...: Bundling and managing libraries</li>
  <li>babel...: Allows coding in latest JS and React syntax</li>
  <li>css-loader: Allows webpack to interpret css files with JS (ultimately for style-loader)</li>
  <li>style-loader: Converts css into style element</li>
  <li>axios: For simplifying AJAX requests</li>
</ul>

<h2 align="center">Usage</h2>
Place the following code wherever you want to render the widget

```
<div id="medal-widget"></div>
<script type="text/javascript" src="medalWidget.js"></script>
<script type="text/javascript">
  MedalWidget.initialize('medal-widget','gold')
</script>
```
* As requested the 2nd parameter can be omitted
