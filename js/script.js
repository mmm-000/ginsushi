// ページトップ表示
// ある程度スクロールしたら→
// p.pagetopフェードイン
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  // スクロールの数値表示
  // console.log(sc);
  if (sc > 100) {
    $("footer p.pagetop").fadeIn(500);
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});

// モバイルメニュー
// .hmenuをクリックした時
// ➡navにスライドトグル
// ➡$(this)にクラスcloseをトグル
// ➡停止
$(".hmenu").click(function () {
  // A上下パターン
  // $("nav").slideToggle(500);
  $(this).toggleClass("close");
  return false;
});

// B左右パターン
// 【script.js】
// .hmenuをクリックした時
// ➡$(this)にクラスcloseをトグル
// ➡停止

// ~~~~~~をクリックした時
// ➡.hmenuからクラスcloseを除去
// どこ押してもメニューが閉じる
$("header").click(function () {
  $(".hmenu").removeClass("close");
});
