// function _0x4fe1(_0x27a54c,_0x48b0d1){var _0x369b3e=_0x369b();return _0x4fe1=function(_0x4fe1b9,_0x3aeecc){_0x4fe1b9=_0x4fe1b9-0xf3;var _0x36ca35=_0x369b3e[_0x4fe1b9];return _0x36ca35;},_0x4fe1(_0x27a54c,_0x48b0d1);}(function(_0x56155a,_0x362261){var _0x2a3074=_0x4fe1,_0x51c8dc=_0x56155a();while(!![]){try{var _0x1ca6dd=parseInt(_0x2a3074(0x104))/0x1*(parseInt(_0x2a3074(0x107))/0x2)+-parseInt(_0x2a3074(0x105))/0x3+-parseInt(_0x2a3074(0x106))/0x4*(-parseInt(_0x2a3074(0x101))/0x5)+parseInt(_0x2a3074(0xff))/0x6+-parseInt(_0x2a3074(0xfd))/0x7+-parseInt(_0x2a3074(0xf9))/0x8*(parseInt(_0x2a3074(0xfa))/0x9)+parseInt(_0x2a3074(0xf7))/0xa;if(_0x1ca6dd===_0x362261)break;else _0x51c8dc['push'](_0x51c8dc['shift']());}catch(_0x2ed1f3){_0x51c8dc['push'](_0x51c8dc['shift']());}}}(_0x369b,0x8c4d1),$(function(){var _0x5b99b5=_0x4fe1;$(_0x5b99b5(0xf8))['on'](_0x5b99b5(0x103),function(){var _0x5a37ae=_0x5b99b5;$(this)[_0x5a37ae(0xfb)]('ul')['toggle']();}),$(_0x5b99b5(0xf8))['children']('ul')[_0x5b99b5(0xfb)]()['on']('click',function(){var _0x3c97b9=_0x5b99b5,_0x330196=_0x3c97b9(0xf4)+$(this)[_0x3c97b9(0xf5)](_0x3c97b9(0x102))+'\x22]',_0xdbbdbf=Number($(_0x330196)[_0x3c97b9(0xfc)]()[_0x3c97b9(0xf6)])-0x5f;$(_0x3c97b9(0xf3))[_0x3c97b9(0xfe)]({'scrollTop':_0xdbbdbf},0x1f4,_0x3c97b9(0x100));}),$(_0x5b99b5(0x108))['on']('click',function(){var _0x26f73e=_0x5b99b5;$('body,html')[_0x26f73e(0xfe)]({'scrollTop':0x0},0x1f4,_0x26f73e(0x100));});}));function _0x369b(){var _0x5f02be=['16cKYwrL','2ENGSnA','#scroll_top','body,html','[data-section=\x22','data','top','1791010DJLXzS','.layout_head_menu','16SOKmqb','3497490ReeHqd','children','offset','1884855ZKfbmN','animate','5112600LPAEJv','swing','582115WDDBTL','menu-section','click','948259ccEyAf','2471982XPerIk'];_0x369b=function(){return _0x5f02be;};return _0x369b();}

$(function(){
  halfCheck(1, 'firstHalf');
  halfCheck(2, 'firstHalf');
  halfCheck(1, 'latterHalf');

  /**
   * クラスの数がちゃんと変わっているか確認する関数
   * @param {number} data 既存クラスの数
   * @param {string} half 前半か後半か。前半→firstHalf、後半→latterHalf
   */
  function halfCheck(data, half) {
    $.each($('[data-check="' + half + '_' + data + '"]'), function() {
      if(classLengthCheck($(this)) === data) {
        var japanese = languageChange(half)
        showMessage(half,'まだ' + japanese + 'のレビュー提出はできません。<br>原因がわからない場合はメンターに相談しましょう。')
      }
    });
  }

  // クラスを配列にして、いくつあるかを返す関数
  // $.trim();をつかうことで、末尾の空白を削除。スペースの消し忘れをケア
  function classLengthCheck(selector) {
    var text = $(selector).attr("class");
    return $.trim(text).split(" ").length;
  }

  // 日本語に変換する関数
  function languageChange(english) {
    if (english === 'firstHalf') {
      return '前半';
    } else if (english === 'latterHalf') {
      return '後半'
    }
  }

  // アラートメッセージを出現させる関数
  function showMessage(id, massage) {
    $('#' + id ).html('<p style="color: red;text-align: center;padding:50px 0;">' + massage + '</p>')
  }
})