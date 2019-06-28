export default (state = {
    //在reducer定义state
    //在里面存放组件公有的数据
    author: '華',
    netPls: [{
            title: '营业网点',
            imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561522391267&di=2c01c2414e7651a9942dcf84f9e00d1f&imgtype=0&src=http%3A%2F%2Fpic167.nipic.com%2Ffile%2F20180531%2F27174347_090604596000_2.jpg',
            cName: '.iconx-52-tb09-2',
            path: ''
        },
        {
            title: '自助银行',
            imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561522623873&di=58c6ecad3cadae1e5c5913fcb6be9c5a&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fsoft%2Fimages%2F2015%2F0205%2F20150205092817368.jpg',
            cName: '.iconx-52-tb10-2',
            path: ''
        },
        {
            title: 'ATM查询',
            imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561522693836&di=e6470e3f2119e373d8cfa820261d0da3&imgtype=0&src=http%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FMjM4WDUyNQ%3D%3D%2F%2524T2eC16RHJI%2521E9qSO8nQWBQBzjY4%2529Gw~~60_1.JPG%3Fset_id%3D880000500F',
            cName: '.iconx-52-tb11-2',
            path: ''
        },
        {
            title: '排队信息',
            imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561522864248&di=10a5d2b66b3fbf4f772a2722c9170ae4&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fh017%2Fh47%2Fimg201408270720160379_info300X300.png',
            cName: '.iconx-52-tb12-2',
            path: ''
        },
    ],
    data: null,
    headerComponent:'home'
    // color:'red'
    //定义action:用来操作state,在switch定义各种行为
}, action) => {
    //处理仓库的行为和动作
    switch (action.type) {
        //获取state里面的author值
        case 'GETDATA':
            return {
                ...state,
                data: action.data
            }
            break
        case 'CHANGEHEADER':
            return {
                ...state,
                headerComponent: action.headerComponent
            }
            break
        default:
            return state
    }
}
/* 
    -触发行为dispatch,相当于action,vuex中的setters
    store.dispatch({action})
    store.dispatch({
        type:'SETAUTHOR',
        skill:['ps','css','js']
    })
    - 获取仓库的状态,相当于vuex中的gettters
    store.getState()
    - 监听仓库的更新
    store.subscribe(() => console.log(store.getState()))
*/