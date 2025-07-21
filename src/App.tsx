import Image from "./assets/aa.jpg";
import {
  FaTooth, FaPhone, FaCalendarAlt, FaCalendarCheck, FaPlayCircle,
  FaMicroscope, FaShieldAlt, FaHeartbeat, FaBacteria, FaChartLine, FaFileMedicalAlt,
  FaCheck, FaEnvelope, FaMapMarkerAlt
} from 'react-icons/fa';
import { IoPerson } from "react-icons/io5";

function App() {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="flex items-center">
            <FaTooth className="text-3xl text-blue-500 mr-3" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 whitespace-nowrap">歯科ドック総合検診</h1>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a href="tel:042-739-4682" className="flex items-center bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-600 transition duration-300 whitespace-nowrap text-sm">
              <FaPhone className="mx-1 my-1" />
              <span className="hidden sm:inline">042-739-4682</span>
            </a>
            <button className="flex items-center bg-emerald-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-emerald-600 transition duration-300 whitespace-nowrap text-sm">
              <FaCalendarAlt className="mx-1 my-1" />
              <span className="hidden sm:inline">WEB予約</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <img src={Image} alt="歯科ドック総合検診" className="h-full w-full object-cover opacity-40" />
        </div>
        <div className="relative h-full md:py-6 py-3 flex flex-col justify-end  items-center text-white text-center px-4 lg:px-16">
          <h1 className="text-4xl md:text-5xl font-bold md:mb-6 mb-3 leading-tight">
            歯科ドック総合検診で<br />
            <span className="text-amber-300">健康な歯を一生守る</span>
          </h1>
          <p className="text-lg md:text-xl md:mb-8 mb-4 max-w-2xl leading-relaxed opacity-90">
            歯周病や歯の疾患が多い50代の方へ<br />
            予防歯科の専門家が、あなたの口腔健康を総合的にサポートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="flex items-center justify-center bg-amber-400 text-gray-900 px-6 md:py-3 py-2 rounded-lg text-lg font-semibold hover:bg-amber-300 transition duration-300">
              <FaCalendarCheck className="mr-2" />
              WEB予約
            </button>
            <button className="flex items-center justify-center border-2 border-white text-white  px-6 md:py-3 py-2 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300">
              <FaPlayCircle className="mr-2" />
              検診内容を見る
            </button>
          </div>
        </div>
      </section>

      {/* お悩みセクション */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-700">
            こんなお悩みありませんか？
          </h2>
          <div className="space-y-6">
            {[
              { title: "痛くなってから治療", desc: "いつも歯が痛くなってから歯科に通い、治療費も時間もかかってしまう" },
              { title: "口臭が気になる", desc: "人との会話で口臭が気になり、自信を持って話せない" },
              { title: "歯茎の健康が心配", desc: "歯茎から血が出たり、腫れたりして歯周病が進行していないか不安" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-400">
                <div className="flex items-start">
                  <div className="text-2xl mr-4 text-blue-500">✓</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-700">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">歯科ドック総合検診の6つの特徴</h2>
            <p className="text-lg text-gray-600">包括的な検査で口腔の健康状態を詳細に把握</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaMicroscope, title: "最新検査機器による精密診断", desc: "デジタルレントゲン、口腔内カメラ、歯周病検査機器など最新技術を駆使し、従来の検査では発見困難な初期段階の疾患も早期発見できます。" },
              { icon: FaShieldAlt, title: "包括的な口腔がんスクリーニング", desc: "口腔がんの早期発見に特化した特殊検査を実施。視診・触診に加え、蛍光観察装置を使用した精密なスクリーニングを行います。" },
              { icon: FaHeartbeat, title: "歯周病リスク詳細評価", desc: "歯周ポケット測定、出血指数、動揺度検査など多角的な評価により、歯周病の進行度とリスクを正確に把握し、個別の予防プランを提案します。" },
              { icon: FaBacteria, title: "口腔内細菌検査", desc: "唾液検査により虫歯菌・歯周病菌の数と活性度を測定。個人の口腔内環境に応じたオーダーメイドの予防プログラムを作成します。" },
              { icon: FaChartLine, title: "咬合・顎関節機能検査", desc: "噛み合わせの状態や顎関節の動きを詳細に分析。TMJ（顎関節症）のリスク評価と機能改善のアドバイスを提供します。" },
              { icon: FaFileMedicalAlt, title: "詳細レポート作成", desc: "検査結果を分かりやすくまとめた詳細レポートを作成。今後の予防プランと治療が必要な項目を明確に提示します。" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="text-2xl text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 担当Dr.からの一言 */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">担当Dr.からの一言</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"></div>
            </div>
            <div className="text-gray-600 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                人生のいろいろな分岐点で様々な決断をされご環境に合わせた生活を送っておられると思います。それに合わせてそろそろお口や体のメンテナンスが必要だったり、予防や健康に意識を向けられている方も多いのではないでしょうか？
              </p>
              <p>
                お口の環境は実は相当過酷です。温度差のあるものを噛んだり、時には体重くらいのかむ力を支えたり、酸性の食品やアルカリ性の食品を食べたりしており、特にお口の中の歯周病や虫歯の原因菌が多くなることで糖尿病リスクや心内膜炎リスクをあげると言われています。
              </p>
              <p>
                当院は唾液、歯、歯肉、噛み合わせの大きく分けて４つのカテゴリーの様々な検査を行い、多角的にお口の健康状態と、プロブレムリストの抽出を行っております。また、資料を作成し、結果説明についても詳しくわかりやすい形で行っております。
              </p>
              <p>
                当院として、大切なことはお口の中の状況を患者様ご自身が把握することと考えておりますので、リスクの高いところに対して早期治療や予防アプローチを行うことができますし、エビデンスを確認しながら適切にホームケア商品の選択ができるようになることもメリットと捉えていただいています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ対象者 */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">こんな方におすすめ！</h2>
            <p className="text-lg text-gray-600">一つでも当てはまる方は、歯科ドック検診をご検討ください</p>
          </div>

          <div className="space-y-4">
            {[
              "いろいろなところで治療してきた方",
              "自分の口の中のことって知らないなー",
              "最近虫歯かもと思う",
              "口臭って自分ではわからないものですね。周りにどう思われているか気になる",
              "歯ぐきがやせてきた",
              "歯ブラシしていて血が出る",
              "噛み合わせが気になる",
              "歯の色が気になる",
              "歯がしみる",
              "歯ブラシしているのに虫歯ができる"
            ].map((text, index) => (
              <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`} key={index}>
                {index % 2 !== 0 && <IoPerson className="text-2xl text-blue-300 mr-3 flex-shrink-0" />}
                <div className="relative flex">
                  <div className={`p-4 rounded-lg max-w-sm text-sm ${index % 2 === 0 ? 'bg-blue-50 text-gray-700' : 'bg-emerald-50 text-gray-700'}`}>
                    {text}
                  </div>
                  <div className={`absolute top-5 w-0 h-0 ${index % 2 === 0
                    ? '-right-2 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-blue-50'
                    : '-left-2 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-emerald-50'
                    }`}></div>
                </div>
                {index % 2 === 0 && <IoPerson className="text-2xl text-blue-300 ml-3 flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 検査項目 */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">歯科ドック検査項目</h2>
            <p className="text-lg text-gray-600">約90分の包括的検査内容</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-blue-600">基本検査項目</h3>
              <div className="space-y-4">
                {[
                  { title: "口腔内診査", desc: "視診・触診による口腔内全体の詳細チェック" },
                  { title: "デジタルレントゲン撮影", desc: "パノラマ・デンタルX線による骨・歯根の検査" },
                  { title: "歯周組織検査", desc: "歯周ポケット測定・出血指数・動揺度測定" },
                  { title: "口腔内写真撮影", desc: "高解像度口腔内カメラによる詳細記録" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheck className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-700 text-sm">{item.title}</h4>
                      <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-emerald-600">特殊検査項目</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheck className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-700 text-sm">唾液検査</h4>
                    <p className="text-gray-600 text-xs mt-1">歯の健康、歯ぐきの健康、口腔清潔度に分けて虫歯菌、唾液酸性度、唾液緩衝能、白血球数、たんぱく質量、アンモニア量の６項目を分類して検査しています</p>
                  </div>
                </div>
                {[
                  { title: "咬合分析", desc: "口腔内スキャン" },
                  { title: "CTレントゲン", desc: "顎の骨や歯の根の状態を三次元的に確認するとともに、顎関節、親知らず、副鼻腔の状態を確認し、異常な部位がないかなどを精密に確認しています。" },
                  { title: "咬合検査", desc: "かむ力を総合的に分析し、噛み合わせについて確認を行なっています。" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheck className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-700 text-sm">{item.title}</h4>
                      <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">従来の歯科検診との比較</h2>
            <p className="text-lg text-gray-600">歯科ドックの包括的アプローチの優位性</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white">
                    <th className="px-4 py-3 text-left font-semibold text-sm">検査項目</th>
                    <th className="px-4 py-3 text-center font-semibold text-sm">従来の定期検診</th>
                    <th className="px-4 py-3 text-center font-semibold text-sm">歯科ドック総合検診</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  {[
                    { item: "検査時間", conventional: "約15-30分", dental: "約90分" },
                    { item: "レントゲン撮影", conventional: "パノラマのみ", dental: "パノラマ + デンタル" },
                    { item: "歯周病検査", conventional: "基本的な測定", dental: "詳細な多項目検査" },
                    { item: "唾液検査", conventional: "×", dental: "○（細菌数・活性度測定）" },
                    { item: "咬合・顎関節検査", conventional: "×", dental: "○（詳細分析）" },
                    { item: "検査結果レポート", conventional: "口頭説明のみ", dental: "詳細書面レポート" },
                    { item: "予防プラン作成", conventional: "一般的なアドバイス", dental: "オーダーメイドプラン" }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3 font-semibold text-gray-700">{row.item}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.conventional}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                          {row.dental}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">歯科ドック検診料金</h2>
            <p className="text-lg text-gray-600">明確で分かりやすい料金体系</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "スタンダード", price: "¥15,000", tax: "(税込16,500円)", features: ["基本検査"], color: "blue", popular: false },
              { name: "プレミアム", price: "¥25,000", tax: "(税込27,500円)", features: ["基本検査", "特殊検査"], color: "emerald", popular: true },
              { name: "コンプリート", price: "¥35,000", tax: "(税込38,500円)", features: ["基本検査", "特殊検査", "パウダークリーニング"], color: "purple", popular: false }
            ].map((plan, index) => (
              <div key={index} className={`bg-white p-6 rounded-xl shadow-lg border relative ${plan.popular ? 'border-emerald-400 border-2' : 'border-gray-100'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-400 text-white px-3 py-1 rounded-full text-xs font-semibold">人気No.1</span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className={`text-xl font-semibold mb-4 ${plan.color === 'blue' ? 'text-blue-600' : plan.color === 'emerald' ? 'text-emerald-600' : 'text-purple-600'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-700">{plan.price}</span>
                    <div className="text-gray-500 text-sm">{plan.tax}</div>
                  </div>
                  <ul className="space-y-2 text-left mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <FaCheck className={`mr-2 ${plan.color === 'blue' ? 'text-blue-500' : plan.color === 'emerald' ? 'text-emerald-500' : 'text-purple-500'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full text-white py-3 rounded-lg transition duration-300 text-sm font-semibold ${plan.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                    plan.color === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-600' :
                      'bg-purple-500 hover:bg-purple-600'
                    }`}>
                    このプランを選択
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p className="mb-2">※初回相談は無料です</p>
            <p>※デンタルローンによる分割払いも可能です（月々3,300円〜）</p>
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
    </div>);
}

export default App;