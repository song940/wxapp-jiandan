const jiandan = require('../../data/jiandan-meizi.js')

Page({
  data: {
    page: 0
  },
  onLoad(){
    const images = jiandan.slice(0, 10);
    this.setData({ images });
  },
  onTapShare(){
    wx.showToast();
  },
  onTapPreview(e){
    const { dataset } = e.currentTarget;
    const { src: current } = dataset;
    const { images: urls } = this.data;
    wx.previewImage({ urls, current });
  },
  onReachBottom(){
    var { page, images } = this.data;
    const offset = ++page * 10;
    const next = jiandan.slice(offset, offset + 10);
    this.setData({ images: images.concat(next), page });
  }
});