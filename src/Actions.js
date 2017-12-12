import store from './Store';

export const draw = () => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var imageObj1 = new Image();
    var imageObj2 = new Image();
    imageObj1.setAttribute('crossOrigin', 'anonymous'); //
    imageObj1.src = store.getState().polo;
    
    imageObj1.onload = function () {
        ctx.drawImage(imageObj1, 0, 10, 600, 500);
        imageObj2.setAttribute('crossOrigin', 'anonymous'); // works for me
        imageObj2.src = store.getState().logo;
        
        imageObj2.onload = function () {
            ctx.drawImage(imageObj2, 200, 150, 80, 50);
            var img = c.toDataURL("image/png");
            store.setState({
                allImage : img,
            })
            // document.write('<img src="' + img + '" width="328" height="526"/>');
        }
    };
}

export const saveImage = (image) => {
    console.log(image);
}
