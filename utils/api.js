import { Base } from '../utils/base.js';

class Api extends Base{
    constructor(){
        super();
    }

    getMarkersType(callback){
        const params = {
            url:'/v1/getMarkersType',
            sCallback:(data)=>{
                callback && callback(data);
            }
        }  
        this.request(params);
    }

    getMarkers(callback,type){
        let url = '/v1/markers';
        if(type){
            url=`/v1/markers?type=${type}`
        }
        const params = {
            url,
            sCallback:(data)=>{
                callback && callback(data);
            }
        }  
        this.request(params);
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
    getMarkerById(id,callback){
        const params = {
            url:`/v1/marker/${id}`,
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