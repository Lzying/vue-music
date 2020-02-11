import axios from "axios";
import router from "../../router/router"
import config from "../../../public/config";

// http request 拦截器
axios.interceptors.request.use(
    config => {
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        // config.headers.token11 = `tokenmmm 123456`;
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    router.replace({
                        path: '/',
                    });     // 返回 401 清除token信息并跳转到登录页面
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

const axiosFunction = {
    getHotSonglist,
    getPersonalizedData,
    getPersonalizedNewsongData,
    getSearchData,
    getSong,
    getSongList
}
export default axiosFunction;



/***
 *  请求函数
 */


/**
 * 推荐音乐页面
 */

// 推荐音乐
function getPersonalizedData() {
    let url = `${config.api}/personalized`
    return new Promise((resolve, reject) => {
        axios.get(url).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err)
        });
    })
}

// 最新音乐
function getPersonalizedNewsongData() {
    let url = `${config.api}/personalized/newsong`
    return new Promise((resolve, reject) => {
        axios.get(url).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err)
        });
    })
}

// **************************************************************




/**
 * hot 页面
 */

// hot 页面
function getHotSonglist() {
    let url = `${config.api}/top/list?idx=1`
    return new Promise((resolve, reject) => {
        axios.get(url).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err)
        });
    })

}

// **************************************************************




/**
 * 搜索页面
 *  
 * */
// 搜索
function getSearchData(value) {
    let url = `${config.api}/search?keywords=${value}`
    return new Promise((resolve, reject) => {
        axios.get(url).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err)
        });
    })
}

// **************************************************************

/**
 * 播放页面
 *  
 * */
// 播放歌曲信息

function getSong(id) {
    let url = `${config.api}/song/detail?ids=${id}`
    return new Promise((resolve, reject) => {
        axios.get(url).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err)
        });
    })
}

// **************************************************************

/**
 * 歌单列页面
 *  
 * */
// 歌单列表
function getSongList(id) {
    let url = `${config.api}/playlist/detail?id=${id}`
    return new Promise((resolve, reject) => {
        axios.get(url).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err)
        });
    })
}