// src/App.js または src/App.tsx
// 必要なFont Awesomeアイコンをすべてインポートする
import {
  FaTooth, FaPhone, FaCalendarAlt, FaCalendarCheck, FaPlayCircle,
  FaMicroscope, FaShieldAlt, FaHeartbeat, FaBacteria, FaChartLine, FaFileMedicalAlt,
  FaCheck, FaEnvelope, FaMapMarkerAlt
} from 'react-icons/fa'; // すべて 'fa' からインポート

function App() {
  return (
    <>
      <body className="bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4"> {/* `items-center` を追加し、直接flexboxを適用 */}
            <div className="flex items-center ">
              <FaTooth className="text-3xl text-blue-600 mr-3" />
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 whitespace-nowrap">歯科ドック総合検診</h1> {/* `whitespace-nowrap` とフォントサイズ調整 */}
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4"> {/* `space-x` を調整 */}
              <a href="tel:042-739-4682" className="flex items-center bg-blue-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap"> {/* パディングと `whitespace-nowrap` を調整 */}
                <FaPhone className="mx-2 my-1" />
                <span className="hidden sm:inline">042-739-4682</span> {/* `sm` で表示、通常は非表示 */}
              </a>
              <button className="flex items-center bg-blue-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap"> {/* パディングと `whitespace-nowrap` を調整 */}
                <FaCalendarAlt className="mx-2 my-1" />
                <span className="hidden sm:inline">WEB予約</span> {/* `sm` で表示、通常は非表示 */}
              </button>
            </div>
          </div>
        </header>
        <section className="gradient-bg text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">
                歯科ドック総合検診で<br />
                <span className="text-yellow-300">健康な歯を一生守る</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                最新の検査機器を使用した包括的な口腔健康診断で、虫歯・歯周病の早期発見から口腔がんスクリーニングまで。
                予防歯科の専門家が、あなたの口腔健康を総合的にサポートします。
              </p>
              <div className="flex justify-center space-x-6">
                <button className="flex items-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition duration-300">
                  <FaCalendarCheck className="mr-2" />
                  WEB予約
                </button>
                <button className=" flex items-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300">
                  <FaPlayCircle className="mr-2" />検診内容を見る
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">歯科ドック総合検診の6つの特徴</h2>
              <p className="text-xl text-gray-600">包括的な検査で口腔の健康状態を詳細に把握</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="feature-card bg-white p-8 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaMicroscope className="text-3xl text-blue-600" /> {/* <i /> から FaMicroscope に変更 */}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">最新検査機器による精密診断</h3>
                  <p className="text-gray-600">
                    デジタルレントゲン、口腔内カメラ、歯周病検査機器など最新技術を駆使し、
                    従来の検査では発見困難な初期段階の疾患も早期発見できます。
                  </p>
                </div>
              </div>

              <div className="feature-card bg-white p-8 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"> {/* bg-green-100をbg-blue-100に変更 */}
                    <FaShieldAlt className="text-3xl text-blue-600" /> {/* text-green-600をtext-blue-600に変更 */}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">包括的な口腔がんスクリーニング</h3>
                  <p className="text-gray-600">
                    口腔がんの早期発見に特化した特殊検査を実施。
                    視診・触診に加え、蛍光観察装置を使用した精密なスクリーニングを行います。
                  </p>
                </div>
              </div>

              {/* 他の feature-card も同様にアイコンと背景・テキストカラーを青系に修正します */}
              {/* 例えば、purple, red, yellow, indigo の部分を blue に変更していきます */}
              <div className="feature-card bg-white p-8 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"> {/* bg-purple-100をbg-blue-100に変更 */}
                    <FaHeartbeat className="text-3xl text-blue-600" /> {/* text-purple-600をtext-blue-600に変更 */}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">歯周病リスク詳細評価</h3>
                  <p className="text-gray-600">
                    歯周ポケット測定、出血指数、動揺度検査など多角的な評価により、
                    歯周病の進行度とリスクを正確に把握し、個別の予防プランを提案します。
                  </p>
                </div>
              </div>
              <div className="feature-card bg-white p-8 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"> {/* bg-red-100をbg-blue-100に変更 */}
                    <FaBacteria className="text-3xl text-blue-600" /> {/* text-red-600をtext-blue-600に変更 */}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">口腔内細菌検査</h3>
                  <p className="text-gray-600">
                    唾液検査により虫歯菌・歯周病菌の数と活性度を測定。
                    個人の口腔内環境に応じたオーダーメイドの予防プログラムを作成します。
                  </p>
                </div>
              </div>
              <div className="feature-card bg-white p-8 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"> {/* bg-yellow-100をbg-blue-100に変更 */}
                    <FaChartLine className="text-3xl text-blue-600" /> {/* text-yellow-600をtext-blue-600に変更 */}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">咬合・顎関節機能検査</h3>
                  <p className="text-gray-600">
                    噛み合わせの状態や顎関節の動きを詳細に分析。
                    TMJ（顎関節症）のリスク評価と機能改善のアドバイスを提供します。
                  </p>
                </div>
              </div>
              <div className="feature-card bg-white p-8 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"> {/* bg-indigo-100をbg-blue-100に変更 */}
                    <FaFileMedicalAlt className="text-3xl text-blue-600" /> {/* text-indigo-600をtext-blue-600に変更 */}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">詳細レポート作成</h3>
                  <p className="text-gray-600">
                    検査結果を分かりやすくまとめた詳細レポートを作成。
                    今後の予防プランと治療が必要な項目を明確に提示します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">歯科ドック検査項目</h2>
              <p className="text-xl text-gray-600">約90分の包括的検査内容</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">基本検査項目</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaCheck className="text-blue-500 mt-1 mr-3" /> {/* text-green-500をtext-blue-500に変更 */}
                    <div>
                      <h4 className="font-semibold">口腔内診査</h4>
                      <p className="text-gray-600 text-sm">視診・触診による口腔内全体の詳細チェック</p>
                    </div>
                  </div>
                  {/* 他の FaCheck アイコンも同様に色を青系に統一 */}
                  <div className="flex items-start">
                    <FaCheck className="text-blue-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">デジタルレントゲン撮影</h4>
                      <p className="text-gray-600 text-sm">パノラマ・デンタルX線による骨・歯根の検査</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-blue-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">歯周組織検査</h4>
                      <p className="text-gray-600 text-sm">歯周ポケット測定・出血指数・動揺度測定</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-blue-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">口腔内写真撮影</h4>
                      <p className="text-gray-600 text-sm">高解像度口腔内カメラによる詳細記録</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">特殊検査項目</h3> {/* text-purple-600をtext-blue-600に変更 */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaCheck className="text-blue-500 mt-1 mr-3" /> {/* text-green-500をtext-blue-500に変更 */}
                    <div>
                      <h4 className="font-semibold">唾液検査</h4>
                      <p className="text-gray-600 text-sm">虫歯菌・歯周病菌の活性度測定</p>
                    </div>
                  </div>
                  {/* 他の FaCheck アイコンも同様に色を青系に統一 */}
                  <div className="flex items-start">
                    <FaCheck className="text-blue-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">口腔がんスクリーニング</h4>
                      <p className="text-gray-600 text-sm">蛍光観察装置による早期発見検査</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-blue-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">咬合分析</h4>
                      <p className="text-gray-600 text-sm">噛み合わせの詳細分析・バランス評価</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-blue-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">顎関節機能検査</h4>
                      <p className="text-gray-600 text-sm">顎の動きと関節の状態評価</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">従来の歯科検診との比較</h2>
              <p className="text-xl text-gray-600">歯科ドックの包括的アプローチの優位性</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="comparison-table">
                    <th className="px-6 py-4 text-left text-white font-semibold">検査項目</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">従来の定期検診</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">歯科ドック総合検診</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">検査時間</td>
                    <td className="px-6 py-4 text-center">約15-30分</td>
                    <td className="px-6 py-4 text-center bg-green-50"><span className="font-semibold text-green-600">約90分</span></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">レントゲン撮影</td>
                    <td className="px-6 py-4 text-center">パノラマのみ</td>
                    <td className="px-6 py-4 text-center bg-green-50"><span className="font-semibold text-green-600">パノラマ + デンタル</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">歯周病検査</td>
                    <td className="px-6 py-4 text-center">基本的な測定</td>
                    <td className="px-6 py-4 text-center bg-green-50"><span className="font-semibold text-green-600">詳細な多項目検査</span></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">口腔がん検査</td>
                    <td className="px-6 py-4 text-center">×</td>
                    <td className="px-6 py-4 text-center bg-green-50"><span className="font-semibold text-green-600">○（蛍光観察装置使用）</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">唾液検査</td>
                    <td className="px-6 py-4 text-center">×</td>
                    <td className="px-6 py-4 text-center bg-green-50"><span className="font-semibold text-green-600">○（細菌数・活性度測定）</span></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">咬合・顎関節検査</td>
                    <td className="px-6 py-4 text-center">×</td>
                    <td className="px-6 py-4 text-center bg-green-50"><span className="font-semibold text-green-600">○（詳細分析）</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">検査結果レポート</td>
                    <td className="px-6 py-4 text-center">口頭説明のみ</td>
                    <td className="px-6 py-4 text-center bg-green-50"><span className="font-semibold text-green-600">詳細書面レポート</span></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">予防プラン作成</td>
                    <td className="px-6 py-4 text-center">一般的なアドバイス</td>
                    <td className="px-6 py-4 text-center bg-green-50"><span className="font-semibold text-green-600">オーダーメイドプラン</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* ... 料金セクションの修正 ... */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">歯科ドック検診料金</h2>
              <p className="text-xl text-gray-600">明確で分かりやすい料金体系</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">スタンダード</h3> {/* 青系 */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">¥15,000</span>
                    <span className="text-gray-600">(税込16,500円)</span>
                  </div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center">
                      <FaCheck className="text-blue-500 mr-2" /> {/* 青系 */}
                      基本的な口腔内診査
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-blue-500 mr-2" /> {/* 青系 */}
                      パノラマレントゲン撮影
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-blue-500 mr-2" /> {/* 青系 */}
                      歯周組織検査
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-blue-500 mr-2" /> {/* 青系 */}
                      基本レポート作成
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                    このプランを選択
                  </button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-blue-500 relative"> {/* border-green-500をborder-blue-500に変更 */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">人気No.1</span> {/* bg-green-500をbg-blue-500に変更 */}
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">プレミアム</h3> {/* text-green-600をtext-blue-600に変更 */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">¥25,000</span>
                    <span className="text-gray-600">(税込27,500円)</span>
                  </div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center">
                      <FaCheck className="text-blue-500 mr-2" /> {/* 青系 */}
                      スタンダードの全項目
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-blue-500 mr-2" /> {/* 青系 */}
                      唾液検査（細菌数測定）
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-blue-500 mr-2" /> {/* 青系 */}
                      口腔がんスクリーニング
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-blue-500 mr-2" /> {/* 青系 */}
                      詳細レポート + 予防プラン
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"> {/* price-highlightクラスの代わりにbg-blue-600を使用、またはprice-highlightを青系に定義 */}
                    このプランを選択
                  </button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">コンプリート</h3> {/* text-purple-600をtext-blue-600に変更 */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">¥35,000</span>
                    <span className="text-gray-600">(税込38,500円)</span>
                  </div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center">
                      <FaCheck className="text-blue-500 mr-2" /> {/* 青系 */}
                      プレミアムの全項目
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-blue-500 mr-2" /> {/* 青系 */}
                      咬合・顎関節機能検査
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-blue-500 mr-2" /> {/* 青系 */}
                      デンタルレントゲン追加
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-blue-500 mr-2" /> {/* 青系 */}
                      6ヶ月フォローアップ付
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"> {/* bg-purple-600をbg-blue-600に変更 */}
                    このプランを選択
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">※初回相談は無料です</p>
              <p className="text-gray-600">※デンタルローンによる分割払いも可能です（月々3,300円〜）</p>
            </div>
          </div>
        </section>

        {/* ... 検診の流れセクションの修正 ... */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">歯科ドック検診の流れ</h2>
              <p className="text-xl text-gray-600">安心して受けていただける検診プロセス</p>
            </div>

            <div className="space-y-12">
              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">01</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">初回カウンセリング（無料）</h3>
                  <p className="text-gray-600 mb-4">
                    お口の気になることやお悩みをお聞きし、歯科ドック検診の内容を詳しくご説明いたします。
                    ご質問やご不安な点があれば、何でもお気軽にお聞きください。
                  </p>
                  <div className="text-sm text-blue-600">所要時間：約30分</div>
                </div>
              </div>

              <div className="section-divider"></div>

              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"> {/* bg-green-100をbg-blue-100に変更 */}
                    <span className="text-2xl font-bold text-blue-600">02</span> {/* text-green-600をtext-blue-600に変更 */}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">詳細検査の実施</h3>
                  <p className="text-gray-600 mb-4">
                    選択されたプランに応じて、最新の検査機器を使用した包括的な口腔検査を行います。
                    痛みのない検査ですので、リラックスして受けていただけます。
                  </p>
                  <div className="text-sm text-blue-600">所要時間：約60-90分</div>
                </div>
              </div>

              <div className="section-divider"></div>

              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"> {/* bg-purple-100をbg-blue-100に変更 */}
                    <span className="text-2xl font-bold text-blue-600">03</span> {/* text-purple-600をtext-blue-600に変更 */}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">結果説明・レポート作成</h3>
                  <p className="text-gray-600 mb-4">
                    検査結果を分かりやすくまとめたレポートをお渡しし、現在の口腔健康状態を詳しくご説明いたします。
                    必要に応じて治療計画もご提案いたします。
                  </p>
                  <div className="text-sm text-blue-600">所要時間：約30分</div>
                </div>
              </div>

              <div className="section-divider"></div>

              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"> {/* bg-yellow-100をbg-blue-100に変更 */}
                    <span className="text-2xl font-bold text-blue-600">04</span> {/* text-yellow-600をtext-blue-600に変更 */}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">個別予防プラン作成</h3>
                  <p className="text-gray-600 mb-4">
                    検査結果に基づいて、あなただけの予防プログラムを作成いたします。
                    日常のケア方法から定期検診の間隔まで、総合的にサポートいたします。
                  </p>
                  <div className="text-sm text-blue-600">継続的なフォロー体制</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ... 予約・お問い合わせセクションの修正 ... */}
        <section className="py-20 gradient-bg text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-8">歯科ドック総合検診のご予約・お問い合わせ</h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto">
                健康な歯を一生守るために、今から始める予防歯科。
                まずは無料相談で、あなたの口腔健康状態をチェックしませんか？
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
                  <div className="text-center">
                    <FaPhone className="text-4xl mb-4" /> {/* <i /> から FaPhone に変更 */}
                    <h3 className="text-2xl font-semibold mb-4">お電話でのご予約</h3>
                    <p className="mb-6">平日 9:00-13:00 / 14:30-20:00</p>
                    <a href="tel:042-739-4682" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition duration-300 inline-block"> {/* bg-green-600をbg-blue-600に変更 */}
                      042-739-4682
                    </a>
                  </div>
                </div>

                <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
                  <div className="text-center">
                    <FaCalendarAlt className="text-4xl mb-4" /> {/* <i /> から FaCalendarAlt に変更 */}
                    <h3 className="text-2xl font-semibold mb-4">WEB予約</h3>
                    <p className="mb-6">24時間いつでもご予約可能</p>
                    <button className="bg-blue-400 hover:bg-blue-300 text-white px-8 py-4 rounded-lg text-xl font-semibold transition duration-300"> {/* bg-yellow-400をbg-blue-400, text-gray-900をtext-whiteに変更 */}
                      WEB予約はこちら
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold mb-6">よくあるご質問</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold mb-2">Q: 検査は痛くありませんか？</h4>
                    <p className="text-sm opacity-90">A: 全て無痛の検査です。安心してお受けください。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Q: 保険は適用されますか？</h4>
                    <p className="text-sm opacity-90">A: 自費診療となりますが、詳細な検査を行います。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Q: どのくらいの頻度で受けるべきですか？</h4>
                    <p className="text-sm opacity-90">A: 年1-2回の受診をおすすめしています。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Q: 結果はすぐにわかりますか？</h4>
                    <p className="text-sm opacity-90">A: 検査当日に結果をご説明いたします。</p>
                  </div>
                </div>
              </div>            </div>
          </div>
        </section>

        {/* ... フッターの修正 ... */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <FaTooth className="text-2xl text-blue-400 mr-3" /> {/* <i /> から FaTooth に変更 */}
                  <h3 className="text-xl font-semibold">歯科ドック総合検診</h3>
                </div>
                <p className="text-gray-400">
                  最新の検査機器を使用した包括的な口腔健康診断で、
                  あなたの大切な歯を一生涯守ります。
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">診療時間</h4>
                <div className="space-y-2 text-gray-400">
                  <p>平日：9:00-13:00 / 14:30-20:00</p>
                  <p>土曜：9:00-13:00 / 14:30-18:00</p>
                  <p>休診：日曜・祝日</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
                <div className="space-y-2 text-gray-400">
                  <p><FaPhone className="mr-2" />042-739-4682</p> {/* <i /> から FaPhone に変更 */}
                  <p><FaEnvelope className="mr-2" />info@dental-dock.com</p> {/* <i /> から FaEnvelope に変更 */}
                  <p><FaMapMarkerAlt className="mr-2" />キースブライトクリニック</p> {/* <i /> から FaMapMarkerAlt に変更 */}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 歯科ドック総合検診. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}

export default App;