Page({
  data: {
    time: (new Date()).toString()
  },
  clickme : function () {
    var time = (new Date()).toString();
    console.log(time);
    this.setData({
      time: time
    });
  }
})