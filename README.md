# reuters-medal-widget

<h2>Extra libraries</h2>
<ul>
  <li>webpack...: Bundling and managing libraries</li>
  <li>babel...: Allows coding in latest JS and React syntax</li>
  <li>css-loader: Allows webpack to interpret css files with JS (ultimately for style-loader)</li>
  <li>style-loader: Converts css into style element</li>
  <li>axios: For simplifying AJAX requests</li>
</ul>

<h2>Implementation</h2>
Dev build included in dist folder of repo so reader doesn't need to build on their own.

Place the following code wherever you want to render the widget:

```
<div id="medal-widget"></div>
<script type="text/javascript" src="medalWidget.js"></script>
<script type="text/javascript">
  MedalWidget.initialize('medal-widget','gold')
</script>
```
* As requested the 2nd parameter can be omitted
