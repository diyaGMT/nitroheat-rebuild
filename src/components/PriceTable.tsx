import { PRICE_DISCLAIMER, PRICE_LIST } from "@/lib/site";

export default function PriceTable() {
  return (
    <div>
      {/* Horizontal scroll keeps the table readable on narrow screens. */}
      <div className="overflow-x-auto rounded-lg border border-brand-line">
        <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-brand-dark text-white">
              <th className="px-4 py-3 font-heading text-base font-semibold tracking-wide">
                Model No.
              </th>
              <th className="px-4 py-3 font-heading text-base font-semibold tracking-wide">
                Description
              </th>
              <th className="px-4 py-3 text-right font-heading text-base font-semibold tracking-wide">
                MSRP (USD)
              </th>
            </tr>
          </thead>
          <tbody>
            {PRICE_LIST.map((row, index) => (
              <tr
                key={row.model}
                className={index % 2 ? "bg-brand-mist" : "bg-white"}
              >
                <td className="whitespace-nowrap px-4 py-3 font-semibold text-brand-dark">
                  {row.model}
                </td>
                <td className="px-4 py-3 text-brand-slate">{row.description}</td>
                <td className="whitespace-nowrap px-4 py-3 text-right font-semibold text-brand-dark">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-brand-slate">{PRICE_DISCLAIMER}</p>
    </div>
  );
}
