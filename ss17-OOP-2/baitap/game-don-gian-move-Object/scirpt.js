
class Hero{
    constructor(image,top,left,size){
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }

    getHeroElement(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    moveRight(){
        this.left += 100;
        console.log('ok: ' + this.left);
    }
    moveLeft(){
        this.left -= 100;
        console.log('ok: ' + this.left);
    }
    moveUp(){
        this.top -= 100;
        console.log('ok: ' + this.top);
    }
    moveDown(){
        this.top += 100;
        console.log('ok: ' + this.top);
    }
}


let hero = new Hero('pro.png', 20, 30, 200);
document.getElementById('game').innerHTML = hero.getHeroElement();
function start(evt){
    switch (evt.keyCode) {
        case 37:
            hero.moveLeft();
            break;
        case 39:
            hero.moveRight();
            break;
        case 38:
            hero.moveUp();
            break;
        case 40:
            hero.moveDown();
            break;
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 200);
}

function docReady() {
    window.addEventListener('keydown', start);
}
