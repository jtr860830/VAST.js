
/*
 * VAST, a scalable peer-to-peer network for virtual environments
 * Copyright (C) 2005-2011 Shun-Yun Hu (syhu@ieee.org)
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 */

/*
    The basic interface for all major VAST functions.
    supporting spatial publish subscribe (SPS) 

    supported functions:
    
    // basic callback / structure
    settings = {port};
    pos  = {x, y}
    addr = {host, port}
    area = {pos, radius}
    msg  = {from_id, size, type, data, is_reliable}  // message sent & received by clients
    sub  = {sub_id, subscriber, layer, aoi, relay}   // subscription info
    
    sub_CB(result, subID)               // callback to receive subscribe result
    neighbor_CB(list)                   // callback to receive neighbor (node) list
    recv_CB(msg)                        // callback to receive any messages
    
    // constructor
    VAST(recv_CB, settings)
    
    // basic functions
    join(GW_addr, world_id)             join the VAST network given a gateway and world 
    leave()                             leave the VAST network
    subscribe(layer, area, sub_CB)      subscribe for an area at a given layer
    publish(layer, area, msg)           publish a message to an area at a given layer
    move(subID, area)                   move a subscription to a new position
    send(id, msg)                       send a message to specified user(s)
    list(area, neighbor_CB)             get a list of subscribers within an area
   
    // stat / accessors 
    getPhysicalNeighbors()              get a list of physical neighbors currently known
    getLogicalNeighbors()               get a list of logical neighbors currently known
    reportGateway(msg)                  send some custom message to gateway (for stat / record keeping)
    reportOrigin(msg)                   send some custom message to origin matcher (for stat / record keeping)
    getStat()                           get stat stored locally
    getSelf()                           get info on self node
    getSubID()                          get my current subscription ID (?)
    getWorldID()                        get my world ID
    getLatency(msgtype)                 get latency stat for a particular message type
    
    // state report
    isJoined()                          check if I'm joined
    isRelay()                           check if I'm a Relay node
    isPublic()                          check if I have public address (IP) so may serve
     
    history:
        2012-07-06              initial version (convert interface from VAST.h)
        2012-09-10              begin implementation
*/

require('./common.js');

function VAST(recv_callback, settings) {

    // callback to notify subscribed messages received
    var _recv_CB = recv_callback;
     
    //
    // public methods
    //
    
    // join the VAST network given a gateway and world 
    this.join = function (GW_addr, world_id) {
    }
    
    // leave the VAST network
    this.leave = function () {  
    }

    // subscribe for an area at a given layer
    this.subscribe = function (layer, area, sub_CB) {
    }
    
    // publish a message to an area at a given layer
    this.publish = function (layer, area, msg) {
    
    }
    
    // move a subscription to a new position
    this.move = function (subID, area) {
    }

    // send a message to specified user(s)
    this.send = function (id, msg) {
    }

    // get a list of subscribers within an area
    this.list = function (area, neighbor_CB) {
    } 
}

// export the class with conditional check
if (typeof module !== "undefined")
	module.exports = VAST;
