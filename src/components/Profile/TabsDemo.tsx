import * as Tabs from '@radix-ui/react-tabs';
import OrderTable from './OrderTable';
import { DataTable } from './tables/DataTable.tsx'

type TabData = {
  label: string;
  value: string;
  color: string;
  count: {
    number: number;
    colorbg: string;
  } | undefined;
}[];



const tabData:TabData = [
  {
    label: 'All',
    value: 'tab1',
    color: '#1570EF',
    count: {
      number: 100,
      colorbg: '#D1E9FF'
    }

  },
  {
    label: 'Ongoing',
    value: 'tab2',
    color: '#66004B',
    count: {
      number: 10,
      colorbg: '#FFE0F7'

    },
  },
  {
    label: 'Completed',
    value: 'tab4',
    color: '#099250',
    count: {
      number: 130,
      colorbg: '#D3F8DF'
    }
  },
  {
    label: 'Pending',
    value: 'tab3',
    color: '#E04F16',
    count: {
      number: 39,
      colorbg: '#FDEAD7'
    }

  },
  {
    label: 'Cancelled',
    value: 'tab6',
    color: '#D92D20',
    count: {
      number: 13,
      colorbg: '#FEE4E2'
    }

  },
  {
    label: 'Returns & Refunds ',
    value: 'tab5',
    color: '#475467',
    count: {
      number: 13,
      colorbg: '#F2F4F7'
    }
  },


];


const TabsDemo = () => {
  //
  // const [tasks, setTasks] = useState<any[]>([]); // Replace 'any' with a proper type
  // const [, setIsLoading] = useState(true);
  //
  // useEffect(() => {
  //   async function getTasks() {
  //     try {
  //       let process = require('process');
  //       const response = await fetch(path.join(process.env.PUBLIC_URL, '/data/tasks.json'));
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const json = await response.json();
  //       // Assuming the JSON data is an array of tasks
  //       const validatedTasks: TaskType[] = json.map((task: any) => taskSchema.parse(task));
  //       setTasks(validatedTasks);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching tasks:', error);
  //       setIsLoading(false);
  //     }
  //   }
  //
  //   getTasks();
  // }, []);


  return (


      <div className="flex flex-col  items-start rounded-xl border border-[#eaecf0]">
        <Tabs.Root
            className="flex flex-col  w-full "
            defaultValue="tab1"
        >

          <Tabs.List className='flex px-8 bg-[#f9fafb] rounded-t-xl'>
            {tabData.map((tab, index) => (
                <Tabs.Trigger
                    key={index}
                    className="w-fit-content mr-5 h-[45px] inline-block items-center  justify-center text-[15px] leading-none select-none data-[state=active] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative cursor-default"
                    value={tab.value}
                    style={{ color: tab.color }}
                >
                  <div className="flex items-center justify-center">
                    {tab.count && (
                        <span
                            style={{ backgroundColor: tab.count.colorbg }}
                            className="inline-flex items-center px-1 mx-1 rounded-md justify-center bg-white text-[13px] leading-none font-medium h-[20px] text-mauve11"
                        >
                  {tab.count.number}
                </span>
                    )}
                    {tab.label}
                  </div>
                </Tabs.Trigger>

            ))}
          </Tabs.List>
          <>
            <OrderTable />
          </>


          <Tabs.Content
              className="grow  bg-white rounded-b-xl outline-none "
              value="tab1"
          >
            <DataTable />

          </Tabs.Content>
          <Tabs.Content
              className="grow  bg-white rounded-b-md outline-none  "
              value="tab2"
          >
            <p className="mb-5 text-mauve11 text-[15px] leading-normal">
              Change your password here. After saving, you'll be logged out.
            </p>
            <fieldset className="mb-[15px] w-full flex flex-col justify-start">
              <label
                  className="text-[13px] leading-none mb-2.5 text-violet12 block"
                  htmlFor="currentPassword"
              >
                Current password
              </label>
              <input
                  className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  id="currentPassword"
                  type="password"
              />
            </fieldset>
            <fieldset className="mb-[15px] w-full flex flex-col justify-start">
              <label
                  className="text-[13px] leading-none mb-2.5 text-violet12 block"
                  htmlFor="newPassword"
              >
                New password
              </label>
              <input
                  className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  id="newPassword"
                  type="password"
              />
            </fieldset>
            <fieldset className="mb-[15px] w-full flex flex-col justify-start">
              <label
                  className="text-[13px] leading-none mb-2.5 text-violet12 block"
                  htmlFor="confirmPassword"
              >
                Confirm password
              </label>
              <input
                  className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  id="confirmPassword"
                  type="password"
              />
            </fieldset>
            <div className="flex justify-end mt-5">
              <button
                  className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
                Change password
              </button>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
  )

}

export default TabsDemo;