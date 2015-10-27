
// private support methods

    // return the a, b, c values of an edge given two points defining the edge 
    function getEdgeEquation1(va, vb) {
        
        return {
            a: vb.y-va.y,
            b: va.x-vb.x,
            c: vb.x * va.y - va.x * vb.y - va.x * vb.y + va.x * va.y
        }
    }
    
    function getEdgeEquation2(va, vb) {
    
        var newedge = {
            a: 0, 
            b: 0,
            c: 0
        };
    
        var dx, dy, adx, ady;  // double        
        
        dx = vb.x - va.x;
        dy = vb.y - va.y;
        adx = (dx > 0 ? dx : -dx);
        ady = (dy > 0 ? dy : -dy);
        
        newedge.c = va.x * dx + va.y * dy + (dx*dx + dy*dy) * 0.5;  // double
    
        if (adx > ady) {
            newedge.a = 1.0;
            newedge.b = dy/dx;
            newedge.c /= dx;
        }
        else {
            newedge.b = 1.0;
            newedge.a = dx/dy;
            newedge.c /= dy;
        }
    
        return newedge;
    }

    //bool sfVoronoi::insideRegion (int index , const point2d& p)
    function insideRegion(index, p) {
     
        var b1, b2 ;    // bool

        var cell         = result.cells[index];
        var halfedges    = cell.halfedges;
        var coord        = cell.site;

        console.log('\n*** insideRegion called, index: ' + index + ' pos: ' + p.x + ', ' + p.y + ' coord: ' + coord.x + ', ' + coord.y);

        var edge;

        for (var i=0; i < halfedges.length; i++)
        {
            // NOTE: the edge object must have a, b, c properties..
            //var pt1 = halfedges[i].edge.va;
            //var pt2 = halfedges[i].edge.vb;
            var pt1 = halfedges[i].getStartpoint();
            var pt2 = halfedges[i].getEndpoint();
            
            edge = getEdgeEquation2(pt1, pt2);
                                    
            console.log('halfedge ' + i + ': (' + pt1.x + ', ' + pt1.y + ') (' + pt2.x + ', ' + pt2.y + ')' +
                        ' a: ' + edge.a + ' b: ' + edge.b + ' c: ' + edge.c);
            
            b1 = (edge.a * coord.x + edge.b * coord.y > edge.c);
            b2 = (edge.a * p.x     + edge.b * p.y     > edge.c);
            
            console.log('b1: ' + b1 + ' b2: ' + b2);
            
            // distance considered equal point
            if (Math.abs(edge.a * p.x + edge.b * p.y - edge.c) < EQUAL_DISTANCE) {
            //if (Math.abs(edge.a * p.x + edge.b * p.y - edge.c) < 0.001) {
                console.log('set b2 to be b1, value: ' + (edge.a * p.x + edge.b * p.y - edge.c));
                b2 = b1;
            }
            if (b1 != b2)
                return false;
        }

		// if we've checked all the edges then we're inside
        return true;
    }
   