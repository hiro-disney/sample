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

