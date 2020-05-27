import React, { Component } from 'react';

export default class Map extends Component {
    componentDidMount() {
        var map = new window.AMap.Map('container', {
            resizeEnable: true,
            viewMode: '3D'//使用3D视图
        });
        window.AMap.plugin('AMap.Geolocation', function () {
            var geolocation = new window.AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000,
                // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                buttonOffset: new window.AMap.Pixel(10, 20),
                //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                zoomToAccuracy: true,
                //  定位按钮的排放位置,  RB表示右下
                buttonPosition: 'RB'
            })
            map.addControl(geolocation);
        })
        
    }
    render() {
        return (
            <div id="container" style={{ width: '100%', height: '100%' }}></div>
        )
    }
}