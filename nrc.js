if (window.Event) // Only Netscape will have the CAPITAL E.
  document.captureEvents(Event.MOUSEUP); // catch the mouse up event
 
function nocontextmenu()  // this function only applies to IE4, ignored otherwise.
{
 event.cancelBubble = true
 event.returnValue = false;
 
 return false;
}
 
function norightclick(e) // This function is used by all others
{
 if (window.Event) // again, IE or NAV?
 {
  if (e.which == 2 || e.which == 3)
   return false;
 }
 else
  if (event.button == 2 || event.button == 3)
  {
   event.cancelBubble = true
   event.returnValue = false;
   return false;
  }
 
}
 
document.oncontextmenu = nocontextmenu;  // for IE5+
document.onmousedown = norightclick;  // for all others