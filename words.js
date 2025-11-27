// words.js
// 👇 위쪽은 '코드 영역' - 건들지 말기!
(function () {
  function buildDB(raw) {
    const db = {};
    const lines = raw.split(/\r?\n/);

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue; // 빈 줄, 주석 무시

      // 유닛 | 영어 | 한글뜻 | 영어예문 | 한글예문
      const parts = trimmed.split("|");
      if (parts.length < 5) continue;

      const [unit, word, meaning, exampleEn, exampleKo] = parts.map(p => p.trim());
      if (!db[unit]) db[unit] = [];
      db[unit].push({ word, meaning, exampleEn, exampleKo });
    }

    return db;
  }

  // 👇👇👇 여기부터가 '복붙하는 구역'이야 👇👇👇
  // 형식: 유닛|영어|한글뜻|영어예문|한글예문
  // [박혜선 단어 데이터 변환 완료]
  const RAW_WORDS = `
1-1|at|~에|at 7 o'clock|7시 정각에
1-1|bat|야구방망이, 박쥐|I have a bat.|나는 야구 방망이를 가지고 있어.
1-1|fat|뚱뚱한, 살찐|a fat cat|뚱뚱한 고양이
1-1|hat|모자|a yellow hat|노란색 모자
1-1|chat|이야기하다, 수다 떨다|I like to chat.|나는 이야기하는 것을 좋아해.
1-1|act|행동하다, 연기하다|act like a kid|아이처럼 행동하다
1-1|fact|사실|a clear fact|분명한 사실
1-1|fan|팬, 선풍기|a big fan|큰 선풍기
1-1|man|남자, 사람|an old man|나이 든 남자
1-1|pants|바지|blue pants|파란색 바지
1-2|map|지도|look at the map|지도를 보다
1-2|cap|모자|a blue cap|파란색 모자
1-2|fun|재미, 재밌는|Have fun.|재미있게 보내.
1-2|run|달리다|run fast|빠르게 달리다
1-2|sad|슬픈|I'm sad.|나는 슬퍼.
1-2|mad|화난|She's mad.|그녀는 화났어.
1-2|glad|기쁜, 반가운|He's glad.|그는 기뻐.
1-2|bag|가방|It’s my bag.|그것은 나의 가방이야.
1-2|pig|돼지|It's a big pig.|그것은 큰 돼지야.
1-2|leg|다리|have four legs|다리 4개
1-3|get|얻다, 사다, (잠에서) 일어나다|get a gift|선물을 받다
1-3|net|그물|a fishing net|낚시 그물
1-3|set|두다, 설정하다|set the table|상을 차리다
1-3|pet|반려동물|cute pets|귀여운 반려동물
1-3|wet|젖은|a wet towel|젖은 수건
1-3|let's|~하자|Let's go.|가자.
1-3|upset|속상한, 짜증 난|She's upset.|그녀는 속상해.
1-3|pen|펜|a black pen|검은색 펜
1-3|bed|침대|Time for bed.|잘 시간이야.
1-3|bedroom|침실|three bedrooms|침실 3개
1-4|bell|벨, 종|ring the bell|종을 울리다
1-4|sell|팔다|It sells cards.|그곳은 카드를 팔아.
1-4|tell|말하다|tell a story|이야기를 들려주다
1-4|well|잘, 건강한, 우물|very well|매우 잘
1-4|cello|(악기) 첼로|play the cello|그녀는 첼로를 연주해.
1-4|hello|안녕|Hello. I'm Jisoo.|안녕. 나는 지수야.
1-4|in|~안에|in the box|상자 안에
1-4|pin|핀|a hair pin|머리핀
1-4|win|이기다|win the prize|상을 타다.
1-4|twin|쌍둥이|cute twins|귀여운 쌍둥이
1-5|ill|아픈|He feels ill.|그는 아파해요.
1-5|bill|지폐, 청구서|coins and bills|동전과 지폐
1-5|hill|언덕|on the hill|언덕 위에
1-5|kill|죽이다|kill a bug|벌레를 죽이다.
1-5|fill|채우다|fill up|~을 가득 채우다
1-5|film|영화|I love this film.|나는 이 영화를 좋아해.
1-5|hit|때리다|hit the ball|공을 때리다
1-5|sit|앉다|sit down|앉다
1-5|up|위로|up and down|위로 아래로
1-5|cup|컵|It’s a cup.|그것은 컵이야.
1-6|but|그러나|It's small but I like it.|그것은 작지만 나는 그것이 좋아.
1-6|cut|자르다|cut the paper|종이를 자르다
1-6|shut|닫다|shut the door|문을 닫다
1-6|bug|벌레|a ladybug|무당벌레
1-6|plan|계획, 계획하다|the next plan|다음 계획
1-6|plant|식물, 심다|plant a flower|꽃을 심다
1-6|dish|접시, 요리, 반찬|a clean dish|깨끗한 접시
1-6|wish|바라다, 소원|make a wish|소원을 빌다
1-6|cash|현금|by cash|현금으로
1-6|gas|가스, 기체|gas station|주유소
1-7|and|그리고, ~와|apples and grapes.|사과와 포도
1-7|band|밴드, 악단|The band plays music.|밴드가 음악을 연주해.
1-7|hand|손|a right hand|오른손
1-7|sand|모래|a sandcastle|모래성
1-7|land|땅, 육지|the land and the sea|육지와 바다
1-7|gum|껌|bubble gum|풍선껌
1-7|album|앨범|an old album|오래된 앨범
1-7|drum|드럼|play the drums|드럼을 치다
1-7|camp|캠프(지), 캠핑하다|go camping|캠핑 가다
1-7|lamp|램프|They're lamps.|그것들은 전등이야.
1-8|back|등, 뒤로, 제자리로|Come back.|돌아와.
1-8|black|검은(색)|a black cat|검은색 고양이
1-8|rock|바위|rocks and stones|바위들과 돌멩이들
1-8|lock|잠그다, 자물쇠|lock the door|그 문을 잠그다
1-8|block|막다, 블록|two blocks|2개의 블록
1-8|clock|벽시계|a clock and a watch|벽시계와 손목시계
1-8|o'clock|~시|at 10 o'clock|10시에
1-8|luck|행운|Good luck.|행운을 빌어.
1-8|kick|차다|kick the ball|공을 차다
1-8|sick|아픈|sick children|아픈 아이들
1-9|pick|고르다, 줍다|pick up trash|쓰레기를 줍다
1-9|thick|두꺼운|thick paper|두꺼운 종이
1-9|truck|트럭|a toy truck|하나의 장난감 트럭
1-9|track|선로, 자국|long train track|긴 기차선로
1-9|neck|목|a long neck|긴 목
1-9|check|확인하다|Check the box.|박스를 확인하다
1-9|quick|빠른|a quick rabbit|빠른 토끼
1-9|quiz|퀴즈|quiz time|퀴즈 시간
1-9|fast|빠른, 빨리|run fast|빠르게 달리다
1-9|last|지난, 마지막의|last summer|지난여름
1-10|bank|은행|Where is the bank?|은행이 어디에 있어?
1-10|sink|싱크대, 가라앉다|in the bathroom|욕실에
1-10|pink|분홍색(의)|a pink pig|분홍색 돼지
1-10|milk|우유|chocolate milk|초콜릿 우유
1-10|wing|날개|four wings|날개 네 개
1-10|swing|그네, 흔들리다|I like to swing.|나는 그네 타기를 좋아한다.
1-10|swim|수영하다|I can swim.|나는 수영을 할 수 있다.
1-10|gift|선물|a small gift|작은 선물
1-10|left|왼쪽(의)|on your left|너의 왼쪽에
1-10|soft|부드러운|soft bread|부드러운 빵
1-11|west|서쪽|in the west|서쪽에서
1-11|nest|둥지|in the nest|둥지 안
1-11|vest|조끼|put on a vest|조끼를 입다
1-11|best|가장 좋은, 최고의|best friends|가장 친한 친구
1-11|belt|벨트, 허리띠|wear a belt|벨트를 차다
1-11|melt|녹다, 녹이다|melt butter|버터를 녹이다
1-11|smell|냄새, 냄새 맡다|Smells good.|냄새가 좋다.
1-11|spell|철자를 말하다, 쓰다|Spell your name.|너의 이름을 써.
1-11|full|배부른, 가득한|I'm full.|난 배불러.
1-11|pull|당기다|Pull the rope.|줄을 당겨라.
1-12|put|두다, 놓다|Put it here.|그것을 여기에 놔.
1-12|push|밀다, 누르다|Push the button.|버튼을 눌러라
1-12|brush|붓(칠하다), 닦다, 빗다|I brush my teeth.|나는 이를 닦아.
1-12|finish|끝내다|finish homework|숙제를 끝내다
1-12|rich|부자의, 부유한|He's rich.|그는 부자야.
1-12|bench|벤치|a green bench|녹색 벤치
1-12|lunch|점심 식사|lunchtime|점심시간
1-12|much|많은, 매우|Thank you so much.|정말 고마워.
1-12|must|~해야 한다, 틀림없다|I must go home.|나는 집에 가야 해.
1-12|just|단지, 막, 그냥|Just wait.|그냥 기다려.
1-13|I|나는|I am Sumin.|나는 수민이야.
1-13|hi|안녕|Hi.|안녕.
1-13|on|~위에|on the desk|책상 위에
1-13|son|아들|my son|나의 아들
1-13|lion|사자|lions and tigers|사자와 호랑이
1-13|onion|양파|Chop the onion.|양파를 썰어라.
1-13|crayon|크레용|It's a crayon.|그것은 크레용이야.
1-13|crazy|제정신이 아닌|He's crazy.|그는 제정신이 아니야.
1-13|lazy|게으른|a lazy man|게으른 남자
1-13|pretty|예쁜, 매우|a pretty doll|예쁜 인형
1-14|kiss|입 맞추다, 뽀뽀하다|kiss the frog|개구리한테 키스하다
1-14|miss|그리워하다, 놓치다|I'll miss you.|나는 네가 보고 싶을 거야.
1-14|pass|건네주다, 통과하다|pass the ball|공을 건네주다
1-14|grass|풀, 잔디|on the grass|잔디에
1-14|glass|유리(컵)|a glass of water|물 한잔
1-14|glasses|안경|sunglasses|선글라스
1-14|dress|드레스|wear a dress|드레스를 입다
1-14|address|주소|his name and address|그의 이름과 주소
1-14|add|더하다|add numbers|숫자를 더하다
1-14|all|모든|all the boys|모든 소년들
1-15|ball|공|a ball and a bat|공과 야구방망이
1-15|call|부르다, 전화하다|Call me Kate.|케이트라고 불러.
1-15|fall|가을, 떨어지다|It's fall.|가을이다.
1-15|tall|키가 큰|a tall man|키가 큰 남자
1-15|small|작은|It's small.|그것은 작다.
1-15|animal|동물|animals in the zoo|동물원안에 있는 동물들
1-15|pianist|피아노 연주자|a good pianist|좋은 피아니스트
1-15|piano|피아노|a piano lesson|피아노 수업
1-15|radio|라디오|on the radio|라디오에서
1-15|audio|음성의, 오디오|an audio file|오디오 파일
1-15|end|끝(나다)|end at 3|3시에 끝나다
1-15|lend|빌려주다|lend a book|책을 빌려주다
1-15|send|보내다|send a message|메시지를 보내다
1-15|boy|소년, 남자아이|five boys|5명의 소년들
1-15|toy|장난감|a toy shop|장난감 가게
1-15|joy|기쁨|full of joy|기쁨으로 가득한
1-15|enjoy|즐기다|Enjoy your meal.|식사 맛있게 드세요.
1-15|oil|기름|vegetable oil|식물성 기름
1-15|coin|동전|coins and bills|동전과 지폐
1-15|join|참가하다, 함께하다|I will join you.|내가 너와 함께 할게.
1-15|pill|알약|take a pill|알약을 먹다
1-15|will|~할 것이다|I will go camping.|나 캠핑 갈 거야.
1-15|slim|날씬한|She's slim.|그녀는 날씬하다.
1-15|job|일, 직업|Good job!|잘했어.
1-15|god|신|God loves us.|신은 우리를 사랑한다.
1-15|body|몸, 신체|Our body needs good food.|우리의 몸은 좋은 음식이 필요하다.
1-15|happy|행복한|I'm happy.|나는 행복해.
1-15|puppy|강아지|a cute puppy|귀여운 강아지
1-15|dance|춤(추다)|I can dance.|나는 춤을 출 수 있다
1-15|dancer|무용수|good dancer|좋은 무용수
1-15|hot|뜨거운, 더운, 매운|hot weather|더운 날씨
1-15|not|아니다|It's not mine.|그것은 내 것이 아니야.
1-15|a lot of|많은|a lot of people|많은 사람들
1-15|pilot|조종사, 파일럿|be a pilot|조종사가 되다
1-15|top|꼭대기, 정상|on top|위에
1-15|drop|떨어지다, 떨어뜨리다|drop the glass|유리컵을 떨어뜨리다
1-15|shop|가게|a flower shop|꽃가게
1-15|stop|멈추다, 정지|The rain stops.|비가 그치다.
1-15|step|걸음, 단계|five steps|5단계
1-15|bus stop|버스 정류장|Where is the bus stop?|버스정류장이 어디에 있니?
1-15|lip|입술|thick lips|두꺼운 입술
1-15|clip|클립, 동영상|a paper clip|종이 클립
1-15|tulip|튤립|pink tulips|핑크 튤립
1-15|ship|배|on the ship|배 위에서
1-15|trip|여행|a trip to Canada|캐나다로 가는 여행
1-15|do|하다|do my homework|숙제를 하다
1-15|to|~로|go to school|학교에 가다
1-15|into|~안으로|into the box|상자에
1-15|ask|묻다|Let's ask him.|그에게 물어보자
1-15|desk|책상|a desk and a chair|책상과 의자
1-15|love|사랑(하다)|I love you.|사랑해
1-15|glove|장갑|pink gloves|핑크 장갑
1-15|live|살다|live in Korea.|한국에 살다.
1-15|give|주다|Give it to me.|그것을 내게 줘.
1-15|have|가지다, 먹다|I have lunch.|나는 점심을 먹는다.
1-15|little|어린, 작은, 조금의|my little brother|내 남동생
1-15|bottle|병|a bottle of water|물 한병
1-15|battle|전투|in the battle|전투에서
1-15|gentle|온화한, 친절한|gentle and nice|온화하고 착한
1-15|gentleman|신사, 남자분|He's a gentleman.|그는 신사야.
1-15|bring|가져오다|Bring your homework.|너의 숙제를 가져와.
1-15|hiking|하이킹|Let's go hiking.|하이킹 가자.
1-15|see|보다, 알다|see a movie|영화를 보다
1-15|beef|소고기|beef curry|소고기 카레
1-15|feel|느끼다|I feel great.|나는 기분이 아주 좋아.
1-15|free|자유로운, 한가한|free time|자유 시간
1-15|tree|나무|We can save the trees.|우리는 나무를 절약할 수 있어.
1-15|teen|십 대|Teens like cartoons.|십 대 들은 만화를 좋아한다.
1-15|green|초록색(의)|It’s green.|그것은 녹색이야.
1-15|queen|여왕|a pretty queen|예쁜 여왕
1-15|sheep|양|three sheep|양 세 마리
1-15|sleep|자다|She sleeps.|그녀는 잔다.
1-15|meet|만나다|Nice to meet you.|만나서 반가워.
1-15|sheet|시트, 장|a sheet of paper|종이 한 장
1-15|street|거리, 길|on the street|거리에
1-15|sweet|달콤한|It's sweet.|그것은 달콤해.
1-15|coffee|커피|a cup of coffee|커피 한 잔
1-15|cheese|치즈|cheese and butter|치즈와 버터
1-15|sea|바다|in the sea|바다에서
1-15|tea|(마시는) 차|warm tea|따뜻한 차
1-15|east|동쪽|in the east|동쪽에서
1-15|eat|먹다|I eat pizza.|나는 피자를 먹는다.
1-15|meat|고기|meat and salad|고기와 샐러드
1-15|heat|열, 데우다|Heat the oven.|오븐을 가열해.
1-15|seat|좌석|have seat|자리에 앉다
1-15|seatbelt|안전벨트|Fasten your seatbelt.|안전벨트를 매라.
1-15|lead|이끌다|lead the team|팀을 이끌다
1-15|read|읽다|read many books|많은 책들을 읽다.
1-15|beach|해변|go to the beach|해변에 가다
1-15|teach|가르치다|teach English|영어를 가르치다
1-15|dream|꿈, 꿈을 꾸다|my dream|내 꿈
1-15|cream|크림|ice cream|아이스크림
1-15|clean|깨끗한, 청소하다|The room is clean.|방은 깨끗해.
1-15|bean|콩|I love beans.|나는 콩을 좋아해.
1-15|jeans|청바지|wear jeans|청바지를 입다
1-15|please|제발, 부디|"Come here, please."|여기로 와주세요.
1-15|old|오래된, 낡은, 늙은|an old house|오래된 집
1-15|cold|추운, 차가운, 감기|It is cold.|추워.
1-15|gold|금, 금색의|gold coins|금화
1-15|hold|잡다|Hold my hand.|내 손을 잡아.
1-15|no|아니다, 없다|"Are you hungry? No, I'm not."|"너 배고파? 아니, 안 배고파."
1-15|so|매우, 그래서|The rainbow is so colorful.|무지개는 매우 화려해.
1-15|go|가다|Let's go home.|집에 가자.
1-15|ago|~전에|ten minutes ago|10분 전에
1-15|hippo|하마|a fat hippo|뚱뚱한 하마
1-15|road|길, 도로|on the road|길에서
1-15|soap|비누|soap bubbles|비눗방울
1-15|boat|배, 보트|get on the boat|보트에 타다
1-15|coat|코트, 외투|wear a coat|외투를 걸치다
1-15|note|메모, 필기|take a note|필기하다
1-15|nose|코|I have a big nose.|나는 큰 코를 가지고 있어.
1-15|rose|장미|a red rose|빨간 장미
1-15|hose|호스|a water hose|물 호스
1-15|hole|구멍|a big hole|큰 구멍
1-15|hope|희망, 바라다|She needs hope.|그녀는 희망이 필요해.
1-15|home|집|Let's go home.|집에 가자.
1-15|homework|숙제|math homework|수학 숙제
1-15|ear|귀|two ears|두 개의 귀
1-15|dear|소중한, ~에게|dear my friend|나의 친구에게
1-15|hear|듣다|hear the news|소식을 듣다
1-15|near|가까운, 가까이|near my house|내 집 가까이
1-15|tear|눈물|Tears rolled down.|눈물이 흘러내렸다.
1-15|year|해, 년|ten years old|10살
1-15|clear|맑은, 깨끗한|the clear sky|맑은 하늘
1-15|bear|곰|It's a brown bear.|그것은 갈색곰이야.
1-15|pear|(과일) 배|juicy pears|과즙이 많은 배
1-15|wear|입다|Wear your raincoat.|우비를 입어.
1-15|sugar|설탕|I don't like sugar.|난 설탕을 안 좋아해.
1-15|dollar|(미국 화폐 단위) 달러|ten dollars|10 달러
1-15|umbrella|우산|I have an umbrella.|나는 우산이 있어.
1-15|book|책|It’s a book.|그것은 책이야.
1-15|cook|요리사, 요리하다|He's a cook.|그는 요리사야.
1-15|look|~해 보이다, 보다|Look! It’s a cute cat.|봐! 그것은 귀여운 고양이야.
1-15|good|좋은, 멋진|Good morning.|좋은 아침.
1-15|wood|나무|made of wood|나무로 만들어진
1-15|food|음식|healthy food|건강한 음식
1-15|foot|발|a left foot|왼발
1-15|boot|부츠, 장화|wear boots|부츠를 신다
1-15|tooth|치아, 이|Brush your teeth.|이를 닦아.
1-15|too|너무, 또한|"I like tomatoes, too."|나도 토마토 좋아해.
1-15|roof|지붕|on the roof|지붕에
1-15|room|방|living room|거실
1-15|cool|시원한, 멋진|It's cool.|추워.
1-15|fool|바보|He's a fool.|그는 바보야.
1-15|pool|수영장|a large swimming pool|대형 수영장
1-15|school|학교|at school|학교에서
1-15|moon|달|the moon and stars|달과 별
1-15|soon|곧, 빨리|Come back soon.|곧 돌아와.
1-15|spoon|숟가락|a spoon and a fork|숟가락과 포크
1-15|balloon|풍선|colorful balloons|다채로운 풍선
1-15|be|~이다, ~되다|be a pilot|조종사가 되다
1-15|we|우리는|We're friends.|우리는 친구다.
1-15|he|그는|Who's he?|그는 누구니?
1-15|she|그녀는|Who's she?|그녀는 누구니?
1-15|ticket|티켓, 표|ticket office|매표소
1-15|pocket|주머니|in my pocket|내 주머니 안에
1-15|rocket|로켓|a red rocket|빨간 로켓
1-15|jacket|재킷|wear a jacket|재킷을 입다
1-15|open|열다, 열린|Open the door.|문을 열어라.
1-15|often|자주, 흔히|We often go to the park.|우리는 공원에 자주 간다.
1-15|wild|야생의|wild animals|야생동물
1-15|child|어린이|I have a child.|나는 아이가 있다.
1-15|children|어린이들|They have children.|그들은 아이들이 있다.
1-15|ice|얼음|put ice|얼음을 넣다
1-15|dice|주사위|roll the dice|주사위를 굴리다
1-15|nice|멋진, 친절한|Be nice.|착하게 굴어라
1-15|rice|쌀|rice and side dishes|밥과 반찬
1-15|hike|도보 여행하다|go hiking|도보 여행하러 가다
1-15|bike|자전거|a blue bike|파란 자전거
1-15|like|좋아하다, ~같은|I like snow.|나는 눈을 좋아해.
1-15|die|죽다|People die.|사람들이 죽는다.
1-15|pie|파이|apple pie|사과 파이
1-15|tie|매다, 넥타이|tie shoelaces|신발끈을 묶다
1-15|lie|거짓말(하다)|Don't lie.|거짓말하지 마.
1-15|smile|미소(짓다)|smile at|미소 짓다
1-15|file|파일|an audio file|음성 파일
1-15|find|찾다|find a map|지도를 찾아라
1-15|kind|친절한, 종류|You're very kind.|너는 매우 친절해.
1-15|mind|마음|keep in mind|명심하다
1-15|behind|뒤에|behind me|내 뒤에
1-15|carry|나르다|carry books|책들을 나르다
1-15|marry|결혼하다|The couple will marry.|그 커플은 결혼할 것이다.
1-15|hurry|서두르다|Hurry up.|서둘러.
1-15|worry|걱정(하다)|Don't worry.|걱정 마.
1-15|cry|울다|She's crying.|그녀는 울고 있다.
1-15|dry|건조한, 말리다|dry a wet towel|젖은 수건을 말리다
1-15|try|시도하다, 노력하다|Try this.|이거 먹어봐.
1-15|fry|튀기다|Fry potatoes.|감자를 튀겨라.
1-15|fly|파리, 날다|I can fly.|나는 날 수 있다.
1-15|sky|하늘|in the sky|하늘에
1-15|guy|남자|a tall guy|키가 큰 남자
1-15|buy|사다|buy some grapes|약간의 포도를 사다
1-15|by|~옆에, ~로|by the park|공원 옆에
1-15|bye|안녕, 잘 가|Goodbye.|잘 가.
1-15|eye|눈|Open the door.|문을 열어라.
1-15|wall|벽|on the wall|벽에
1-15|wallet|지갑|a pink wallet|분홍색 지갑
1-15|fire|불|make a fire|불을 피우다
1-15|tire|타이어|a flat tire|펑크 난 타이어
1-15|tired|피곤한|She's tired.|그녀는 지쳤다.
1-15|cow|암소|Six cows.|소 여섯 마리
1-15|how|어떻게, 어떤|How are you?|어떻게 지내?
1-15|now|지금, 이제|I'm at home now.|나는 지금 집이야.
1-15|down|아래로|Sit down.|앉아라.
1-15|town|마을|a new town|새로운 마을
1-15|brown|갈색의|brown eyes|갈색의 눈
1-15|house|집|in my house.|내 집에
1-15|mouse|쥐|a little mouse|작은 쥐
1-15|loud|시끄러운, 큰 소리의|a loud voice|큰 목소리
1-15|aloud|큰 소리로|speak aloud|큰 소리로 말하다
1-15|grow|기르다, 자라다|grow plants|식물을 기르다
1-15|show|쇼, 보여주다|a magic show|마술 쇼
1-15|throw|던지다|throw a ball|공을 던지다
1-15|bowl|그릇|a big bowl|큰 그릇
1-15|blow|(바람) 불다|The wind blows.|바람이 분다.
1-15|slow|느린|a slow turtle|느린 거북이
1-15|rainbow|무지개|a pretty rainbow|예쁜 무지개
1-15|window|창문|Close the window.|창문 닫아라.
1-15|who|누구|Who’s she?|그녀는 누구니?
1-15|what|무엇, 어떤|What's this?|이것은 무엇이니?
1-15|great|멋진, 훌륭한|That's great!|훌륭해!
1-15|break|깨뜨리다, 깨지다|break the window|창문을 깨뜨리다
1-15|steak|스테이크|yummy steak|맛있는 스테이크
1-15|bread|빵|soft bread|부드러운 빵
1-15|dead|죽은|a dead animal|죽은 동물
1-15|head|머리|a small head|작은 머리
1-15|heavy|무거운|a heavy box|무거운 상자
1-15|ready|준비된|Are you ready?|준비됐어?
1-15|envy|부러워하다|I envy you.|나는 네가 부러워.
1-15|very|매우|very well|아주 잘
1-15|life|삶, 인생|Life is a journey.|인생은 여행이다.
1-15|wife|아내|his wife|그의 아내
1-15|wide|넓은|a wide river|넓은 강
1-15|hide|숨다, 숨기다|hide and seek|숨바꼭질
1-15|ride|타다|ride a bike|자전거를 타다
1-15|slide|미끄럼틀, 미끄러지다|I like to slide.|나는 미끄럼틀을 좋아한다.
1-15|wine|와인, 포도주|a bottle of red wine|적포도주 한 병
1-15|pine|소나무|a pine tree|소나무
1-15|line|선, 줄을 서다|Draw a line.|선을 그려.
1-15|fine|좋은, 훌륭한|fine weather|좋은 날씨
1-15|five|(숫자) 5|Five apples.|사과 다섯 개
1-15|safe|안전한|It's safe.|안전하다.
1-15|save|저장하다, 구하다|save energy|에너지 절약
1-15|wave|파도, 흔들다|big waves|큰 파도
1-15|cave|동굴|a dark cave|어두운 동굴
1-15|time|시간|What time is it?|몇 시야?
1-15|name|이름|My name is Kate.|내 이름은 케이트야.
1-15|same|같은|We're the same age.|우리는 같은 나이야.
1-15|game|게임|play games|게임하다
1-15|tape|테이프|with the tape|테이프로
1-15|bake|굽다|bake cookies|쿠키를 굽다
1-15|cake|케이크|make a cake|케이크를 만들다
1-15|lake|호수|a big lake|큰 호수
1-15|make|만들다|Let's make a snowman.|눈사람을 만들자.
1-15|take|가져가다, (시간이) 걸리다|I'll take it.|그것을 살게요.
1-15|wake|깨다, 깨우다|Wake up.|일어나.
1-15|shake|흔들다|Shake it.|흔들어.
1-15|base|기초, (야구) 베이스|around the base|(야구) 베이스 주변
1-15|case|경우, 통|a pencil case|필통
1-15|face|얼굴|Wash your face.|세수를 해라
1-15|date|날짜|What's the date?|며칠이야?
1-15|gate|문, 출입구|at the gate|게이트에서
1-15|hate|싫어하다|I hate snakes.|나는 뱀이 싫어.
1-15|late|늦은, 늦게|I'm late.|나는 늦는다.
1-15|later|나중에|See you later.|나중에 봐.
1-15|skate|스케이트(를 타다)|I can skate.|나는 스케이트를 탈 수 있다.
1-15|taste|맛|It tastes good.|맛있어.
1-15|waste|낭비(하다)|Don't waste water.|물 낭비하지 마.
1-15|table|탁자|under the table|탁자 아래
1-15|vegetable|채소|fruits and vegetables|과일과 채소
1-15|gym|체육관|at the gym|체육관에서
1-15|age|나이|at the age|~살에
1-15|page|쪽, 페이지|page 10|10 쪽
1-15|cage|우리, 새장|in the cage|새장 안에
1-15|stage|무대|on the stage|무대 위에
1-15|sale|판매|on sale|할인 판매 중인
1-15|fix|고치다|I can fix it.|내가 고칠 수 있어.
1-15|six|(숫자) 6|six children|6명의 아이들
1-15|sixty|(숫자) 60|sixty years old|60살
1-15|sixteen|(숫자) 16|sixteen years old|16살
1-15|nail|손톱, 못|nails and toenails|손톱과 발톱
1-15|tail|꼬리|a long tail|긴 꼬리
1-15|mail|우편|Check the mailbox.|우편함을 확인해.
1-15|email|이메일, 전자 우편|send a message by email|이메일로 메시지를 보내다
1-15|wait|기다리다|Please wait.|기다려.
1-15|brain|두뇌|our brain|우리의 뇌
1-15|train|기차|on the train|기차에서
1-15|chain|(쇠)사슬, 체인점|a bicycle chain|자전거 체인
1-15|paint|그림을 그리다, 칠하다|paint a bird|새를 그리다
1-15|painting|그림|a painting on the wall|벽에 걸린 그림
1-15|day|날|What day is it today?|오늘이 무슨 요일이지?
1-15|May|5월|in May|5월에
1-15|say|말하다|say hello|인사하다
1-15|okay|괜찮아|Okay. Let's go.|알겠어. 가자.
1-15|stay|머무르다|Stay here.|여기서 있어.
1-15|gray|회색|a gray mouse|회색 쥐
1-15|play|놀다, (운동)하다, (악기) 연주하다|She plays the cello.|그녀는 첼로를 연주한다.
1-15|lady|숙녀, 여자|a beautiful lady|아름다운 여인
1-15|baby|아기|a cute baby|귀여운 아기
1-15|hobby|취미|your hobby|너의 취미
1-15|angry|화난|I’m angry|나 화나
1-15|hungry|배고픈|Are you hungry?|너 배고프니?
1-15|chair|의자|under the chair|의자 아래
1-15|hair|머리카락|I brush my hair.|나는 머리를 빗는다.
1-15|fair|공평한|a fair chance|공정한 기회
1-15|pair|쌍, 짝|a pair of gloves|장갑 한 켤레
1-15|stair|계단|Go up the stairs.|계단 올라가.
1-15|color|색깔|what color|무슨 색
1-15|actor|배우|a famous actor|유명한 배우
1-15|doctor|의사|be a doctor|의사가 되다
1-15|girl|소녀, 여자아이|a cute girl|귀여운 소녀
1-15|bird|새|a small bird|작은 새
1-15|third|세 번째|the third grade|3학년
1-15|shirt|셔츠|That is my shirt.|저것은 내 셔츠야.
1-15|skirt|치마, 스커트|That is her skirt.|저것은 그녀의 치마야.
1-15|first|첫 번째(의)|the first grade|1학년
1-15|juice|주스|fruit juice|과일주스
1-15|fruit|과일|summer fruits|여름 과일
1-15|blue|파란|a blue crayon|파란색 크레용
1-15|glue|풀|a glue and scissors|풀과 가위
1-15|habit|습관|a good habit|좋은 습관
1-15|rabbit|토끼|a cute rabbit|귀여운 토끼
1-15|tomato|토마토|I like tomatoes.|나는 토마토를 좋아해.
1-15|potato|감자|I like potatoes.|나는 감자를 좋아해.
1-15|some|어떤, 몇몇(의)|I have some plans.|나는 몇 가지 계획이 있어.
1-15|handsome|잘생긴|He's very handsome.|그는 매우 잘생겼다.
1-15|come|오다|"Come here, please."|여기로 와주세요.
1-15|become|~되다|become a pilot|조종사가 되다
1-15|welcome|환영하다|Welcome to Korea.|한국에 오신 걸 환영해요.
1-15|twelve|(숫자) 12|It's twelve o'clock.|12시야.
1-15|help|돕다, 도움|I can help you.|내가 도와줄 수 있어.
1-15|hotel|호텔|at the hotel|호텔에서
1-15|doll|인형|a pretty doll|예쁜 인형
1-15|roll|굴리다|Roll the dice.|주사위를 굴려라.
1-15|dog|개|It’s a big dog.|그것은 큰 개야.
1-15|fog|안개|There's fog.|안개가 낀다.
1-15|frog|개구리|Frogs are on the pond.|개구리들이 연못에 있다.
1-15|from|~에서, ~로부터|I'm from Korea.|난 한국에서 왔어.
1-15|front|앞|front seats|앞자리
1-15|in front of|~앞에|in front of the toy shop|장난감 가게 앞에
1-15|way|길|the best way|가장 좋은 방법
1-15|away|떨어져, 멀리|Go away!|저리 가!
1-15|subway|지하철|at the subway station|지하철역에서
1-15|pizza|피자|order pizza|피자를 주문하다
1-15|zebra|얼룩말|"zebras, giraffes, and hippos"|"얼룩말, 기린, 하마"
1-15|elephant|코끼리|It's an elephant.|그것은 코끼리야.
1-15|giant|거대한, 거인|The elephant is giant.|코끼리는 아주 크다.
1-15|zero|(숫자) 0|"Three, two, one, zero!"|"3, 2, 1, 0!"
1-15|hero|영웅|my hero|내 영웅
1-15|robot|로봇|make a robot|로봇을 만들다
1-15|art|예술|I have an art class.|나 미술수업 있어.
1-15|far|먼|It's far from here.|여기서 멀어요.
1-15|car|자동차|There are cars on the road.|도로에 차들이 있어.
1-15|cart|카트, 수레|shopping cart|쇼핑카트
1-15|card|카드|cards and letters|카드와 편지
1-15|hard|어려운, 열심히, 딱딱한|Math is hard.|수학은 어려워.
1-15|yard|마당|in the yard|마당에
1-15|smart|똑똑한|She's smart.|그녀는 똑똑해.
1-15|ugly|못생긴, 추한|You're not ugly.|너는 못생기지 않았어.
1-15|only|오직|only child|외동
1-15|tower|타워, 탑|the Eiffel Tower|에펠 탑
1-15|power|힘|a special power|특별한 힘
1-15|cover|덮다, 표지|Cover them.|그것들을 덮