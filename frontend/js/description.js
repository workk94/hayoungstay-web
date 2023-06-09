document.addEventListener("DOMContentLoaded", function () {
  var categoryItems = document.getElementsByClassName("category-item");

  for (var i = 0; i < categoryItems.length; i++) {
    categoryItems[i].addEventListener("click", function () {
      var description = getDescription(this.id);

      var descriptionContents = document.querySelector("#text-content");
      descriptionContents.innerHTML = description;
    });
  }
});

// 각 마을에 대한 설명을 반환하는 함수
function getDescription(villageId) {
  switch (villageId) {
    case "gujwaeup":
      return `
      <div class="image-container">
      <div class="description-image-container">
      <div class="inner">
      <img src="src/gujwaeup1.jpg" />
      <img src="src/gujwaeup2.jpg" />
      <img src="src/gujwaeup3.jpg" />
      </div>
      </div>
      </div>
        <p>
          구좌읍은 전국에서 가장 살기 좋고 청정제주 지역인 제주시의 동쪽 끝에 자리잡고
          있다.
        </p>
        <p>
          긴 해안선과 광활한 목야지가 특징이며 온대 계절의 습윤 기후를 가져 당근, 양파,
          마늘의 주산지이며
        </p>
        <p>
          김녕 혜수욕장, 만장굴, 김녕 사굴과 같은 천혜적인 명승지가 산대하고 있는
          곳이다.
        </p>
        `;
    case "jocheoneup":
      return `
      <div class="image-container">
      <div class="description-image-container">
      <div class="inner">
      <img src="src/jocheoneup1.jpg" />
      <img src="src/jocheoneup2.jpg" />
      <img src="src/jocheoneup3.jpg" />
      </div>
      </div>
      </div>
    <p>
      조천읍은 이국적인 마을부터 독특한 제주 숲길, ‘말’ 테마의 카페 그리고 시원한
      해안 산책길까지
    </p>
    <p>
      무엇 하나 빠지지 않고 독창적인 감성과 천혜적인 자연을 한 번에 느낄 수 있는
      마을이다.
    </p>
    <p>
      현지인처럼 마을을 거닐며 관광객처럼 이색적인 경험을 한 번에 누릴 수 있는
      일석이조의 여행지이다.
    </p>
        
        `;
    case "aewoleup":
      return `
      <div class="image-container">
      <div class="description-image-container">
      <div class="inner">
      <img src="src/aewoleup1.jpg" />
      <img src="src/aewoleup2.jpg" />
      <img src="src/aewoleup3.jpg" />
      </div>
      </div>
      </div>
    <p>
      애월읍은 천혜의 자연환경을 자랑하며 제주 시내의 중심부와 인접해 있는 지역으로
    </p>
    <p>
      제주도민 뿐만 아니라 외지인들에게도 살고 싶은 지역으로 관심 받는 지역이다.
    </p>
    <p>
      사시사철 생산되는 채소류와 드 넓은 목장, 그리고 풍부한 바다 어장은 애월읍
      주민들의 삶을 풍부하게 해준다.
    </p>`;
    case "gasiri":
      return `
      <div class="image-container">
<div class="description-image-container">
<div class="inner">
    <img src="src/gasiri1.jpg" />
    <img src="src/gasiri2.jpg" />
    <img src="src/gasiri3.jpg" />
</div>
</div>
</div>

    <p>표선면 가시리는 마을 이름 그대로 ‘시간을 더한다’라는 뜻을 가진 곳으로</p>
    <p>
      드넓은 초원과 목초지, 억새와 유채꽃 군락지, 오름과 저 멀리 보이는 바닷가를 볼
      수 있다.
    </p>
    <p>
      푸른 목초지에서 놀고 있는 조랑말과 돌담, 그 뒤에 서있는 풍력발전기를 보고
      있으면 느긋한 평온한을 느낄 수 있다.
    </p> `;
    case "haryeri":
      return `<div class="image-container">
   
      <div class="description-image-container">
      <div class="inner">
          <img src="src/haryeri1.jpg" />
          <img src="src/haryeri2.jpg" />
          <img src="src/haryeri3.jpg" />
      </div>
      </div>
      </div>
      
    <p>
      남원읍 하례리는 따뜻한 제주에서도 가장 남쪽에 위치하여 더욱더 따뜻한 지역으로
    </p>
    <p>온화한 기후로 감귤이 잘 자라 감귤의 고장이라고도 불린다.</p>
    <p>
      하례리는 보석처럼 값진 가치를 지닌 자연명소가 많아 가장 제주다운 자연의 모습이
      담긴 마을이다.
    </p>`;
    case "sagyeri":
      return `<div class="image-container">
      <div class="description-image-container">
      <div class="inner">
          <img src="src/sagyeri1.jpg" />
          <img src="src/sagyeri2.jpg" />
          <img src="src/sagyeri3.jpg" />
      </div>
      </div>
      </div>
      
    <p>
      산방산 아래에 위치한 안덕면 사계리 마을은 조용하지만 풍광이 아름다운 곳이다.
    </p>
    <p>
      서귀포 안덕 사계 해안가의 위치한 마을로 산과 바다, 섬기지 갖춰 아름다운
      절경으로 가득한 마을이다.
    </p>
    <p>산방산을 등에 지고 형제섬이 한 눈에 펼쳐지는 천혜의 자연을 품은 곳이다.</p>
    
        `;
    default:
      return "선택된 마을이 없습니다.";
  }
}
