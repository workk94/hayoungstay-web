Kakao.init("69812f8c98c18be411e99af0f920692c");

function kakaoShare(data) {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '하영스테이',
      description: '제주, 마을을 잇다',
      imageUrl:
        'https://www.urbanbrush.net/web/wp-content/uploads/edd/2019/05/urbanbrush-20190527111859163541.png',
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: 'http://127.0.0.1:5500',
        webUrl: 'http://127.0.0.1:5500',
      },
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: 'http://127.0.0.1:5500',
          webUrl: 'http://127.0.0.1:5500',
        },
      },
    ],
  });
}

