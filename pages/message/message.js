// pages/message/message.js
Page({

  handleSubmit: function(evt){
    console.log(evt)

    //获取数据
    let nickname = evt.detail.value.nickname
    let age = evt.detail.value.age
    let sex = evt.detail.value.sex
    let email = evt.detail.value.email
    let edu = evt.detail.value.edu
    let school = evt.detail.value.school

    //获取数据库引用
    const db = wx.cloud.database()
    //获取集合引用
    const umCollection = db.collection("user_Messages")
    //增数据
    umCollection.add({
      data: {
        nickname: nickname,
        age: age,
        sex: sex,
        email: email,
        edu: edu,
        school: school
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var stu = wx.getStorageSync('student');
    // this.setData({ myinfo: stu });
  },

  // exit:function(e){
  //   wx.showModal({
  //     title: '提示',
  //     content: '是否确认退出',
  //     success: function (res) {
  //       if (res.confirm) {
  //         // console.log('用户点击确定')
  //         wx.removeStorageSync('student');
  //         //页面跳转
  //         wx.redirectTo({
  //           url: '../login/login',
  //         })
  //       } else if (res.cancel) {
  //         console.log('用户点击取消')
  //       }
  //     }
  //   })
  // },

  // resetpwd:function(e){
  //   var no=this.data.myinfo.no;
  //   wx.navigateTo({
  //     url: '../password/password?no=' + no,
  //   })
  // },

  // setemail: function (e) {
  //   var no = this.data.myinfo.no;
  //   wx.navigateTo({
  //     url: '../email/email?no=' + no,
  //   })
  // },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})