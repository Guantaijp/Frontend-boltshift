import "../../App.css";
import heart from "../../assets/Red heart.svg";
import ProductFeatured from "./ProductFeatured";
import Onsale from "./Onsale";
import TopRated from "./TopRated";
import * as Tabs from '@radix-ui/react-tabs';

const tabData = [
  {
    label: 'Featured Products',
    value: 'tab1',
    color: '#66004B',
    component: ProductFeatured,
  },
  {
    label: 'Top Rated Products',
    value: 'tab2',
    color: '#66004B',
    component : TopRated,
  },
  {
    label: 'OnSale Products',
    value: 'tab3',
    color: '#66004B',
    component: Onsale,
  },
];
const onChange = (key: unknown) => {
  console.log(key);
};

function Popular() {
  return (
      <div className="px-8 py-6">
        <div className="flex ">
          <img src={heart} alt="heart" className="w-8 h-8 mr-1 mb-2" />
          <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">
            Popular Products
          </p>
        </div>
        <Tabs.Root defaultValue="tab1" onChange={onChange}>
          <Tabs.List className="flex border-b border-mauve6 ">
            {tabData.map((tab) => (
                <Tabs.Trigger
                    key={tab.value}
                    className="w-fit-content mr-4 h-[45px] inline-block items-start justify-start text-[15px] leading-none select-none data-[state=active] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative cursor-default data-[state=inactive]:text-[#667085] data-[state=active]:text-[#4D0039] font-medium text-left"
                    value={tab.value}
                >
                    {tab.label}
                </Tabs.Trigger>
            ))}
          </Tabs.List>
          {tabData.map((tab) => (
              <Tabs.Content
                  className="bg-white"
                  value={tab.value}
              >
                <tab.component />
              </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
  );
}

export default Popular;
