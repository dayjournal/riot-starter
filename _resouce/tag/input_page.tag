<input_page>

    <div class="row">
        <div class="container">
            <div class="col s12 center">
                <p>
                    Riot Starter
                </p>
            </div>
            <div class="col s12 center">
                <button class="btn waves-effect waves-light light-blue darken-4" type="button" name="action" onclick={click}>
                    Go
                    <i class="material-icons left">
                        done
                    </i>
                </button>
            </div>
        </div>
    </div>

    <style scoped>

        p {
           font-size: 40px;
        }

    </style>

    <script>

        // ページ読み込み時処理
        this.on('mount', function() {

            // 関数読み込み
            var sample01 = opts.sample01;

            // 関数実行
            sample01();

        });

        // ボタンクリック時処理
        this.click = function() {

            // 出力ページへ移動
            location.href = location.href + "/#output";

        }.bind(this);

    </script>

</input_page>