$(function(){
  var meishi = [
    'Twitter',
    'Facebook',
    '車',
    '戦車',
    '戦闘機',
    'CPU',
    '冷蔵庫',
    '洗濯機',
  ];
  var keiyoushi = [
    '大きい',
    '小さい',
    'うるさい',
    '静かな',
    '高級な',
    '安価な',
    '無料な',
    '生き物のような',
    '夢見がちな',
    'かっこいい',
    'かっこわるい',
  ];
  var fukushi = [
    '異常に',
    '普通に',
    '妙に',
    '激しく',
    'なんとなく',
    'たまに',
    '頻繁に',
    '微妙に',
    '急に',
    '長らく',
    '奇妙に',
  ];
  var meishi = MEISHI;
  var keiyoushi = KEIYOUSHI;
  var fukushi = FUKUSHI;


  function choice(arr){
    var l = arr.length;
    var r = Math.floor(l * Math.random());
    return arr[r];
  }

  function checkFullHira(s){
    return s.match(/^[ぁ-ん]*$/);
  }

  function mkNewWord(){
    var o = "";
    o += choice(fukushi) + " ";
    o += choice(keiyoushi) + " ";
    while(true){  // すべてひらがなの名詞は取り込まない
      var m = choice(meishi);
      if(checkFullHira(m)){
      //  continue;
      }
      o += m;
      break;
    }
    return o;
  }

  function init(){
    $('.contents').empty();
    for(var i =0; i <50; i ++){
      var w = mkNewWord();
      $('.contents').append(
        $('<div>')
          .append($('<span>').text(w))
          .append($('<a>').attr('href','https://twitter.com/intent/tweet?text=' + encodeURIComponent("「" + w + "」 #idea " + document.location.href)).attr('target','_blank').addClass('tw').text("[つぶやく]"))
      )
    }
  }


  $('.re').click(function(){
    init();
  });
 
  init();
});
