// =================================================================================
// DREAMSTAY TOURS - CONFIGURATION FILE
// =================================================================================
// This is the central place to edit all the content for the DreamStay Tours website.
// Simply change the values here, save the file, and your website will be updated.
// No need to touch app.js, styles.css, or index.html for content changes.
// =================================================================================

window.config = {

    // --- GENERAL SETTINGS ---
    // TODO: Replace with your actual WhatsApp number.
    // Use the international format without '+' or '00'. For example: 14155552671
    WHATSAPP_NUMBER: "1234567890",

    // --- DASHBOARD DETAILS ---
    DETAILS_STATS: [
        { value: 42, label_en: "Tours Planned", label_si: "සැලසුම් කළ චාරිකා", label_ja: "企画されたツアー" },
        { value: 1200, label_en: "Happy Customers", label_si: "සතුටු පාරිභෝගිකයින්", label_ja: "満足されたお客様" },
        { value: 350, label_en: "Families Hosted", label_si: "සත්කාරක පවුල්", label_ja: "ホストした家族" },
        { value: 5000, label_en: "Nights Booked", label_si: "වෙන් කළ රාත්‍රී", label_ja: "予約された宿泊数" }
    ],

    SPONSORS: [
        { name: "Sponsor 1", logoUrl: "https://logoipsum.com/289.svg", url: "#" },
        { name: "Sponsor 2", logoUrl: "https://logoipsum.com/297.svg", url: "#" },
        { name: "Sponsor 3", logoUrl: "https://logoipsum.com/298.svg", url: "#" },
        { name: "Sponsor 4", logoUrl: "https://logoipsum.com/327.svg", url: "#" },
        { name: "Sponsor 5", logoUrl: "https://logoipsum.com/330.svg", url: "#" }
    ],

    // --- TOUR PACKAGES ---
    PACKAGES: [
      { "id":"jp-001", "country":"Japan", "title_en":"Sakura Streets of Kyoto", "title_si":"කියෝටෝ හි සකුරා වීදියන්", "title_ja":"京都の桜並木", "price_from":"USD 499", "duration":"5D/4N", "rating":4.9, "images":[`https://picsum.photos/seed/jp1/800/600`,`https://picsum.photos/seed/jp2/800/600`], "desc_en":"Walk under vibrant pink sakura canopies in historic Kyoto, experience a traditional tea ceremony, and visit ancient temples that whisper tales of the past.", "desc_si":"කියෝටෝ හි රෝස පැහැති සකුරා යටින් ගමන් කර, සාම්ප්‍රදායික තේ උත්සවයකට සහභාගී වී, අතීතයේ කතා කියන පෞරාණික විහාරස්ථාන නරඹන්න.", "desc_ja":"歴史的な京都で鮮やかなピンクの桜の天蓋の下を歩き、伝統的な茶道を体験し、過去の物語をささやく古代の寺院を訪れます。" },
      { "id":"jp-002", "country":"Japan", "title_en":"Neon Nights in Tokyo", "title_si":"ටෝකියෝ හි නියෝන් රාත්‍රි", "title_ja":"東京のネオンナイト", "price_from":"USD 599", "duration":"4D/3N", "rating":4.7, "images":[`https://picsum.photos/seed/jp3/800/600`], "desc_en":"Dive into the electrifying energy of Tokyo after dark. Witness the famous Shibuya Crossing, explore vibrant arcades, and enjoy the city's world-class nightlife.", "desc_si":"අඳුර වැටුණු පසු ටෝකියෝවේ විදුලිබල ශක්තියට කිමිදෙන්න. සුප්‍රසිද්ධ ෂිබුයා හරස් මාර්ගය දැක, විචිත්‍රවත් ආකේඩ් ගවේෂණය කර, නගරයේ ලෝක මට්ටමේ රාත්‍රී ජීවිතය භුක්ති විඳින්න.", "desc_ja":"暗くなった後の東京の電撃的なエネルギーに飛び込んでください。有名な渋谷交差点を目の当たりにし、活気あるアーケードを探索し、街のワールドクラスのナイトライフを楽しみましょう。" },
      { "id":"jp-003", "country":"Japan", "title_en":"Hokkaido Snow & Onsen", "title_si":"හොක්කයිඩෝ හි හිම සහ 온센", "title_ja":"北海道の雪と温泉", "price_from":"USD 699", "duration":"6D/5N", "rating":4.8, "images":[`https://picsum.photos/seed/jp4/800/600`], "desc_en":"Embrace the winter wonderland of Hokkaido. Enjoy skiing on powdery snow, relax in natural hot springs (onsen), and savor delicious local cuisine.", "desc_si":"හොක්කයිඩෝවේ ශීත ඍතු ආශ්චර්යමත් දේශය වැළඳ ගන්න. කුඩු හිම මත හිම මත ලිස්සා යාමෙන් සතුටු වන්න, ස්වභාවික උණු දිය උල්පත්වල (ඔන්සෙන්) විවේක ගන්න, සහ රසවත් දේශීය ආහාර රසවිඳින්න.", "desc_ja":"北海道の冬のワンダーランドを満喫してください。パウダースノーでのスキーを楽しみ、天然温泉でリラックスし、美味しい地元料理を味わってください。" },
      { "id":"jp-004", "country":"Japan", "title_en":"Mt. Fuji & Hakone Retreat", "title_si":"ෆුජි කන්ද සහ හකෝනේ විවේකය", "title_ja":"富士山と箱根のリトリート", "price_from":"USD 750", "duration":"4D/3N", "rating":4.9, "images":[`https://picsum.photos/seed/jp5/800/600`], "desc_en":"Witness the majestic Mt. Fuji from the scenic Hakone region. Enjoy a cruise on Lake Ashi, ride the Hakone Ropeway, and relax in a traditional onsen with stunning views.", "desc_si":" мальчик scenic Hakone කලාපයෙන් დიდා Mt. Fuji බලන්න. අෂි විලෙහි යාත්‍රාවක් භුක්ති විඳින්න, Hakone Ropeway පදින්න, සහ විශ්මයජනක දසුන් සහිත සාම්ප්‍රදායික ඔන්සෙන් එකක විවේක ගන්න.", "desc_ja":"風光明媚な箱根地域から雄大な富士山をご覧ください。芦ノ湖でのクルーズを楽しみ、箱根ロープウェイに乗り、素晴らしい景色を望む伝統的な温泉でリラックスしてください。" },
      { "id":"th-001","country":"Thailand","title_en":"Bangkok Temples & Street Food","title_si":"බැංකොක් විහාර සහ වීදි ආහාර","title_ja":"バンコクの寺院と屋台料理", "price_from":"USD 399","duration":"4D/3N","rating":4.6,"images":[`https://picsum.photos/seed/th1/800/600`], "desc_en":"Explore the majestic temples of Bangkok, dive into the world-famous street food scene, and experience the unique charm of a floating market.", "desc_si":"බැංකොක් නගරයේ අලංකාර විහාරස්ථාන ගවේෂණය කරන්න, ලෝක ප්‍රසිද්ධ වීදි ආහාර දර්ශනයට කිමිදෙන්න, සහ පාවෙන වෙළඳපොළක ඇති අද්විතීය ආකර්ෂණය අත්විඳින්න.", "desc_ja":"バンコクの壮大な寺院を探索し、世界的に有名な屋台料理シーンに飛び込み、水上マーケットのユニークな魅力を体験してください。" },
      { "id":"th-002","country":"Thailand","title_en":"Phuket Beach Chill","title_si":"පුකට් වෙරළේ විවේකය","title_ja":"プーケットのビーチでリラックス", "price_from":"USD 459","duration":"5D/4N","rating":4.7,"images":[`https://picsum.photos/seed/th2/800/600`], "desc_en":"Relax on the pristine white-sand beaches of Phuket. Go island hopping across the Andaman Sea and snorkel in crystal-clear turquoise waters.", "desc_si":"පුකට්හි සුදු වැලි සහිත වෙරළ තීරයේ විවේක ගන්න. අන්දමන් මුහුද හරහා දූපත් වෙත ගොස්, පැහැදිලි ටර්කියුයිස් ජලයේ ස්නෝකර්ලිං කරන්න.", "desc_ja":"プーケットの真っ白な砂浜でリラックスしてください。アンダマン海をアイランドホッピングし、透き通ったターコイズブルーの海でシュノーケリングを楽しみましょう。" },
      { "id":"th-003","country":"Thailand","title_en":"Chiang Mai Elephant Sanctuary","title_si":"චියැං මායි අලි අභයභූමිය","title_ja":"チェンマイのエレファントサンクチュアリ", "price_from":"USD 349","duration":"3D/2N","rating":4.8,"images":[`https://picsum.photos/seed/th3/800/600`], "desc_en":"Connect with gentle giants at an ethical elephant sanctuary in Chiang Mai. Learn about conservation, help care for the elephants, and trek through lush jungles.", "desc_si":"චියැං මායි හි සදාචාරාත්මක අලි අභයභූමියකදී මෘදු යෝධයන් සමඟ සම්බන්ධ වන්න. සංරක්ෂණය ගැන ඉගෙන ගන්න, අලින් රැකබලා ගැනීමට උදව් කරන්න, සහ සශ්‍රීක වනාන්තර හරහා ගමන් කරන්න.", "desc_ja":"チェンマイの倫理的な象の聖域で、穏やかな巨人たちと触れ合いましょう。保護について学び、象の世話を手伝い、緑豊かなジャングルをトレッキングします。" },
      { "id":"th-004","country":"Thailand","title_en":"Ayutthaya Ancient City Tour","title_si":"අයුත්තායා පුරාණ නගර සංචාරය", "title_ja":"アユタヤ古代都市ツアー", "price_from":"USD 299", "duration":"2D/1N","rating":4.7, "images":[`https://picsum.photos/seed/th4/800/600`], "desc_en":"Step back in time at the UNESCO World Heritage site of Ayutthaya. Explore ancient temple ruins, marvel at giant Buddha statues, and learn about the history of the former Siamese kingdom.", "desc_si":"UNESCO ලෝක උරුම අඩවියක් වන අයුත්තායාහි අතීතයට පිය නගන්න. පුරාණ විහාරස්ථාන නටබුන් ගවේෂණය කරන්න, යෝධ බුද්ධ ප්‍රතිමා கண்டு களியுங்கள், සහ පැරැණි සියම් රාජධානියේ ඉතිහාසය ගැන ඉගෙන ගන්න.", "desc_ja":"ユネスコ世界遺産のアユタヤで過去にタイムスリップ。古代の寺院の遺跡を探索し、巨大な仏像に驚嘆し、かつてのシャム王国の歴史について学びましょう。" },
      { "id":"my-001","country":"Malaysia","title_en":"Kuala Lumpur Culture & Food","title_si":"ක්වාලාලම්පූර් සංස්කෘතිය සහ ආහාර","title_ja":"クアラルンプールの文化と食","price_from":"USD 429","duration":"4D/3N","rating":4.5,"images":[`https://picsum.photos/seed/my1/800/600`], "desc_en":"Discover the vibrant mix of culture and cuisine in Kuala Lumpur. Visit the iconic Petronas Towers, explore bustling street food markets, and experience the city's unique charm.", "desc_si":"ක්වාලාලම්පූර්හි සංස්කෘතියේ සහ ආහාරවල විචිත්‍රවත් මිශ්‍රණය සොයා ගන්න. සුප්‍රසිද්ධ පෙට්‍රෝනාස් කුළුණු වෙත පිවිසෙන්න, කාර්යබහුල වීදි ආහාර වෙළඳපොළවල් ගවේෂණය කරන්න, සහ නගරයේ අද්විතීය ආකර්ෂණය අත්විඳින්න.", "desc_ja":"クアラルンプールで文化と料理の活気あるミックスを発見してください。象徴的なペトロナスツインタワーを訪れ、賑やかな屋台市場を探索し、街のユニークな魅力を体験してください。" },
      { "id":"my-002","country":"Malaysia","title_en":"Langkawi Rainforest Escape","title_si":"ලangkawi වැසි වනාන්තරයෙන් පැන යාම","title_ja":"ランカウイの熱帯雨林エスケープ", "price_from":"USD 499","duration":"5D/4N","rating":4.6,"images":[`https://picsum.photos/seed/my2/800/600`], "desc_en":"Escape to the natural paradise of Langkawi. Ride the famous cable car for breathtaking views, explore ancient rainforests, and relax on stunning beaches.", "desc_si":"ලangkawi හි ස්වභාවික පාරාදීසයට පැන යන්න. විශ්මයජනක දසුන් සඳහා සුප්‍රසිද්ධ කේබල් කාර් රථයේ ගමන් කරන්න, පුරාණ වැසි වනාන්තර ගවේෂණය කරන්න, සහ සිත් ඇදගන්නාසුළු වෙරළ තීරයන්හි විවේක ගන්න.", "desc_ja":"ランカウイの自然の楽園へエスケープ。有名なケーブルカーに乗って息をのむような景色を楽しみ、古代の熱帯雨林を探索し、素晴らしいビーチでリラックスしてください。" },
      { "id":"my-003","country":"Malaysia","title_en":"Cameron Highlands Tea Trails","title_si":"කැමරන් හයිලන්ඩ්ස් තේ මංපෙත්","title_ja":"キャメロンハイランドの茶畑", "price_from":"USD 379","duration":"3D/2N","rating":4.7,"images":[`https://picsum.photos/seed/my3/800/600`], "desc_en":"Journey into the cool, rolling hills of the Cameron Highlands. Walk through lush tea plantations, enjoy the refreshing climate, and hike stunning nature trails.", "desc_si":"කැමරන් හයිලන්ඩ්ස්හි සිසිල්, කඳුකර ප්‍රදේශයට ගමනක් යන්න. සශ්‍රීක තේ වතු හරහා ඇවිදින්න, ප්‍රබෝධමත් දේශගුණය භුක්ති විඳින්න, සහ විශ්මයජනක ස්වභාවික මංපෙත්වල ගමන් කරන්න.", "desc_ja":"キャメロンハイランドの涼しく起伏のある丘への旅。緑豊かな茶畑を散策し、さわやかな気候を楽しみ、素晴らしい自然の小道をハイキングしてください。" },
      { "id":"my-004","country":"Malaysia","title_en":"Penang Street Art & Food","title_si":"පිනෑන්ග් වීදි කලාව සහ ආහාර", "title_ja":"ペナンのストリートアートとグルメ", "price_from":"USD 350", "duration":"3D/2N","rating":4.8, "images":[`https://picsum.photos/seed/my4/800/600`], "desc_en":"Explore the UNESCO-listed George Town in Penang, famous for its interactive street art and legendary food scene. A paradise for art lovers and foodies alike.", "desc_si":"පිනෑන්ග් හි UNESCO ලැයිස්තුගත ජෝර්ජ් ටවුන් ගවේෂණය කරන්න, එහි අන්තර්ක්‍රියාකාරී වීදි කලාව සහ ජනප්‍රිය ආහාර දර්ශනය සඳහා ප්‍රසිද්ධය. කලා ලෝලීන්ට සහ රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැति sermeyecek.", "desc_ja":"ユネスコ世界遺産のペナンのジョージタウンを探索し、そのインタラクティブなストリートアートと伝説的な食のシーンで有名です。アート愛好家や食通にとっての楽園です。" },
      { "id":"in-001", "country":"India", "title_en":"Golden Triangle Adventure", "title_si":"ස්වර්ණමය ත්‍රිකෝණයේ වික්‍රමය", "title_ja":"ゴールデントライアングル冒険", "price_from":"USD 550", "duration":"6D/5N", "rating":4.7, "images":[`https://picsum.photos/seed/in1/800/600`], "desc_en":"Explore the iconic Golden Triangle - Delhi, Agra, and Jaipur. Witness the majestic Taj Mahal, explore historic forts, and immerse yourself in the vibrant culture of Rajasthan.", "desc_si":"දිල්ලි, අග්‍රා, සහ ජායිපූර් යන ස්වර්ණමය ත්‍රිකෝණය ගවේෂණය කරන්න. අලංකාර ටජ් මහල් බලන්න, ඓතිහාසික බලකොටු ගවේෂණය කරන්න, සහ රාජස්ථානයේ විචිත්‍රවත් සංස්කෘතියේ ගිලී සිටින්න.", "desc_ja":"象徴的なゴールデントライアングル - デリー、アグラ、ジャイプールを探索します。壮大なタージ・マハルを目撃し、歴史的な砦を探索し、ラジャスタンの活気ある文化に浸ってください。" },
      { "id":"in-002","country":"India","title_en":"Kerala Backwaters & Ayurveda","title_si":"කේරළ පසුබිම් ජලය සහ ආයුර්වේදය","title_ja":"ケララ州のバックウォーターとアーユルヴェーダ", "price_from":"USD 499","duration":"5D/4N","rating":4.8,"images":[`https://picsum.photos/seed/in2/800/600`], "desc_en":"Experience tranquility in the serene backwaters of Kerala. Glide along in a traditional houseboat, rejuvenate with Ayurvedic treatments, and explore fragrant spice plantations.", "desc_si":"කේරළයේ සන්සුන් පසුබිම් ජලයේ ශාන්තිය අත්විඳින්න. සාම්ප්‍රදායික පාරු නිවසක ගමන් කරන්න, ආයුර්වේද ප්‍රතිකාරවලින් ප්‍රබෝධමත් වන්න, සහ සුවඳවත් කුළුබඩු වතු ගවේෂණය කරන්න.", "desc_ja":"ケララ州の静かなバックウォーターで静けさを体験してください。伝統的なハウスボートで滑るように進み、アーユルヴェーダ治療で若返り、香り高いスパイスプランテーションを探索します。" },
      { "id":"in-003","country":"India","title_en":"Goa Beach Party Vibes","title_si":"ගෝවා වෙරළ සාදයේ හැඟීම්","title_ja":"ゴアのビーチパーティーバイブ", "price_from":"USD 329","duration":"3D/2N","rating":4.4,"images":[`https://picsum.photos/seed/in3/800/600`], "desc_en":"Soak up the sun and vibrant party scene in Goa. Relax on golden beaches by day and dance the night away at lively beach clubs, enjoying delicious seafood.", "desc_si":"ගෝවේ හිරු එළිය සහ විචිත්‍රවත් සාද දර්ශනය පොඟවා ගන්න. දිවා කාලයේ රන්වන් වෙරළ තීරයන්හි විවේක ගන්න, සහ සජවී වෙරළ සමාජ ශාලාවල රාත්‍රිය පුරා නටමින්, රසවත් මුහුදු ආහාර භුක්ති විඳින්න.", "desc_ja":"ゴアで太陽と活気あるパーティーシーンを満喫してください。日中は黄金のビーチでリラックスし、夜は活気のあるビーチクラブで踊り明かし、おいしいシーフードを楽しみましょう。" },
      { "id":"in-004", "country":"India", "title_en":"Varanasi Spiritual Journey", "title_si":"වාරණාසි අධ්‍යාත්මික ගමන", "title_ja":"バラナシのスピリチュアルな旅", "price_from":"USD 480", "duration":"4D/3N", "rating":4.9, "images":[`https://picsum.photos/seed/in4/800/600`], "desc_en":"Embark on a spiritual journey in the ancient city of Varanasi. Witness the mesmerizing Ganga Aarti ceremony on the banks of the Ganges and explore sacred temples.", "desc_si":"පුරාණ වාරණාසි නගරයේ අධ්‍යාත්මික ගමනක් ආරම්භ කරන්න. ගංගා නදී ඉවුරේ සිත් ඇදගන්නාසුළු ගංගා ආරතී උත්සවය 목격 කර පූජනීය විහාරස්ථාන ගවේෂණය කරන්න.", "desc_ja":"古代都市バラナシでスピリチュアルな旅に出かけましょう。ガンジス川のほとりで魅惑的なガンガー・アールティの儀式を目撃し、神聖な寺院を探索してください。" }
    ],

    // --- CUSTOMER REVIEWS ---
    REVIEWS_DATA: [
        { name: "John Doe", country_en: "Visited Japan", country_si: "ජපානයේ සංචාරය කළා", country_ja: "日本を訪問", quote_en: "The Sakura tour was absolutely magical. DreamStay handled everything perfectly. It felt like stepping into a fairytale.", quote_si: "සකුරා චාරිකාව ඇත්තෙන්ම ඉන්ද්‍රජාලිකයි. DreamStay සෑම දෙයක්ම පරිපූර්ණව හැසිරෙව්වා. සුරංගනා කතාවකට පිවිසියා වගේ දැනුනා.", quote_ja: "桜のツアーは本当に魔法のようでした。DreamStayはすべてを完璧に手配してくれました。おとぎ話に足を踏み入れたようでした。", avatar: `https://i.pravatar.cc/150?u=a042581f4e29026704d`, photos: ['https://picsum.photos/seed/jd1/800/600', 'https://picsum.photos/seed/jd2/800/600', 'https://picsum.photos/seed/jd3/800/600'] },
        { name: "Priya Sharma", country_en: "Visited India", country_si: "ඉන්දියාවේ සංචාරය කළා", country_ja: "インドを訪問", quote_en: "The Kerala backwaters trip was so serene and rejuvenating. The houseboat experience is a must-do!", quote_si: "කේරළ පසුපස ජල චාරිකාව ඉතා සන්සුන් සහ ප්‍රබෝධමත් විය. පාරු නිවාස අත්දැකීම අනිවාර්යයෙන්ම කළ යුතු දෙයක්!", quote_ja: "ケララのバックウォーター旅行はとても穏やかで若返りました。ハウスボートの体験は必見です！", avatar: `https://i.pravatar.cc/150?u=a042581f4e29026704e`, photos: ['https://picsum.photos/seed/ps1/800/600', 'https://picsum.photos/seed/ps2/800/600'] },
        { name: "Aisha binti Ahmad", country_en: "Visited Malaysia", country_si: "මැලේසියාවේ සංචාරය කළා", country_ja: "マレーシアを訪問", quote_en: "Exploring the rainforests in Langkawi was an unforgettable adventure. The guides were knowledgeable and so friendly.", quote_si: "ලන්කාවි හි වැසි වනාන්තර ගවේෂණය කිරීම අමතක නොවන වික්‍රමයකි. මාර්ගෝපදේශකයින් දැනුවත් සහ ඉතා මිත්‍රශීලී විය.", quote_ja: "ランカウイの熱帯雨林を探検したのは忘れられない冒険でした。ガイドは知識が豊富でとてもフレンドリーでした。", avatar: `https://i.pravatar.cc/150?u=a042581f4e29026704f`, photos: ['https://picsum.photos/seed/aa1/800/600'] },
        { name: "Kenji Tanaka", country_en: "Visited Thailand", country_si: "තායිලන්තයේ සංචාරය කළා", country_ja: "タイを訪問", quote_en: "The street food in Bangkok is on another level! Thank you DreamStay for the amazing recommendations.", quote_si: "බැංකොක්හි වීදි ආහාර වෙනත් මට්ටමක පවතී! විශ්මිත නිර්දේශ සඳහා DreamStay වෙත ස්තූතියි.", quote_ja: "バンコクの屋台料理は別格です！ DreamStayの素晴らしい推薦に感謝します。", avatar: `https://i.pravatar.cc/150?u=a042581f4e29026704a`, photos: [] }
    ],

    // --- FREQUENTLY ASKED QUESTIONS ---
    FAQ_DATA: [
      { q_en: "Do you handle visas?", q_si: "ඔබලා වීසා සම්බන්ධ වැඩ කරනවද?", q_ja: "ビザの手配はしますか？", a_en: "We provide guidance and optional visa assistance for select packages.", a_si: "අපි තෝරාගත් පැකේජ සඳහා වීසා උපදෙස් සහ අවශ්‍ය නම් සහාය ලබා දෙමු.", a_ja: "一部のパッケージについては、ガイダンスとオプションのビザ支援を提供しています。" },
      { q_en: "What is included in the package price?", q_si: "පැකේජ මිලට මොනවාද ඇතුළත්?", q_ja: "パッケージ料金には何が含まれていますか？", a_en: "Our packages typically include accommodation, specified meals, guided tours, and internal transport. International flights are usually excluded.", a_si: "අපගේ පැකේජවලට සාමාන්‍යයෙන් නවාතැන්, නිශ්චිත ආහාර වේල්, මඟ පෙන්වන චාරිකා සහ අභ්‍යන්තර ප්‍රවාහනය ඇතුළත් වේ. ජාත්‍යන්තර ගුවන් ගමන් සාමාන්‍යයෙන් ඇතුළත් නොවේ.", a_ja: "当社のパッケージには通常、宿泊施設、指定された食事、ガイド付きツアー、国内交通機関が含まれています。国際線は通常含まれていません。" },
      { q_en: "Can I customize a tour?", q_si: "මට සංචාරයක් රිසිකරණය කළ හැකිද?", q_ja: "ツアーをカスタマイズできますか？", a_en: "Absolutely! We specialize in creating custom itineraries. Contact us via WhatsApp to discuss your dream trip.", a_si: "ඇත්ත වශයෙන්ම! අපි රිසිකරණය කළ ගමන් විස්තර නිර්මාණය කිරීමට විශේෂඥයින්. ඔබේ සිහින සංචාරය ගැන සාකච්ඡා කිරීමට WhatsApp හරහා අප හා සම්බන්ධ වන්න.", a_ja: "もちろんです！私たちはカスタム旅程の作成を専門としています。あなたの夢の旅行について話し合うために、WhatsApp経由でお問い合わせください。" },
      { q_en: "Is travel insurance provided?", q_si: "සංචාරක රක්ෂණයක් සපයනවාද?", q_ja: "旅行保険は提供されますか？", a_en: "Travel insurance is not included but is highly recommended. We can suggest trusted insurance partners.", a_si: "සංචාරක රක්ෂණය ඇතුළත් කර නැත, නමුත් එය බෙහෙවින් නිර්දේශ කෙරේ. අපට විශ්වාසදායක රක්ෂණ හවුල්කරුවන් යෝජනා කළ හැකිය.", a_ja: "旅行保険は含まれていませんが、強くお勧めします。信頼できる保険パートナーを提案できます。" }
    ],
    
    // --- MEDIA GALLERY ---
    MEDIA_GALLERY: [
        { type: 'photo', url: 'https://picsum.photos/seed/jp1/800/600', country: 'Japan', title_en: 'Sakura in Kyoto', title_si: 'කියෝටෝ හි සකුරා', title_ja: '京都の桜' },
        { type: 'video', url: 'https://www.youtube.com/embed/F4n_BW_o_Uo?autoplay=1&mute=1', thumbnailUrl: 'https://img.youtube.com/vi/F4n_BW_o_Uo/hqdefault.jpg', country: 'Japan', title_en: 'Relaxing Japan Scenery', title_si: 'සන්සුන් ජපන් දර්ශන', title_ja: '日本の癒しの風景' },
        { type: 'photo', url: 'https://picsum.photos/seed/th1/800/600', country: 'Thailand', title_en: 'Bangkok Floating Market', title_si: 'බැංකොක් පාවෙන වෙළඳපොළ', title_ja: 'バンコク水上マーケット' },
        { type: 'photo', url: 'https://picsum.photos/seed/th2/800/600', country: 'Thailand', title_en: 'Phuket Beaches', title_si: 'පුකට් වෙරළ', title_ja: 'プーケットのビーチ' },
        { type: 'video', url: 'https://www.youtube.com/embed/Ua-zT1zODbA?autoplay=1&mute=1', thumbnailUrl: 'https://img.youtube.com/vi/Ua-zT1zODbA/hqdefault.jpg', country: 'Thailand', title_en: 'Exploring Thailand', title_si: 'තායිලන්තය ගවේෂණය', title_ja: 'タイの探検' },
        { type: 'photo', url: 'https://picsum.photos/seed/my1/800/600', country: 'Malaysia', title_en: 'Petronas Towers', title_si: 'පෙට්‍රෝනාස් කුළුණු', title_ja: 'ペトロナスツインタワー' },
        { type: 'photo', url: 'https://picsum.photos/seed/in1/800/600', country: 'India', title_en: 'The Taj Mahal', title_si: 'ටජ් මහල්', title_ja: 'タージ・マハル' },
        { type: 'video', url: 'https://www.youtube.com/embed/ixg_e_2_VAY?autoplay=1&mute=1', thumbnailUrl: 'https://img.youtube.com/vi/ixg_e_2_VAY/hqdefault.jpg', country: 'India', title_en: 'Incredible India', title_si: 'විශ්මිත ඉන්දියාව', title_ja: '信じられないほどのインド' },
        { type: 'photo', url: 'https://picsum.photos/seed/jd2/800/600', country: 'Japan', title_en: 'Customer Photo: Japan Temple', title_si: 'පාරිභෝගික ඡායාරූපය: ජපන් පන්සල', title_ja: 'お客様の写真：日本のお寺' },
    ],

    // --- HERO SECTION QUOTES ---
    HERO_QUOTES: {
        en: [ "Discover worlds beyond your own.", "Your adventure is written in the stars.", "Travel to the edge of imagination.", "Another reality is just a flight away." ],
        si: [ "ඔබේ ලෝකයෙන් ඔබ්බට ලෝක සොයා ගන්න.", "ඔබේ වික්‍රමය තරු වල ලියා ඇත.", "පරිකල්පනයේ කෙළවරට ගමන් කරන්න.", "වෙනත් යථාර්ථයක් යනු ගුවන් ගමනක් පමණි." ],
        ja: [ "自分の世界を超えた世界を発見する。", "あなたの冒険は星に書かれています。", "想像力の果てまで旅をする。", "別の現実はすぐそこにある。" ]
    },
    
    // --- WEBSITE TEXTS & TRANSLATIONS (STRINGS) ---
    STRINGS: {
        en: {
            chooseLangTitle: "Choose Language",
            heroTitle: "DreamStay Tours — Travel like it’s another universe",
            createCustomPlan: "Create a Custom Plan",
            contactWhatsApp: "Contact via WhatsApp",
            seeAllMedia: "See All Photos & Videos",
            galleryTitle: "Our Photo & Video Gallery",
            backToHome: "Back to Home",
            filterAll: "All",
            filterPhotos: "Photos",
            filterVideos: "Videos",
            filterDashboard: "Dashboard",
            filterThailand: "Thailand",
            filterJapan: "Japan",
            filterMalaysia: "Malaysia",
            filterIndia: "India",
            sponsorsTitle: "Our Valued Partners",
            viewDetails: "View Details",
            faqTitle: "Frequently Asked Questions",
            reviewsTitle: "From Our Travellers",
            viewPhotos: "View Tour Photos",
            photosBy: "Photos from {name}'s trip",
            footerPrivacy: "Privacy Policy",
            footerTerms: "Terms of Service",
            toggleLang: "භාෂාව / 言語",
            whatsappMsg: (title) => `Hi DreamStay, I want info about the "${title}" package. Dates: _______`,
            customPlanTitle: "Create Your Custom Dream Trip",
            formName: "Full Name",
            formTravelers: "Number of Travelers",
            formDestinations: "Desired Destinations (e.g., Tokyo, Phuket)",
            formBudget: "Budget per Person (USD)",
            formDates: "Preferred Travel Dates",
            formNotes: "Additional Notes or Preferences",
            formSubmitBtn: "Get a Quote via WhatsApp",
            customPlanWhatsappMsg: (data) => `
Hello DreamStay, I'd like a quote for a custom trip!
---
Name: ${data.name}
Travelers: ${data.travelers}
Destinations: ${data.destinations}
Budget (per person): ${data.budget || 'Not specified'}
Dates: ${data.dates || 'Flexible'}
Notes: ${data.notes || 'None'}
            `.trim().replace(/^ +/gm, ''),
        },
        si: {
            chooseLangTitle: "භාෂාව තෝරන්න",
            heroTitle: "DreamStay Tours — වෙනත් ග්‍රහලෝකයක මෙන් සංචාරය කරන්න",
            createCustomPlan: "ඔබේම සංචාරයක් සාදන්න",
            contactWhatsApp: "WhatsApp හරහා සම්බන්ධ වෙන්න",
            seeAllMedia: "සියලුම ඡායාරූප සහ වීඩියෝ බලන්න",
            galleryTitle: "අපගේ ඡායාරූප සහ වීඩියෝ ගැලරිය",
            backToHome: "මුල් පිටුවට",
            filterAll: "සියල්ල",
            filterPhotos: "ඡායාරූප",
            filterVideos: "වීඩියෝ",
            filterDashboard: "පුවරුව",
            filterThailand: "තායිලන්තය",
            filterJapan: "ජපානය",
            filterMalaysia: "මැලේසියාව",
            filterIndia: "ඉන්දියාව",
            sponsorsTitle: "අපගේ වටිනා හවුල්කරුවන්",
            viewDetails: "විස්තර බලන්න",
            faqTitle: "නිතර අසන ප්‍රශ්න",
            reviewsTitle: "අපගේ සංචාරකයින්ගෙන්",
            viewPhotos: "සංචාරයේ ඡායාරූප බලන්න",
            photosBy: "{name}ගේ සංචාරයේ ඡායාරූප",
            footerPrivacy: "පෞද්ගලිකත්ව ප්‍රතිපත්තිය",
            footerTerms: "සේවා කොන්දේසි",
            toggleLang: "Language / 言語",
            whatsappMsg: (title) => `හෙලෝ DreamStay, මට "${title}" පැකේජය ගැන තොරතුරු අවශ්‍යයි. දිනය: _______`,
            customPlanTitle: "ඔබේ සිහින චාරිකාව සාදන්න",
            formName: "සම්පූර්ණ නම",
            formTravelers: "සංචාරකයින් ගණන",
            formDestinations: "අපේක්ෂිත ගමනාන්ත (උදා: ටෝකියෝ, පුකට්)",
            formBudget: "එක් පුද්ගලයෙකුට අයවැය (USD)",
            formDates: "කැමති සංචාරක දිනයන්",
            formNotes: "අමතර සටහන් හෝ කැමති දේ",
            formSubmitBtn: "WhatsApp හරහා මිල ගණන් ලබා ගන්න",
            customPlanWhatsappMsg: (data) => `
හෙලෝ DreamStay, මට අභිරුචි චාරිකාවක් සඳහා මිල ගණන් අවශ්‍යයි!
---
නම: ${data.name}
සංචාරකයින්: ${data.travelers}
ගමනාන්ත: ${data.destinations}
අයවැය (එක් අයෙකුට): ${data.budget || 'නිශ්චිත කර නැත'}
දිනයන්: ${data.dates || 'නම්‍යශීලී'}
සටහන්: ${data.notes || 'නැත'}
            `.trim().replace(/^ +/gm, ''),
        },
        ja: {
            chooseLangTitle: "言語を選択",
            heroTitle: "DreamStay Tours — 異世界のように旅をする",
            createCustomPlan: "カスタムプランを作成",
            contactWhatsApp: "WhatsAppで連絡",
            seeAllMedia: "すべての写真とビデオを見る",
            galleryTitle: "写真＆ビデオギャラリー",
            backToHome: "ホームに戻る",
            filterAll: "すべて",
            filterPhotos: "写真",
            filterVideos: "ビデオ",
            filterDashboard: "ダッシュボード",
            filterThailand: "タイ",
            filterJapan: "日本",
            filterMalaysia: "マレーシア",
            filterIndia: "インド",
            sponsorsTitle: "我々の大切なパートナー",
            viewDetails: "詳細を見る",
            faqTitle: "よくある質問",
            reviewsTitle: "旅行者から",
            viewPhotos: "ツアーの写真を見る",
            photosBy: "{name}さんの旅行の写真",
            footerPrivacy: "プライバシーポリシー",
            footerTerms: "利用規約",
            toggleLang: "Language / භාෂාව",
            whatsappMsg: (title) => `こんにちはDreamStay、「${title}」パッケージについて情報が欲しいです。日程: _______`,
            customPlanTitle: "あなたの夢のカスタムトリップを作成",
            formName: "フルネーム",
            formTravelers: "旅行者数",
            formDestinations: "希望の目的地（例：東京、プーケット）",
            formBudget: "一人当たりの予算（USD）",
            formDates: "希望の旅行日",
            formNotes: "追加のメモや希望",
            formSubmitBtn: "WhatsAppで見積もりを取得",
            customPlanWhatsappMsg: (data) => `
こんにちはDreamStay、カスタム旅行の見積もりをお願いします！
---
名前: ${data.name}
旅行者数: ${data.travelers}
目的地: ${data.destinations}
予算（一人当たり）: ${data.budget || '指定なし'}
日程: ${data.dates || '柔軟'}
備考: ${data.notes || 'なし'}
            `.trim().replace(/^ +/gm, ''),
        }
    }
};