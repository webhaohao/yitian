import { Base } from '../utils/base.js';

class Api extends Base{
    constructor(){
        super();
    }
    getScenicList(callback){
        const params = {
            url:'/v1/scenic/list',
            sCallback:(data)=>{
                callback && callback(data);
            }
        }  
        this.request(params);
    }
    getScenicById(id,callback){
        const params = {
            url:`/v1/scenic/${id}`,
            sCallback:(data)=>{
                callback && callback(data);
            }
        }
        this.request(params);
    }
    // getStoryImgs(id,callback){
    //     var param={
    //         url: `/v1/cat/getStoryImgs/${id}`,
    //         sCallback:function(data){
    //             callback && callback(data);
    //         }
    //     };
    //     this.request(param);
    // }
    // getStoryDetail(id,callback){
    //     var param={
    //         url: `/v1/cat/getStoryDetail/${id}`,
    //         sCallback:function(data){
    //             callback && callback(data);
    //         }
    //     };
    //     this.request(param);
    // }
};

export {Api};