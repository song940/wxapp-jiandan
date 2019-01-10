const jiandan = require('../../data/jiandan-meizi.js')

Page({
  data: {
    page: 0,
    images: jiandan.slice(0, 10)
  },
  onLoad(query){
    const { url } = query;
    const { images } = this.data;
    if(url){
      images.unshift(url);
      this.setData({ images });
    }
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
  },
  onShareAppMessage(source){
    const { dataset } = source.target;
    const { url: imageUrl } = dataset;
    return { 
      path: '/pages/index/index?url=' + imageUrl,
      imageUrl 
    };
  }
});