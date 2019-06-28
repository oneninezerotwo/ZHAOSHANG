import React from 'react';


class Footer extends React.Component{
    render =()=>{
        return (
            <div className="mobile-footer">
            <div className="footer_nav">
                <div className="link_item"><a href="http://m.cmbchina.com/Common/ServiceHotLines.aspx" cname="页脚"
                    oname="服务热线" otype="文字">
                    <div className="icons icons-4"></div>服务热线
            </a></div>
                <div className="link_item"><a href="http://m.cmbchina.com/About/aboutweb.aspx?pageid=about_web" cname="页脚"
                    oname="网站声明" otype="文字">
                    <div className="icons icons-4"></div>网站声明
            </a></div>
                <div className="link_item"><a href="#" target="_self" cname="页脚" oname="返回顶部" otype="文字">
                    <div className="icons icons-4"></div>返回顶部
            </a></div>
                <div className="link_item"><a href="http://m.cmbchina.com/About/aboutweb.aspx?pageid=goodlink" cname="页脚"
                    oname="友情链接" otype="文字">
                    <div className="icons icons-4"></div>友情链接
            </a></div>
                <div className="link_item"><a href="http://m.cmbchina.com/About/aboutweb.aspx?pageid=yinsitiaokuan"
                    cname="页脚" oname="隐私条款" otype="文字">
                    <div className="icons icons-4"></div>隐私条款
            </a></div>
                <div className="link_item"><a href="http://www.cmbchina.com/?from=mweb" target="_blank" cname="页脚"
                    oname="电脑版" otype="文字">
                    <div className="icons icons-4"></div>电脑版
            </a></div>
            </div>
            <div className="copy_right">CopyRight© 1997-2019 招商银行一网通版权所有<br /><a
                href="http://www.miitbeian.gov.cn">粤ICP备17088997号</a></div>
        </div>
        )
    }
}
export default Footer