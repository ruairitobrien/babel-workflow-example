class ForWantOfANail {
    constructor() {
        this.wants = new Map();
        let w = this.wants;
        w.set('nail', 'shoe');
        w.set('shoe', 'horse');
        w.set('horse', 'knight');
        w.set('knight', 'battle');
        w.set('battle', 'kingdom');
    }

    print() {
        for (var [key, value] of this.wants) {
            console.log(`For want of a ${key} the ${value} was lost,`);            
        }        
        console.log('So a kingdom was lost—all for want of a nail.');
    }
    
    toHtmlString() {
        var theString = '';
        for (var [key, value] of this.wants) {
            theString += `For want of a ${key} the ${value} was lost,<br>`;            
        }
        return theString += 'So a kingdom was lost—all for want of a nail.';
    }
}


const nail = new ForWantOfANail();

nail.print();