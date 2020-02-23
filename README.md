# ALTA Components - query

This is a frontend (ReactJS) application that works with ALTA.

![ALTA components GUI](/docs/alta_components_query_gui.png "ALTA components GUI")

## Description 

### Why an extra application?
The ALTA frontend technology is based on an early ReactJS 'starterkit' which is now obsolete.
Some dependencies are tied into that starterkit so firmly that it has become impossible to upgrade to the latest versions of React itself.
Refactoring the ALTA frontend towards the new technology requires more effort than what is currently available.

React has introduced a powerful new concept, react-hooks, which makes the code and life a lot easier.
With limited efford it was possible to use this by creating a new ReactJS project.

### Frontend to Frontend
Normally you have 'frontend' to 'backend' communication through an API, preferably RESTful where the application 'state' is not stored in the backend.
In this case the 'query' functionality of the ALTA Components frontend communicates directly with the ALTA frontend,
because the effects of the query must after all show on the website.
An since 'state' (in this case the query parameters) is not stored in the backend, it must be communicated to the frontend.

### Frontend to Backend
The `ALTA Components` application also communicates to the ALTA backend to retrieve some defaults to fill in in the select boxes of the query form (releases, locality policy and locality status).

### Transparency
For the user it appears as if this functionality is part of ALTA. It is executed from ALTA with a single 'Advanced' button, which redirects the browser to the `ALTA Components` application.
Clicking the `Execute Query` button redirects the user back to the ALTA frontend.

![ALTA components GUI](/docs/advanced_button_in_alta.png "Advanced button in ALTA")


### LocalStorage
The 'state' of the application (the query parameters) are stored in the 'localStorage' of the browser.
When the user returns to `ALTA Components` by pressing `Advanced` in ALTA (or by directly accessing `https://alta.astron.nl/alta-components/query`)
the previously used parameters are read from 'localStorage' and filled in into the query form.


## Implementation
*  https://drive.google.com/file/d/1pxuHxVf3Mo83ZcJkoC96g9Sila7u9u19/view

<html>
<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;url&quot;:&quot;https://drive.google.com/uc?id=1pxuHxVf3Mo83ZcJkoC96g9Sila7u9u19&amp;export=download&quot;}"></div>
<script type="text/javascript" src="https://www.draw.io/embed2.js?&fetch=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1pxuHxVf3Mo83ZcJkoC96g9Sila7u9u19%26export%3Ddownload"></script>
</html>

## Test Environment
There is a test environment available on dop457, which is a (rather experimental) Docker environment for test purposes).
  * http://dop457.astron.nl/alta-components/query

## Production Environment:
  * https://alta.astron.nl/alta-components/query
  

## Build and Deploy
Currently only a rough manual installation in production:

  * In dev environment build the javascript bundles with `npm run build`.
  * log in as installer@alta.astron.nl and become root
  * cd /var/www/alta.astron.nl/public_html
  * copy the contents of the `build` folder (excluding the `static` folder) to `alta.astron.nl:/var/www/alta.astron.nl/public_html/alta-components`
  * copy the contents of the `build/static` folder to `alta.astron.nl:/var/www/alta.astron.nl/public_html/static`
