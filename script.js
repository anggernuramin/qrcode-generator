const title = document.getElementById('target-title');

function save(data) {
  const save = localStorage.setItem('title', data);
  return save;
}

function saveContent(data) {
  const svContent = localStorage.setItem('content', data)
  return svContent;
}

function displayText() {
  return `<textarea placeholder="Write your text" name="" class="messageText" id="messageText" cols="50" rows="10"></textarea>
  <p id="deskripsi">Scanning the QR code will show this text.</p>`
}

function displayPhone() {
  return `<label for="telpon">Phone Number</label>
  <input placeholder="Phone Number.." type="tel" name="telpon" class="phone" id="telpon">
  <p id="">Scanning the QR code will call this number.</p>`
}



function displayEmail() {
  return `<input type="email" placeholder="Your Email Addres" id="email">
  <input type="text" placeholder="Subject Email" name="" id="subjectEmail">
  <textarea name="" id="messageEmail" placeholder="messagge" cols="50" rows="5"></textarea>
  <p id="deskripsi">Scanning the QR code will send this email.</p>`
}

function displayUrl() {
  return ` <input type="url" id="inputUrl" placeholder="https://example.com">
  <p class="otherUrl">You can also enter other links, for example facebook, linkend, instagram, wa,
                  pinterest,Tik Tok,Twitter,Youtube according to the url</p>
  <p id="deskripsi">Your QR code will open this URL.</p>`
}

function displayMP3() {
  return `<label for="mp3">Insert url MP3</label>
  <input placeholder="https://soundcloud.com" type="text" name="mp3" id="inputMp3">
  <p id="deskripsi">Scanning the QR code will MP3</p> `
}

function displayImage() {
  return `<label for="image">Source Image</label>
  <input placeholder="https://behance.com" type="url" name="image" id="image">
  <p id="deskripsi">Your QR code will open this Image URL.</p> `
}

function hidePhone() {
  const contentPhone = document.getElementById('content-Phone');
  contentPhone.style.display = "none";
}
function displayFb() {
  return ` <input type="url" id="inputFb" placeholder="https://facebook.com">
  <p id="deskripsi">Your QR code will open this url facebook.</p>`
}
function displayIg() {
  return ` <input type="url" id="inputIg" placeholder="https://instagram.com">
  <p id="deskripsi">Your QR code will open this url instagram.</p>`
}
function displayLinkedin() {
  return ` <input type="url" id="inputLinkedin" placeholder="https://linkedin.com">
  <p id="deskripsi">Your QR code will open this url Linkedin.</p>`
}
function displayLine() {
  return ` <input type="tel" id="inputLine" placeholder="line ID">
  <p id="deskripsi">Your QR code will open this ID line.</p>`
}
function displayWa() {
  return ` <input type="tel" value="62" id="inputWa" placeholder="No Whatsapp">
  <p id="deskripsi">Your QR code will open this No Whatsapp.</p>`
}
function displayPinterest() {
  return ` <input type="url" id="inputPinterest" placeholder="https://pinterest.com">
  <p id="deskripsi">Your QR code will open this url Pinterest.</p>`
}

function hideUrl() {
  const contentUrl = document.getElementById('content-Url');
  contentUrl.style.display = "none";
}
function hideImage() {
  const contentImage = document.getElementById('content-Image');
  contentImage.style.display = "none";
}

function hideMp3() {
  const contentSms = document.getElementById('content-Mp3');
  contentSms.style.display = "none";
}

function hideEmail() {
  const contentEmail = document.getElementById('content-Email')
  contentEmail.style.display = "none"
}

function hideText() {
  const contentText = document.getElementById('content-Text');
  contentText.style.display = "none "
}
function hideFb() {
  const contentFb = document.getElementById('content-Fb');
  contentFb.style.display = "none";
}
function hideIg() {
  const contentIg = document.getElementById('content-Ig');
  contentIg.style.display = "none";
}
function hideLinkedin() {
  const contentLinkedin = document.getElementById('content-Linkedin');
  contentLinkedin.style.display = "none";
}
function hideLine() {
  const contentLine = document.getElementById('content-Line');
  contentLine.style.display = "none";
}
function hideWa() {
  const contentWa = document.getElementById('content-Wa');
  contentWa.style.display = "none";
}
function hidePinterest() {
  const contentPinterest = document.getElementById('content-Pinterest');
  contentPinterest.style.display = "none";
}

document.addEventListener('click', function (e) {
  if (e.target.className === 'fa-solid fa-xmark') {
    e.target.parentElement.parentElement.style.display = 'none'
  }
})

function getUrl(keyword, size, color, bgcolor, margin, resolusi) {
  return `https://api.qrserver.com/v1/create-qr-code/?data=${keyword}&size=${size}&color=${color}&bgcolor=${bgcolor}&margin=${margin}&ecc=${resolusi}`
}

function getQR(keyword, size, color, bgcolor, margin, resolusi) {
  const url = getUrl(keyword, size, color, bgcolor, margin, resolusi);
  const qrImage = document.getElementById('qrImage');
  const imgBox = document.querySelector('.img-box')
  imgBox.classList.add('show-img')
  const source = qrImage.src = url;
  return source;
}


function fetchFile(url) {
  const btnDownload = document.getElementById('btn-Download');
  fetch(url)
    // blob megembalika nilai typr data dan length caracter
    .then(res => res.blob())
    .then(file => {
      let tempUrl = URL.createObjectURL(file)
      let aTag = document.createElement('a');
      aTag.href = tempUrl;
      // tag nama file saat didownload
      let tagFile = "AnggerGenerator"
      aTag.download = url.replace(/^.*[\\\/]/, '');;
      document.body.appendChild(aTag)
      aTag.click()
      aTag.remove()
      URL.revokeObjectURL(tempUrl)
      btnDownload.innerHTML = "Download PNG";
      location.reload()
    }).catch(() => {
      alert("Failed to download image")
    })

}
// DOWNLOAD IMAGE
const btnDownloadText = document.getElementById('btn-Download');
btnDownloadText.addEventListener('click', function (e) {
  btnDownloadText.innerHTML = "Downloading image...";
  const qrImage = document.getElementById('qrImage');
  fetchFile(qrImage.src);
  e.preventDefault()

})



const text = document.getElementById('list-text');

let item = localStorage.getItem('title')
save(item)
title.innerHTML = item;
const btn = document.getElementById('btn-Generate');
text.addEventListener('click', function (e) {
  hideImage()
  hideMp3()
  hideUrl()
  hideEmail()
  hidePhone()
  hideFb()
  hideIg()
  hideLinkedin()
  hideLine()
  hideWa()
  hidePinterest()

  
  const btnDownload = document.getElementById('btn-Download');
  btnDownload.style.backgroundColor = 'var(--third-color)';
  btnDownload.style.color = 'black'

  const contentText = document.getElementById('content-Text');
  contentText.style.display = "inline-block"
  const showText = contentText.innerHTML = displayText();

  save(text.innerText)
  title.innerHTML = text.innerText;

  const message = document.getElementById('messageText')
  const btn = document.getElementById('btn-Generate');
  let latestInput = "";
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    latestInput = message.value;

    if (message.value.length > 0) {
      btnDownloadText.style.pointerEvents= 'auto';
      const container = document.querySelector('.modal-box');
      container.style.display = 'none';

      let foregroundText = document.getElementById('foreground').value;
      let colorText = foregroundText.substring(1);
      console.log(colorText);
      let backgroundText = document.getElementById('background').value;
      let backgroundColorText = backgroundText.substring(1)
      let sizeText = document.getElementById('size').value;
      let sizeValueText = `${sizeText}x${sizeText}`;
      console.log(sizeValue);
      let marginText = document.getElementById('number').value;
      let resolusiValueNowText = document.getElementById('resolusiValue');
      let statusText = resolusiValueNowText.textContent;

      let src = getQR(latestInput, sizeValueText, colorText, backgroundColorText, marginText, statusText);
      btnDownload.style.backgroundColor = 'var(--primary-color)';
      btnDownload.style.color = 'white'
      return src;
    } else {
      const container = document.querySelector('.modal-box');
      container.style.display = 'block'
    }
  })
  e.stopPropagation()
})




const email = document.getElementById('list-email');
email.addEventListener('click', function (e) {
  hideText()
  hidePhone()
  hideUrl()
  hideMp3()
  hideImage()
  hideFb()
  hideIg()
  hideLinkedin()
  hideLine()
  hideWa()
  hidePinterest()

  const btnDownload = document.getElementById('btn-Download');
  btnDownload.style.backgroundColor = 'var(--third-color)';
  btnDownload.style.color = 'black'

  const contentEmail = document.getElementById('content-Email')
  contentEmail.style.display = "inline-block"
  const showEmail = contentEmail.innerHTML = displayEmail()

  saveContent(showEmail)
  save(email.innerText)
  title.innerHTML = email.innerText;

  const emailInput = document.getElementById('email')
  const subjectEmail = document.getElementById('subjectEmail')
  const messageEmail = document.getElementById('messageEmail')

  const btn = document.getElementById('btn-Generate');
  let latestInput = "";
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    latestInput = emailInput.value + '?subject=' + subjectEmail.value + '&body=' +  messageEmail.value;

    if (emailInput.value.length > 0) {
      btnDownloadText.style.pointerEvents= 'auto';
      const container = document.querySelector('.modal-box');
      container.style.display = 'none';

      let foregroundText = document.getElementById('foreground').value;
      let colorText = foregroundText.substring(1);
      console.log(colorText);
      let backgroundText = document.getElementById('background').value;
      let backgroundColorText = backgroundText.substring(1)
      let sizeText = document.getElementById('size').value;
      let sizeValueText = `${sizeText}x${sizeText}`;
      console.log(sizeValue);
      let marginText = document.getElementById('number').value;
      let resolusiValueNowText = document.getElementById('resolusiValue');
      let statusText = resolusiValueNowText.textContent;

      let src = getQR(latestInput, sizeValueText, colorText, backgroundColorText, marginText, statusText);
      
      btnDownload.style.backgroundColor = 'var(--primary-color)';
      btnDownload.style.color = 'white'
       return src;
    } else {  
      const container = document.querySelector('.modal-box');
      container.style.display = 'block'
    }
  })
  e.preventDefault()
  e.stopPropagation()
})

const phone = document.getElementById('list-phone');
phone.addEventListener('click', function (e) {
  hideEmail()
  hideMp3()
  hideImage()
  hideUrl()
  hideText()
  hideFb()
  hideIg()
  hideLinkedin()
  hideLine()
  hideWa()
  hidePinterest()

  const btnDownload = document.getElementById('btn-Download');
  btnDownload.style.backgroundColor = 'var(--third-color)';
  btnDownload.style.color = 'black'

  const contentPhone = document.getElementById('content-Phone');
  contentPhone.style.display = "inline-block";
  contentPhone.innerHTML = displayPhone();

  save(phone.innerText)
  title.innerHTML = phone.innerText;

  const btn = document.getElementById('btn-Generate');
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    const telpon = document.getElementById('telpon')
    if (telpon.value.length > 0) {
      btnDownloadText.style.pointerEvents= 'auto';
      const container = document.querySelector('.modal-box');
      container.style.display = 'none';
      let foreground = document.getElementById('foreground').value;
      let color = foreground.substring(1);
      let background = document.getElementById('background').value;
      let backgroundColor = background.substring(1)
      let size = document.getElementById('size').value;
      let sizeValue = `${size}x${size}`;
      let margin = document.getElementById('number').value;
      let resolusiValueNow = document.getElementById('resolusiValue');
      let status = resolusiValueNow.textContent;

      let src = getQR(telpon.value, sizeValue, color, backgroundColor, margin, status)
      btnDownload.style.backgroundColor = 'var(--primary-color)';
      btnDownload.style.color = 'white'
      return src;
    } else {
      console.log('salah');
      const container = document.querySelector('.modal-box');
      container.style.display = 'block'

    }
  })
  e.preventDefault()
  e.stopPropagation()
})



const url = document.getElementById('list-url');
url.addEventListener('click', function (e) {
  hidePhone()
  hideMp3()
  hideImage()
  hideEmail()
  hideText()
  hideFb()
  hideIg()
  hideLinkedin()
  hideLine()
  hideWa()
  hidePinterest()

  const btnDownload = document.getElementById('btn-Download');
  btnDownload.style.backgroundColor = 'var(--third-color)';
  btnDownload.style.color = 'black'

  const contentUrl = document.getElementById('content-Url');
  contentUrl.style.display = "inline-block";
  contentUrl.innerHTML = displayUrl();

  save(url.innerText)
  title.innerHTML = url.innerText;

  const urlInput = document.getElementById('inputUrl')
 
  const btn = document.getElementById('btn-Generate');
  let latestInput = "";
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    latestInput = urlInput.value;;

    if (urlInput.value.length > 0) {
      btnDownloadText.style.pointerEvents= 'auto';
      const container = document.querySelector('.modal-box');
      container.style.display = 'none';

      let foregroundText = document.getElementById('foreground').value;
      let colorText = foregroundText.substring(1);
      console.log(colorText);
      let backgroundText = document.getElementById('background').value;
      let backgroundColorText = backgroundText.substring(1)
      let sizeText = document.getElementById('size').value;
      let sizeValueText = `${sizeText}x${sizeText}`;
      console.log(sizeValue);
      let marginText = document.getElementById('number').value;
      let resolusiValueNowText = document.getElementById('resolusiValue');
      let statusText = resolusiValueNowText.textContent;

      let src = getQR(latestInput, sizeValueText, colorText, backgroundColorText, marginText, statusText);
      
      btnDownload.style.backgroundColor = 'var(--primary-color)';
      btnDownload.style.color = 'white'
       return src;
    } else {  
      const container = document.querySelector('.modal-box');
      container.style.display = 'block'
    }
  })
  e.preventDefault()
  e.stopPropagation()
})

const image = document.getElementById('list-Image');
image.addEventListener('click', function (e) {
  hidePhone()
  hideUrl()
  hideEmail()
  hideText()
  hideMp3()

  const btnDownload = document.getElementById('btn-Download');
  btnDownload.style.backgroundColor = 'var(--third-color)';
  btnDownload.style.color = 'black';

  save(image.innerText)
  title.innerHTML = image.innerText;

  const contentImage = document.getElementById('content-Image');
  contentImage.style.display = "inline-block";
  contentImage.innerHTML = displayImage();

  const inputImage = document.getElementById('image')
  const btn = document.getElementById('btn-Generate');
  let latestInput = "";
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    latestInput =inputImage.value;;

    if (inputImage.value.length > 0) {
      btnDownloadText.style.pointerEvents= 'auto';
      const container = document.querySelector('.modal-box');
      container.style.display = 'none';

      let foregroundText = document.getElementById('foreground').value;
      let colorText = foregroundText.substring(1);
      console.log(colorText);
      let backgroundText = document.getElementById('background').value;
      let backgroundColorText = backgroundText.substring(1)
      let sizeText = document.getElementById('size').value;
      let sizeValueText = `${sizeText}x${sizeText}`;
      console.log(sizeValue);
      let marginText = document.getElementById('number').value;
      let resolusiValueNowText = document.getElementById('resolusiValue');
      let statusText = resolusiValueNowText.textContent;

      let src = getQR(latestInput, sizeValueText, colorText, backgroundColorText, marginText, statusText);
     
      btnDownload.style.backgroundColor = 'var(--primary-color)';
      btnDownload.style.color = 'white'
       return src;
    } else {  
      const container = document.querySelector('.modal-box');
      container.style.display = 'block'
    }
  })

  e.preventDefault()
  e.stopPropagation()

})

const Fb = document.getElementById('list-Fb');
Fb.addEventListener('click', function (e) {
  hidePhone()
  hideMp3()
  hideImage()
  hideEmail()
  hideText()
  hideUrl()
  hideIg()
  hideLinkedin()
  hideLine()
  hideWa()
  hidePinterest()

  const btnDownload = document.getElementById('btn-Download');
  btnDownload.style.backgroundColor = 'var(--third-color)';
  btnDownload.style.color = 'black'

  const contentFb = document.getElementById('content-Fb');
  contentFb.style.display = "inline-block";
  contentFb.innerHTML = displayFb();

  save(Fb.innerText)
  title.innerHTML = Fb.innerText;

  const FbInput = document.getElementById('inputFb')
 
  const btn = document.getElementById('btn-Generate');
  let latestInput = "";
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    latestInput = FbInput.value;;

    if (FbInput.value.length > 0) {
      btnDownloadText.style.pointerEvents= 'auto';
      const container = document.querySelector('.modal-box');
      container.style.display = 'none';

      let foregroundText = document.getElementById('foreground').value;
      let colorText = foregroundText.substring(1);
      console.log(colorText);
      let backgroundText = document.getElementById('background').value;
      let backgroundColorText = backgroundText.substring(1)
      let sizeText = document.getElementById('size').value;
      let sizeValueText = `${sizeText}x${sizeText}`;
      console.log(sizeValue);
      let marginText = document.getElementById('number').value;
      let resolusiValueNowText = document.getElementById('resolusiValue');
      let statusText = resolusiValueNowText.textContent;

      let src = getQR(latestInput, sizeValueText, colorText, backgroundColorText, marginText, statusText);
      
      btnDownload.style.backgroundColor = 'var(--primary-color)';
      btnDownload.style.color = 'white'
       return src;
    } else {  
      const container = document.querySelector('.modal-box');
      container.style.display = 'block'
    }
  })
  e.preventDefault()
  e.stopPropagation()
})

const Ig = document.getElementById('list-Ig');
Ig.addEventListener('click', function (e) {
  hidePhone()
  hideMp3()
  hideImage()
  hideEmail()
  hideText()
  hideUrl()
  hideFb()
  hideLinkedin()
  hideLine()
  hideWa()
  hidePinterest()

  const btnDownload = document.getElementById('btn-Download');
  btnDownload.style.backgroundColor = 'var(--third-color)';
  btnDownload.style.color = 'black'

  const contentIg = document.getElementById('content-Ig');
  contentIg.style.display = "inline-block";
  contentIg.innerHTML = displayIg();

  save(Ig.innerText)
  title.innerHTML = Ig.innerText;

  const IgInput = document.getElementById('inputIg')
 
  const btn = document.getElementById('btn-Generate');
  let latestInput = "";
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    latestInput = IgInput.value

    if (IgInput.value.length > 0) {
      btnDownloadText.style.pointerEvents= 'auto';
      const container = document.querySelector('.modal-box');
      container.style.display = 'none';

      let foregroundText = document.getElementById('foreground').value;
      let colorText = foregroundText.substring(1);
      console.log(colorText);
      let backgroundText = document.getElementById('background').value;
      let backgroundColorText = backgroundText.substring(1)
      let sizeText = document.getElementById('size').value;
      let sizeValueText = `${sizeText}x${sizeText}`;
      console.log(sizeValue);
      let marginText = document.getElementById('number').value;
      let resolusiValueNowText = document.getElementById('resolusiValue');
      let statusText = resolusiValueNowText.textContent;

      let src = getQR(latestInput, sizeValueText, colorText, backgroundColorText, marginText, statusText);
      
      btnDownload.style.backgroundColor = 'var(--primary-color)';
      btnDownload.style.color = 'white'
       return src;
    } else {  
      const container = document.querySelector('.modal-box');
      container.style.display = 'block'
    }
  })
  e.preventDefault()
  e.stopPropagation()
})
const Linkedin = document.getElementById('list-Linkedin');
Linkedin.addEventListener('click', function (e) {
  hidePhone()
  hideMp3()
  hideImage()
  hideEmail()
  hideText()
  hideUrl()
  hideFb()
  hideIg()
  hideLine()
  hideWa()
  hidePinterest()

  const btnDownload = document.getElementById('btn-Download');
  btnDownload.style.backgroundColor = 'var(--third-color)';
  btnDownload.style.color = 'black'

  const contentLinkedin = document.getElementById('content-Linkedin');
  contentLinkedin.style.display = "inline-block";
  contentLinkedin.innerHTML = displayLinkedin();

  save(Linkedin.innerText)
  title.innerHTML = Linkedin.innerText;

  const LinkedinInput = document.getElementById('inputLinkedin')
 
  const btn = document.getElementById('btn-Generate');
  let latestInput = "";
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    latestInput = LinkedinInput.value;;

    if (LinkedinInput.value.length > 0) {
      btnDownloadText.style.pointerEvents= 'auto';
      const container = document.querySelector('.modal-box');
      container.style.display = 'none';

      let foregroundText = document.getElementById('foreground').value;
      let colorText = foregroundText.substring(1);
      console.log(colorText);
      let backgroundText = document.getElementById('background').value;
      let backgroundColorText = backgroundText.substring(1)
      let sizeText = document.getElementById('size').value;
      let sizeValueText = `${sizeText}x${sizeText}`;
      console.log(sizeValue);
      let marginText = document.getElementById('number').value;
      let resolusiValueNowText = document.getElementById('resolusiValue');
      let statusText = resolusiValueNowText.textContent;

      let src = getQR(latestInput, sizeValueText, colorText, backgroundColorText, marginText, statusText);
      
      btnDownload.style.backgroundColor = 'var(--primary-color)';
      btnDownload.style.color = 'white'
       return src;
    } else {  
      const container = document.querySelector('.modal-box');
      container.style.display = 'block'
    }
  })
  e.preventDefault()
  e.stopPropagation()
})

const Line = document.getElementById('list-Line');
Line.addEventListener('click', function (e) {
  hidePhone()
  hideMp3()
  hideImage()
  hideEmail()
  hideText()
  hideUrl()
  hideFb()
  hideIg()
 hideLinkedin()
  hideWa()
  hidePinterest()

  const btnDownload = document.getElementById('btn-Download');
  btnDownload.style.backgroundColor = 'var(--third-color)';
  btnDownload.style.color = 'black'

  const contentLine = document.getElementById('content-Line');
  contentLine.style.display = "inline-block";
  contentLine.innerHTML = displayLine();

  save(Line.innerText)
  title.innerHTML = Line.innerText;

  const LineInput = document.getElementById('inputLine')
 
  const btn = document.getElementById('btn-Generate');
  let latestInput = "";
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    latestInput = LineInput.value;;

    if (LineInput.value.length > 0) {
      btnDownloadText.style.pointerEvents= 'auto';
      const container = document.querySelector('.modal-box');
      container.style.display = 'none';

      let foregroundText = document.getElementById('foreground').value;
      let colorText = foregroundText.substring(1);
      console.log(colorText);
      let backgroundText = document.getElementById('background').value;
      let backgroundColorText = backgroundText.substring(1)
      let sizeText = document.getElementById('size').value;
      let sizeValueText = `${sizeText}x${sizeText}`;
      console.log(sizeValue);
      let marginText = document.getElementById('number').value;
      let resolusiValueNowText = document.getElementById('resolusiValue');
      let statusText = resolusiValueNowText.textContent;

      let src = getQR(latestInput, sizeValueText, colorText, backgroundColorText, marginText, statusText);
      
      btnDownload.style.backgroundColor = 'var(--primary-color)';
      btnDownload.style.color = 'white'
       return src;
    } else {  
      const container = document.querySelector('.modal-box');
      container.style.display = 'block'
    }
  })
  e.preventDefault()
  e.stopPropagation()
})

const Wa = document.getElementById('list-Wa');
Wa.addEventListener('click', function (e) {
  hidePhone()
  hideMp3()
  hideImage()
  hideEmail()
  hideText()
  hideUrl()
  hideFb()
  hideIg()
   hideLinkedin()
  hideLine()
  hidePinterest()

  const btnDownload = document.getElementById('btn-Download');
  btnDownload.style.backgroundColor = 'var(--third-color)';
  btnDownload.style.color = 'black'

  const contentWa = document.getElementById('content-Wa');
  contentWa.style.display = "block";
  contentWa.innerHTML = displayWa();

  save(Wa.innerText)
  title.innerHTML = Wa.innerText;

  const WaInput = document.getElementById('inputWa')
 
  const btn = document.getElementById('btn-Generate');
  let latestInput = "";
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    latestInput = 'https://wa.me/' + WaInput.value;;

    if (WaInput.value.length > 0) {
      btnDownloadText.style.pointerEvents= 'auto';
      const container = document.querySelector('.modal-box');
      container.style.display = 'none';

      let foregroundText = document.getElementById('foreground').value;
      let colorText = foregroundText.substring(1);
      console.log(colorText);
      let backgroundText = document.getElementById('background').value;
      let backgroundColorText = backgroundText.substring(1)
      let sizeText = document.getElementById('size').value;
      let sizeValueText = `${sizeText}x${sizeText}`;
      console.log(sizeValue);
      let marginText = document.getElementById('number').value;
      let resolusiValueNowText = document.getElementById('resolusiValue');
      let statusText = resolusiValueNowText.textContent;

      let src = getQR(latestInput, sizeValueText, colorText, backgroundColorText, marginText, statusText);
      
      btnDownload.style.backgroundColor = 'var(--primary-color)';
      btnDownload.style.color = 'white'
       return src;
    } else {  
      const container = document.querySelector('.modal-box');
      container.style.display = 'block'
    }
  })
  e.preventDefault()
  e.stopPropagation()
})
const Pinterest = document.getElementById('list-Pinterest');
Pinterest.addEventListener('click', function (e) {
  hidePhone()
  hideMp3()
  hideImage()
  hideEmail()
  hideText()
  hideUrl()
  hideFb()
  hideIg()
  hideLinkedin()
  hideLine()
  hideWa()

  const btnDownload = document.getElementById('btn-Download');
  btnDownload.style.backgroundColor = 'var(--third-color)';
  btnDownload.style.color = 'black'

  const contentPinterest = document.getElementById('content-Pinterest');
  contentPinterest.style.display = "inline-block";
  contentPinterest.innerHTML = displayPinterest();

  save(Pinterest.innerText)
  title.innerHTML = Pinterest.innerText;

  const PinterestInput = document.getElementById('inputPinterest')
 
  const btn = document.getElementById('btn-Generate');
  let latestInput = "";
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    latestInput = PinterestInput.value;;

    if (PinterestInput.value.length > 0) {
      btnDownloadText.style.pointerEvents= 'auto';
      const container = document.querySelector('.modal-box');
      container.style.display = 'none';

      let foregroundText = document.getElementById('foreground').value;
      let colorText = foregroundText.substring(1);
      console.log(colorText);
      let backgroundText = document.getElementById('background').value;
      let backgroundColorText = backgroundText.substring(1)
      let sizeText = document.getElementById('size').value;
      let sizeValueText = `${sizeText}x${sizeText}`;
      console.log(sizeValue);
      let marginText = document.getElementById('number').value;
      let resolusiValueNowText = document.getElementById('resolusiValue');
      let statusText = resolusiValueNowText.textContent;

      let src = getQR(latestInput, sizeValueText, colorText, backgroundColorText, marginText, statusText);
      
      btnDownload.style.backgroundColor = 'var(--primary-color)';
      btnDownload.style.color = 'white'
       return src;
    } else {  
      const container = document.querySelector('.modal-box');
      container.style.display = 'block'
    }
  })
  e.preventDefault()
  e.stopPropagation()
})




const mp3 = document.getElementById('list-Mp3');
mp3.addEventListener('click', function (e) {
  hidePhone()
  hideUrl()
  hideEmail()
  hideText()
  hideImage()
  hideFb()
  hideIg()
  hideLinkedin()
  hideLine()
  hideWa()
  hidePinterest()

  const btnDownload = document.getElementById('btn-Download');
  btnDownload.style.backgroundColor = 'var(--third-color)';
  btnDownload.style.color = 'black'

  const contentMp3 = document.getElementById('content-Mp3');
  contentMp3.style.display = "inline-block";
  contentMp3.innerHTML = displayMP3();

  save(mp3.innerText)
  title.innerHTML = mp3.innerText;

  const inputMp3 = document.getElementById('inputMp3')
 
  const btn = document.getElementById('btn-Generate');
  let latestInput = "";
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    latestInput =inputMp3.value;;

    if (inputMp3.value.length > 0) {
      btnDownloadText.style.pointerEvents= 'auto';
      const container = document.querySelector('.modal-box');
      container.style.display = 'none';

      let foregroundText = document.getElementById('foreground').value;
      let colorText = foregroundText.substring(1);
      console.log(colorText);
      let backgroundText = document.getElementById('background').value;
      let backgroundColorText = backgroundText.substring(1)
      let sizeText = document.getElementById('size').value;
      let sizeValueText = `${sizeText}x${sizeText}`;
      console.log(sizeValue);
      let marginText = document.getElementById('number').value;
      let resolusiValueNowText = document.getElementById('resolusiValue');
      let statusText = resolusiValueNowText.textContent;

      let src = getQR(latestInput, sizeValueText, colorText, backgroundColorText, marginText, statusText);
     
      btnDownload.style.backgroundColor = 'var(--primary-color)';
      btnDownload.style.color = 'white'
       return src;
    } else {  
      const container = document.querySelector('.modal-box');
      container.style.display = 'block'
    }
  })
  e.preventDefault()
  e.stopPropagation()
})

// OPTION COLOR
const contentOption = document.querySelector('.content-option')
let isVisible = false;

contentOption.style.display = 'none'
const iconDisplay = document.getElementById('iconDisplay')

iconDisplay.addEventListener('click', function () {
  iconDisplay.classList.toggle('rotateIcon')
  if (isVisible) {
    contentOption.style.display = 'none';
    isVisible = false;
  } else {
    contentOption.style.display = 'block';
    contentOption.style.transition = '.5s';
    isVisible = true;
  }
})

const foreground = document.getElementById('foreground');
foreground.addEventListener('input', function () {
  const valueNow = document.getElementById('hexsaForeground')
  valueNow.innerText = foreground.value
})

const background = document.getElementById('background');
background.addEventListener('input', function () {
  const valueNow = document.getElementById('hexsaBackground')
  valueNow.innerText = background.value
})

//OPTION MARGIN
const optionMargin = document.querySelector('.option-margin')
let visibleMargin = false;
optionMargin.style.display = 'none';

function displayMargin() {
  const iconDisplayMargin = document.getElementById('iconDisplayMargin')
  iconDisplayMargin.classList.toggle('rotateIcon')
  if (visibleMargin) {
    optionMargin.style.display = 'none';
    visibleMargin = false;
  } else {
    optionMargin.style.display = 'block';
    visibleMargin = true;
  }
}

// OPTION FORMAT
const optionFormat = document.querySelector('.option-format')
let visibleFormat = false;
optionFormat.style.display = 'none';

function displayFormat() {
  const iconDisplayFormat = document.getElementById('iconDisplayFormat')
  iconDisplayFormat.classList.toggle('rotateIcon')
  if (visibleFormat) {
    optionFormat.style.display = 'none';
    visibleFormat = false;
  } else {
    optionFormat.style.display = 'block';
    visibleFormat = true;
    optionFormat.addEventListener('click', function (e) {
      const pilihan = e.target;
      return pilihan;
    })
  }

}

// OPTION SIZE
const size = document.getElementById('size');
const sizeValue = document.getElementById('sizeValue');
sizeValue.innerHTML = `${size.value} x ${size.value} px`;
size.oninput = function () {
  sizeValue.innerHTML = `${this.value} x ${this.value} px`;
}

// OPTION RESOLUSI
const resolusi = document.getElementById('resolusi');
const resolusiValue = document.getElementById('resolusiValue');

resolusi.oninput = function () {
  let number = ''
  if (this.value <= 7) {
    number = 'L';
    resolusiValue.innerHTML = `${number}`;
  } else if (this.value < 15) {
    number = 'M'
    resolusiValue.innerHTML = `${number}`;
  } else if (this.value <= 25) {
    number = 'Q'
    resolusiValue.innerHTML = `${number}`;
  } else if (this.value <= 30) {
    number = 'H'
    resolusiValue.innerHTML = `${number}`;
  }

}

// EVENT NAVBAR
const menuBar = document.getElementById('hamburger');
menuBar.addEventListener('click',function(){
  const nav = document.getElementById('navbar');
  nav.classList.toggle('navMobile')
  
})
const closeNavbar = document.getElementById('closeNav');
  closeNavbar.addEventListener('click',function(e){
    const nav = document.getElementById('navbar');
    nav.classList.toggle('navMobile')
    e.preventDefault();
    e.stopPropagation()
  })
