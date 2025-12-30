const ctx = canvas.getContext("2d");
//requestAnimationFrame(update);

const fillRadio = () => document.getElementById("fillRadio").checked;
const edgeRadio = () => document.getElementById("edgeRadio").checked;
const doorRadio = () => document.getElementById("doorRadio").checked;
const lightRadio = () => document.getElementById("lightRadio").checked;
const doorsCheck = () => document.getElementById("doorsCheck").checked;
const doorTypesCheck = () => document.getElementById("doorTypesCheck").checked;
const lightsCheck = () => document.getElementById("lightsCheck").checked;
const stampRadio = () => document.getElementById("stampRadio").checked;
const colorFill = () => document.getElementById("fillColor").value;
const colorEdge = () => document.getElementById("edgeColor").value;
const colorLight = () => document.getElementById("lightColor").value;
const blockMoveCheck = () => document.getElementById("blockMoveCheck").checked;
const blockSightCheck = () => document.getElementById("blockSightCheck").checked;

const infoDiv = document.getElementById('info');
const infoDivDim = document.getElementById('infoDimensions');
document.getElementById('fillRadio').addEventListener('click', e => {
    document.getElementById('blockingDiv').style.visibility = "visible";
    document.getElementById('blockMoveCheck').checked = false;
    document.getElementById('blockSightCheck').checked = false;
    
    for(let c of infoDiv.children) infoDiv.removeChild(c);
    let controlTipDiv = document.createElement('div');
    controlTipDiv.classList.add('controlTip');
    infoDiv.appendChild(controlTipDiv);
    infoDiv.appendChild(infoDivDim);
    let tooltips = [
        'Left Click: ',
        '- Fill Cell',
        'Left Click + Drag: ',
        '- Fill all Cells dragged over',
        'Right Click: ',
        '- Delete Cell',
        'Right Click + Drag: ',
        '- Delete all Cells dragged over',
        'Checkboxes: ',
        '- Block Movement/Sight',
        '- Has no visual effect in this app, is intended solely for Foundry Exporting',
        '- Will cause Filled Cells to block tokens movement or sight as indicated',
        '- Is automatically reset to block neither when Fill is selected',
        'While holding Shift:',
        '- Left Click to start tracing a Line',
        '- Left Click Again to Fill the indicated Line',
        'While holding Ctrl + Shift:',
        '- Left Click to start tracing a Rectangle',
        '- Left Click Again to Fill the indicated Rectangle'
    ];
    for(let t of tooltips) {
        let txt = document.createElement('label');
        txt.classList.add('controlTip');
        if(t.charAt(0) === '-') {
            txt.classList.add('controlTipIndent');
            t = t.slice(2);
        }
        txt.innerHTML = t;
        controlTipDiv.appendChild(txt);
    }
    
}); document.getElementById('fillRadio').click(); // Proc Fill on load
document.getElementById('edgeRadio').addEventListener('click', e => {
    document.getElementById('blockingDiv').style.visibility = "visible";
    document.getElementById('blockMoveCheck').checked = true;
    document.getElementById('blockSightCheck').checked = true;
    
    for(let c of infoDiv.children) infoDiv.removeChild(c);
    let controlTipDiv = document.createElement('div');
    controlTipDiv.classList.add('controlTip');
    infoDiv.appendChild(controlTipDiv);
    infoDiv.appendChild(infoDivDim);
    let tooltips = [
        'Left Click: ',
        '- Draw Edge',
        '- Must be relatively centered on an edge',
        'Left Click + Drag: ',
        '- Draw all Edges dragged over',
        'Right Click: ',
        '- Delete Edge',
        '- Same selection rule as Left Click',
        'Right Click + Drag: ',
        '- Delete all Edges dragged over',
        'Checkboxes: ',
        '- Block Movement/Sight',
        '- Has no visual effect in this app, is intended solely for Foundry Exporting',
        '- Will cause Drawn Edges to block tokens movement or sight as indicated',
        '- Is automatically reset to block both when Edge is selected',
        'While holding Shift:',
        '- Left Click to start tracing a Line',
        '- Left Click Again to Draw the indicated Line',
        'While holding Ctrl + Shift:',
        '- Left Click to start tracing a Rectangle',
        '- Left Click Again to Draw the indicated Rectangle'
    ];
    for(let t of tooltips) {
        let txt = document.createElement('label');
        txt.classList.add('controlTip');
        if(t.charAt(0) === '-') {
            txt.classList.add('controlTipIndent');
            t = t.slice(2);
        }
        txt.innerHTML = t;
        controlTipDiv.appendChild(txt);
    }
});
document.getElementById('doorRadio').addEventListener('click', e => {
    document.getElementById('blockingDiv').style.visibility = "hidden";
    document.getElementById('blockMoveCheck').checked = false;
    document.getElementById('blockSightCheck').checked = false;
    
    for(let c of infoDiv.children) infoDiv.removeChild(c);
    let controlTipDiv = document.createElement('div');
    controlTipDiv.classList.add('controlTip');
    infoDiv.appendChild(controlTipDiv);
    infoDiv.appendChild(infoDivDim);
    let tooltips = [
        'Left Click: ',
        '- Place Door',
        '- Must be relatively centered on an edge',
        'Left Click + Drag: ',
        '- Place Doors on all Edges dragged over',
        'Right Click: ',
        '- Delete Door',
        '- Same selection rule as Left Click',
        'Right Click + Drag: ',
        '- Delete all Doors dragged over',
        'Double Left Click: ',
        '- Edit Door Type',
        '- Open popup to edit Type of Door',
        '- When placing stamps with \'Doors must Match\' enabled, Door Types must also match',
        'While holding Shift:',
        '- Left Click to start tracing a Line',
        '- Left Click Again to Place the indicated Line',
        'While holding Ctrl + Shift:',
        '- Left Click to start tracing a Rectangle',
        '- Left Click Again to Place the indicated Rectangle'
    ];
    for(let t of tooltips) {
        let txt = document.createElement('label');
        txt.classList.add('controlTip');
        if(t.charAt(0) === '-') {
            txt.classList.add('controlTipIndent');
            t = t.slice(2);
        }
        txt.innerHTML = t;
        controlTipDiv.appendChild(txt);
    }
});
document.getElementById('stampRadio').addEventListener('click', e => {
    document.getElementById('blockingDiv').style.visibility = "hidden";
    document.getElementById('blockMoveCheck').checked = false;
    document.getElementById('blockSightCheck').checked = false;
    
    for(let c of infoDiv.children) infoDiv.removeChild(c);
    let controlTipDiv = document.createElement('div');
    controlTipDiv.classList.add('controlTip');
    infoDiv.appendChild(controlTipDiv);
    infoDiv.appendChild(infoDivDim);
    let tooltips = [
        'Left Click: ',
        '- Place Stamp',
        'Right Click: ',
        '- Rotate Stamp',
        'Checkbox: ',
        '- Allow Collision',
        '- If unchecked, can only place a stamp when all overlapping edges and fills are of the same color',
        'Checkbox: ',
        '- Doors must Match',
        '- If Checked while Allow Collision is Unchecked, will also prevent placement unless there is at least one overlapping door',
        'Propagate Stamps ',
        '- (Button in Top Right)',
        '- The Number in parentheses indicates number of "exterior" doors, as determined by having at least one side without a fill',
        '- Will place stamps as able to with random rotation',
        '- Will always act as having Allow Collision disabled and Doors must Match enabled'
    ];
    for(let t of tooltips) {
        let txt = document.createElement('label');
        txt.classList.add('controlTip');
        if(t.charAt(0) === '-') {
            txt.classList.add('controlTipIndent');
            t = t.slice(2);
        }
        txt.innerHTML = t;
        controlTipDiv.appendChild(txt);
    }
});
document.getElementById('lightRadio').addEventListener('click', e => {
    document.getElementById('blockingDiv').style.visibility = "hidden";
    document.getElementById('blockMoveCheck').checked = false;
    document.getElementById('blockSightCheck').checked = false;
    
    for(let c of infoDiv.children) infoDiv.removeChild(c);
    let controlTipDiv = document.createElement('div');
    controlTipDiv.classList.add('controlTip');
    infoDiv.appendChild(controlTipDiv);
    infoDiv.appendChild(infoDivDim);
    let tooltips = [
        'Left Click: ',
        '- Place Light Source',
        '- Has no visual effect in this app, is intended solely for Foundry Exporting',
        'Right Click: ',
        '- Delete Light Source',
        'Right Click + Drag: ',
        '- Delete all Light Sources dragged over',
        'Double Left Click: ',
        '- Edit Light Details',
        '- Allows editing of Light Color, Dim Range, Bright Range, and Color Opacity'
    ];
    for(let t of tooltips) {
        let txt = document.createElement('label');
        txt.classList.add('controlTip');
        if(t.charAt(0) === '-') {
            txt.classList.add('controlTipIndent');
            t = t.slice(2);
        }
        txt.innerHTML = t;
        controlTipDiv.appendChild(txt);
    }
});

const propagateBtn = document.getElementById("propagate");

const mouse  = {x: 0, y: 0, button: false, wheel: 0, lastX: 0, lastY: 0, drag: false};
const gridLimit = 40;  // max grid lines for static grid - fades out grid lines after
var gridSize = 20;  // grid size in world pixels
const scaleRate = 1.02; // Closer to 1 slower rate of change
                        // Less than 1 inverts scaling change and same rule
                        // Closer to 1 slower rate of change
var topLeft = {x: 0, y: 0};  // holds top left of canvas in world coords.
const historyMax = 50;

class MapManager {
    mapFills = {};
    mapEdges = {};
    mapDoors = {};
    mapLights = [];
    
    history = [[]];
    
    changed = false;
    
    panZoom = {
        x: 0,
        y: 0,
        scale: 2,
        apply() { ctx.setTransform(this.scale, 0, 0, this.scale, this.x, this.y); },
        scaleAt(x, y, sc) {  // x & y are screen coords, not world
            this.scale *= sc;
            this.x = x - (x - this.x) * sc;
            this.y = y - (y - this.y) * sc;
        },
        toWorld(x, y, point = {}) {   // converts from screen coords to world coords
            const inv = 1 / this.scale;
            point.x = (x - this.x) * inv;
            point.y = (y - this.y) * inv;
            return point;
        }
    };
    
    markEdit() { 
        this.history.unshift([]);
        if(this.history.length > historyMax) this.history.pop();
        this.changed = true;
    }
    setFill(x, y, fill, blockMove = false, blockSight = false, save = true) {
        if(this.history.length === 0) this.history.unshift([]);
        let xExisted = false;
        let fillPrev;
        
        if(!this.mapFills[x]) this.mapFills[x] = {};
        else xExisted = true;
        if(!this.mapFills[x][y]) this.mapFills[x][y] = {};
        else fillPrev = this.mapFills[x][y];
        
        if(fill) this.mapFills[x][y] = {
                    fill: fill,
                    blockMove: blockMove,
                    blockSight: blockSight
                };
        else {
            delete this.mapFills[x][y];
            if(this.mapFills[x].length === 0) delete this.mapFills[x];
        }
        
        this.changed = true;
        
        if(save) {
            if(!xExisted) this.history[0].push(() => delete this.mapFills[x]);
            else if(!fillPrev) this.history[0].push(() => delete this.mapFills[x][y]);
            else this.history[0].push(() => this.setFill(x, y, fillPrev.fill, fillPrev.blockMove, fillPrev.blockSight, false));
        }
    }
    setEdge(x, y, d, stroke, blockMove = false, blockSight = false, save = true) {
        if(this.history.length === 0) this.history.unshift([]);
        let xExisted = false;
        let yExisted = false;
        let strokePrev;
        
        if(!this.mapEdges[x]) this.mapEdges[x] = {};
        else xExisted = true;
        if(!this.mapEdges[x][y]) this.mapEdges[x][y] = {};
        else yExisted = true;
        if(!this.mapEdges[x][y][d]) this.mapEdges[x][y][d] = {};
        else strokePrev = this.mapEdges[x][y][d];

        if(stroke) this.mapEdges[x][y][d] = {
                    stroke: stroke,
                    blockMove: blockMove,
                    blockSight: blockSight
                };
        else {
            delete this.mapEdges[x][y][d];
            if(this.mapEdges[x][y].length === 0) delete this.mapEdges[x][y];
            if(this.mapEdges[x].length === 0) delete this.mapEdges[x];
        }
        
        this.changed = true;
        
        if(save) { 
            if(!xExisted) this.history[0].push(() => delete this.mapEdges[x]);
            else if(!yExisted) this.history[0].push(() => delete this.mapEdges[x][y]);
            else if(!strokePrev) this.history[0].push(() => delete this.mapEdges[x][y][d]);
            else this.history[0].push(() => this.setEdge(x, y, d, strokePrev.stroke, strokePrev.blockMove, strokePrev.blockSight, false));
        }
    }
    setDoor(x, y, d, type = -1, save = true) {
        if(this.history.length === 0) this.history.unshift([]);
        let xExisted = false;
        let yExisted = false;
        let typePrev;
        
        if(!this.mapDoors[x]) this.mapDoors[x] = {};
        else xExisted = true;
        if(!this.mapDoors[x][y]) this.mapDoors[x][y] = {};
        else yExisted = true;
        if(!this.mapDoors[x][y][d]) this.mapDoors[x][y][d] = {};
        else typePrev = this.mapDoors[x][y][d];
        
        if(type && type !== -1) this.mapDoors[x][y][d].type = type;
        if(!type) {
            delete this.mapDoors[x][y][d];
            if(this.mapDoors[x][y].length === 0) delete this.mapDoors[x][y];
            if(this.mapDoors[x].length === 0) delete this.mapDoors[x];
        }
        
        this.changed = true;
        
        if(save) {
            if(!xExisted) this.history[0].push(() => delete this.mapDoors[x]);
            else if(!yExisted) this.history[0].push(() => delete this.mapDoors[x][y]);
            else if(!typePrev) this.history[0].push(() => delete this.mapDoors[x][y][d]);
            else this.history[0].push(() => this.setDoor(x, y, d, typePrev.type ? typePrev.type : -1, false));
        }
    }
    setLight(x, y, color, rangeDim = 40, rangeBright = 20, colorAlpha = 0.05) {
        if(this.history.length === 0) this.history.unshift([]);
        
        let l = this.getLight(x, y);
        if(l) {
            this.mapLights.splice(this.mapLights.indexOf(l), 1);
            if(color) {
                l.color = color;
                l.dim = rangeDim;
                l.bright = rangeBright;
                l.alpha = colorAlpha;
            }
        } else if(color) {
            l = {
                x: x,
                y: y,
                dim: rangeDim,
                bright: rangeBright,
                color: color,
                alpha: colorAlpha
            };
        }
        if(color) this.mapLights.push(l);
        
        this.changed = true;
        
        if(color) this.history[0].push(() => this.mapLights.splice(this.mapLights.indexOf(l), 1));
        else this.history[0].push(() => this.mapLights.push(l));
    }
    
    recenter(newX, newY) { // Technically shifts this location to be 0,0 in the map, rather than actually "centering" it
        let newFills = {};
        for(let x of Object.keys(this.mapFills)) {
            for(let y of Object.keys(this.mapFills[x])) {
                if(!newFills[x - newX]) newFills[x - newX] = {};
                newFills[x - newX][y - newY] = this.mapFills[x][y];
            }
        }
        this.mapFills = newFills;
        
        let newEdges = {};
        for(let x of Object.keys(this.mapEdges)) {
            for(let y of Object.keys(this.mapEdges[x])) {
                if(!newEdges[x - newX]) newEdges[x - newX] = {};
                newEdges[x - newX][y - newY] = this.mapEdges[x][y];
            }
        }
        this.mapEdges = newEdges;
        
        let newDoors = {};
        for(let x of Object.keys(this.mapDoors)) {
            for(let y of Object.keys(this.mapDoors[x])) {
                if(!newDoors[x - newX]) newDoors[x - newX] = {};
                newDoors[x - newX][y - newY] = this.mapDoors[x][y];
            }
        }
        this.mapDoors = newDoors;
        
        let newLights = [];
        for(let l of this.mapLights) {
            l.x -= newX;
            l.y -= newY;
            newLights.push(l);
        }
        this.mapLights = newLights;
    }
    findOriginCorner() {
        let minX = Number.MAX_SAFE_INTEGER;
        let minY = Number.MAX_SAFE_INTEGER;
        for(let x of Object.keys(this.mapFills)) {
            minX = Math.min(minX, x);
            for(let y of Object.keys(this.mapFills[x])) {
                minY = Math.min(minY, y);
            }
        }
        for(let x of Object.keys(this.mapEdges)) {
            minX = Math.min(minX, x);
            for(let y of Object.keys(this.mapEdges[x])) {
                minY = Math.min(minY, y);
            }
        }
        for(let x of Object.keys(this.mapDoors)) {
            minX = Math.min(minX, x);
            for(let y of Object.keys(this.mapDoors[x])) {
                minY = Math.min(minY, y);
            }
        }
        return [minX, minY];
    }
    getDimensions() { // returns in gridSquares
        let xMax = Number.MIN_SAFE_INTEGER;
        let yMax = Number.MIN_SAFE_INTEGER;
        
        for(let x of Object.keys(this.mapFills)) {
            xMax = Math.max(xMax, x);
            for(let y of Object.keys(this.mapFills[x])) {
                yMax = Math.max(yMax, y);
            }
        }
        for(let x of Object.keys(this.mapEdges)) {
            xMax = Math.max(xMax, x);
            for(let y of Object.keys(this.mapEdges[x])) {
                yMax = Math.max(yMax, y);
            }
        }
        for(let x of Object.keys(this.mapDoors)) {
            xMax = Math.max(xMax, x);
            for(let y of Object.keys(this.mapDoors[x])) {
                yMax = Math.max(yMax, y);
            }
        }
        
        let [xMin, yMin] = this.findOriginCorner();
        
        return [xMax - xMin + 1, yMax - yMin + 1];
    }
    getExteriorDoors() {
        let doors = [];
        for(let x of Object.keys(this.mapDoors)) {
            for(let y of Object.keys(this.mapDoors[x])) {
                for(let d of Object.keys(this.mapDoors[x][y])) {
                    switch(d) {
                        case 'right': { // check x,y && x,y-1
                            if(!this.mapFills[x] || 
                               !this.mapFills[x][y] ||
                               !this.mapFills[x][y-1]) doors.push([x,y,d])
                        } break;
                        case 'down': { // check x,y && x-1,y
                            if(!this.mapFills[x] ||
                               !this.mapFills[x][y] ||
                               !this.mapFills[x-1] ||
                               !this.mapFills[x-1][y]) doors.push([x,y,d]);
                        } break;
                    }
                }
            }
        }
        return doors;
    }
    getLight(x, y) {
        for(let l of this.mapLights) if(dist(x, y, l.x, l.y) < 0.25) return l;
        return false;
    }
    
    undo() {
        if(this.history.length === 0) return;
        let hist = this.history.shift();
        while(hist.length > 0) hist.pop()();
        this.changed = true;
    }
    
    rotate(recenter = true) {
        // Rotate Fills
        let nf = {}
        for(let x of Object.keys(this.mapFills)) {
            for(let y of Object.keys(this.mapFills[x])) {
                if(!nf[y]) nf[y] = {};
                nf[y][x * -1] = this.mapFills[x][y];
            }
        }
        this.mapFills = nf;
        // Rotate Edges
        let ne = {}
        for(let x of Object.keys(this.mapEdges)) {
            for(let y of Object.keys(this.mapEdges[x])) {
                for(let d of Object.keys(this.mapEdges[x][y])) {
                    switch(d) {
                        case "right": { // Becomes down
                            let dX = (x * -1);
                            if(!ne[y]) ne[y] = {};
                            if(!ne[y][dX]) ne[y][dX] = {};
                            ne[y][dX].down = this.mapEdges[x][y][d];
                        } break;
                        case "down": { // Becomes right for y+1
                            let dX = (x * -1) + 1;
                            if(!ne[y]) ne[y] = {};
                            if(!ne[y][dX]) ne[y][dX] = {};
                            ne[y][dX].right = this.mapEdges[x][y][d];
                        } break;
                    }
                }
            }
        }
        this.mapEdges = ne;
        // Rotate Doors
        let nd = {}
        for(let x of Object.keys(this.mapDoors)) {
            for(let y of Object.keys(this.mapDoors[x])) {
                for(let d of Object.keys(this.mapDoors[x][y])) {
                    switch(d) {
                        case "right": { // Becomes down
                            let dX = (x * -1);
                            if(!nd[y]) nd[y] = {};
                            if(!nd[y][dX]) nd[y][dX] = {};
                            nd[y][dX].down = this.mapDoors[x][y][d];
                        } break;
                        case "down": { // Becomes right for y+1
                            let dX = (x * -1) + 1;
                            if(!nd[y]) nd[y] = {};
                            if(!nd[y][dX]) nd[y][dX] = {};
                            nd[y][dX].right = this.mapDoors[x][y][d];
                        } break;
                    }
                }
            }
        }
        this.mapDoors = nd;
        
        if(recenter) this.recenter(...(this.findOriginCorner()));
    }
    
    clone() {
        let o = Object.create(MapManager.prototype);
        Object.assign(o, JSON.parse(JSON.stringify(this)));
        o.restore();
        return o;
    }
    restore() {
        this.panZoom.apply = function() { ctx.setTransform(this.scale, 0, 0, this.scale, this.x, this.y); };
        this.panZoom.scaleAt = function(x, y, sc) {  // x & y are screen coords, not world
            this.scale *= sc;
            this.x = x - (x - this.x) * sc;
            this.y = y - (y - this.y) * sc;
        };
        this.panZoom.toWorld = function(x, y, point = {}) {   // converts from screen coords to world coords
            const inv = 1 / this.scale;
            point.x = (x - this.x) * inv;
            point.y = (y - this.y) * inv;
            return point;
        }
    }
    stripped() {
        let m = this.clone();
        m.mapFillsHistory = [];
        m.mapEdgesHistory = [];
        m.mapDoorsHistory = [];
        m.history = [];
        return m;
    }
    
    static checkCollision(dest, src, doorMatch) {
        // Fill Collisions
        for(let x of Object.keys(src.mapFills)) {
            for(let y of Object.keys(src.mapFills[x])) {
                if(dest.mapFills[x] && 
                   dest.mapFills[x][y] && 
                   dest.mapFills[x][y].fill !== src.mapFills[x][y].fill) return true; // Collide if different Fill
            }
        }
        // Edge Collisions
        for(let x of Object.keys(src.mapEdges)) {
            for(let y of Object.keys(src.mapEdges[x])) {
                for(let d of Object.keys(src.mapEdges[x][y])) {
                    if(dest.mapEdges[x] && 
                       dest.mapEdges[x][y] && 
                       dest.mapEdges[x][y][d] && 
                       dest.mapEdges[x][y][d].stroke !== src.mapEdges[x][y][d].stroke) return true; // Collide if different Stroke
                }
            }
        }
        // Door Collisions
        if(doorMatchCheck() || doorMatch) { // Only check DoorCollision if enabled
            for(let x of Object.keys(src.mapDoors)) {
                for(let y of Object.keys(src.mapDoors[x])) {
                    for(let d of Object.keys(src.mapDoors[x][y])) {
                        if(dest.mapDoors[x] && 
                           dest.mapDoors[x][y] &&
                           dest.mapDoors[x][y][d]) return false; // No collision as long as one door matches
                    }
                }
            }
            return true; // Only reach this point if checking for doors and didn't find any - thus no door match
        }
        
        return false;
    }
}
class Stamp {
    name;
    map;
    id;
    constructor(name, map) {
        this.name = name;
        this.map = map;
        this.id = Stamp.idInc();
    }
    static idInc() { return Stamp.inc++; }
    static inc = 0;
}
var map = new MapManager();
var activeStamp = null;
var mainMap = map;

document.getElementById("clearMap").addEventListener("click", clearMap);
function clearMap(e) {
    map = new MapManager();
    if(!inStamp) mainMap = map;
    map.changed = true;
}

var ghostMap = null;
var ghostRotate = 0;
var ghostOrigin = {};

var stamps = []
function sortStamps() {
    stamps.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : a.id - b.id);
}
const stampbox = document.getElementById("stampbox");
const stampList = document.getElementById("stampList");
const collideCheck = () => document.getElementById("collideCheck").checked;
const doorMatchCheck = () => document.getElementById("doorMatchCheck").checked;
function updateStampbox() {
    let ns = document.getElementById("newStamp");
    stampbox.innerHTML = '';
    stampbox.appendChild(propagateBtn);
    stampbox.appendChild(ns);
    
    stampList.innerHTML = '';
    for(let s of stamps) {
        let b = document.createElement("button");
        b.id = s.id;
        b.innerHTML = s.name;
        b.type = "button";
        b.onclick = (e) => showStamp(e);
        stampbox.appendChild(b)
        
        let o = document.createElement("option");
        o.value = s.id;
        o.innerHTML = s.name;
        stampList.appendChild(o);
    }
    map.changed = true;
}

propagateBtn.addEventListener("click", propagateStamps);
function propagateStamps(e) {
    map.markEdit(); // Setting marker here means entire propagation will undo as one
    
    for(let [x,y,d] of map.getExteriorDoors()) {
        for(let i = 0; i < stamps.length ** 2; ++i) {
            let m = stamps[Math.floor(Math.random() * stamps.length)].map.clone();
            mDoors = m.getExteriorDoors();
            if(mDoors.length === 0) continue;
            let [mx, my, md] = mDoors[Math.floor(Math.random() * mDoors.length)];
            
            m.recenter(mx, my);
            
            let r = 0;
            if(d == md) { // Rotate 0 or 2
                if(Math.random() > 0.5) r = 2;
            } else { // Rotate 1 or 3
                r = 1;
                if(Math.random() > 0.5) r = 3;
            }
            
            for(let rr = r; rr > 0; --rr) {
                m.rotate(false);
            }
            
            m.recenter(x * -1, y * -1)
            
            if(!MapManager.checkCollision(map, m, true)) {
                placeStamp(m);
                break;
            }
        }
    }
}
function placeStamp(placeMap = ghostMap) {
    for(let x of Object.keys(placeMap.mapFills)) {
        for(let y of Object.keys(placeMap.mapFills[x])) {
            map.setFill(x, y, placeMap.mapFills[x][y].fill, placeMap.mapFills[x][y].blockMove, placeMap.mapFills[x][y].blockSight);
        }
    }
    for(let x of Object.keys(placeMap.mapEdges)) {
        for(let y of Object.keys(placeMap.mapEdges[x])) {
            for(let d of Object.keys(placeMap.mapEdges[x][y])) {
                map.setEdge(x, y, d, placeMap.mapEdges[x][y][d].stroke, placeMap.mapEdges[x][y].blockMove, placeMap.mapEdges[x][y].blockSight);
            }
        }
    }
    for(let x of Object.keys(placeMap.mapDoors)) {
        for(let y of Object.keys(placeMap.mapDoors[x])) {
            for(let d of Object.keys(placeMap.mapDoors[x][y])) {
                map.setDoor(x, y, d, placeMap.mapDoors[x][y][d].type);
            }
        }
    }
    for(let l of placeMap.mapLights) map.setLight(l.x, l.y, l.color, l.dim, l.bright, l.alpha);
}

const lerp = (x, y, i) => x * (1 - i) + y * i;
const invLerp = (x, y, i) => Math.min(1, Math.max(0, (i - x) / (y - x)));
const range = (x1, y1, x2, y2, i) => lerp(x2, y2, invLerp(x1, y1, i));
const dist = (x1, y1, x2, y2) => Math.pow(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2), 0.5);
const distXAxis = (x1, y1, x2, y2) => Math.pow(Math.pow(x2 - x1, 2) + Math.pow(2 * (y2 - y1), 2), 0.5);
const distYAxis = (x1, y1, x2, y2) => Math.pow(Math.pow(2 * (x2 - x1), 2) + Math.pow(y2 - y1, 2), 0.5);
    
function getGridFillLine(start, end) { // start && end in format {x: 0, y: 0}
    let {sign, abs} = Math;
    let dx = abs(end.x - start.x);
    let dy = abs(end.y - start.y);
    let sx = sign(end.x - start.x);
    let sy = sign(end.y - start.y);
    let err = dx - dy;

    let ret = [];
    while(true) {
        ret.push({'x': start.x, 'y': start.y});
        if(start.x == end.x && start.y == end.y) break; // Finish when start reaches end

        let e2 = 2 * err;
        if(e2 > -dy) {
            err -= dy;
            start.x += sx;
        }
        if(e2 < dx) {
            err += dx;
            start.y += sy;
        }
    }

    return ret;
}
function getEdgeFillLine(start, end) { // start && end in format {x: 0, y: 0, d: 'down'|'right'}
    let {sign, abs} = Math;
    if(start.d === 'down') start.y += 1;
    else start.x += 1;
    if(end.d === 'down') end.y += 1;
    else end.x += 1;
    let dx = abs(end.x - start.x);
    let dy = abs(end.y - start.y);
    let sx = sign(end.x - start.x);
    let sy = sign(end.y - start.y);
    let err = dx - dy;

    let ret = [];
    while(true) {
        ret.push({'x': start.x - (start.d == 'right' ? 1 : 0), 'y': start.y - (start.d == 'down' ? 1 : 0), 'd': start.d});
        if(start.x == end.x && start.y == end.y) break; // Finish when start reaches end

        let e2 = 2 * err;
        if(e2 > -dy) {
            err -= dy;
            start.x += sx;
            start.d = 'right';
        }
        if(e2 < dx) {
            err += dx;
            start.y += sy;
            start.d = 'down';
        }
    }
    
    return ret;
}
function updateDrag(e) {
    let pzW = map.panZoom.toWorld(mouse.x, mouse.y);
    let mX = pzW.x;
    let mY = pzW.y;
    
    let d = "unset";
    let x = Math.floor(mX / gridSize);
    let y = Math.floor(mY / gridSize);
    
    
    // Identifying target and filtering duplicates
    if(fillRadio()) {
        if(e.type === "mousemove" && lastCell[0] == x && lastCell[1] == y) return;
        else lastCell = [x, y]; // Filter out dragging through same cell
        //console.log([x, y]);
    }
    if(edgeRadio() || doorRadio()) {
        let dX = (mX / gridSize) - x;
        let dY = (mY / gridSize) - y;

        let edgeTolerance = 0.4;
        if(distYAxis(dX, dY, 0, 0.5) < edgeTolerance) { // Left
            d = "down";
        }
        else if(distXAxis(dX, dY, 0.5, 0) < edgeTolerance) { // Top
            d = "right";
        }
        else if(distYAxis(dX, dY, 1, 0.5) < edgeTolerance) { // Right
            x++;
            d = "down";
        }
        else if(distXAxis(dX, dY, 0.5, 1) < edgeTolerance) { // Bottom
            y++;
            d = "right";
        } else {
            return;
        }
        if(e.type === "mousemove" && lastCell[0] == x && lastCell[1] == y && lastCell[2] == d) return;
        else lastCell = [x, y, d]; // Filter out dragging through same cell
    }
    
    if(!e.ctrlKey) { // Line Placement (implicit mousemove)
        if(fillRadio()) {
            let arr = getGridFillLine({x: ghostOrigin.x, y: ghostOrigin.y}, {x: x, y: y});
            ghostMap = new MapManager();
            let fill = colorFill();
            for(let g of arr) ghostMap.setFill(g.x, g.y, fill, blockMoveCheck(), blockSightCheck());
        }
        if(edgeRadio()) {
            let arr = getEdgeFillLine({x: ghostOrigin.x, y: ghostOrigin.y, d: ghostOrigin.d}, {x: x, y: y, d: d});
            ghostMap = new MapManager();
            let stroke = colorEdge();
            for(let g of arr) ghostMap.setEdge(g.x, g.y, g.d, stroke, blockMoveCheck(), blockSightCheck());
        }
        if(doorRadio()) {
            let arr = getEdgeFillLine({x: ghostOrigin.x, y: ghostOrigin.y, d: ghostOrigin.d}, {x: x, y: y, d: d});
            ghostMap = new MapManager();
            for(let g of arr) ghostMap.setDoor(g.x, g.y, g.d);
        }
    } else { // Fill Place
        if(fillRadio()) {
            let arr = [];
            let fill = colorFill();
            let g = {};
            for(g.x = Math.min(ghostOrigin.x, x); g.x <= Math.max(ghostOrigin.x, x); ++g.x) {
                for(g.y = Math.min(ghostOrigin.y, y); g.y <= Math.max(ghostOrigin.y, y); ++g.y) {
                    arr.push({x: g.x, y: g.y});
                }
            }
            ghostMap = new MapManager();
            for(let a of arr) ghostMap.setFill(a.x, a.y, fill, blockMoveCheck(), blockSightCheck());
        }
        if(edgeRadio()) {
            let arr = [];
            let stroke = colorEdge();
            let g = {};
            let xMin = Math.min(ghostOrigin.x, x);
            let xMax = Math.max(ghostOrigin.x, x);
            let yMin = Math.min(ghostOrigin.y, y);
            let yMax = Math.max(ghostOrigin.y, y);
            
            // Top Edge
            g.y = yMin;
            for(g.x = xMin; g.x < xMax; ++g.x) arr.push({x: g.x, y: g.y, d: 'right'});
            
            // Bottom Edge
            g.y = yMax;
            for(g.x = xMin; g.x < xMax; ++g.x) arr.push({x: g.x, y: g.y, d: 'right'});
            
            // Left Edge
            g.x = xMin;
            for(g.y = yMin; g.y < yMax; ++g.y) arr.push({x: g.x, y: g.y, d: 'down'});
            
            // Top Edge
            g.x = xMax;
            for(g.y = yMin; g.y < yMax; ++g.y) arr.push({x: g.x, y: g.y, d: 'down'});
            
            ghostMap = new MapManager();
            for(let a of arr) ghostMap.setEdge(a.x, a.y, a.d, stroke, blockMoveCheck(), blockSightCheck());
        }
        if(doorRadio()) {
            let arr = [];
            let g = {};
            let xMin = Math.min(ghostOrigin.x, x);
            let xMax = Math.max(ghostOrigin.x, x);
            let yMin = Math.min(ghostOrigin.y, y);
            let yMax = Math.max(ghostOrigin.y, y);
            
            // Top Edge
            g.y = yMin;
            for(g.x = xMin; g.x < xMax; ++g.x) arr.push({x: g.x, y: g.y, d: 'right'});
            
            // Bottom Edge
            g.y = yMax;
            for(g.x = xMin; g.x < xMax; ++g.x) arr.push({x: g.x, y: g.y, d: 'right'});
            
            // Left Edge
            g.x = xMin;
            for(g.y = yMin; g.y < yMax; ++g.y) arr.push({x: g.x, y: g.y, d: 'down'});
            
            // Top Edge
            g.x = xMax;
            for(g.y = yMin; g.y < yMax; ++g.y) arr.push({x: g.x, y: g.y, d: 'down'});
            
            ghostMap = new MapManager();
            for(let a of arr) ghostMap.setDoor(a.x, a.y, a.d);
        }
    }
}

var lastCell = [0,0]; 
function mouseEvents(e){ // e.which: 1 Left, 2 Middle, 3 Right
    //console.log(e);
    const bounds = canvas.getBoundingClientRect();
    mouse.x = e.pageX - bounds.left - scrollX;
    mouse.y = e.pageY - bounds.top - scrollY;
    switch(e.which) {
        case 0: mouseNoClick(e);
            break;
        case 1: mouseLeftClick(e);
            break;
        case 2: mouseMiddleClick(e);
            break;
        case 3: mouseRightClick(e);
            break;
    }
    if(e.type === "wheel" && e.target.id === 'canvas'){
        mouse.wheel += -e.deltaY;
        e.preventDefault();
    }
}
function mouseNoClick(e) {
    if(stampRadio() && stampList.value) {
        if(e.target.id !== "canvas") return; // Filter out clicks on other elements like radio bubbles and color pickers
        let pzW = map.panZoom.toWorld(mouse.x, mouse.y);
        let clickX = pzW.x;
        let clickY = pzW.y;
        
        let x = Math.floor(clickX / gridSize);
        let y = Math.floor(clickY / gridSize);
        
        let m = stamps.filter(s => s.id == parseInt(stampList.value))[0].map.clone();
        for(let i = 0; i < ghostRotate; ++i) m.rotate();
        m.recenter(x * -1, y * -1);
        ghostMap = m;
    }
    if(!e.shiftKey && ghostOrigin.x) {
        ghostOrigin = {}; // Reset ghostOrigin when releasing shift (used for area effects in mouseLeft) if not already
        ghostMap = new MapManager();
    }
    else if(e.shiftKey && ghostOrigin.x) updateDrag(e); // Update drag status if mouse moved with shift still held
}
function mouseLeftClick(e) {
    if(e.type === "mouseup") return; // Limits to MouseDown and MouseMove - either click or click&drag LMB
    if(e.target.id !== "canvas") return; // Filter out clicks on other elements like radio bubbles and color pickers
    let pzW = map.panZoom.toWorld(mouse.x, mouse.y);
    let clickX = pzW.x;
    let clickY = pzW.y;
    
    let d = "unset";
    let x = Math.floor(clickX / gridSize);
    let y = Math.floor(clickY / gridSize);
    
    // Identifying target and filtering duplicates
    if(fillRadio()) {
        if(e.type === "mousemove" && lastCell[0] == x && lastCell[1] == y) return;
        else lastCell = [x, y]; // Filter out dragging through same cell
        //console.log([x, y]);
    }
    if(edgeRadio() || doorRadio()) {
        let dX = (clickX / gridSize) - x;
        let dY = (clickY / gridSize) - y;

        let edgeTolerance = 0.4;
        if(distYAxis(dX, dY, 0, 0.5) < edgeTolerance) { // Left
            d = "down";
        }
        else if(distXAxis(dX, dY, 0.5, 0) < edgeTolerance) { // Top
            d = "right";
        }
        else if(distYAxis(dX, dY, 1, 0.5) < edgeTolerance) { // Right
            x++;
            d = "down";
        }
        else if(distXAxis(dX, dY, 0.5, 1) < edgeTolerance) { // Bottom
            y++;
            d = "right";
        } else {
            return;
        }
        if(e.type === "mousemove" && lastCell[0] == x && lastCell[1] == y && lastCell[2] == d) return;
        else lastCell = [x, y, d]; // Filter out dragging through same cell
    }
    if(stampRadio()) {
        if(e.type !== "mousedown" || !stampList.value) return; // No drag on stamps, ignore if no stamps
    }
    if(lightRadio()) {
        if(e.type !== "mousedown") return; // No drag on Lights
        x = clickX / gridSize; // Undo x,y rounding
        y = clickY / gridSize;
    }
    
    if(stampRadio()) {
        if(!collideCheck() && MapManager.checkCollision(map, ghostMap)) return;

        map.markEdit();
        placeStamp();
    }
    else if(lightRadio()) {
        if(parseInt(e.detail) == 2) {
            let l = map.getLight(x, y);
            if(!l) return;
            
            let div = document.createElement('div');
            div.style = 'display: flex; flex-direction: column;';
                let d1 = document.createElement('div');
                    let colorTxt = document.createElement('label');
                    colorTxt.innerHTML = 'Color: ';
                    let color = document.createElement('input');
                    color.type = 'color';
                    color.value = l.color;
                    d1.appendChild(colorTxt);
                    d1.appendChild(color);
                div.appendChild(d1);
                let d2 = document.createElement('div');
                    let dimTxt = document.createElement('label');
                    dimTxt.innerHTML = 'Dim: ';
                    let dim = document.createElement('input');
                    dim.type = 'text';
                    dim.value = l.dim;
                    d2.appendChild(dimTxt);
                    d2.appendChild(dim);
                div.appendChild(d2);
                let d3 = document.createElement('div');
                    let brightTxt = document.createElement('label');
                    brightTxt.innerHTML = 'Bright: ';
                    let bright = document.createElement('input');
                    bright.type = 'text';
                    bright.value = l.bright;
                    d3.appendChild(brightTxt);
                    d3.appendChild(bright);
                div.appendChild(d3);
                let d4 = document.createElement('div');
                    let alphaTxt = document.createElement('label');
                    alphaTxt.innerHTML = 'Color Opacity: ';
                    let alpha = document.createElement('input');
                    alpha.type = 'range';
                    alpha.step = 0.05;
                    alpha.min = 0;
                    alpha.max = 1;
                    alpha.value = l.alpha;
                    let alphaDisp = document.createElement('label');
                    alphaDisp.innerHTML = Math.floor(l.alpha * 100) + '%';
                    alpha.oninput = () => alphaDisp.innerHTML = Math.floor(alpha.value * 100) + '%';
                    d4.appendChild(alphaTxt);
                    d4.appendChild(alpha);
                    d4.appendChild(alphaDisp);
                div.appendChild(d4);
                let btn = document.createElement('button');
                btn.type = 'button';
                btn.innerHTML = 'Confirm';
                div.appendChild(btn);
            let dia = document.createElement('dialog');
            dia.appendChild(div);
            document.getElementById('body').appendChild(dia);
            
            btn.addEventListener('click', () => {
                document.getElementById('body').removeChild(dia);
                
                map.setLight(l.x, l.y, color.value, dim.value, bright.value, alpha.value);
                
                dia.close();
            })
            
            dia.showModal();
        } else if(!map.getLight(x, y)) {
            map.markEdit();
            map.setLight(x, y, colorLight());
        }
    }
    else if(!e.shiftKey || e.type === "mousedown") { // Individual Place
        if(e.shiftKey && !ghostOrigin.x) { // Establish new drag. ghostOrigin cleared in mouseMove.noShift
            ghostOrigin.x = x;
            ghostOrigin.y = y;
            if(!fillRadio()) ghostOrigin.d = d;
        } else if(e.shiftKey && ghostOrigin.x) { // Establish finishing drag
            map.markEdit();
            ghostOrigin = {};
            placeStamp();
            delete ghostMap;
        } else {
            // Painting
            if(fillRadio()) {
                map.markEdit();
                map.setFill(x, y, colorFill(), blockMoveCheck(), blockSightCheck());
            }
            if(edgeRadio()) {
                map.markEdit();
                map.setEdge(x, y, d, colorEdge(), blockMoveCheck(), blockSightCheck());
            }
            if(doorRadio()) {
                map.markEdit();
                map.setDoor(x, y, d);

                if(parseInt(e.detail) == 2) {
                    let dia = document.createElement('dialog');
                    let txt = document.createElement('input');
                    txt.type = "text";
                    txt.placeholder = "Door Type";
                    let conf = document.createElement('button');
                    conf.innerHTML = "Confirm";

                    dia.appendChild(txt);
                    dia.appendChild(conf);

                    conf.addEventListener("click", () => {
                        map.setDoor(x, y, d, txt.value);
                        dia.close();
                        document.getElementById("body").removeChild(dia);
                        map.changed = true;
                    })

                    document.getElementById("body").appendChild(dia);
                    dia.showModal();
                }
            }
        }
    } else updateDrag(e);
}
function mouseMiddleClick(e) {
    mouse.button = e.type === "mousedown" ? true : e.type === "mouseup" ? false : mouse.button;
}
function mouseRightClick(e) {
    if(e.type === "mouseup") return; // Limits to MouseDown and MouseMove - either click or click&drag LMB
    if(e.target.id !== "canvas") return; // Filter out clicks on other elements like radio bubbles and color pickers
    let pzW = map.panZoom.toWorld(mouse.x, mouse.y);
    let clickX = pzW.x;
    let clickY = pzW.y;

    let d = "unset";
    let x = Math.floor(clickX / gridSize);
    let y = Math.floor(clickY / gridSize);

    // Identifying target and filtering duplicates
    if(fillRadio()) {
        if(e.type === "mousemove" && lastCell[0] == x && lastCell[1] == y) return;
        else lastCell = [x, y]; // Filter out dragging through same cell
        //console.log([x, y]);
    }
    if(edgeRadio() || doorRadio()) {
        let dX = (clickX / gridSize) - x;
        let dY = (clickY / gridSize) - y;

        let edgeTolerance = 0.4;
        if(distYAxis(dX, dY, 0, 0.5) < edgeTolerance) { // Left
            d = "down";
        }
        else if(distXAxis(dX, dY, 0.5, 0) < edgeTolerance) { // Top
            d = "right";
        }
        else if(distYAxis(dX, dY, 1, 0.5) < edgeTolerance) { // Right
            x++;
            d = "down";
        }
        else if(distXAxis(dX, dY, 0.5, 1) < edgeTolerance) { // Bottom
            y++;
            d = "right";
        } else {
            return;
        }
        if(e.type === "mousemove" && lastCell[0] == x && lastCell[1] == y && lastCell[2] == d) return;
        else lastCell = [x, y, d]; // Filter out dragging through same cell
    }
    if(stampRadio()) {
        if(e.type !== "mousedown" || !ghostMap) return; // OnClick only and only if a ghostMap exists
    }
    if(lightRadio()) {
        x = clickX / gridSize; // Undo x,y rounding
        y = clickY / gridSize;
    }

    // Clearing
    if(fillRadio()) {
        if(!map.mapFills[x]) return;

        map.markEdit();
        map.setFill(x, y, false);
    }
    if(edgeRadio()) {
        if(!map.mapEdges[x]) return;
        if(!map.mapEdges[x][y]) return;

        map.markEdit();
        map.setEdge(x, y, d, false);
    }
    if(doorRadio()) {
        if(!map.mapDoors[x]) return;
        if(!map.mapDoors[x][y]) return;

        map.markEdit();
        map.setDoor(x, y, d, false);
    }
    if(stampRadio()) {
        ghostRotate = (ghostRotate + 1) % 4;
        mouseNoClick(e);
    }
    if(lightRadio()) {
        if(map.getLight(x, y)) {
            map.markEdit();
            map.setLight(x, y, false);
        }
    }
}
["mousedown", "mouseup", "mousemove"].forEach(name => document.addEventListener(name,mouseEvents));
document.addEventListener("wheel",mouseEvents, {passive: false});
document.addEventListener('click',(e) => { if(e.target.nodeName === "BUTTON") e.target.blur(); } );

document.addEventListener("keypress", keyHandle);
function keyHandle(e) {
    if(e.target.id !== "body") return; // Filter out textbox inputs
    switch(e.code) {
        case 'KeyF': document.getElementById("fillRadio").click();
            break;
        case 'KeyE': document.getElementById("edgeRadio").click();
            break;
        case 'KeyD': document.getElementById("doorRadio").click();
            break;
        case 'KeyS': document.getElementById("stampRadio").click();
            break;
        case 'KeyL': document.getElementById("lightRadio").click();
            break;
        case 'KeyZ': if(e.ctrlKey) { map.undo(); }
            break;
    }
}

document.getElementById("newStamp").addEventListener("click", newStampHandle);
function newStampHandle(e) {
    document.querySelectorAll(".stamp").forEach(s => s.style.visibility = "visible");
    saveStampName.value = '';
    inStamp = true;
    map = new MapManager();
}

document.getElementById("saveStamp").addEventListener("click", saveStampHandle);
const saveStampName = document.getElementById("saveStampName");
function saveStampHandle(e) {
    if(saveStampName.value.length < 1) return;
    document.querySelectorAll(".stamp").forEach(s => s.style.visibility = "hidden");
    let s = activeStamp || new Stamp(saveStampName.value, map);
    if(activeStamp) {
        s.name = saveStampName.value;
        s.map = map;
    }
    
    // Normalize Map to 0,0
    s.map.recenter(...(s.map.findOriginCorner()));
    s.map = s.map.stripped();
    
    stamps.push(s);
    sortStamps();
    map = mainMap;
    activeStamp = null;
    inStamp = false;
    updateStampbox();
}
document.getElementById("exitStamp").addEventListener("click", exitStampHandle);
function exitStampHandle(e) {
    document.querySelectorAll(".stamp").forEach(s => s.style.visibility = "hidden");
    map = mainMap;
    activeStamp = null;
    inStamp = false;
    updateStampbox();
}

var inStamp = false;
function showStamp(e) {
    //console.log(e);
    document.querySelectorAll(".stamp").forEach(s => s.style.visibility = "visible");
    let s = stamps.filter(a => a.id === parseInt(e.target.id))[0];
    stamps = stamps.filter(a => a.id !== s.id); // Remove stamp from collection until it gets resaved
    saveStampName.value = s.name;
    map = s.map;
    inStamp = true;
    updateStampbox();
}

function drawMap(gridScale = gridSize, showGrid = true, context = ctx){
    const gridLineWidth = 1;
    const edgeLineWidth = gridScale * 0.15;
    const doorFont = (gridScale * 0.4) + "px sans-serif";
    const doorTypeFont = (gridScale * 0.2) + "px sans-serif";
    const doorTypeOffset = gridScale * 0.4;
    const ghostOpacity = 0.5;
    var scale, size, x, y = false;
    
    size = Math.max(w, h) / map.panZoom.scale + gridScale * 2;
    if(!converting) map.panZoom.toWorld(0,0, topLeft);
    x = Math.floor(topLeft.x / gridScale) * gridScale;
    y = Math.floor(topLeft.y / gridScale) * gridScale;
    let gridAlpha = 1;
    if (size / gridScale > gridLimit) {
        gridAlpha = range(gridLimit, gridLimit * 4, 1, 0, size / gridScale); // Set according to scale
    }
    if(!converting) map.panZoom.apply();
    
    if(showGrid && gridAlpha > 0) {
        context.lineWidth = gridLineWidth;
        let gridStroke = "rgba(128, 128, 128, " + gridAlpha + ")";
        context.strokeStyle = gridStroke;
        
        context.beginPath();
        for (let i = 0; i < size; i += gridScale) { // Grid Rendering
            context.moveTo(x + i, y);
            context.lineTo(x + i, y + size);
            context.moveTo(x, y + i);
            context.lineTo(x + size, y + i);
        }
        context.stroke();
    }
    
    for(let i = 0; i < size; i += gridScale) { // Map Rendering
        for(let j = 0; j < size; j += gridScale) {
            let cX = Math.floor((i + topLeft.x) / gridScale);
            let cY = Math.floor((j + topLeft.y) / gridScale);
            
            if(map.mapFills[cX] && map.mapFills[cX][cY]) { // Fill in background of tile
                context.fillStyle = map.mapFills[cX][cY].fill;
                context.fillRect(x + i, y + j, gridScale, gridScale);
            } 
            
            if(map.mapEdges[cX] && map.mapEdges[cX][cY]) { // Stroke edges of tile
                context.lineWidth = edgeLineWidth;
                context.lineCap = "square";
                let me = map.mapEdges[cX][cY];
                if(me.right) {
                    context.strokeStyle = me.right.stroke;
                    context.beginPath();
                    context.moveTo(x + i, y + j);
                    context.lineTo(x + i + gridScale, y + j);
                    context.stroke();
                }
                if(me.down) {
                    context.strokeStyle = me.down.stroke;
                    context.beginPath();
                    context.moveTo(x + i, y + j);
                    context.lineTo(x + i, y + j + gridScale);
                    context.stroke();
                }
            }
            
            if(doorsCheck() && map.mapDoors[cX] && map.mapDoors[cX][cY]) { // Mark doors
                context.strokeStyle = "#000";
                context.fillStyle = "#FFF";
                let md = map.mapDoors[cX][cY];
                if(md.right) {
                    context.font = doorFont;
                    let offset = context.measureText("D").width / 2;
                    
                    context.strokeText("D", x + i + (gridScale / 2) - offset, y + j + offset);
                    context.fillText("D", x + i + (gridScale / 2) - offset, y + j + offset);
                    
                    if(md.right.type && doorTypesCheck()) {
                        context.font = doorTypeFont;
                        let offset = context.measureText(md.right.type).width / 2;
                        
                        context.fillText(md.right.type, x + i + (gridScale / 2) - offset, y + j + doorTypeOffset);
                    }
                }
                if(md.down) {
                    context.font = doorFont;
                    let offset = context.measureText("D").width / 2;
                    
                    context.strokeText("D", x + i - offset, y + j + (gridScale / 2) + offset);
                    context.fillText("D", x + i - offset, y + j + (gridScale / 2) + offset);
                    
                    if(md.down.type && doorTypesCheck()) {
                        context.font = doorTypeFont;
                        let offset = context.measureText(md.down.type).width / 2;
                        
                        context.fillText(md.down.type, x + i - offset, y + j + (gridScale / 2) + doorTypeOffset);
                    }
                }
            }
            
            if(!converting && (stampRadio() || ghostOrigin.x) && ghostMap) {
                context.globalAlpha = ghostOpacity;
                if(ghostMap.mapFills[cX] && ghostMap.mapFills[cX][cY]) { // Fill in background of tile
                    context.fillStyle = ghostMap.mapFills[cX][cY].fill;
                    context.fillRect(x + i, y + j, gridScale, gridScale);
                } 
                
                if(ghostMap.mapEdges[cX] && ghostMap.mapEdges[cX][cY]) { // Stroke edges of tile
                    context.lineWidth = edgeLineWidth;
                    context.lineCap = "square";
                    let me = ghostMap.mapEdges[cX][cY];
                    if(me.right) {
                        context.strokeStyle = me.right.stroke;
                        context.beginPath();
                        context.moveTo(x + i, y + j);
                        context.lineTo(x + i + gridScale, y + j);
                        context.stroke();
                    }
                    if(me.down) {
                        context.strokeStyle = me.down.stroke;
                        context.beginPath();
                        context.moveTo(x + i, y + j);
                        context.lineTo(x + i, y + j + gridScale);
                        context.stroke();
                    }
                }
                
                if(doorsCheck() && ghostMap.mapDoors[cX] && ghostMap.mapDoors[cX][cY]) { // Mark doors
                    context.font = doorFont;
                    context.strokeStyle = "#000";
                    context.fillStyle = "#FFF";
                    let offset = context.measureText("D").width / 2;
                    let md = ghostMap.mapDoors[cX][cY];
                    if(md.right) {
                        context.font = doorFont;
                        let offset = context.measureText("D").width / 2;    
                        
                        context.strokeText("D", x + i + (gridScale / 2) - offset, y + j + offset);
                        context.fillText("D", x + i + (gridScale / 2) - offset, y + j + offset);
                        
                        if(md.right.type && doorTypesCheck()) {
                            context.font = doorTypeFont;
                            let offset = context.measureText(md.right.type).width / 2;
                            
                            context.fillText(md.right.type, x + i + (gridScale / 2) - offset, y + j + doorTypeOffset);
                        }
                    }
                    if(md.down) {
                        context.font = doorFont;
                        let offset = context.measureText("D").width / 2;
                        
                        context.strokeText("D", x + i - offset, y + j + (gridScale / 2) + offset);
                        context.fillText("D", x + i - offset, y + j + (gridScale / 2) + offset);
                        
                        if(md.down.type && doorTypesCheck()) {
                            context.font = doorTypeFont;
                            let offset = context.measureText(md.down.type).width / 2;
                            
                            context.fillText(md.down.type, x + i - offset, y + j + (gridScale / 2) + doorTypeOffset);
                        }
                    }
                }
                context.globalAlpha = 1;
            }
        }
    }
    
    if(map.mapLights && lightsCheck()) for(let l of map.mapLights) {
        context.strokeStyle = "#000";
        context.fillStyle = l.color;
        context.font = doorFont;
        let offset = context.measureText("L").width / 2;

        context.strokeText("L", Math.floor(l.x * gridScale) - offset, Math.floor(l.y * gridScale) + offset);
        context.fillText("L", Math.floor(l.x * gridScale) - offset, Math.floor(l.y * gridScale) + offset);
    } else if(!map.mapLights) {
        map.mapLights = [];
        map.changed = true;
    }
    
}

var converting = false;
document.getElementById("toImage").addEventListener('click', convertToImage);
function convertToImage(e) {
    converting = true;
    let dia = document.createElement('dialog');
    let txt = document.createElement('input');
    txt.type = 'text';
    txt.placeholder = 'File name';
    let conf = document.createElement('button');
    conf.type = 'button';
    conf.innerHTML = 'Confirm';
    let div = document.createElement('div');
    div.style = 'display: flex; flex-direction: column;';
    let chk = document.createElement('input');
    chk.type = 'checkbox';
    chk.checked = true;
    let lbl = document.createElement('label');
    lbl.innerHTML = "Export Foundry Wall Data";
    let chkDiv = document.createElement('div');
    chkDiv.appendChild(chk);
    chkDiv.appendChild(lbl);
    
    div.appendChild(txt);
    div.appendChild(chkDiv);
    div.appendChild(conf);
    
    dia.appendChild(div);
    
    conf.addEventListener('click', async e => {
        dia.close();
        document.getElementById('body').removeChild(dia);
        
        let [dimX,dimY] = map.getDimensions();
        
        let imgFactor = Math.min(2, (16000 / Math.max(dimX,dimY)) / gridSize); // Scale image to 2x factor or max out at 16k px
        gridSize *= imgFactor;
        
        w = dimX * gridSize;
        h = dimY * gridSize;
        
        let oCanvas = new OffscreenCanvas(w, h);
        
        map = map.stripped()
        map.recenter(...(map.findOriginCorner()));
        
        let tlX = topLeft.x;
        let tlY = topLeft.y;
        topLeft = {x: 0, y: 0};
        map.panZoom.scale = 1;
        
        drawMap(gridSize, false, oCanvas.getContext('2d')); // Redraw map without Gridlines and scaled up
        
        let blob = await oCanvas.convertToBlob({type: 'image/png'}).catch(e => {
            console.log(e);
            let eDia = document.createElement('dialog');
            let eTxt = document.createElement('label');
            eTxt.innerHTML = "Image size too large";
            let eBtn = document.createElement('button');
            eBtn.type = 'button';
            eBtn.innerHTML = 'Confirm';
            eDia.appendChild(eTxt);
            eDia.appendChild(eBtn);
            eBtn.addEventListener('click', () => { eDia.close();  document.getElementById('body').removeChild(eDia); });
            document.getElementById('body').appendChild(eDia);
            eDia.showModal();
        });

        if(blob) {
            let dl = document.createElement('a');
            dl.download = txt.value;
            dl.href = URL.createObjectURL(blob);
            dl.dataset.downloadurl = ['image/png', dl.download, dl.href].join(":");
            
            document.body.appendChild(dl);
            dl.click();
            document.body.removeChild(dl);
            
            if(chk.checked) {
                let dim = map.getDimensions();
                let obj = {
                    name: txt.value,
                    width: dim[0] * gridSize,
                    height: dim[1] * gridSize,
                    grid: gridSize,
                    gridDistance: 5.0,
                    gridUnits: 'ft',
                    padding: 0.0,
                    //gridColor: '#00000',
                    //gridAlpha: 0.2,
                    lights: [
                        // x, y, dim, bright, tintColor, tintAlpha
                    ],
                    walls: []
                };
                for(let x of Object.keys(map.mapFills)) {
                    for(let y of Object.keys(map.mapFills[x])) {
                        if(map.mapFills[x][y].blockMove || map.mapFills[x][y].blockSight) {
                            let w1 = {};
                            w1.c = [
                                (parseInt(x) + 0) * gridSize,
                                (parseInt(y) + 0) * gridSize,
                                (parseInt(x) + 1) * gridSize,
                                (parseInt(y) + 0) * gridSize
                            ];
                            w1.move = map.mapFills[x][y].blockMove ? 1 : 0;
                            w1.sense = map.mapFills[x][y].blockSight ? 1 : 0;
                            w1.sound = map.mapFills[x][y].blockMove ? 1 : 0;
                            w1.door = 0;
                            obj.walls.push(w1);
                            
                            let w2 = {};
                            w2.c = [
                                (parseInt(x) + 1) * gridSize,
                                (parseInt(y) + 0) * gridSize,
                                (parseInt(x) + 1) * gridSize,
                                (parseInt(y) + 1) * gridSize
                            ];
                            w2.move = map.mapFills[x][y].blockMove ? 1 : 0;
                            w2.sense = map.mapFills[x][y].blockSight ? 1 : 0;
                            w2.sound = map.mapFills[x][y].blockMove ? 1 : 0;
                            w2.door = 0;
                            obj.walls.push(w2);
                            
                            let w3 = {};
                            w3.c = [
                                (parseInt(x) + 0) * gridSize,
                                (parseInt(y) + 1) * gridSize,
                                (parseInt(x) + 1) * gridSize,
                                (parseInt(y) + 1) * gridSize
                            ];
                            w3.move = map.mapFills[x][y].blockMove ? 1 : 0;
                            w3.sense = map.mapFills[x][y].blockSight ? 1 : 0;
                            w3.sound = map.mapFills[x][y].blockMove ? 1 : 0;
                            w3.door = 0;
                            obj.walls.push(w3);
                            
                            let w4 = {};
                            w4.c = [
                                (parseInt(x) + 0) * gridSize,
                                (parseInt(y) + 0) * gridSize,
                                (parseInt(x) + 0) * gridSize,
                                (parseInt(y) + 1) * gridSize
                            ];
                            w4.move = map.mapFills[x][y].blockMove ? 1 : 0;
                            w4.sense = map.mapFills[x][y].blockSight ? 1 : 0;
                            w4.sound = map.mapFills[x][y].blockMove ? 1 : 0;
                            w4.door = 0;
                            obj.walls.push(w4);
                            
                        }
                    }
                }
                for(let x of Object.keys(map.mapEdges)) {
                    for(let y of Object.keys(map.mapEdges[x])) {
                        for(let d of Object.keys(map.mapEdges[x][y])) {
                            let w = {};
                            w.c = [
                                x * gridSize,
                                y * gridSize,
                                (parseInt(x) + ((d === 'right') ? 1 : 0)) * gridSize,
                                (parseInt(y) + ((d === 'down') ? 1 : 0)) * gridSize
                            ];
                            w.move = map.mapEdges[x][y][d].blockMove ? 1 : 0;
                            w.sense = map.mapEdges[x][y][d].blockSight ? 1 : 0;
                            w.sound = map.mapEdges[x][y][d].blockMove ? 1 : 0;
                            w.door = (map.mapDoors[x] && map.mapDoors[x][y] && map.mapDoors[x][y][d]) ? 1 : 0;
                            obj.walls.push(w);
                        }
                    }
                }
                for(let l of map.mapLights) {
                    obj.lights.push({
                        x: Math.floor(l.x * gridSize),
                        y: Math.floor(l.y * gridSize),
                        dim: l.dim,
                        bright: l.bright,
                        tintColor: l.color,
                        tintAlpha: l.alpha
                    })
                }
                
                let dl = document.createElement('a');
                dl.download = txt.value;
                dl.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(obj));
                dl.download = dl.download + '.json';
                
                document.body.appendChild(dl);
                dl.click();
                document.body.removeChild(dl);
            }
        }
        
        map = mainMap;
        topLeft = {x: tlX, y: tlY};
        gridSize /= imgFactor;
        
        converting = false;
    })
    
    document.getElementById('body').appendChild(dia);
    dia.showModal();
}

const cookieName = "yawrf.DungeonGen.save";
async function saveCookies() {
    let time = Date.now();
    let obj = {
        map: JSON.stringify(map.stripped()), 
        mainMap: JSON.stringify(mainMap.stripped()), 
        stamps: JSON.stringify(stamps),
        inStamp: inStamp
    };
    if(!inStamp) obj.map = {}; // Storage space saver
    let str = JSON.stringify(obj);
    let warn = document.getElementById('warningFilesize');
    if(str.length < 5000000) {
        localStorage.setItem(cookieName, str);
        warn.style.visibility = 'hidden';
    } else {
        console.log('Save file too large to save. (' + str.length + ')');
        warn.style.visibility = 'visible';
    }
    
    time = Date.now() - time;
    warn = document.getElementById('warningMapLag');
    if(time > 100) {
        warn.style.visibility = 'visible';
    } else warn.style.visibility = 'hidden';
}
document.addEventListener('DOMContentLoaded', loadCookies);
function loadCookies() {
    let obj = JSON.parse(localStorage.getItem(cookieName));
    if(!obj) {
        requestAnimationFrame(update);
        return;
    };
    
    if(obj.inStamp) {
        let m = Object.create(MapManager.prototype);
        Object.assign(m, JSON.parse(obj.map));
        m.restore();
        map = m;
    }
    
    let mm = Object.create(MapManager.prototype);
    Object.assign(mm, JSON.parse(obj.mainMap));
    mm.restore();
    mainMap = mm;
    
    stamps = [];
    for(let s of JSON.parse(obj.stamps)) {
        let so = Object.create(Stamp.prototype);
        Object.assign(so, s);
        let sm = Object.create(MapManager.prototype);
        Object.assign(sm, so.map)
        sm.restore();
        so.map = sm;
        
        stamps.push(so);
        Stamp.inc = Math.max(Stamp.inc, so.id + 1);
    }
    updateStampbox();
    
    inStamp = obj.inStamp;
    if(inStamp) document.querySelectorAll(".stamp").forEach(s => s.style.visibility = "visible");
    else map = mainMap;
    
    console.log("Loaded Cookies");
    requestAnimationFrame(update);
}

var w = canvas.width;
var h = canvas.height;
const infoDim = document.getElementById("infoDimensions");
function update(){
    if(converting) { // Don't tamper with vars if currently converting
        requestAnimationFrame(update);
        return;
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
    ctx.globalAlpha = 1;           // reset alpha
    if (w !== innerWidth || h !== innerHeight) {
        w = canvas.width = innerWidth;
        h = canvas.height = innerHeight;
    } else {
        ctx.clearRect(0, 0, w, h);
    }
    if (mouse.wheel !== 0) {
        let scale = 1;
        scale = mouse.wheel < 0 ? 1 / scaleRate : scaleRate;
        mouse.wheel *= 0.8;
        if(Math.abs(mouse.wheel) < 1){
            mouse.wheel = 0;
        }
        map.panZoom.scaleAt(mouse.x, mouse.y, scale); //scale is the change in scale
    }
    if (mouse.button) {
       if (!mouse.drag) {
          mouse.lastX = mouse.x;
          mouse.lastY = mouse.y;
          mouse.drag = true;
       } else {
          map.panZoom.x += mouse.x - mouse.lastX;
          map.panZoom.y += mouse.y - mouse.lastY;
          mouse.lastX = mouse.x;
          mouse.lastY = mouse.y;
       }
    } else if (mouse.drag) {
        mouse.drag = false;
    }
    drawMap();
    
    if(map.changed) {
        map.changed = false;
        saveCookies();
        propagateBtn.innerHTML = "Propagate Stamps (" + map.getExteriorDoors().length + ")";
    }
    
    infoDim.innerHTML = map.getDimensions().join('x');
    
    requestAnimationFrame(update);
}