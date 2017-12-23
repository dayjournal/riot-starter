// JS一式を読み込んでパッケージ
import {sample01} from './js/sample01.js';
import {sample02} from './js/sample02.js';

// CSS一式を読み込んでパッケージ
import 'ress/ress.css';
import 'materialize-css/dist/css/materialize.css';
import './css/icon.css';
import './css/style.css';

// materialize(JS)を読み込んでパッケージ
import 'materialize-css';

// riot-route読み込み(v3からRiot.jsに既存では入っていない)
import route from 'riot-route';

// 入力画面を読み込んでパッケージ
import './tag/input_page.tag';
// ルートページに割り当て
route('/', function() {
    riot.mount('app','input_page', {
        type: 'input',
        sample01: sample01
    });
});

// 結果画面を読み込んでパッケージ
import './tag/output_page.tag';
// #outputに割り当て
route('/output', function(){
    riot.mount('app', 'output_page', {
        type: 'output',
        sample02: sample02
    });
});

// ルータースタート
route.start(true);