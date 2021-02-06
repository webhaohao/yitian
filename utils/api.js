import {Base} from './utils/base.js';

class Api extends Base{
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

export {Api};