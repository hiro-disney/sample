// vue
Vue.createApp({
    data() {
        return {
            attractions: [
                { park: 1, name: "ウエスタンリバー鉄道", height: 81, can_alone: true, attraction_type: "ライド", url: "" },
                { park: 1, name: "ウエスタンランド・シューティングギャラリー", height: 91, can_alone: false, attraction_type: "体験型", url: "" },
                { park: 1, name: "ああああああああああああああああ", height: 101, can_alone: false, attraction_type: "体験型", url: "" },
                { park: 2, name: "ウエスタンリバー鉄道2", height: 81, can_alone: true, attraction_type: "ライド", url: "" },
                { park: 2, name: "ウエスタンランド・シューティングギャラリー2", height: 0, can_alone: false, attraction_type: "体験型", url: "" },
                { park: 2, name: "ああああああああああああああああ2", height: 111, can_alone: false, attraction_type: "体験型", url: "" },
            ],
            selectedHeight: '',
            selectedAge: '',
            selectedPark: null,
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
