/**
 * Created by jimmy on 17/2/26.
 */

// var Base = require('../../utils/base.js').base;
import {Base} from '../../utils/base.js';

class Story extends Base{
    constructor(){
        super();
    }
    getStoryImgs(id,callback){
        var param={
            url: `/v1/cat/getStoryImgs/${id}`,
            sCallback:function(data){
                callback && callback(data);
            }
        };
        this.request(param);
    }
    getStoryDetail(id,callback){
        var param={
            url: `/v1/cat/getStoryDetail/${id}`,
            sCallback:function(data){
                callback && callback(data);
            }
        };
        this.request(param);
    }
};

export {Story};