# meteor-catphotos
Quick Mashup of Wookmark-jQuery and Meteor

Demo: http://catphotos.meteor.com

This is a super basic mashup of the Wookmark-jQuery plugin and Meteor.

<h2>Quick Walkthrough</h2>

Unless you are a Meteor beginner, you can probably dive right into the code and understand what's going on. Otherwise, here is a quick
 breakdown of the files:
 
<h3>both/imagecollection.js</h3>
This creates mongo collections for the app to use. Because both client and server need access to these collections, they are
 located in the /both folder.
 
<h3>client/assets/wookmark.*</h3>
These are the files from the wookmark plugin. Basically just provide functionality for the wookmark plugin to resize and
 distribute the images.
 
<h3>client/gallery.html</h3>
Most of the page is here. There is a basic form up top, with inputs for a url and caption. Another line lists the total
 number of images processed.
 
Below, within the #myContent ul, Meteor iterates over {{#each images}}, and returns a 'li' for each image that it finds in
 the Images meteor collection. {{source}} returns the source field of the current Image item, and {{caption}} returns the 
 caption field of the current Image item.

<h3>client/gallery.js</h3>
Most of the work is done here. The images helper returns all of the items within the Images collection that {{#each images}}
 iterates through on the page. imagecount returns the value of the 'count' field of the sole record in the TotalCount collection.
 The 'click .submitclass' event prevents the default submit action, inserts the new image into the Images collection, 
 removes the oldest one (sorted by reverse date) and increments the TotalCount record by 1 in the 'count' field.
 
<h3>client/main.html</h3>
This file just provides the basic title, and also demonstrates that styles can be passed in the header, though this is obviously
 not usually best practice. Within the body, the {{> gallery}} tag pulls in our gallery template.
 
<h3>server/startup.js</h3>
The first time the app loads on the server, this file checks for records in the TotalCount collection, and if it finds none, 
 it inserts one blank record. This is the record that is used to keep count of the total images processed.
 
<h2>Limitations</h2>
This is just a very basic demo. It doesn't factor in things like form validation, allow/deny, or other security measures. 
Non-image uploads are handled poorly, and any user can really wreak havoc via the console.

Feel free to fork and have fun -- this is really just a demo I made for fun and decided to upload in the hopes that it may 
help other Meteor beginners!
