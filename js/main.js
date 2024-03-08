// vue
Vue.createApp({
    data() {
        return {
            attractions: [
                { park: 1, name: "オムニバス", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/151/" },
                { park: 1, name: "ペニーアーケード", height: 0, can_alone: false, can_hold: true, can_stroller: true, attraction_type: "ゲーム", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/191/" },
                { park: 1, name: "ウエスタンリバー鉄道", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/154/" },
                { park: 1, name: "カリブの海賊", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/152/" },
                { park: 1, name: "ジャングルクルーズ：ワイルドライフ・エクスペディション", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/153/" },
                { park: 1, name: "スイスファミリー・ツリーハウス", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "体験型", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/155/" },
                { park: 1, name: "魅惑のチキルーム", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "シアター", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/156/" },
                { park: 1, name: "ウエスタンランド・シューティングギャラリー", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "体験型", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/157/" },
                { park: 1, name: "カントリーベア・シアター", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "シアター", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/158/" },
                { park: 1, name: "蒸気船マークトウェイン号", height: 0, can_alone: false, can_hold: true, can_stroller: true, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/159/" },
                { park: 1, name: "トムソーヤ島いかだ", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/161/" },
                { park: 1, name: "ビッグサンダー・マウンテン", height: 102, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/160/" },
                { park: 1, name: "スプラッシュ・マウンテン", height: 90, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/162/" },
                { park: 1, name: "ビーバーブラザーズのカヌー探険", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "体験型", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/163/" },
                { park: 1, name: "アリスのティーパーティー", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/173/" },
                { park: 1, name: "イッツ・ア・スモールワールド", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/172/" },
                { park: 1, name: "キャッスルカルーセル", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/170/" },
                { park: 1, name: "白雪姫と七人のこびと", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/165/" },
                { park: 1, name: "シンデレラのフェアリーテイル・ホール", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "体験型", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/166/" },
                { park: 1, name: "空飛ぶダンボ", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/169/" },
                { park: 1, name: "美女と野獣“魔法のものがたり”", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/197/" },
                { park: 1, name: "ピーターパン空の旅", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/164/" },
                { park: 1, name: "ピノキオの冒険旅行", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/168/" },
                { park: 1, name: "プーさんのハニーハント", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/174/" },
                { park: 1, name: "ホーンテッドマンション", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/171/" },
                { park: 1, name: "ミッキーのフィルハーマジック", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "シアター", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/167/" },
                { park: 1, name: "ガジェットのゴーコースター", height: 90, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/179/" },
                { park: 1, name: "グーフィーのペイント＆プレイハウス", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "体験型", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/181/" },
                { park: 1, name: "チップとデールのツリーハウス", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "体験型", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/178/" },
                { park: 1, name: "トゥーンパーク", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "体験型", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/194/" },
                { park: 1, name: "ドナルドのボート", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "体験型", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/180/" },
                { park: 1, name: "ミニーの家", height: 0, can_alone: false, can_hold: true, can_stroller: true, attraction_type: "体験型", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/176/" },
                { park: 1, name: "ロジャーラビットのカートゥーンスピン", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/175/" },
                { park: 1, name: "スター・ツアーズ：ザ・アドベンチャーズ・コンティニュー", height: 102, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/183/" },
                { park: 1, name: "スティッチ・エンカウンター", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "シアター", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/195/" },
                { park: 1, name: "スペース・マウンテン", height: 102, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/184/" },
                { park: 1, name: "バズ・ライトイヤーのアストロブラスター", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/185/" },
                { park: 1, name: "ベイマックスのハッピーライド", height: 81, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/196/" },
                { park: 1, name: "モンスターズ・インク“ライド＆ゴーシーク！”", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tdl/attraction/detail/189/" },
                { park: 2, name: "ディズニーシー・トランジットスチーマーライン（メディテレーニアンハーバー）", height: 0, can_alone: false, can_hold: true, can_stroller: true, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/227/" },
                { park: 2, name: "ソアリン：ファンタスティック・フライト", height: 102, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/219/" },
                { park: 2, name: "フォートレス・エクスプロレーション", height: 0, can_alone: false, can_hold: false, can_stroller: false, attraction_type: "体験型", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/244/" },
                { park: 2, name: "ヴェネツィアン・ゴンドラ", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/230/" },
                { park: 2, name: "フォートレス・エクスプロレーション\"ザ・レオナルドチャレンジ\"", height: 117, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "体験型", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/245/" },
                { park: 2, name: "タートル・トーク", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "シアター", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/246/" },
                { park: 2, name: "タワー・オブ・テラー", height: 102, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/243/" },
                { park: 2, name: "ディズニーシー・エレクトリックレールウェイ", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/232/" },
                { park: 2, name: "ディズニーシー・トランジットスチーマーライン（アメリカンウォーターフロント）", height: 0, can_alone: false, can_hold: true, can_stroller: true, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/228/" },
                { park: 2, name: "トイ・ストーリー・マニア！", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/218/" },
                { park: 2, name: "ビッグシティ・ヴィークル", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/233/" },
                { park: 2, name: "アクアトピア", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/234/" },
                { park: 2, name: "ディズニーシー・エレクトリックレールウェイ", height: 0, can_alone: false, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/231/" },
                { park: 2, name: "ニモ＆フレンズ・シーライダー", height: 90, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/247/" },
                { park: 2, name: "インディ・ジョーンズ®・アドベンチャー： クリスタルスカルの魔宮", height: 117, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/222/" },
                { park: 2, name: "ディズニーシー・トランジットスチーマーライン（ロストリバーデルタ）", height: 0, can_alone: false, can_hold: true, can_stroller: true, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/229/" },
                { park: 2, name: "レイジングスピリッツ", height: 117, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/242/" },
                { park: 2, name: "キャラバンカルーセル", height: 0, can_alone: false, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/236/" },
                { park: 2, name: "ジャスミンのフライングカーペット", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/220/" },
                { park: 2, name: "シンドバッド・ストーリーブック・ヴォヤッジ", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/235/" },
                { park: 2, name: "マジックランプシアター", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "シアター", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/226/" },
                { park: 2, name: "アリエルのプレイグラウンド", height: 0, can_alone: false, can_hold: true, can_stroller: true, attraction_type: "体験型", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/202/" },
                { park: 2, name: "ジャンピン・ジェリーフィッシュ", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/239/" },
                { park: 2, name: "スカットルのスクーター", height: 0, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/238/" },
                { park: 2, name: "フランダーのフライングフィッシュコースター", height: 90, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/237/" },
                { park: 2, name: "ブローフィッシュ・バルーンレース", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/240/" },
                { park: 2, name: "マーメイドラグーンシアター", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "シアター", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/221/" },
                { park: 2, name: "ワールプール", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/241/" },
                { park: 2, name: "海底2万マイル", height: 0, can_alone: false, can_hold: true, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/224/" },
                { park: 2, name: "センター・オブ・ジ・アース", height: 117, can_alone: true, can_hold: false, can_stroller: false, attraction_type: "ライド", url: "https://www.tokyodisneyresort.jp/tds/attraction/detail/223/" },
            ],
            selectedHeight: '',
            selectedAge: '',
            selectedPark: null,
            canHold: false,
            canStroller: false,
            selectedAttractionType: 'all',
            filteredAttractions: [],
            showAlertAgeMessage: false,
            showAlertNothingMessage: false,
        };
    },
    methods: {
        filterAttractions() {
            if (!this.selectedHeight || !this.selectedAge || !this.selectedPark) {
                alert('パーク、年齢、身長をすべて選択してください');
                return;
            }
            this.filteredAttractions = this.attractions.filter(attraction => {
                return attraction.height <= this.selectedHeight && attraction.park == this.selectedPark;
            });
            if (this.canHold) {
                this.filteredAttractions = this.filteredAttractions.filter(attraction => {
                    return attraction.can_hold;
                });
            }
            if (this.canStroller) {
                this.filteredAttractions = this.filteredAttractions.filter(attraction => {
                    return attraction.can_stroller;
                });
            }
            if (this.selectedAttractionType !== 'all') {
                this.filteredAttractions = this.filteredAttractions.filter(attraction => {
                    return attraction.attraction_type === this.selectedAttractionType;
                });
            }
            this.showAlertAgeMessage = this.selectedAge < 7;
            this.showAlertNothingMessage = (this.filteredAttractions.length === 0);

            this.$nextTick(function() {
                this.scrollToResult();
            });
        },
        scrollToResult() {
            // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
            var adjust = 0;
            // スクロールの速度
            var speed = 550; // ミリ秒
            // 移動先を調整
            var position = $('#result').offset().top + adjust;
            // スムーススクロール
            $('body,html').animate({scrollTop:position}, speed, 'swing');
        }
    }
}).mount('#search');

// snow
particlesJS("particles-js1", { //HTMLのidを指定
    "particles": {
      //シェイプの設定
      "number": {
        "value": 5, //シェイプの数
        "density": {
          "enable": true, //シェイプの密集度の設定許可
          "value_area": 800 //シェイプの密集度
        }
      },
      "shape": {
        "type": "image", //circle、edge、triangle、polygon、star、image から選べる
        "image": {
          "src": "./image/mickey.png", //雪の画像を設定する ※相対パスでも可
        }
      },
      "opacity": {
        "value": 0.7, //透明度
        "random": false, //透明度ランダムの許可
        "anim": {
          "enable": false, //透明度のアニメーションさせるかどうか
          "speed": 1, //アニメーションのスピード
          "opacity_min": 0.1, //透明度の最小値
          "sync": false //シェイプを同時にアニメーションさせるかどうか
        }
      },
      "size": {
        "value": 12, //シェイプの大きさ
        "random": false, //大きさランダムの許可
        "anim": {
          "enable": false, //大きさアニメーションさせるかどうか
          "speed": 20, //スピード
          "size_min": 0.1, //スピードの最小値
          "sync": false //同時にアニメーションさせるかどうか
        }
      },
      // 線の設定
      "line_linked": {
        "enable": false, //線を表示するかどうか
      },
      // 動きの設定
      "move": {
        "enable": true, //シェイプの動かすかどうか
        "speed": 2, //スピード
        "direction": "bottom", //シェイプの動く方向(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-left から選べる)
        "random": true, // 動きはランダム
        "straight": false, // 動きをとどめない
        "out_mode": "out", //エリア外に出たシェイプの動き(out、bounce から選べる)
        "bounce": false, //跳ね返りなし
        "attract": {
          "enable": true,
          "rotateX": 300,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        //マウスオーバー時
        "onhover": {
          "enable": false, //マウスオーバーの許可
        },
        //クリック時
        "onclick": {
          "enable": false, //クッリクの許可
        },
        "resize": true
      }
    },
    "retina_detect": true
   });
particlesJS("particles-js2", { //HTMLのidを指定
"particles": {
    //シェイプの設定
    "number": {
    "value": 1, //シェイプの数
    "density": {
        "enable": true, //シェイプの密集度の設定許可
        "value_area": 800 //シェイプの密集度
    }
    },
    "shape": {
    "type": "image", //circle、edge、triangle、polygon、star、image から選べる
    "image": {
        "src": "./image/hand.png", //雪の画像を設定する ※相対パスでも可
    }
    },
    "opacity": {
    "value": 0.7, //透明度
    "random": false, //透明度ランダムの許可
    "anim": {
        "enable": false, //透明度のアニメーションさせるかどうか
        "speed": 1, //アニメーションのスピード
        "opacity_min": 0.1, //透明度の最小値
        "sync": false //シェイプを同時にアニメーションさせるかどうか
    }
    },
    "size": {
    "value": 12, //シェイプの大きさ
    "random": false, //大きさランダムの許可
    "anim": {
        "enable": false, //大きさアニメーションさせるかどうか
        "speed": 20, //スピード
        "size_min": 0.1, //スピードの最小値
        "sync": false //同時にアニメーションさせるかどうか
    }
    },
    // 線の設定
    "line_linked": {
    "enable": false, //線を表示するかどうか
    },
    // 動きの設定
    "move": {
    "enable": true, //シェイプの動かすかどうか
    "speed": 2, //スピード
    "direction": "bottom", //シェイプの動く方向(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-left から選べる)
    "random": true, // 動きはランダム
    "straight": false, // 動きをとどめない
    "out_mode": "out", //エリア外に出たシェイプの動き(out、bounce から選べる)
    "bounce": false, //跳ね返りなし
    "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
    }
    }
},
"interactivity": {
    "detect_on": "canvas",
    "events": {
    //マウスオーバー時
    "onhover": {
        "enable": false, //マウスオーバーの許可
    },
    //クリック時
    "onclick": {
        "enable": false, //クッリクの許可
    },
    "resize": true
    }
},
"retina_detect": true
});
