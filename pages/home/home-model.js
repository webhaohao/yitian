/**
 * Created by jimmy on 17/2/26.
 */

// var Base = require('../../utils/base.js').base;
import {Base} from '../../utils/base.js';

class Home extends Base{
    constructor(){
        super();
    }
    uploadFileOpt(filePath,callback){
        wx.uploadFile({
            url: `${this.baseRestUrl}/v1/cat/upload` ,
            filePath,
            name: 'files',
            success (res) {
              console.log(JSON.parse(res.data))
              callback(JSON.parse(res.data))
            }
        })
    }
};

export {Home};