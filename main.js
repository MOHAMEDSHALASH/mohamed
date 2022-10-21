// LOADING STOP
let loading=document.getElementById('loading')
window.onload=()=>{
    loading.style.display="none"
}
// ==============================================================================
// AUTO WRITTING IN HOME PAGE
let x=1;
const autoWrite=document.getElementById('auto');
const autowritee=()=>{
    const title="Mohamed ShalaSh ...       "
    autoWrite.innerText=title.slice(0,x);
    x++;
    if(title.length<x){
        x=1;
    }
};
const stoop=setInterval(autowritee,300)
// ==============================================================================
// LEARN MORE SHOW WHEN CLICK BUTTON LEARN MORE
document.querySelector('#learnMore').addEventListener('click',()=>{
    document.querySelector('.learn-more').classList.add('learn-more-show')
})
document.querySelector('.learn-more').addEventListener('click',()=>{
    document.querySelector('.learn-more').classList.remove('learn-more-show')
})
// ==============================================================================

// WHEN CLICK BAR ICON IN HEADER
document.querySelector('.icon-bar').addEventListener('click',()=>{
    document.querySelector('.icon-bar').classList.toggle('icon-bar-close')
    document.querySelector('.links').classList.toggle('links-open')
})
// WHEN CLICK ANY WHERE IN BAR
document.querySelector('.links').addEventListener('click',()=>{
    document.querySelector('.icon-bar').classList.toggle('icon-bar-close')
    document.querySelector('.links').classList.toggle('links-open')
})
// ==============================================================================

let progress=document.querySelectorAll('.experince .items .progress .line')
let experince=document.getElementById('experince')
let links =document.querySelectorAll('.links a')
let sections=document.querySelectorAll('.headerLink')
let up=document.getElementById('up')
up.addEventListener('click',()=>{
    scrollTo(0,0)
})
window.onscroll=()=>{
    // UP ARROW
    if(scrollY >= 200){
        up.classList.add('up-show')
    }
    else{
        up.classList.remove('up-show')
    }
    // WHEN SCROLL PROGRESS RUN
    if(scrollY >= experince.offsetTop -500){
        progress.forEach(eo=>{
            eo.style.width=eo.dataset.progress;
        })
    }
    else{
        progress.forEach(eo=>{
            eo.style.width='0%';
        })
    }
    // HEADER LINKS 
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offest=sec.offsetTop -200;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offest && top < offest + height){
            links.forEach(link=>{
                link.classList.remove('active');
                let activeLink =document.querySelector('.links a[href*=' + id + ']')
                activeLink.classList.add('active')
            })
        }
    })
}
// ==============================================================================
// PORTOFILO
let catogery=document.querySelectorAll('.portfolio .catogery p')
let boxes=document.querySelectorAll('.portfolio-boxes section')
catogery.forEach((e)=>{
    e.addEventListener('click',(eo)=>{
        catogery.forEach(eo=>{
            eo.classList.remove('active')
        })
        e.classList.add('active')
        boxes.forEach(box=>{
            box.classList.add('hide')
        })
        document.querySelectorAll(`.portfolio-boxes .${e.dataset.portfolio}`).forEach((e)=>{
            e.classList.remove('hide')
        })
    })
})
// ==================================================================================================
// SETTING 
let mood="light";
let vid="run"
let body=document.getElementById('body');
let btnSlide1=document.getElementById('btn-slide1');
let btnVid=document.getElementById('btn-vid');
let settingicon=document.getElementById('setting-icon')
let setting=document.getElementById('setting')
let settingBox=document.getElementById('setting-box')
let settingClose=document.getElementById('close-setting')
settingicon.onclick=()=>{
    setting.style.display="block";
    settingBox.style.animation="setting 1 1s forwards"
}
settingClose.onclick=()=>{
    setting.style.display="none";
    settingBox.style.animation="none"
}
// ====================START CHANGE COLOR=========================
let color=document.querySelector('.items input')
let resetColor=document.querySelector('.reset')
if(localStorage.mainColor!=null){
    document.documentElement.style.setProperty('--blue-color',localStorage.mainColor);
}
color.oninput=()=>{
    localStorage.setItem('mainColor',color.value)
    document.documentElement.style.setProperty('--blue-color',color.value);
}
resetColor.onclick=()=>{
    localStorage.removeItem('mainColor')
    document.documentElement.style.setProperty('--blue-color','#2f36f7');
}
// ====================END CHANGE COLOR=========================

// ====================START DARK MODE=========================
if(localStorage.darkMode!=null){
    body.classList.add(localStorage.darkMode);
}
btnSlide1.addEventListener('click',()=>{
    if(mood==="light"){
        body.classList.add('dark-mode');
        mood="dark"
        localStorage.setItem("darkMode","dark-mode")
    }else{
        body.classList.remove('dark-mode');
        mood="light"
        localStorage.removeItem("darkMode")
    }
})
// ====================END DARK MODE=========================
let videos=document.querySelectorAll('.bg-video')

if(localStorage.playVid!=null){
    vid=localStorage.playVid;
}
if(vid==="runn"){
    btnVid.innerHTML=`<i class="fa-regular fa-circle-play"></i>`
    videos.forEach((e)=>{
        e.style.display="none"
    })
}
else{
    btnVid.innerHTML=`<i class="fa-regular fa-circle-pause"></i>`
    videos.forEach((e)=>{
        e.style.display="block"
    })
}
btnVid.addEventListener('click',()=>{
    if(vid==="run"){
        btnVid.innerHTML=`<i class="fa-regular fa-circle-play"></i>`
        videos.forEach((e)=>{
            e.style.display="none"
        })
        vid="pause"
        localStorage.setItem("playVid","runn")
    }
    else{
        btnVid.innerHTML=`<i class="fa-regular fa-circle-pause"></i>`
        videos.forEach((e)=>{
            e.style.display="block"
        })
        localStorage.removeItem("playVid")
        vid="run"
    }
})
// MIC IN CONTACT PAGE
let record=document.getElementById('record');
let textArea=document.getElementById('text-record')
record.onclick=()=>{
    playRecord()
    let speech=true;
    window.SpeechRecognition= window.webkitSpeechRecognition;
    let recognition=new SpeechRecognition();
    recognition.lang="ar-AR";
    recognition.interimResults;
    recognition.addEventListener('result',e=>{
        let transcript=Array.from(e.results)
        .map(result=>result[0])
        .map(result =>result.transcript)
        textArea.innerText +=transcript;
    })
    if(speech){
        recognition.start()
    }
}
function playRecord(){
    record.style.animation="record 1s infinite alternate"
    setTimeout(()=>{
        record.style.animation="none"
    },5000)
}
// FORM SEND TO EMAIL 
function SendMail(){
    let form=document.getElementById('form')
    let formName=document.getElementById('fullName');
    let formEmail=document.getElementById('email_id');
    let formMessage=document.getElementById('text-record');
    let done=document.getElementById('done');
    var params={
        from_name : formName.value,
        email_id : formEmail.value,
        message : formMessage.value
    }
    if(formEmail.value!='' && formName.value!='' && formMessage.value!=''){
        emailjs.send("service_zji9k6a","template_27c9fcc", params).then(function (res){
        })
        done.style.display="flex"
        setTimeout(()=>{
            done.style.display="none"
        },2000)
        // clear inputs
        formEmail.value=''
        formName.value=''
        formMessage.value=''
        msgerror.style.display="none"
    }
    else{
        let msgError=document.createElement("p");
        msgError.className="msg-error";
        msgError.id="msgerror"
        msgError.innerHTML="Please enter all information !";
        form.appendChild(msgError)
    }

}