/**
 * Created by jimmy on 17/2/26.
 */

// var Base = require('../../utils/base.js').base;
import {Base} from '../../utils/base.js';

class Science extends Base{
    constructor(){
        super();
    }
    getScience(id,callback){
        var param={
            url: `/v1/cat/getScienceDetail/${id}`,
            sCallback:function(data){
                callback && callback(data);
            }
        };
        this.request(param);
    }
};

export {Science};