// AOS 초기화
AOS.init({
  duration: 1000,
  once: true
});

// 다국어 지원
const translations = {
  ko: {
    title: 'PANTY PORT ROCK FESTIVAL 2025',
    date: '2025년 8월 2일 토요일',
    venue: '신촌 인피니티클럽 @1nfntclb',
    desc: '지하 언더그라운드 락페스티벌',
    ticket_btn: '예매하러 가기',
    about_title: '공연 소개',
    about_desc1: '2025년 8월 2일 토요일,<br>팬타포트 락페스티벌이 열리는 그날,<br>팬타에 초대받지 못한 뮤지션들과<br>팬타에 갈 수 없는 관객들을 위한<br><strong>지하 언더그라운드 락페스티벌, 팬티포트</strong>가 열린다.',
    about_desc2: '리허설/사운드체크 없이, 5시간 동안 연속으로<br>각 팀 당 30분씩 10팀의 아티스트와 함께합니다.',
    lineup_title: '라인업',
    timetable_title: '타임테이블',
    time: '시간',
    artist: '아티스트',
    ticket_title: '입장료',
    preorder: '예매:',
    door: '현매:',
    discount: '경기아트콜렉티브협동조합 조합원 5천원 할인',
    contact_title: '예매 및 문의',
    ticket_link: '예매 링크: 네이버 예약',
    credits_title: '크레딧',
    org: '기획:',
    sound: '사운드엔지니어:',
    poster: '포스터:',
    support: '지원:',
    venue_title: '공연장 위치',
    venue_addr: '서울특별시 서대문구 신촌로 119-1',
    venue_name: '신촌 인피니티클럽',
    venue_detail: '지하 1층, 신촌역 1번 출구에서 도보 5분',
    directions: '길찾기(Naver)',
    venue_map_btn: "공연장 위치 보기(Google)",
  },
  en: {
    title: 'PANTY PORT ROCK FESTIVAL 2025',
    date: 'Sat, August 2, 2025',
    venue: 'Sinchon Infinity Club @1nfntclb',
    desc: 'Underground Rock Festival',
    ticket_btn: 'Get Tickets',
    about_title: 'About',
    about_desc1: 'On August 2, 2025, the day of the Pentaport Rock Festival,<br>for musicians not invited to Pentaport<br>and fans who can’t attend,<br><strong>PantyPort: The Underground Rock Festival</strong> opens its doors.',
    about_desc2: 'No rehearsal or soundcheck. 5 hours non-stop.<br>10 artists, 30 minutes each.',
    lineup_title: 'Lineup',
    timetable_title: 'Timetable',
    time: 'Time',
    artist: 'Artist',
    ticket_title: 'Tickets',
    preorder: 'Pre-order:',
    door: 'At Door:',
    discount: 'GG Art Collective members: 5,000 KRW discount',
    contact_title: 'Tickets & Contact',
    ticket_link: 'Ticket link: Naver Booking',
    credits_title: 'Credits',
    org: 'Organizer:',
    sound: 'Sound Engineer:',
    poster: 'Poster:',
    support: 'Support:',
    venue_title: 'Venue',
    venue_addr: '119-1, Sinchon-ro, Seodaemun-gu, Seoul',
    venue_name: 'Sinchon Infinity Club',
    venue_detail: 'B1, 5 min walk from Sinchon Station Exit 1',
    directions: 'View Venue Location(Naver)',
    venue_map_btn: "View Venue Location(Google)",
  },
  jp: {
    title: 'PANTY PORT ROCK FESTIVAL 2025',
    date: '2025年8月2日(土)',
    venue: '新村インフィニティクラブ @1nfntclb',
    desc: 'アンダーグラウンドロックフェスティバル',
    ticket_btn: 'チケット予約',
    about_title: '公演紹介',
    about_desc1: '2025年8月2日(土)、<br>ペンタポートロックフェスティバルが開催されるその日、<br>ペンタに招待されなかったミュージシャンと<br>ペンタに行けない観客のための<br><strong>地下アンダーグラウンドロックフェスティバル、パンティポート</strong>が開催されます。',
    about_desc2: 'リハーサル/サウンドチェックなし、5時間連続で<br>各バンド30分ずつ、10組のアーティストが出演します。',
    lineup_title: 'ラインナップ',
    timetable_title: 'タイムテーブル',
    time: '時間',
    artist: 'アーティスト',
    ticket_title: '入場料',
    preorder: '前売り:',
    door: '当日:',
    discount: 'GGアートコレクティブ組合員 5,000ウォン割引',
    contact_title: '予約・お問い合わせ',
    ticket_link: '予約リンク: ネイバー予約',
    credits_title: 'クレジット',
    org: '企画:',
    sound: 'サウンドエンジニア:',
    poster: 'ポスター:',
    support: 'サポート:',
    venue_title: '会場',
    venue_addr: 'ソウル特別市西大門区新村路119-1',
    venue_name: '新村インフィニティクラブ',
    venue_detail: '地下1階、新村駅1番出口から徒歩5分',
    directions: '経路案内(Naver)',
    venue_map_btn: "会場を見る(Google)",
  }
};

function setLanguage(lang) {
  console.log('Setting language to:', lang);
  const dict = translations[lang] || translations.ko;
  const elements = document.querySelectorAll('[data-i18n]');
  console.log('Found elements with data-i18n:', elements.length);
  
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.documentElement.lang = lang;
}

// 언어 버튼 이벤트 안전하게 바인딩 (즉시실행 함수)
(function() {
  setLanguage('ko'); // 기본값
  var langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      setLanguage(this.getAttribute('data-lang'));
    });
  });
})();

// 지도: iframe만 사용, JS API는 아래 주석 참고
/*
// Naver Maps JS API 예시 (Client ID 필요)
function initNaverMap() {
  const venueLocation = new naver.maps.LatLng(37.555749, 126.938710);
  const map = new naver.maps.Map('map', {
    center: venueLocation,
    zoom: 16
  });
  const marker = new naver.maps.Marker({
    position: venueLocation,
    map: map,
    title: '신촌 인피니티클럽'
  });
}
function loadNaverMapAPI() {
  const script = document.createElement('script');
  script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID&submodules=geocoder';
  script.onload = function() { initNaverMap(); };
  document.head.appendChild(script);
}
// 사용하려면 <div id="map"></div> 추가 후 loadNaverMapAPI() 호출
*/
