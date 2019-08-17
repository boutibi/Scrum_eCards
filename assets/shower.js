/* // TODO:
instatt of using
<script src="../../lib/shower/scripts/script.js"></script>

we should use in
        ./slides/E-Cards/index.html Directory/files
<script src="../../assets/script.js">

*/

var js = document.createElement("script");
js.type = "text/javascript";
js.src = "../lib/shower/scripts/script.js";
document.body.appendChild(js);

/*
var s = new MySuperObject();

Error : MySuperObject is undefined

Then you reload the page hitting F5. And it works!


function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); //Make a script DOM node
    script.src = url; //Set it's src to the provided URL
    document.head.appendChild(script); //Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
*/
