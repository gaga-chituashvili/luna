import Slider from "rc-slider";
import "rc-slider/assets/index.css";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  price: [number, number];
  setPrice: (value: [number, number]) => void;
  tag: string;
  setTag: (value: string) => void;
  results: number;
};

export const FilterPanel = ({
  search,
  setSearch,
  price,
  setPrice,
  tag,
  setTag,
  results,
}: Props) => {
  return (
    <div className="max-w-7xl mx-auto mb-10 text-white">
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-400">Results: {results}</p>

        <button
          className="text-gray-400 hover:text-white"
          onClick={() => {
            setSearch("");
            setTag("all");
            setPrice([0, 20]);
          }}
        >
          Clear all
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <input
          type="text"
          placeholder="Search coffee..."
          className="bg-neutral-800 px-4 py-2 rounded-xl text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-3">
          {["all", "hot", "cold"].map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`px-4 py-2 rounded-full ${
                tag === t ? "bg-[#825444]" : "bg-neutral-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="w-60">
          <Slider
            range
            min={0}
            max={20}
            value={price}
            onChange={(value) => setPrice(value as [number, number])}
          />

          <div className="flex justify-between mt-2 text-sm text-gray-400">
            <span>GEL {price[0]}</span>
            <span>GEL {price[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
