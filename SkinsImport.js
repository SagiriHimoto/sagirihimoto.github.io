function ImportSkinElements() {
    if (document.getElementById("skin")!=null) {
        var idElem=document.getElementById("SkinParams");
        var skinIMGimport='<center><div class="skindisplay" style="background-image: url('+skinIMG+');"></div></center>';
        
        if (ponyInfoobj.customOutlines==true) {
            var skincusoutlcheckboxes='<center><svg width="8px" height="8px" class="ptskincheckmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="#fff" d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z"/></svg> allow custom outlines</center><center>';
         } else {
            var skincusoutlcheckboxes='<center><svg width="8px" height="8px" class="ptskinemptycheckmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"></svg> allow custom outlines</center>';
         }

        var skinscoatParamsDiv="<div style='text-align: left; margin-top: 5px;' class='ABlogTextTitle'>Body</div><center><div class='lockptform'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z'></path></svg></div><div class='copyableptform'><div class='ptformcolor'></div>#"+ponyInfoobj.coatFill+"</div><div class='lockptform'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z'></path></svg></div><div class='copyableptform'><div class='ptformcolor'></div>#"+ponyInfoobj.coatOutline+"</div></center><center><div class='lockptform'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z'></path></svg></div><div class='copyableptform'><div class='ptformcolor'></div>#"+ponyInfoobj.cm+"</div><div class='lockptform'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z'></path></svg></div><div class='copyableptform'><div class='ptformcolor'></div>#"+ponyInfoobj.coatFill+"</div></center>";
    
        idElem.innerHTML=skinIMGimport+skincusoutlcheckboxes+skinscoatParamsDiv;
    }
};
window.addEventListener("load", ImportSkinElements);