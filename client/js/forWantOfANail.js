export class ForWantOfANail {
    constructor() {
        this.wants = new Map();
        let w = this.wants;
        w.set('nail', 'shoe');
        w.set('shoe', 'horse');
        w.set('horse', 'knight');
        w.set('knight', 'battle');
        w.set('battle', 'kingdom');
    }
    
    toString() {
        var forWantOfANailString = '';
        for (var [key, value] of this.wants) {
            forWantOfANailString += `For want of a ${key} the ${value} was lost,\n`;            
        }
        forWantOfANailString += 'So a kingdom was lost—all for want of a nail.'
        
        return forWantOfANailString;
    }
    
    toHtmlString() {
        var htmlString = '';
        for (var [key, value] of this.wants) {
            htmlString += `For want of a ${key} the ${value} was lost,<br>`;            
        }
        return htmlString += 'So a kingdom was lost, all for want of a nail.';
    }
}