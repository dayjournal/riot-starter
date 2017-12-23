<output_page>

    <div class="row">
        <div class="container">
            <div class="col s12 center">
                <p>
                    Output
                </p>
            </div>
            <div class="col s12 center">
                <i class="large material-icons">
                    hot_tub
                </i>
            </div>
        </div>
    </div>

    <style scoped>

        p {
            font-size: 60px;
        }

    </style>

    <script>

        // ページ読み込み時処理
        this.on('mount', function() {

            // 関数読み込み
            var sample02 = opts.sample02;

            // 関数実行
            sample02();
        });

    </script>

</output_page>