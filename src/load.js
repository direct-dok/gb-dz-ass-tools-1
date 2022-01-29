function loadScript(url, callback = function() {console.log('default Callback')}) {
    
    if(typeof url === 'string') {

        
        if(existPageScript(url)) {
            const element = createScript(url);
            element.onload = callback;
            document.body.appendChild(element);
        }
        
    }

    if(Array.isArray(url)) {

        url.forEach(el => {
            if(existPageScript(el)) {
                const element = createScript(el);
                element.onload = callback;
                document.body.appendChild(element);
            }
        });

    }

    if(typeof url === 'function') {
        url();
    }

    

}

function createScript(url) {

    const element = document.createElement('script');
    element.type = 'text/javascript';
    element.src = url;
    return element;

}

function existPageScript(url) {
    let bodyScript = document.getElementsByTagName('script');
    let loadScript = true;

    [...bodyScript].forEach(el => {
        if(el.src.includes(url)) loadScript = false;
    });

    return loadScript;
}

loadScript(['src/A.js', 'src/B.js', 'src/C.js', 'src/A.js', 'src/A.js'], () => {
    console.log('loadScript A CallBack');
});

loadScript('src/A.js', () => {console.log('connect script A.js')});

loadScript(function() {
    console.log('Param Call Back');
})

