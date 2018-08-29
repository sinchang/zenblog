window.onload = function() {
  // 初始化链接前面显示图标功能
  new LinkIcon('post-content', 'class');

  // 点击向下滚动一屏
  document.querySelector('.scroll-btn') && document.querySelector('.scroll-btn').addEventListener('click', scrollHandle, false);

  function scrollHandle () {
    var wHeight = window.innerHeight;
    window.scrollTo(0, wHeight);
  }
}
