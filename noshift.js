function mouseDown(e) {
 var ctrlPressed=0;
 var altPressed=0;
 var shiftPressed=0;
 if (parseInt(navigator.appVersion)>3) {
  if (navigator.appName=="Netscape") {
   var mString =(e.modifiers+32).toString(2).substring(3,6);
   shiftPressed=(mString.charAt(0)=="1");
   ctrlPressed =(mString.charAt(1)=="1");
   altPressed  =(mString.charAt(2)=="1");
  }
  else {
   shiftPressed=event.shiftKey;
   altPressed  =event.altKey;
   ctrlPressed =event.ctrlKey;
   }
  if (shiftPressed || altPressed || ctrlPressed) 
   alert ("This is not allowed");
 }
 return true;
}
if (parseInt(navigator.appVersion)>3) {
 document.onmousedown = mouseDown;
 if (navigator.appName=="Netscape") 
  document.captureEvents(Event.MOUSEDOWN);
}