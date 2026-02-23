export default function CompanyDetails() {
  const details = [
    { label: "会社名", value: "アイビス不動産株式会社" },
    { label: "設立", value: "2010年4月1日" },
    { label: "資本金", value: "5,000万円" },
    { label: "代表取締役", value: "山田 太郎" },
    { label: "所在地", value: "〒100-0005 東京都千代田区丸の内1-1-1 アイビスビル 15F" },
    { label: "事業内容", value: "不動産売買仲介業、不動産賃貸仲介業、プロパティマネジメント業" },
    { label: "免許番号", value: "国土交通大臣 (1) 第12345号" },
  ];

  return (
    <div className="max-w-4xl mx-auto mb-20">
      <h2 className="text-2xl font-bold text-[#1F2937] mb-8 border-b-4 border-[#1D4ED8] pb-4 inline-block">
        会社情報
      </h2>
      <div className="bg-[#FFFFFF] rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <tbody>
            {details.map((item, index) => (
              <tr key={index} className="border-b border-gray-100 last:border-0">
                <th className="py-6 px-8 bg-gray-50 w-1/3 text-[#1F2937] font-semibold">
                  {item.label}
                </th>
                <td className="py-6 px-8 text-gray-700">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
